const slider = document.getElementById("slider");
const minInput = document.getElementById("min-price");
const maxInput = document.getElementById("max-price");

noUiSlider.create(slider, {
    start: [0, 1000],
    connect: true,
    range: {
        min: 0,
        max: 1000,
    },
    step: 1,
});

slider.noUiSlider.on("update", function (values, handle) {
    if (handle === 0) {
        minInput.value = Math.round(values[0]);
    } else {
        maxInput.value = Math.round(values[1]);
    }
});

minInput.addEventListener("change", function () {
    slider.noUiSlider.set([this.value, null]);
});

maxInput.addEventListener("change", function () {
    slider.noUiSlider.set([null, this.value]);
});
