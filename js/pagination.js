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
            item.style.display =
                index >= start && index < end ? "flex" : "none";
        });

        if (enablePagination) {
            prevButton.classList.toggle("active", page > 1);
            nextButton.classList.toggle("active", page < totalPages);
            updatePageNumbers();
        }
    }

    function addPageLink(pageNumber) {
        const pageLink = document.createElement("a");
        pageLink.innerText = pageNumber;
        pageLink.classList.add("page-link");
        pageLink.addEventListener("click", () => {
            currentPage = pageNumber;
            showPage(currentPage);
        });

        // Добавим классы для активной страницы
        if (pageNumber === currentPage) {
            pageLink.classList.add("active");
        }

        pageNumbersContainer.appendChild(pageLink);
    }

    function updatePageNumbers() {
        pageNumbersContainer.innerHTML = "";

        // Если всего страниц 5 или меньше, показываем все
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                addPageLink(i);
            }
        } else {
            // Показываем первую страницу
            // addPageLink(1);

            // Показываем текущую страницу и следующую, если необходимо
            if (currentPage < totalPages && currentPage < totalPages - 3) {
                addPageLink(currentPage);
                addPageLink(currentPage + 1);
            }

            // Проверяем, нужно ли показывать многоточие
            if (currentPage < totalPages - 3) {
                const dots = document.createElement("span");
                dots.innerText = "...";
                pageNumbersContainer.appendChild(dots);
            }
            if (currentPage >= totalPages - 3) {
                addPageLink(1);
                addPageLink(2);
                const dots = document.createElement("span");
                dots.innerText = "...";
                pageNumbersContainer.appendChild(dots);
                if (currentPage != totalPages) {
                    addPageLink(currentPage);
                    addPageLink(currentPage + 1);
                } else {
                    addPageLink(currentPage - 1);
                    addPageLink(currentPage);
                }
                return;
            }
            // Показываем последние две страницы
            if (totalPages > 1) {
                addPageLink(totalPages - 1);
            }
            if (totalPages > 2) {
                addPageLink(totalPages);
            }
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

// Инициализация пагинации при загрузке страницы
initializePagination();

// Обновление пагинации при изменении размера
function initializePagination() {
    if (window.innerWidth < 520) {
        setupPagination(6, true, "content", "content-pagination");
    } else if (window.innerWidth < 744) {
        setupPagination(9, true, "content", "content-pagination");
    } else if (window.innerWidth < 1280) {
        setupPagination(12, true, "content", "content-pagination");
    } else {
        setupPagination(15, true, "content", "content-pagination");
    }
}
