// function setupPagination(
//     itemsPerPage,
//     enablePagination,
//     contentSelector,
//     paginationSelector
// ) {
//     const productsContent = document.querySelector(`[${contentSelector}]`);

//     if (!productsContent) return;

//     const productItems = Array.from(
//         productsContent.querySelectorAll(".product-item")
//     );
//     const pagination = document.querySelector(`[${paginationSelector}]`);
//     const prevButton = pagination.querySelector(".prev");
//     const nextButton = pagination.querySelector(".next");
//     const totalItems = productItems.length;
//     const totalPages = Math.ceil(totalItems / itemsPerPage);
//     let currentPage = 1;

//     function showPage(page) {
//         const start = (page - 1) * itemsPerPage;
//         const end = start + itemsPerPage;

//         productItems.forEach((item, index) => {
//             if (index >= start && index < end) {
//                 item.style.display = "block";
//             } else {
//                 item.style.display = "none";
//             }
//         });

//         if (enablePagination) {
//             prevButton.classList.toggle("active", page > 1);
//             nextButton.classList.toggle("active", page < totalPages);
//         }
//     }

//     if (enablePagination) {
//         prevButton.addEventListener("click", () => {
//             if (currentPage > 1) {
//                 currentPage--;
//                 showPage(currentPage);
//             }
//         });

//         nextButton.addEventListener("click", () => {
//             if (currentPage < totalPages) {
//                 currentPage++;
//                 showPage(currentPage);
//             }
//         });

//         pagination.style.display = "flex";
//     } else {
//         pagination.style.display = "none";
//     }

//     showPage(currentPage);
// }
