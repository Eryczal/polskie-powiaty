const pages = {
    stats: {
        template: ({ starting, first, last, visited, maxVisited }) => `
        <h1>Statystyki</h1>
        <ul class="stats-list">
            <li>Powiat początkowy:<br><span id="starting-powiat">${starting}</span></li>
            <li>Pierwszy odwiedzony powiat:<br><span id="first-powiat">${first.name} ${first.date}</span></li>
            <li>Ostatnio odwiedzony powiat:<br><span id="last-powiat">${last.name} ${last.date}</span></li>
            <li>Liczba odwiedzonych powiatów: <span id="visited-powiats">${visited}</span>/<span id="max-powiats">${maxVisited}</span></li>
        </ul>
        `,
        events: {},
    },
    county: {
        template: ({ name, state, icon }) => `
            <h1 id="powiat-name">${name}</h1>
            <p id="powiat-state">${state} ${icon}</p>
            <div class="powiat-buttons">
                <div class="powiat-button" id="button-county-visited">Oznacz jako odwiedzony</div>
                <div class="powiat-button" id="button-starting-county">Oznacz jako początkowy</div>
                <div class="powiat-button" id="button-county-unselect">Odznacz mapę</div>
                <div class="powiat-button" id="button-county-unvisited">Oznacz jako nieodwiedzony</div>
            </div>
        `,
        events: {
            "#button-county-visited": [
                {
                    type: "click",
                    handler: "clickCountyVisited",
                },
            ],
            "#button-starting-county": [
                {
                    type: "click",
                    handler: "clickCountyStarting",
                },
            ],
            "#button-county-unselect": [
                {
                    type: "click",
                    handler: "clickCountyUnselect",
                },
            ],
            "#button-county-unvisited": [
                {
                    type: "click",
                    handler: "clickCountyUnvisited",
                },
            ],
            "#edit-date": [
                {
                    type: "click",
                    handler: "editCountyDate",
                },
            ],
        },
    },
    save: {
        template: () => `
            <h1>Zapis</h1>
            <p>Dane są zapisywane automatycznie w tej przeglądarce.</p>
            <p>Poniższego zapisu używaj tylko wtedy, gdy dane chcesz przenieść do innej przeglądarki.</p>
            <div class="save-buttons">
                <div class="save-button" id="button-save-export">Eksportuj</div>
                <div class="save-button" id="button-save-import">Importuj</div>
                <div class="save-button" id="button-save-reset">Resetuj</div>
            </div>
        `,
        events: {
            "#button-save-export": [
                {
                    type: "click",
                    handler: "clickSaveExport",
                },
            ],
            "#button-save-import": [
                {
                    type: "click",
                    handler: "clickSaveImport",
                },
            ],
            "#button-save-reset": [
                {
                    type: "click",
                    handler: "clickSaveReset",
                },
            ],
        },
    },
    settings: {
        template: ({ darkMode }) => `
            <h1>Ustawienia</h1>
            <label><input id="settings-dark-mode" type="checkbox" ${darkMode ? "checked" : ""}> Ciemny motyw</label>
        `,
        events: {
            "#settings-dark-mode": [
                {
                    type: "change",
                    handler: "clickChangeMode",
                },
            ],
        },
    },
};

export { pages };
