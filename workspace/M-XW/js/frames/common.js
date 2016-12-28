
$(function () {
    //Init swiper
    $(".swiper-container").swiper({
        paginationClickable: true,
        loop: true,
        preloadImages: false,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        autoplay: 3000,
        loopAdditionalSlides: 4,
        autoplayStopOnLast: false,
        loopedSlides:4,
        autoplayDisableOnInteraction: true
    });
 
    //menu active
    $('.u_menubar-tab').on('click', '.tab-item', function () {
        var menubar = $('.u_menubar-tab');
        var item = $(this);

        menubar.find('.tab-item').removeClass('active');
        item.addClass('active');
    })
});

