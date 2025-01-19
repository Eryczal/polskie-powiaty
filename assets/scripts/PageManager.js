import { pages } from "./data/pages.js";

class PageManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.darkMode = false;
        this.oldPage = null;
        this.page = null;
        this.activeEvents = [];
        this.mobile = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;
        this.eventBus.on("changePage", (data) => this.preparePageData(data));
        this.eventBus.on("pageData", (data) => this.changePage(this.page, data));
        this.eventBus.on("clickSaveExport", () => this.prepareExportData());
        this.eventBus.on("clickSaveImport", () => this.showImport());
        this.eventBus.on("clickSaveReset", () => this.resetData());
        this.eventBus.on("exportData", (data) => this.showExport(data));
        this.eventBus.on("clickChangeMode", () => this.changeMode());

        this.loadDarkMode();
    }

    preparePageData({ page, target = null }) {
        if (this.page) {
            document.getElementById(`aside-${this.page}`).classList.remove("aside-selected");
        }

        this.oldPage = this.page;
        this.page = page;

        if (page === "county") {
            this.eventBus.emit("getCountyData", { target });
        } else if (page === "stats") {
            this.eventBus.emit("getStatsData");
        } else {
            this.changePage(page);
        }
    }

    changePage(name, data = {}) {
        if (data === null) {
            if (this.oldPage !== null) {
                this.page = this.oldPage;
                this.oldPage = null;
                document.getElementById(`aside-${this.page}`).classList.add("aside-selected");
            } else {
                this.eventBus.emit("changePage", { page: "stats" });
            }
            return;
        }

        document.getElementById("aside-text").classList.remove("border-radius-first");
        document.getElementById("aside-text").classList.remove("border-radius-last");
        this.removeEvents();

        if (name === "stats") {
            document.getElementById("aside-text").classList.add("border-radius-first");
        } else if (name === "settings") {
            document.getElementById("aside-text").classList.add("border-radius-last");
            data.darkMode = this.darkMode;
        }

        document.getElementById(`aside-${name}`).classList.add("aside-selected");
        document.getElementById("aside-text").innerHTML = pages[name].template(data);

        for (const [eventSelector, eventHandlers] of Object.entries(pages[name].events)) {
            const element = document.querySelector(eventSelector);

            if (element) {
                eventHandlers.forEach(({ type, handler }) => {
                    const funcHandler = () => this.eventBus.emit(handler, { id: data?.id || "" });

                    element.addEventListener(type, funcHandler);

                    this.activeEvents.push({ element, type, funcHandler });
                });
            }
        }
    }

    prepareExportData() {
        this.eventBus.emit("getExportData");
    }

    showExport(data) {
        if (this.page === "save") {
            const textarea = document.getElementById("import-export-text");
            const importButton = document.getElementById("accept-import");

            if (importButton) {
                importButton.remove();
            }

            if (textarea) {
                textarea.value = data.json;
            } else {
                document.getElementById("aside-text").insertAdjacentHTML("beforeend", `<textarea id="import-export-text">${data.json}</textarea>`);
            }
        }
    }

    acceptImport() {
        const textarea = document.getElementById("import-export-text");

        if (textarea) {
            this.eventBus.emit("importData", textarea.value);
        }
    }

    showImport() {
        if (this.page === "save") {
            const textarea = document.getElementById("import-export-text");
            const importButton = document.getElementById("accept-import");

            if (textarea) {
                textarea.value = "";
            } else {
                document.getElementById("aside-text").insertAdjacentHTML("beforeend", `<textarea id="import-export-text"></textarea>`);
            }

            if (!importButton) {
                document
                    .getElementById("aside-text")
                    .insertAdjacentHTML(
                        "beforeend",
                        `<div><div class="save-button" id="accept-import" style="display: inline-block; margin: 0">Zatwierdź</div></div>`
                    );
                document.getElementById("accept-import").addEventListener("click", () => this.acceptImport());
            }
        }
    }

    removeEvents() {
        this.activeEvents.forEach(({ element, type, handler }) => {
            element.removeEventListener(type, handler);
        });

        this.activeEvents = [];
    }

    initEvents() {
        document.getElementById("aside-stats").addEventListener("click", () => this.eventBus.emit("changePage", { page: "stats" }));
        document.getElementById("aside-county").addEventListener("click", () => this.eventBus.emit("changePage", { page: "county" }));
        document.getElementById("aside-save").addEventListener("click", () => this.eventBus.emit("changePage", { page: "save" }));
        document.getElementById("aside-settings").addEventListener("click", () => this.eventBus.emit("changePage", { page: "settings" }));

        if (!this.mobile) {
            const asideText = document.getElementById("aside-text");
            const asideStats = document.getElementById("aside-stats");
            const asideSettings = document.getElementById("aside-settings");

            asideStats.addEventListener("mouseover", () => asideText.classList.add("border-radius-first"));
            asideStats.addEventListener("mouseleave", () => this.page !== "stats" && asideText.classList.remove("border-radius-first"));
            asideSettings.addEventListener("mouseover", () => asideText.classList.add("border-radius-last"));
            asideSettings.addEventListener("mouseleave", () => this.page !== "settings" && asideText.classList.remove("border-radius-last"));
        }
    }

    changeMode() {
        const checkbox = document.getElementById("settings-dark-mode");

        if (checkbox) {
            this.setDarkMode(checkbox.checked);
        }
    }

    loadDarkMode() {
        const darkMode = JSON.parse(localStorage.getItem("darkMode"));

        if (darkMode) {
            this.setDarkMode(true);
        }
    }

    setDarkMode(val) {
        this.darkMode = val;
        localStorage.setItem("darkMode", val);

        if (this.darkMode) {
            document.getElementsByTagName("body")[0].classList.add("dark-mode");
        } else {
            document.getElementsByTagName("body")[0].classList.remove("dark-mode");
        }
    }

    getDarkMode() {
        const darkMode = localStorage.getItem("darkMode");

        if (darkMode === true) {
            this.setDarkMode(true);
        }
    }

    resetData() {
        if (confirm("Wszystkie dane z przeglądarki zostaną usunięte")) {
            localStorage.removeItem("darkMode");
            this.eventBus.emit("resetData");
        }
    }
}

export { PageManager };
