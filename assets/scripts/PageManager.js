import { pages } from "./data/pages.js";

class PageManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.page = "";
        this.activeEvents = [];

        this.eventBus.on("changePage", (data) => this.preparePageData(data));
        this.eventBus.on("pageData", (data) => this.changePage(this.page, data));
    }

    preparePageData({ page, target }) {
        this.page = page;

        if (page === "county") {
            this.eventBus.emit("getCountyData", { target });
        } else if (page === "stats") {
            this.eventBus.emit("getStatsData");
        }
    }

    changePage(name, data) {
        this.removeEvents();

        document.querySelector("#aside-text").innerHTML = pages[name].template(data);

        for (const [eventSelector, eventHandlers] of Object.entries(pages[name].events)) {
            const element = document.querySelector(eventSelector);

            if (element) {
                eventHandlers.forEach(({ type, handler }) => {
                    const funcHandler = () => this.eventBus.emit(handler, { id: data.id });

                    element.addEventListener(type, funcHandler);

                    this.activeEvents.push({ element, type, funcHandler });
                });
            }
        }
    }

    removeEvents() {
        this.activeEvents.forEach(({ element, type, handler }) => {
            element.removeEventListener(type, handler);
        });

        this.activeEvents = [];
    }
}

export { PageManager };
