$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: false,
        autoplayHoverPause: true,
        loop: false,
        nav:false,
        dots: false,
        stagePadding: 15,
        autoHeight:false,
        center: false,
        overflow: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 30,
                autoWidth: false,
                dots: true,
            },
            768: {
                items: 2,
                margin: 30,
                autoWidth: false,
                dots:true,
            },
            992: {
                items: 1,
                margin: 30,
                center: true,
                autoWidth:false,
            }
        }

    });
});


$(".read-more-chuy").on('click', function () {
    $(this).parent().toggleClass("showContent");
    var replaceText = $(this).parent().hasClass("showContent") ? "Tutup" : "Baca Selengkapnya";
    $(this).text(replaceText);
});



// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         document.body.style.backgroundColor = "white";
//     } else {
//         document.body.style.backgroundColor = "black";
//     }
// }

// var x = window.matchMedia("(min-width: 992px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes