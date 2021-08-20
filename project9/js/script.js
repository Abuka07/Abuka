$(document).ready(function(){
    $('.how-works-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });
    $('.about-us-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2.5
            }
        }
    })
})