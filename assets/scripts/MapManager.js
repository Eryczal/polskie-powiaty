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

        newDate = newDate.split(".");

        if (newDate.length !== 3) {
            return;
        }

        if (parseInt(newDate[0]) < 1 || parseInt(newDate[0]) > 31) {
            return;
        }

        if (parseInt(newDate[1]) < 1 || parseInt(newDate[1]) > 12) {
            return;
        }

        this.counties[this.selected.i].date = new Date(parseInt(newDate[2]), parseInt(newDate[1]) - 1, parseInt(newDate[0]));
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

        switch (county.state) {
            case 0:
                this.visitedCounties++;
                break;

            case state:
                return;
        }

        county.element.classList.remove("visited");
        county.element.classList.remove("starting");

        county.state = state;
        county.element.classList.add(state === 1 ? "visited" : "starting");
        county.date = new Date();

        this.saveCounties();
        this.eventBus.emit("changePage", { page: "county", target: county.element });
    }

    unsetCounty({ id }) {
        const county = this.counties[id];

        if (county.state === 0) {
            return;
        }

        county.element.classList.remove("visited");
        county.element.classList.remove("starting");

        county.state = 0;
        county.date = null;

        this.visitedCounties--;

        this.saveCounties();
        this.eventBus.emit("changePage", { page: "county", target: county.element });
    }

    displayCountyState(id) {
        const county = this.counties[id];
        const states = [
            "Powiat nie został jeszcze przez ciebie odwiedzony.",
            `Powiat został przez ciebie odwiedzony <span id="visited-date">${this.intl.format(county.date)}</span>.`,
            "Powiat wybrany przez ciebie jako początkowy.",
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
