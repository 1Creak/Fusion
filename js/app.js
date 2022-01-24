'use strict'
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
    });
});

$(document).ready(function () {
    $('.slider-second').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
    });
});

const cards = document.querySelectorAll('.card__inner');

cards.forEach(card => card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
}))



const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.querySelector(".header__menu").style.fontSize = "12px";
//     } else {
//         document.querySelector(".header__menu").style.fontSize = "15px";
//     }
// }

// $('a[href^="#"').on('click', function () {

//     let href = $(this).attr('href');

//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     });
//     return false;
// });

// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.querySelector("#map"), {
//         zoom: 4,
//         center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     });
// }

