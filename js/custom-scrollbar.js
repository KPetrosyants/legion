// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".scrollable-container");
//     const scrollbar = document.querySelector(".custom-scrollbar");

//     container.addEventListener("scroll", function () {
//         const scrollTop = container.scrollTop;
//         const scrollHeight = container.scrollHeight;
//         const clientHeight = container.clientHeight;

//         // Рассчитать высоту полосы прокрутки
//         const scrollbarHeight = (clientHeight / scrollHeight) * clientHeight;
//         scrollbar.style.height = `${scrollbarHeight}px`;

//         // Рассчитать положение полосы прокрутки
//         const scrollRatio = scrollTop / (scrollHeight - clientHeight);
//         scrollbar.style.top = `${
//             scrollRatio * (clientHeight - scrollbarHeight)
//         }px`;
//     });
// });
