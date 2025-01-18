import counties from "./counties.js";

class MapManager {
    constructor() {
        this.counties = [];
        this.visitedCounties = 0;

        counties.forEach((county, i) => {
            this.counties[i] = {
                name: county.name.charAt(0).toUpperCase() + county.name.slice(1),
                date: null,
                state: 0,
                element: document.getElementsByTagName("path")[i],
            };

            // this.counties[i].element.addEventListener("click", (e) => this.clickCounty(e));
            this.counties[i].element.i = i;
        });

        this.loadCounties();
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
