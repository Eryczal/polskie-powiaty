import { EventBus } from "./EventBus.js";
import { MapManager } from "./MapManager.js";
import { PageManager } from "./PageManager.js";

const eventBus = new EventBus();
const mapManager = new MapManager(eventBus);
const pageManager = new PageManager(eventBus);

async function loadSvg() {
    fetch("./assets/map.svg")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("main").insertAdjacentHTML("afterbegin", data);

            mapManager.init();
            pageManager.init();

            mapManager.loadCounties();
            pageManager.initEvents();

            eventBus.emit("changePage", { page: "stats" });
        });
}

loadSvg();
