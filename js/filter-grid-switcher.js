const minGrid = document.getElementById("minGrid");
const maxGrid = document.getElementById("maxGrid");
const view = document.querySelector(".view__body");

if (minGrid && maxGrid) {
    minGrid.addEventListener("click", function gridSwitcher(e) {
        e.preventDefault();
        const target = e.target;
        if (target.closest(".view__header-view-options button")) {
            minGrid.classList.toggle("active");
            maxGrid.classList.toggle("active");
        }
        if (maxGrid.classList.contains("active")) {
            view.classList.add("active");
        } else {
            view.classList.remove("active");
        }
    });
    maxGrid.addEventListener("click", function gridSwitcher(e) {
        e.preventDefault();
        const target = e.target;
        if (target.closest(".view__header-view-options button")) {
            minGrid.classList.toggle("active");
            maxGrid.classList.toggle("active");
        }
        if (maxGrid.classList.contains("active")) {
            view.classList.add("active");
        } else {
            view.classList.remove("active");
        }
    });
}
