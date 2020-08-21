$(document).ready(function() {
    console.log('hi');
    $(".slider-carousel").owlCarousel({
        items: 1,
        loop: true
    });
    let mainCarousel = $(".main-carousel").owlCarousel({
        items: 3,
        loop: true
    });

    let items;

    function name() {
        items = $(".main-carousel .owl-item.active");
        items[1].classList.add("show");
    }
    name();

    mainCarousel.on('changed.owl.carousel', function(event) {
        let new_items = $(".main-carousel .owl-item");
        let prevItem = event.item.index + 2;
        let oldItem = event.item.index;
        let numberItem = event.item.index + 1;
        items[1].classList.remove("show");
        new_items[prevItem].classList.remove("show");
        new_items[oldItem].classList.remove("show");
        new_items[numberItem].classList.add("show");
    });
});