import powiats from "./powiats.js";

powiats.forEach((powiat, i) => {
	powiat.name = powiat.name.charAt(0).toUpperCase() + powiat.name.slice(1);
	powiat.date = null;
	powiat.state = 0;
	powiat.element = document.getElementsByTagName("path")[i];
	powiat.element.addEventListener("click", clickMap);
	powiat.element.i = i;
});

var currentPowiat = null;
var visitedPowiats = powiats.filter((powiat) => powiat.state !== 0).length;
var powiatStates = [
	"Powiat nie został jeszcze przez ciebie odwiedzony.",
	'Powiat został przez ciebie odwiedzony <span id="visited-date"></span>.',
	"Powiat wybrany przez ciebie jako początkowy.",
];

var settings = {
	darkMode: false,
};
let mobile = window.innerWidth < 1100;

var intl = new Intl.DateTimeFormat("pl-PL", { dateStyle: "long" });

var asideButtons = document.getElementsByClassName("aside-button");

var statsElement = `
    <h1>Statystyki</h1>
    <ul class="stats-list">
        <li>Powiat początkowy:<br><span id="starting-powiat"></span></li>
        <li>Pierwszy odwiedzony powiat:<br><span id="first-powiat"></span></li>
        <li>Ostatnio odwiedzony powiat:<br><span id="last-powiat"></span></li>
        <li>Liczba odwiedzonych powiatów: <span id="visited-powiats"></span>/<span id="max-powiats"></span></li>
    </ul>
`;

var powiatElement = `
    <h1 id="powiat-name"></h1>
    <p id="powiat-state"></p>
    <div class="powiat-buttons">
        <div class="powiat-button" id="button-powiat-visited">Oznacz jako odwiedzony</div>
        <div class="powiat-button" id="button-starting-powiat">Oznacz jako początkowy</div>
        <div class="powiat-button" id="button-powiat-unselect">Odznacz mapę</div>
        <div class="powiat-button" id="button-powiat-change">Oznacz jako nieodwiedzony</div>
    </div>
`;

var saveElement = `
    <h1>Zapis</h1>
    <p>Dane są zapisywane automatycznie w tej przeglądarce.</p>
    <p>Poniższego zapisu używaj tylko wtedy, gdy dane chcesz przenieść do innej przeglądarki.</p>
    <div class="save-buttons">
        <div class="save-button" id="button-save-export">Eksportuj</div>
        <div class="save-button" id="button-save-import">Importuj</div>
        <div class="save-button" id="button-save-reset">Resetuj</div>
    </div>
`;

var settingsElement = `
    <h1>Ustawienia</h1>
    <p><input id="settings-dark-mode" type="checkbox"> Ciemny motyw</p>
`;

function clickMap(event) {
	if (currentPowiat !== null) {
		currentPowiat.classList.remove("selected");
	}
	currentPowiat = event.currentTarget;
	currentPowiat.classList.add("selected");
	clickPowiat();
}

function removeAsideClass() {
	for (let i = 0; i < asideButtons.length; i++) {
		asideButtons[i].classList.remove("aside-selected");
	}
	document.getElementById("aside-text").classList.remove("border-radius-first");
	document.getElementById("aside-text").classList.remove("border-radius-last");
}

function clickStats() {
	removeAsideClass();
	document.getElementById("aside-text").classList.add("border-radius-first");
	let startingPowiat = powiats.find((powiat) => powiat.state == 2)?.name ? powiats.find((powiat) => powiat.state == 2).name : "Brak";
	let firstPowiat = null;
	let lastPowiat = null;

	for (let i = 0; i < powiats.length; i++) {
		if (Date.parse(powiats[i].date) != NaN) {
			if (Date.parse(powiats[i].date) < (Date.parse(powiats[firstPowiat]?.date) || Number.POSITIVE_INFINITY)) {
				firstPowiat = i;
			}
			if (Date.parse(powiats[i].date) > (Date.parse(powiats[lastPowiat]?.date) || Number.NEGATIVE_INFINITY)) {
				lastPowiat = i;
			}
		}
	}

	document.getElementById("aside-stats").classList.add("aside-selected");
	document.getElementById("aside-text").innerHTML = statsElement;
	document.getElementById("starting-powiat").insertAdjacentText("beforeend", startingPowiat);
	if (firstPowiat !== null) {
		document.getElementById("first-powiat").insertAdjacentText("beforeend", powiats[firstPowiat].name + " (" + intl.format(powiats[firstPowiat].date) + ")");
		document.getElementById("last-powiat").insertAdjacentText("beforeend", powiats[lastPowiat].name + " (" + intl.format(powiats[lastPowiat].date) + ")");
	}
	document.getElementById("visited-powiats").insertAdjacentText("beforeend", visitedPowiats);
	document.getElementById("max-powiats").insertAdjacentText("beforeend", powiats.length);
}

function clickPowiat() {
	if (currentPowiat !== null) {
		removeAsideClass();
		document.getElementById("aside-powiat").classList.add("aside-selected");
		document.getElementById("aside-text").innerHTML = powiatElement;
		document.getElementById("powiat-name").insertAdjacentText("beforeend", powiats[currentPowiat.i].name);
		document.getElementById("powiat-state").insertAdjacentHTML("beforeend", powiatStates[powiats[currentPowiat.i].state]);
		document.getElementById("button-powiat-visited").addEventListener("click", clickPowiatVisited);
		document.getElementById("button-starting-powiat").addEventListener("click", clickStartingPowiat);
		document.getElementById("button-powiat-unselect").addEventListener("click", clickPowiatUnselect);
		document.getElementById("button-powiat-change").addEventListener("click", clickPowiatChange);
		if (document.getElementById("visited-date")) {
			document.getElementById("visited-date").insertAdjacentText("beforeend", intl.format(powiats[currentPowiat.i].date));
			document.getElementById("visited-date").addEventListener("contextmenu", changeDate);
		}
	}
}

function changeDate(event) {
	event.preventDefault();

	let d = powiats[currentPowiat.i].date;
	let oldDate =
		(d.getDate() > 9 ? d.getDate() : "0" + d.getDate()) + "." + (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) + "." + d.getFullYear();
	var newDate = prompt(`Podaj datę odwiedzenia (${powiats[currentPowiat.i].name})`, oldDate);
	if (newDate !== null) {
		newDate = newDate.split(".");
		if (newDate.length == 3) {
			if (parseInt(newDate[0]) <= 31 && parseInt(newDate[0]) > 0) {
				if (parseInt(newDate[1]) > 0 && parseInt(newDate[1]) < 12) {
					powiats[currentPowiat.i].date = new Date(parseInt(newDate[2]), parseInt(newDate[1]) - 1, parseInt(newDate[0]));
					document.getElementById("visited-date").innerHTML = intl.format(powiats[currentPowiat.i].date);
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
	removeAsideClass();
	document.getElementById("aside-save").classList.add("aside-selected");
	document.getElementById("aside-text").innerHTML = saveElement;
	document.getElementById("button-save-export").addEventListener("click", clickSaveExport);
	document.getElementById("button-save-import").addEventListener("click", clickSaveImport);
	document.getElementById("button-save-reset").addEventListener("click", clickSaveReset);
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

function clickPowiatVisited() {
	powiats[currentPowiat.i].state = 1;
	visitedPowiats = powiats.filter((powiat) => powiat.state !== 0).length;
	currentPowiat.classList.add("visited");
	powiats[currentPowiat.i].date = new Date();
	saveData();
	clickPowiat();
}

function clickStartingPowiat() {
	if (!powiats.some((powiat) => powiat.state == 2)) {
		powiats[currentPowiat.i].state = 2;
		visitedPowiats = powiats.filter((powiat) => powiat.state !== 0).length;
		currentPowiat.classList.add("starting");
		saveData();
		clickPowiat();
	}
}

function clickPowiatUnselect() {
	currentPowiat.classList.remove("selected");
	currentPowiat = null;
	clickStats();
}

function clickPowiatChange() {
	powiats[currentPowiat.i].state = 0;
	visitedPowiats = powiats.filter((powiat) => powiat.state !== 0).length;
	currentPowiat.classList.remove("visited");
	currentPowiat.classList.remove("starting");
	powiats[currentPowiat.i].date = null;
	saveData();
	clickPowiat();
}

function clickSaveExport() {
	if (document.getElementById("import-export-text")) {
		document.getElementById("import-export-text").value = JSON.stringify(powiats, ["date", "state"]);
		if (document.getElementById("accept-import")) {
			document.getElementById("accept-import").remove();
		}
	} else {
		document
			.getElementById("aside-text")
			.insertAdjacentHTML("beforeend", `<textarea id="import-export-text">${JSON.stringify(powiats, ["date", "state"])}</textarea>`);
	}
}

function clickSaveImport() {
	if (document.getElementById("import-export-text")) {
		document.getElementById("import-export-text").value = "";
	} else {
		document.getElementById("aside-text").insertAdjacentHTML("beforeend", `<textarea id="import-export-text"></textarea>`);
	}
	if (!document.getElementById("accept-import")) {
		document
			.getElementById("aside-text")
			.insertAdjacentHTML("beforeend", `<div><div class="save-button" id="accept-import" style="display: inline-block; margin: 0">Zatwierdź</div></div>`);
		document.getElementById("accept-import").addEventListener("click", importData);
	}
}

function clickSaveReset() {
	if (confirm("Wszystkie dane z przeglądarki zostaną usunięte")) {
		removeData();
		location.reload();
	}
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
	let jsonData = JSON.stringify(powiats, ["date", "state"]);
	localStorage.setItem("powiats", jsonData);
	localStorage.setItem("settings", JSON.stringify(settings));
}

function getData() {
	if (localStorage.getItem("powiats") !== null) {
		let jsonData = JSON.parse(localStorage.getItem("powiats"), (key, value) => (key == "date" && value !== null ? new Date(value) : value));
		for (let i = 0; i < powiats.length; i++) {
			powiats[i].date = jsonData[i].date;
			powiats[i].state = jsonData[i].state;
			if (powiats[i].state !== 0) {
				powiats[i].element.classList.add(powiats[i].state == 1 ? "visited" : "starting");
				visitedPowiats++;
			}
		}
	}
	if (localStorage.getItem("settings") !== null) {
		settings = JSON.parse(localStorage.getItem("settings"));
		if (settings.darkMode) {
			document.getElementsByTagName("body")[0].classList.add("dark-mode");
		}
	}
}

function removeData() {
	localStorage.removeItem("powiats");
	localStorage.removeItem("settings");
}

function importData() {
	let importData = JSON.parse(document.getElementById("import-export-text").value);
	if (importData.length == 380) {
		for (let i = 0; i < powiats.length; i++) {
			powiats[i].date = importData[i].date;
			powiats[i].state = importData[i].state;
			if (powiats[i].state !== 0) {
				powiats[i].element.classList.add(powiats[i].state == 1 ? "visited" : "starting");
				visitedPowiats++;
			}
		}
		saveData();
	} else {
		alert("Wprowadzone dane są niepoprawne.");
	}
}

document.getElementById("aside-stats").addEventListener("click", clickStats);
document.getElementById("aside-powiat").addEventListener("click", clickPowiat);
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

getData();
clickStats();
