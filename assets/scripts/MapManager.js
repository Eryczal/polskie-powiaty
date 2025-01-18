import counties from "./counties.js";

class MapManager {
    constructor() {
        this.counties = [];

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
    }
}

export { MapManager };
