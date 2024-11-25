
function autoScrollSlider(swipers,selectorElement){
    let mouseXPos = 0;
    const sliders = document.querySelectorAll(`${selectorElement}`)

if(sliders.length>1){
    sliders.forEach((slide,index) => {
        let isMoving = false; // Флаг для отслеживания состояния движения
        slide.addEventListener('mousemove', (e) => {
            if (isMoving) return; // Прерываем, если уже идёт движение
            const mouseX = e.clientX;
            const rect = slide.getBoundingClientRect();
            const swiperInstance = swipers[index];
            const swiperWidth = rect.width

              // Логика перелистывания
            if (mouseX < rect.left + swiperWidth / 3) {
                isMoving = true; // Устанавливаем флаг

                // Пролистываем назад с задержкой
                swipers[index].slidePrev(); 
                setTimeout(() => {
                    isMoving = false; // Сбрасываем флаг после задержки
                }, 300); // Задержка в миллисекундах
            } else if (mouseX > rect.right - swiperWidth / 3) {
                isMoving = true; // Устанавливаем флаг

                // Пролистываем вперед с задержкой
                swipers[index].slideNext();
                setTimeout(() => {
                    isMoving = false; // Сбрасываем флаг после задержки
                }, 300); // Задержка в миллисекундах
            }
        });
        
        document.querySelector(`${selectorElement}`).addEventListener('mouseleave', () => {
            mouseXPos = 0; // Сбрасываем позицию при выходе мыши
        });       
    });
}
}

