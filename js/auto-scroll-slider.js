function autoScrollSlider(
    swipers,
    selectorElement,
    sensitivity = 10,
    delay = 300
) {
    let mouseXPos = 0;
    const sliders = document.querySelectorAll(`${selectorElement}`);

    if (sliders.length > 1) {
        sliders.forEach((slide, index) => {
            let isMoving = false; // Флаг для отслеживания состояния движения
            let mouseStart = 0;
            slide.addEventListener("mousemove", (e) => {
                if (isMoving) return; // Прерываем, если уже идёт движение
                const mouseX = e.clientX;
                const rect = slide.getBoundingClientRect();
                const swiperInstance = swipers[index];
                const swiperWidth = rect.width;

                const left = Math.abs(e.clientX - rect.left);
                const right = Math.abs(e.clientX - rect.right);
                // console.log(left);
                // console.log(right);
                // console.log(mouseStart);
                // console.log(mouseX);

                // Логика перелистывания с использованием параметра чувствительности
                if (mouseX < mouseStart + sensitivity) {
                    isMoving = true; // Устанавливаем флаг

                    // Пролистываем назад с задержкой
                    swipers[index].slidePrev();
                    setTimeout(() => {
                        isMoving = false; // Сбрасываем флаг после задержки
                    }, delay); // Задержка в миллисекундах
                } else if (mouseX > mouseStart + sensitivity) {
                    isMoving = true; // Устанавливаем флаг

                    // Пролистываем вперед с задержкой
                    swipers[index].slideNext();
                    setTimeout(() => {
                        isMoving = false; // Сбрасываем флаг после задержки
                    }, delay); // Задержка в миллисекундах
                }

                mouseStart = mouseX;
            });

            document
                .querySelector(`${selectorElement}`)
                .addEventListener("mouseleave", () => {
                    mouseXPos = 0; // Сбрасываем позицию при выходе мыши
                });
        });
    }
}
