document.addEventListener("DOMContentLoaded", function () {
    function sliderDecoratorUpdateSlidesSize(func) {
        return function () {
            func.apply(this, arguments);

            var min = 0;
            var max = slider.virtualSize - slider.width;
            _.each(slider.snapGrid, function (val, i, list) {
                if (val < min) list[i] = min;
                else if (val > max) list[i] = max;
                else list[i] = Math.round(val);
            });
        };
    }

    var swiper = new Swiper(".best_offers-slide", {
        slidesPerView: "auto",
        spaceBetween: 24,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: "auto",
                centeredSlides: false,
            },
            768: {
                slidesPerView: "auto",
                centeredSlides: true,
            },
            450: {
                slidesPerView: "auto",
                centeredSlides: true,
                loop: true,
            },
            320: {
                slidesPerView: "auto",
                centeredSlides: true,
                loop: true,
            },
        },
        pagination: {
            el: ".best_offers-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper(".main-slider__wrapper", {
        pagination: {
            el: ".main-slider-pagination",
        },
        slidesPerView: "auto",
        centeredSlides: false,
        loop: true,
        spaceBetween: 24,
        breakpoints: {
            1150: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },
    });

    const swiperProduct = new Swiper(".swiper_product", {
        pagination: {
            el: ".swiper_product-pagination",
        },
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        allowTouchMove: true,
        touchRatio: 0.5,
        threshold: 10,
    });
    autoScrollSlider(swiperProduct, ".swiper_product");

    var swiper = new Swiper(".logos_swiper", {
        slidesPerView: "auto",
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            768: {
                centeredSlides: false,
            },
        },
    });
    var swiper = new Swiper(".mini_blog-container", {
        slidesPerView: 1.3,
        slidesPerView: "auto",
        spaceBetween: 10,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            320: {
                slidesPerView: 1,
                centeredSlides: true,
            },
        },
    });
    var swiper = new Swiper(".hero", {
        slidesPerView: 1,
        loop: true,
        speed: 700,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    var swiper = new Swiper(".category-slider", {
        pagination: {
            el: ".category-slider__pagination",
            clickable: true,
        },
        slidesPerView: "auto",
        centeredSlides: false,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            1150: {
                slidesPerView: 5,
            },
            950: {
                slidesPerView: 4,
            },
            750: {
                slidesPerView: 3,
            },
            550: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1.5,
                centeredSlides: true,
            },
        },
    });
    var swiper = new Swiper(".hero-catalog__banner-slider", {
        navigation: {
            nextEl: ".hero-catalog__banner-button-next",
            prevEl: ".hero-catalog__banner-button-prev",
        },
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        speed: 600,
    });
});
