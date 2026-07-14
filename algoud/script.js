
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");

    index = i;
}

function currentSlide(i) {
    showSlide(i);
}

function autoSlide() {

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    showSlide(index);
}

setInterval(autoSlide, 3000);







new Swiper(".offersSwiper", {

    loop: true,

    speed: 1000,
    spaceBetween: 30,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        0: {
            slidesPerView: 1
        },

        600: {
            slidesPerView: 2
        },

        900: {
            slidesPerView: 3
        },

        1200: {
            slidesPerView: 5
        }
    }

});






/* Export Products */

new Swiper(".exportSwiper", {

    loop: true,

    speed: 900,

    spaceBetween: 25,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".export-pagination",
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 4 },
        1200: { slidesPerView: 6 }
    }

});


/* Brands */

new Swiper(".brandSwiper", {

    loop: true,

    speed: 900,

    spaceBetween: 30,

    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".brand-pagination",
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        900: { slidesPerView: 5 },
        1200: { slidesPerView: 8 }
    }

});

















new Swiper(".reviewSwiper", {

    loop: true,

    speed: 900,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".review-pagination",
        clickable: true,
    },

    breakpoints: {

        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1200: {
            slidesPerView: 4
        }

    }

});