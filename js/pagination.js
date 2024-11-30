function setupPagination(
    itemsPerPage,
    enablePagination,
    contentId,
    paginationId
) {
    const productsContent = document.querySelector(`#${contentId}`);
    const productItems = Array.from(
        productsContent.querySelectorAll(".view__body-item")
    );
    const pagination = document.querySelector(`#${paginationId}`);
    const prevButton = pagination.querySelector(".prev");
    const nextButton = pagination.querySelector(".next");
    const pageNumbersContainer = pagination.querySelector(".page-numbers");

    const totalItems = productItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        productItems.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });

        if (enablePagination) {
            prevButton.classList.toggle("active", page > 1);
            nextButton.classList.toggle("active", page < totalPages);
            updatePageNumbers();
        }
    }

    function updatePageNumbers() {
        pageNumbersContainer.innerHTML = ""; // Очистить текущие номера страниц
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement("a");
            pageLink.innerText = i;
            pageLink.href = "#";
            pageLink.classList.add("page-number");
            if (i === currentPage) {
                pageLink.classList.add("active"); // Добавить активный класс для текущей страницы
            }
            pageLink.addEventListener("click", (e) => {
                e.preventDefault(); // Предотвратить переход по ссылке
                currentPage = i; // Перейти на выбранную страницу
                showPage(currentPage);
            });
            pageNumbersContainer.appendChild(pageLink);
        }
    }

    if (enablePagination) {
        prevButton.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });

        nextButton.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });

        pagination.style.display = "flex";
    } else {
        pagination.style.display = "none";
    }

    showPage(currentPage);
}

if (window.innerWidth < 520) {
    setupPagination(10, true, "content", "content-pagination");
} else if (window.innerWidth < 744) {
    setupPagination(15, true, "content", "content-pagination");
} else if (window.innerWidth < 1280) {
    setupPagination(15, true, "content", "content-pagination");
} else {
    setupPagination(15, true, "content", "content-pagination");
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 520) {
        setupPagination(10, true, "content", "content-pagination");
    } else if (window.innerWidth < 744) {
        setupPagination(15, true, "content", "content-pagination");
    } else if (window.innerWidth < 1280) {
        setupPagination(15, true, "content", "content-pagination");
    } else {
        setupPagination(15, true, "content", "content-pagination");
    }
});
