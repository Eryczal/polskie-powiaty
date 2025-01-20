import { EventBus } from "./EventBus.js";
import { MapManager } from "./MapManager.js";
import { PageManager } from "./PageManager.js";

const eventBus = new EventBus();
const mapManager = new MapManager(eventBus);
const pageManager = new PageManager(eventBus);

let viewBox = { x: 0, y: 0, width: 800, height: 744 };

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

            document.getElementById("map").addEventListener("wheel", scaleMap);
        });
}

function scaleMap(event) {
    event.preventDefault();

    const map = document.getElementById("map");

    const rect = map.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const svgX = (mouseX / rect.width) * viewBox.width + viewBox.x;
    const svgY = (mouseY / rect.height) * viewBox.height + viewBox.y;

    const zoomFactor = 0.1;
    const zoomDirection = event.deltaY < 0 ? 1 : -1;
    const scaleChange = zoomDirection * zoomFactor;

    const newWidth = Math.min(Math.max(viewBox.width * (1 - scaleChange), 40), 800);
    const newHeight = Math.min(Math.max(viewBox.height * (1 - scaleChange), 37.2), 744);

    viewBox.x = svgX - ((svgX - viewBox.x) * newWidth) / viewBox.width;
    viewBox.y = svgY - ((svgY - viewBox.y) * newHeight) / viewBox.height;
    viewBox.width = newWidth;
    viewBox.height = newHeight;

    if (newWidth >= 800 && newHeight >= 744) {
        viewBox.x = 0;
        viewBox.y = 0;
    }

    map.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
}

loadSvg();
