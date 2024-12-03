const filterSection = document.querySelector(".filter-section");
const viewBody = document.querySelector(".view__body");
const viewItems = viewBody.querySelectorAll(".view__body-item");
const inputPriceHight = document.querySelector("#max-price");
const inputPriceLow = document.querySelector("#min-price");
const assortInputsArea = document.querySelector(".filter__item-details");
const assortInputs = assortInputsArea.querySelectorAll(".custom-checkbox");
const typeInputsArea = document.querySelector(".filter__item-details--type");
const typeInputs = typeInputsArea.querySelectorAll(".custom-checkbox");
const assortSelect = document.querySelector(
    ".view__header-options-filters select"
);
const filterButton = document.querySelector(
    ".view__header-options-filter-show"
);

const availabilitySelect = document.querySelector("#availability");

function filterPrice() {
    const priceHight = +inputPriceHight.value;
    const priceLow = +inputPriceLow.value;

    viewItems.forEach((item) => {
        let price = +item.dataset.price;
        if (
            priceLow <= item.dataset.price &&
            item.dataset.price <= priceHight
        ) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function displayItems(elements) {
    viewBody.innerHTML = ""; // Очистка контейнера
    elements.forEach((item) => viewBody.appendChild(item)); // Добавление элементов
}
function assortTypelow(items) {
    const newItems = Array.from(items).sort((a, b) => {
        return (
            parseFloat(b.getAttribute("data-price")) -
            parseFloat(a.getAttribute("data-price"))
        );
    });

    displayItems(newItems);
}
function assortTypeHight(items) {
    const newItems = Array.from(items).sort((a, b) => {
        return (
            parseFloat(a.getAttribute("data-price")) -
            parseFloat(b.getAttribute("data-price"))
        );
    });
    displayItems(newItems);
}

function filterType() {
    const allChecbox = document.getElementById("all-type");
    const allShow = allChecbox.checked;
    if (allShow) {
        viewItems.forEach((item) => {
            item.style.display = "block";
        });
        return;
    }
    const activeTypes = Array.from(typeInputs)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.name);

    viewItems.forEach((item) => {
        // Получаем значения data-type текущего элемента
        const typeAttr = [item.getAttribute("data-type")];

        // Проверяем, соответствует ли элемент хотя бы одному активному типу
        const isVisible = typeAttr.some((type) => activeTypes.includes(type));

        // Устанавливаем видимость элемента
        item.style.display = isVisible ? "block" : "none";
    });
}

function filterAssort() {
    let allShow = false;
    assortInputs.forEach((checkbox) => {
        if (checkbox.checked) {
            allShow = false;
            return;
        }

        viewItems.forEach((item) => {
            item.style.display = "block";
        });
        allShow = true;
    });

    if (allShow) return;
    const activeWarehouses = Array.from(assortInputs)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.name);

    viewItems.forEach((item) => {
        // Получаем значения data-assort текущего элемента
        if (!item.getAttribute("data-assort").split(" ")) return;
        const assortWarehouses = item.getAttribute("data-assort").split(" ");

        // Проверяем, соответствует ли элемент хотя бы одному активному складу
        const isVisible = assortWarehouses.some((warehouse) =>
            activeWarehouses.includes(warehouse)
        );

        // Устанавливаем видимость элемента
        item.style.display = isVisible ? "block" : "none";
    });
}

function availabilityFilter(string) {
    viewItems.forEach((item) => {
        console.log(item.dataset.availability, string);

        item.style.display =
            item.dataset.availability == string ? "block" : "none";
    });
    // if (newItem) {
    //     displayItems(newItem);
    // }
}

assortInputsArea.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("custom-checkbox")) {
        filterAssort();
    }
});
typeInputsArea.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("custom-checkbox")) {
        filterType();
    }
});

assortSelect.addEventListener("input", () => {
    const assortType = assortSelect.value;

    switch (assortType) {
        case "Убыванию стоимости":
            assortTypelow(viewItems);
            break;
        case "Возрастанию стоимости":
            assortTypeHight(viewItems);
            break;
        default:
            break;
    }
});

availabilitySelect.addEventListener("input", () => {
    const availabilityType = availabilitySelect.value;
    availabilityFilter(availabilityType);
});

inputPriceHight.addEventListener("input", filterPrice);
inputPriceLow.addEventListener("input", filterPrice);

filterButton.addEventListener("click", (e) => {
    e.preventDefault();
    filterSection.classList.toggle("show-filter");
});
