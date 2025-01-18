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
        template: ({ name, state }) => `
            <h1 id="powiat-name">${name}</h1>
            <p id="powiat-state">${state}</p>
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
        },
    },
};

export { pages };
