import counties from "./data/counties.js";

class MapManager {
    constructor(eventBus) {
        this.eventBus = eventBus;

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
        this.eventBus.on("clickCountyVisited", (data) => this.setCounty(data, 1));
        this.eventBus.on("clickCountyStarting", (data) => this.setCounty(data, 2));
        this.eventBus.on("clickCountyUnselect", () => this.unselectCounty());
        this.eventBus.on("clickCountyUnvisited", (data) => this.unsetCounty(data));
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

    getCountyData({ target }) {
        const countyData = {
            id: target.i,
            name: this.counties[target.i].name,
            state: this.displayCountyState(target.i),
        };

        this.eventBus.emit("pageData", countyData);
    }

    setCounty({ id }, state) {
        const county = this.counties[id];

        switch (county.state) {
            case 0:
                this.visitedCounties++;
                break;

            case state:
                return;
        }

        if (state === 2 && this.counties.some((county) => county.state === 2)) {
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
