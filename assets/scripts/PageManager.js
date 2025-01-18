import { pages } from "./data/pages.js";

class PageManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.page = null;
        this.activeEvents = [];

        this.eventBus.on("changePage", (data) => this.preparePageData(data));
        this.eventBus.on("pageData", (data) => this.changePage(this.page, data));
    }

    preparePageData({ page, target }) {
        if (this.page) {
            document.getElementById(`aside-${this.page}`).classList.remove("aside-selected");
        }

        this.page = page;

        if (page === "county") {
            this.eventBus.emit("getCountyData", { target });
        } else if (page === "stats") {
            this.eventBus.emit("getStatsData");
        }
    }

    changePage(name, data) {
        document.getElementById("aside-text").classList.remove("border-radius-first");
        document.getElementById("aside-text").classList.remove("border-radius-last");
        this.removeEvents();

        if (name === "stats") {
            document.getElementById("aside-text").classList.add("border-radius-first");
        } else if (name === "settings") {
            document.getElementById("aside-text").classList.add("border-radius-last");
        }

        document.getElementById(`aside-${name}`).classList.add("aside-selected");
        document.getElementById("aside-text").innerHTML = pages[name].template(data);

        for (const [eventSelector, eventHandlers] of Object.entries(pages[name].events)) {
            const element = document.querySelector(eventSelector);

            if (element) {
                eventHandlers.forEach(({ type, handler }) => {
                    const funcHandler = () => this.eventBus.emit(handler, { id: data.id });

                    element.addEventListener(type, funcHandler);

                    this.activeEvents.push({ element, type, funcHandler });
                });
            }
        }
    }

    removeEvents() {
        this.activeEvents.forEach(({ element, type, handler }) => {
            element.removeEventListener(type, handler);
        });

        this.activeEvents = [];
    }
}

export { PageManager };
