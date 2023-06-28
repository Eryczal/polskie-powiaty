var powiats = [
	{ name: "powiat ropczycko-sędziszowski" },
	{ name: "powiat łosicki" },
	{ name: "powiat piaseczyński" },
	{ name: "powiat radomski" },
	{ name: "powiat sierpecki" },
	{ name: "powiat gostyniński" },
	{ name: "powiat grodziski" },
	{ name: "powiat łukowski" },
	{ name: "powiat tomaszowski" },
	{ name: "powiat Chełm" },
	{ name: "powiat brzeski" },
	{ name: "powiat Kraków" },
	{ name: "powiat zgierski" },
	{ name: "powiat sulęciński" },
	{ name: "powiat łańcucki" },
	{ name: "powiat brzeski" },
	{ name: "powiat ostrzeszowski" },
	{ name: "powiat Radom" },
	{ name: "powiat żyrardowski" },
	{ name: "powiat obornicki" },
	{ name: "powiat leszczyński" },
	{ name: "powiat Siedlce" },
	{ name: "powiat Leszno" },
	{ name: "powiat kolski" },
	{ name: "powiat Łomża" },
	{ name: "powiat rawicki" },
	{ name: "powiat słupecki" },
	{ name: "powiat kościerski" },
	{ name: "powiat włoszczowski" },
	{ name: "powiat stargardzki" },
	{ name: "powiat Wrocław" },
	{ name: "powiat giżycki" },
	{ name: "powiat mrągowski" },
	{ name: "powiat głogowski" },
	{ name: "powiat choszczeński" },
	{ name: "powiat Sosnowiec" },
	{ name: "powiat rybnicki" },
	{ name: "powiat Gliwice" },
	{ name: "powiat Jaworzno" },
	{ name: "powiat brodnicki" },
	{ name: "powiat włocławski" },
	{ name: "powiat Toruń" },
	{ name: "powiat tucholski" },
	{ name: "powiat raciborski" },
	{ name: "powiat cieszyński" },
	{ name: "powiat krośnieński" },
	{ name: "powiat nyski" },
	{ name: "powiat Jelenia Góra" },
	{ name: "powiat zgorzelecki" },
	{ name: "powiat przasnyski" },
	{ name: "powiat Ostrołęka" },
	{ name: "powiat średzki" },
	{ name: "powiat jarociński" },
	{ name: "powiat Gdynia" },
	{ name: "powiat Świnoujście" },
	{ name: "powiat kamiennogórski" },
	{ name: "powiat pabianicki" },
	{ name: "powiat kolneński" },
	{ name: "powiat Opole" },
	{ name: "powiat ostródzki" },
	{ name: "powiat Piekary Śląskie" },
	{ name: "powiat sokołowski" },
	{ name: "powiat sandomierski" },
	{ name: "powiat przemyski" },
	{ name: "powiat Przemyśl" },
	{ name: "powiat warszawski zachodni" },
	{ name: "powiat włodawski" },
	{ name: "powiat Lublin" },
	{ name: "powiat bocheński" },
	{ name: "powiat Tarnów" },
	{ name: "powiat wschowski" },
	{ name: "powiat międzyrzecki" },
	{ name: "powiat słubicki" },
	{ name: "powiat nowotomyski" },
	{ name: "powiat wągrowiecki" },
	{ name: "powiat bielski" },
	{ name: "powiat suwalski" },
	{ name: "powiat słupski" },
	{ name: "powiat ostrowiecki" },
	{ name: "powiat skarżyski" },
	{ name: "powiat kartuski" },
	{ name: "powiat częstochowski" },
	{ name: "powiat pyrzycki" },
	{ name: "powiat Siemianowice Śląskie" },
	{ name: "powiat Elbląg" },
	{ name: "powiat gryfiński" },
	{ name: "powiat Bytom" },
	{ name: "powiat złotoryjski" },
	{ name: "powiat wrocławski" },
	{ name: "powiat milicki" },
	{ name: "powiat lubiński" },
	{ name: "powiat lipnowski" },
	{ name: "powiat żniński" },
	{ name: "powiat radziejowski" },
	{ name: "powiat nakielski" },
	{ name: "powiat bartoszycki" },
	{ name: "powiat żywiecki" },
	{ name: "powiat sokólski" },
	{ name: "powiat jasielski" },
	{ name: "powiat głubczycki" },
	{ name: "powiat nowosądecki" },
	{ name: "powiat Zielona Góra" },
	{ name: "powiat Skierniewice" },
	{ name: "powiat żagański" },
	{ name: "powiat Gdańsk" },
	{ name: "powiat Łódź" },
	{ name: "powiat piotrkowski" },
	{ name: "powiat starogardzki" },
	{ name: "powiat Konin" },
	{ name: "powiat Poznań" },
	{ name: "powiat koniński" },
	{ name: "powiat stalowowolski" },
	{ name: "powiat Tarnobrzeg" },
	{ name: "powiat płoński" },
	{ name: "powiat siedlecki" },
	{ name: "powiat garwoliński" },
	{ name: "powiat lipski" },
	{ name: "powiat hrubieszowski" },
	{ name: "powiat kraśnicki" },
	{ name: "powiat łęczyński" },
	{ name: "powiat opolski" },
	{ name: "powiat rycki" },
	{ name: "powiat Zamość" },
	{ name: "powiat dąbrowski" },
	{ name: "powiat krakowski" },
	{ name: "powiat wieruszowski" },
	{ name: "powiat żarski" },
	{ name: "powiat krośnieński" },
	{ name: "powiat dębicki" },
	{ name: "powiat namysłowski" },
	{ name: "powiat czarnkowsko-trzcianecki" },
	{ name: "powiat Płock" },
	{ name: "powiat grajewski" },
	{ name: "powiat starachowicki" },
	{ name: "powiat konecki" },
	{ name: "powiat elbląski" },
	{ name: "powiat nidzicki" },
	{ name: "powiat nowomiejski" },
	{ name: "powiat Ruda Śląska" },
	{ name: "powiat białogardzki" },
	{ name: "powiat zawierciański" },
	{ name: "powiat Chorzów" },
	{ name: "powiat Katowice" },
	{ name: "powiat bolesławiecki" },
	{ name: "powiat Wałbrzych" },
	{ name: "powiat sępoleński" },
	{ name: "powiat Włocławek" },
	{ name: "powiat hajnowski" },
	{ name: "powiat chrzanowski" },
	{ name: "powiat Szczecin" },
	{ name: "powiat pucki" },
	{ name: "powiat rawski" },
	{ name: "powiat łowicki" },
	{ name: "powiat skierniewicki" },
	{ name: "powiat iławski" },
	{ name: "powiat Gorzów Wielkopolski" },
	{ name: "powiat ostrowski" },
	{ name: "powiat szydłowiecki" },
	{ name: "powiat inowrocławski" },
	{ name: "powiat niżański" },
	{ name: "powiat tarnobrzeski" },
	{ name: "powiat nowodworski" },
	{ name: "powiat pruszkowski" },
	{ name: "powiat białobrzeski" },
	{ name: "powiat wyszkowski" },
	{ name: "powiat biłgorajski" },
	{ name: "powiat chełmski" },
	{ name: "powiat parczewski" },
	{ name: "powiat świdnicki" },
	{ name: "powiat kutnowski" },
	{ name: "powiat łódzki wschodni" },
	{ name: "powiat kolbuszowski" },
	{ name: "powiat oleski" },
	{ name: "powiat strzelecki" },
	{ name: "powiat złotowski" },
	{ name: "powiat Suwałki" },
	{ name: "powiat kościański" },
	{ name: "powiat grodziski" },
	{ name: "powiat szamotulski" },
	{ name: "powiat Kielce" },
	{ name: "powiat ełcki" },
	{ name: "powiat dzierżoniowski" },
	{ name: "powiat tczewski" },
	{ name: "powiat kołobrzeski" },
	{ name: "powiat Koszalin" },
	{ name: "powiat kłobucki" },
	{ name: "powiat gliwicki" },
	{ name: "powiat lubliniecki" },
	{ name: "powiat Bielsko-Biała" },
	{ name: "powiat Legnica" },
	{ name: "powiat grudziądzki" },
	{ name: "powiat wołowski" },
	{ name: "powiat toruński" },
	{ name: "powiat chełmiński" },
	{ name: "powiat wodzisławski" },
	{ name: "powiat leski" },
	{ name: "powiat bieszczadzki" },
	{ name: "powiat prudnicki" },
	{ name: "powiat ząbkowicki" },
	{ name: "powiat makowski" },
	{ name: "powiat pszczyński" },
	{ name: "powiat gołdapski" },
	{ name: "powiat Sopot" },
	{ name: "powiat rzeszowski" },
	{ name: "powiat jeleniogórski" },
	{ name: "powiat świdnicki" },
	{ name: "powiat opoczyński" },
	{ name: "powiat człuchowski" },
	{ name: "powiat ostrowski" },
	{ name: "powiat Kalisz" },
	{ name: "powiat mławski" },
	{ name: "powiat gorzowski" },
	{ name: "powiat mogileński" },
	{ name: "powiat strzyżowski" },
	{ name: "powiat miński" },
	{ name: "powiat zwoleński" },
	{ name: "powiat żuromiński" },
	{ name: "powiat lubelski" },
	{ name: "powiat proszowicki" },
	{ name: "powiat wielicki" },
	{ name: "powiat sieradzki" },
	{ name: "powiat brzeziński" },
	{ name: "powiat strzelecko-drezdenecki" },
	{ name: "powiat świebodziński" },
	{ name: "powiat leżajski" },
	{ name: "powiat lubaczowski" },
	{ name: "powiat chodzieski" },
	{ name: "powiat międzychodzki" },
	{ name: "powiat kluczborski" },
	{ name: "powiat jędrzejowski" },
	{ name: "powiat gostyński" },
	{ name: "powiat kazimierski" },
	{ name: "powiat kaliski" },
	{ name: "powiat siemiatycki" },
	{ name: "powiat gdański" },
	{ name: "powiat szczycieński" },
	{ name: "powiat łobeski" },
	{ name: "powiat myszkowski" },
	{ name: "powiat oleśnicki" },
	{ name: "powiat strzeliński" },
	{ name: "powiat wąbrzeski" },
	{ name: "powiat kętrzyński" },
	{ name: "powiat białostocki" },
	{ name: "powiat augustowski" },
	{ name: "powiat wałbrzyski" },
	{ name: "powiat kłodzki" },
	{ name: "powiat Tychy" },
	{ name: "powiat Rybnik" },
	{ name: "powiat grójecki" },
	{ name: "powiat lubartowski" },
	{ name: "powiat puławski" },
	{ name: "powiat radzyński" },
	{ name: "powiat Biała Podlaska" },
	{ name: "powiat Nowy Sącz" },
	{ name: "powiat pilski" },
	{ name: "powiat wysokomazowiecki" },
	{ name: "powiat buski" },
	{ name: "powiat śremski" },
	{ name: "powiat kępiński" },
	{ name: "powiat turecki" },
	{ name: "powiat opatowski" },
	{ name: "powiat Słupsk" },
	{ name: "powiat pińczowski" },
	{ name: "powiat koszaliński" },
	{ name: "powiat bielski" },
	{ name: "powiat węgorzewski" },
	{ name: "powiat bieruńsko-lędziński" },
	{ name: "powiat policki" },
	{ name: "powiat polkowicki" },
	{ name: "powiat Jastrzębie-Zdrój" },
	{ name: "powiat tatrzański" },
	{ name: "powiat nowotarski" },
	{ name: "powiat lwówecki" },
	{ name: "powiat legionowski" },
	{ name: "powiat olecki" },
	{ name: "powiat tomaszowski" },
	{ name: "powiat zambrowski" },
	{ name: "powiat będziński" },
	{ name: "powiat kamieński" },
	{ name: "powiat przysuski" },
	{ name: "powiat płocki" },
	{ name: "powiat pułtuski" },
	{ name: "powiat sochaczewski" },
	{ name: "powiat bialski" },
	{ name: "powiat krasnostawski" },
	{ name: "powiat zamojski" },
	{ name: "powiat tarnowski" },
	{ name: "powiat bełchatowski" },
	{ name: "powiat łaski" },
	{ name: "powiat łęczycki" },
	{ name: "powiat pajęczański" },
	{ name: "powiat radomszczański" },
	{ name: "powiat zduńskowolski" },
	{ name: "powiat nowosolski" },
	{ name: "powiat jarosławski" },
	{ name: "powiat mielecki" },
	{ name: "powiat Warszawa" },
	{ name: "powiat krapkowicki" },
	{ name: "powiat moniecki" },
	{ name: "powiat kielecki" },
	{ name: "powiat wrzesiński" },
	{ name: "powiat gnieźnieński" },
	{ name: "powiat malborski" },
	{ name: "powiat lidzbarski" },
	{ name: "powiat olsztyński" },
	{ name: "powiat sławieński" },
	{ name: "powiat działdowski" },
	{ name: "powiat górowski" },
	{ name: "powiat sztumski" },
	{ name: "powiat kwidzyński" },
	{ name: "powiat Dąbrowa Górnicza" },
	{ name: "powiat Mysłowice" },
	{ name: "powiat myśliborski" },
	{ name: "powiat golubsko-dobrzyński" },
	{ name: "powiat aleksandrowski" },
	{ name: "powiat świecki" },
	{ name: "powiat pleszewski" },
	{ name: "powiat Krosno" },
	{ name: "powiat sejneński" },
	{ name: "powiat sanocki" },
	{ name: "powiat suski" },
	{ name: "powiat zielonogórski" },
	{ name: "powiat wołomiński" },
	{ name: "powiat mikołowski" },
	{ name: "powiat goleniowski" },
	{ name: "powiat Rzeszów" },
	{ name: "powiat łomżyński" },
	{ name: "powiat opolski" },
	{ name: "powiat wałecki" },
	{ name: "powiat drawski" },
	{ name: "powiat chojnicki" },
	{ name: "powiat tarnogórski" },
	{ name: "powiat lęborski" },
	{ name: "powiat bytowski" },
	{ name: "powiat ciechanowski" },
	{ name: "powiat gryficki" },
	{ name: "powiat poznański" },
	{ name: "powiat przeworski" },
	{ name: "powiat otwocki" },
	{ name: "powiat kozienicki" },
	{ name: "powiat janowski" },
	{ name: "powiat limanowski" },
	{ name: "powiat miechowski" },
	{ name: "powiat myślenicki" },
	{ name: "powiat olkuski" },
	{ name: "powiat oświęcimski" },
	{ name: "powiat Piotrków Trybunalski" },
	{ name: "powiat poddębicki" },
	{ name: "powiat wieluński" },
	{ name: "powiat brzozowski" },
	{ name: "powiat kędzierzyńsko-kozielski" },
	{ name: "powiat krotoszyński" },
	{ name: "powiat Białystok" },
	{ name: "powiat wolsztyński" },
	{ name: "powiat szczecinecki" },
	{ name: "powiat świdwiński" },
	{ name: "powiat piski" },
	{ name: "powiat Świętochłowice" },
	{ name: "powiat Zabrze" },
	{ name: "powiat Olsztyn" },
	{ name: "powiat braniewski" },
	{ name: "powiat Częstochowa" },
	{ name: "powiat trzebnicki" },
	{ name: "powiat bydgoski" },
	{ name: "powiat oławski" },
	{ name: "powiat średzki" },
	{ name: "powiat legnicki" },
	{ name: "powiat Bydgoszcz" },
	{ name: "powiat Grudziądz" },
	{ name: "powiat rypiński" },
	{ name: "powiat gorlicki" },
	{ name: "powiat lubański" },
	{ name: "powiat wadowicki" },
	{ name: "powiat ostrołęcki" },
	{ name: "powiat Żory" },
	{ name: "powiat nowodworski" },
	{ name: "powiat jaworski" },
	{ name: "powiat węgrowski" },
	{ name: "powiat wejherowski" },
	{ name: "powiat staszowski" },
];

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
