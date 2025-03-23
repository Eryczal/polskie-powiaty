import counties from "./data/counties.js";

class MapManager {
    constructor(eventBus) {
        this.eventBus = eventBus;

        this.initial = {
            x: 0,
            y: 0,
            width: 800,
            height: 744,
        };

        this.viewBox = { ...this.initial };
    }

    init() {
        this.intl = new Intl.DateTimeFormat("pl-PL", { dateStyle: "long" });
        this.countyStates = ["visited", "starting", "planned"];

        this.counties = [];
        this.visitedCounties = 0;
        this.selected = null;

        counties.forEach((county, i) => {
            this.counties[i] = {
                name: county.name.charAt(0).toUpperCase() + county.name.slice(1),
                date: null,
                state: 0,
                element: document.getElementsByTagName("path")[i],
            };

            this.counties[i].element.addEventListener("click", (e) => this.selectCounty(e));
            this.counties[i].element.i = i;
        });

        this.eventBus.on("getCountyData", (data) => this.getCountyData(data));
        this.eventBus.on("getStatsData", () => this.getStats());
        this.eventBus.on("getExportData", () => this.getExportData());
        this.eventBus.on("importData", (data) => this.importData(data));
        this.eventBus.on("resetData", () => this.resetData());
        this.eventBus.on("clickCountyVisited", (data) => this.setCounty(data, 1));
        this.eventBus.on("clickCountyStarting", (data) => this.setCounty(data, 2));
        this.eventBus.on("clickCountyPlanned", (data) => this.setCounty(data, 3));
        this.eventBus.on("clickCountyUnselect", () => this.unselectCounty());
        this.eventBus.on("clickCountyUnvisited", (data) => this.unsetCounty(data));
        this.eventBus.on("editCountyDate", () => this.editCountyDate());

        document.getElementById("map").addEventListener("wheel", (e) => this.scaleMap(e));
    }

    scaleMap(e) {
        e.preventDefault();

        const map = document.getElementById("map");

        const rect = map.getBoundingClientRect();

        const [mouseX, mouseY] = [e.clientX - rect.left, e.clientY - rect.top];
        const [svgX, svgY] = [(mouseX / rect.width) * this.viewBox.width + this.viewBox.x, (mouseY / rect.height) * this.viewBox.height + this.viewBox.y];

        const zoomFactor = 0.1;
        const zoomDirection = e.deltaY < 0 ? 1 : -1;
        const scaleChange = zoomDirection * zoomFactor;

        const newWidth = Math.min(Math.max(this.viewBox.width * (1 - scaleChange), this.initial.width / 20), this.initial.width);
        const newHeight = Math.min(Math.max(this.viewBox.height * (1 - scaleChange), this.initial.height / 20), this.initial.height);

        this.viewBox = {
            x: svgX - ((svgX - this.viewBox.x) * newWidth) / this.viewBox.width,
            y: svgY - ((svgY - this.viewBox.y) * newHeight) / this.viewBox.height,
            width: newWidth,
            height: newHeight,
        };

        if (newWidth >= this.initial.width && newHeight >= this.initial.height) {
            this.viewBox.x = 0;
            this.viewBox.y = 0;
        }

        map.setAttribute("viewBox", `${this.viewBox.x} ${this.viewBox.y} ${this.viewBox.width} ${this.viewBox.height}`);
    }

    selectCounty(e) {
        if (this.selected !== null) {
            this.selected.classList.remove("selected");
        }

        this.selected = e.currentTarget;
        this.selected.classList.add("selected");

        this.eventBus.emit("changePage", { page: "county", target: e.currentTarget });
    }

    unselectCounty() {
        this.selected.classList.remove("selected");
        this.selected = null;
        this.eventBus.emit("changePage", { page: "stats" });
    }

    getStats() {
        const validCounties = this.counties.filter((county) => !Number.isNaN(Date.parse(county.date)));
        let firstCounty = null;
        let lastCounty = null;

        try {
            firstCounty = validCounties.reduce((earliest, county) => (Date.parse(county.date) < Date.parse(earliest.date) ? county : earliest));
            lastCounty = validCounties.reduce((latest, county) => (Date.parse(county.date) > Date.parse(latest.date) ? county : latest));
        } catch (e) {}

        const statsData = {
            starting: this.counties.find((county) => county.state === 2)?.name || "Brak",
            first: {
                name: firstCounty?.name || "Brak",
                date: firstCounty ? `(${this.intl.format(firstCounty?.date)})` : "",
            },
            last: {
                name: lastCounty?.name || "Brak",
                date: lastCounty ? `(${this.intl.format(lastCounty?.date)})` : "",
            },
            visited: this.visitedCounties,
            maxVisited: this.counties.length,
        };

        this.eventBus.emit("pageData", statsData);
    }

    getExportData() {
        this.eventBus.emit("exportData", { json: JSON.stringify(this.counties, ["date", "state"]) });
    }

    importData(data) {
        let jsonData;

        try {
            jsonData = JSON.parse(data);
        } catch (e) {
            alert("Dane niepoprawne");
            return;
        }

        if (jsonData.length !== this.counties.length) {
            alert("Dane niepoprawne");
            return;
        }

        this.visitedCounties = 0;

        jsonData.forEach((county, i) => {
            this.counties[i].date = county.date === null ? null : new Date(county.date);
            this.counties[i].state = county.state;

            if (county.state === 0) {
                this.counties[i].element.classList.remove("visited");
                this.counties[i].element.classList.remove("starting");
                return;
            }

            this.counties[i].element.classList.add(county.state === 1 ? "visited" : "starting");
            this.visitedCounties++;
        });

        this.saveCounties();
    }

    editCountyDate() {
        if (!this.selected) {
            return;
        }

        const d = this.counties[this.selected.i].date;
        const oldDate = `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;
        let newDate = prompt(`Podaj datę odwiedzenia (${this.counties[this.selected.i].name})`, oldDate);

        if (newDate === null) {
            return;
        }

        newDate = newDate.trim();

        const dateParts = newDate.split(".");
        if (dateParts.length !== 3) {
            return;
        }

        const [dayStr, monthStr, yearStr] = dateParts;
        const day = parseInt(dayStr, 10);
        const month = parseInt(monthStr, 10) - 1;
        const year = parseInt(yearStr, 10);

        if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 0 || month > 11 || year < 1000) {
            return;
        }

        const dateObj = new Date(year, month, day);

        if (dateObj.getFullYear() !== year || dateObj.getMonth() !== month || dateObj.getDate() !== day) {
            return;
        }

        const now = new Date();
        now.setHours(0, 0, 0, 0);

        if (dateObj > now) {
            return;
        }

        this.counties[this.selected.i].date = dateObj;
        document.getElementById("visited-date").innerHTML = this.intl.format(this.counties[this.selected.i].date);
        this.saveCounties();
    }

    getCountyData({ target }) {
        target = target || this.selected;

        if (target === null) {
            this.eventBus.emit("pageData", null);
            return;
        }

        const countyData = {
            id: target.i,
            name: this.counties[target.i].name,
            state: this.displayCountyState(target.i),
            icon: this.counties[target.i].state === 1 ? `<div id="edit-date"><span class="iconify iconify-inline" data-icon="mdi:pencil"></span></div>` : "",
        };

        this.eventBus.emit("pageData", countyData);
    }

    setCounty({ id }, state) {
        if (state === 2 && this.counties.some((county) => county.state === 2)) {
            return;
        }

        const county = this.counties[id];

        if (state !== 3) {
            switch (county.state) {
                case 0:
                case 3:
                    this.visitedCounties++;
                    break;

                case state:
                    return;
            }
        }

        county.element.classList.remove(this.countyStates[county.state - 1]);
        county.state = state;
        county.element.classList.add(this.countyStates[county.state - 1]);
        county.date = new Date();

        this.saveCounties();
        this.eventBus.emit("changePage", { page: "county", target: county.element });
    }

    unsetCounty({ id }) {
        const county = this.counties[id];

        if (county.state === 0) {
            return;
        }

        county.element.classList.remove(this.countyStates[county.state - 1]);

        if (county.state !== 3) {
            this.visitedCounties--;
        }

        county.state = 0;
        county.date = null;

        this.saveCounties();
        this.eventBus.emit("changePage", { page: "county", target: county.element });
    }

    displayCountyState(id) {
        const county = this.counties[id];
        const states = [
            "Powiat nie został jeszcze przez ciebie odwiedzony.",
            `Powiat został przez ciebie odwiedzony <span id="visited-date">${this.intl.format(county.date)}</span>.`,
            "Powiat wybrany przez ciebie jako początkowy.",
            "Powiat został oznaczony jako zaplanowany.",
        ];

        return states[county.state];
    }

    resetData() {
        localStorage.removeItem("counties");
        location.reload();
    }

    saveCounties() {
        let jsonData = JSON.stringify(this.counties, ["date", "state"]);
        localStorage.setItem("counties", jsonData);
    }

    loadCounties() {
        if (localStorage.getItem("counties") !== null) {
            let jsonData = JSON.parse(localStorage.getItem("counties"), (key, value) => (key == "date" && value !== null ? new Date(value) : value));

            this.counties.forEach((county, i) => {
                county.date = jsonData[i].date;
                county.state = jsonData[i].state;

                if (county.state !== 0) {
                    county.element.classList.add(county.state === 1 ? "visited" : "starting");
                    this.visitedCounties++;
                }
            });
        }
    }
}

export { MapManager };
