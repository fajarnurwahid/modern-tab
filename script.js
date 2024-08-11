// start: Tab
(function () {
    const panes = document.querySelectorAll("[data-tab-pane]");
    const pages = document.querySelectorAll("[data-tab-page]");
    panes.forEach(function (item, i) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(
                '[data-tab-page="' + item.dataset.tabPane + '"]'
            );
            const active = document.querySelector("[data-tab-pane].active");
            if (active) {
                const activeIndex = Array.from(panes).indexOf(active);
                panes.forEach(function (el, x) {
                    el.classList.remove("active");
                    el.classList.toggle("before", x < i);
                    el.classList.toggle("after", x > i);
                    el.classList.toggle(
                        "slow",
                        Math.abs(activeIndex - x) > 0 && item !== el
                    );
                    el.style.setProperty(
                        "--delay",
                        `${
                            active === el
                                ? 0
                                : (Math.abs(activeIndex - x) - 1) * 150
                        }ms`
                    );
                });
            }
            if (target) {
                pages.forEach(function (el) {
                    el.classList.remove("active");
                });
                target.classList.add("active");
            }
            item.classList.add("active");
        });
    });
})();
// end: Tab
