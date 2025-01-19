import { EventBus } from "./EventBus.js";
import { MapManager } from "./MapManager.js";
import { PageManager } from "./PageManager.js";

const eventBus = new EventBus();
const mapManager = new MapManager(eventBus);
const pageManager = new PageManager(eventBus);

mapManager.loadCounties();

eventBus.emit("changePage", { page: "stats" });

var settings = {
    darkMode: false,
};
let mobile = window.innerWidth < 1100;

var asideButtons = document.getElementsByClassName("aside-button");

var settingsElement = `
    <h1>Ustawienia</h1>
    <p><input id="settings-dark-mode" type="checkbox"> Ciemny motyw</p>
`;

function removeAsideClass() {
    for (let i = 0; i < asideButtons.length; i++) {
        asideButtons[i].classList.remove("aside-selected");
    }
    document.getElementById("aside-text").classList.remove("border-radius-first");
    document.getElementById("aside-text").classList.remove("border-radius-last");
}

function clickStats(e) {
    eventBus.emit("changePage", { page: "stats", target: e.currentTarget });
}

function clickPowiat(e) {
    if (mapManager.selected) {
        eventBus.emit("changePage", { page: "county", target: mapManager.selected });
    }
}

function changeDate(event) {
    event.preventDefault();

    let d = mapManager.counties[currentPowiat.i].date;
    let oldDate =
        (d.getDate() > 9 ? d.getDate() : "0" + d.getDate()) +
        "." +
        (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) +
        "." +
        d.getFullYear();
    var newDate = prompt(`Podaj datę odwiedzenia (${mapManager.counties[currentPowiat.i].name})`, oldDate);
    if (newDate !== null) {
        newDate = newDate.split(".");
        if (newDate.length == 3) {
            if (parseInt(newDate[0]) <= 31 && parseInt(newDate[0]) > 0) {
                if (parseInt(newDate[1]) > 0 && parseInt(newDate[1]) < 12) {
                    mapManager.counties[currentPowiat.i].date = new Date(parseInt(newDate[2]), parseInt(newDate[1]) - 1, parseInt(newDate[0]));
                    document.getElementById("visited-date").innerHTML = intl.format(mapManager.counties[currentPowiat.i].date);
                    saveData();
                } else {
                    alert("Zła data.");
                }
            } else {
                alert("Zła data.");
            }
        } else {
            alert("Zła data.");
        }
    }
}

function clickSave() {
    eventBus.emit("changePage", { page: "save" });
}

function clickSettings() {
    removeAsideClass();
    document.getElementById("aside-text").classList.add("border-radius-last");
    document.getElementById("aside-settings").classList.add("aside-selected");
    document.getElementById("aside-text").innerHTML = settingsElement;
    if (document.getElementsByTagName("body")[0].classList.contains("dark-mode")) {
        document.getElementById("settings-dark-mode").checked = true;
    }
    document.getElementById("settings-dark-mode").addEventListener("click", clickDarkMode);
}
function clickDarkMode(event) {
    if (!document.getElementsByTagName("body")[0].classList.contains("dark-mode") && event.currentTarget.checked) {
        document.getElementsByTagName("body")[0].classList.add("dark-mode");
        settings.darkMode = true;
    } else {
        document.getElementsByTagName("body")[0].classList.remove("dark-mode");
        settings.darkMode = false;
    }
    saveData();
}

function saveData() {
    localStorage.setItem("settings", JSON.stringify(settings));
}

function getData() {
    if (localStorage.getItem("settings") !== null) {
        settings = JSON.parse(localStorage.getItem("settings"));
        if (settings.darkMode) {
            document.getElementsByTagName("body")[0].classList.add("dark-mode");
        }
    }
}

function removeData() {
    localStorage.removeItem("counties");
    localStorage.removeItem("settings");
}

let viewBox = { x: 0, y: 0, width: 800, height: 744 };

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

document.getElementById("aside-stats").addEventListener("click", clickStats);
document.getElementById("aside-county").addEventListener("click", clickPowiat);
document.getElementById("aside-save").addEventListener("click", clickSave);
document.getElementById("aside-settings").addEventListener("click", clickSettings);
if (!mobile) {
    document.getElementById("aside-stats").addEventListener("mouseover", () => document.getElementById("aside-text").classList.add("border-radius-first"));
    document
        .getElementById("aside-stats")
        .addEventListener(
            "mouseleave",
            () => !document.getElementById("starting-powiat") && document.getElementById("aside-text").classList.remove("border-radius-first")
        );
    document.getElementById("aside-settings").addEventListener("mouseover", () => document.getElementById("aside-text").classList.add("border-radius-last"));
    document
        .getElementById("aside-settings")
        .addEventListener(
            "mouseleave",
            () => !document.getElementById("dark-mode") && document.getElementById("aside-text").classList.remove("border-radius-last")
        );
}

document.getElementById("map").addEventListener("wheel", scaleMap);

getData();
// clickStats();
