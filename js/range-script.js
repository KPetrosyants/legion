const slider = document.getElementById("slider");
const minInput = document.getElementById("min-price");
const maxInput = document.getElementById("max-price");

noUiSlider.create(slider, {
    start: [0, 50000],
    tooltips: [true, true],
    connect: true,
    range: {
        min: 0,
        max: 50000,
    },
    step: 1,
    format: {
        // 'to' the formatted value. Receives a number.
        to: function (value) {
            return value + "";
        },
        // 'from' the formatted value.
        // Receives a string, should return a number.
        from: function (value) {
            return Math.floor(Number(value.replace(".", ""))); // Убираем все после запятой и преобразуем в целое число
        },
    },
});
const tooltip = document.querySelectorAll(".noUi-tooltip");
slider.noUiSlider.on("update", function (values, handle) {
    if (handle === 0) {
        minInput.value = Math.round(values[0]);
    } else {
        maxInput.value = Math.round(values[1]);
    }
    tooltip.forEach((el) => {
        el.innerHTML = Math.floor(Number(el.innerHTML));
    });
    filterPrice();
});

minInput.addEventListener("change", function () {
    slider.noUiSlider.set([this.value, null]);
});

maxInput.addEventListener("change", function () {
    slider.noUiSlider.set([null, this.value]);
});
