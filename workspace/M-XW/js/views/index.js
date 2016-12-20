/// <reference path="../../views/detail.html" />
/// <reference path="../../views/detail.html" />
$(function () {
    //$('#js_category').on('click', '.u_item', function () {
    //    var item = $(this);
    //    var pageType = item.attr('data-page');
    //    var page = Pager.createCategoryPage([]);
    //    $.router.load('#page-subCategory');
    //});

    //$('#WP-Home').on('click', '#js_sub-category .u_item', function () {
    //    var item = $(this);
    //    var pageType = item.attr('data-page');
    //    var page = Pager.createItems([]);
    //    $.router.load('#page-items');
    //});

    //$('#WP-Home').on('click focus', ' .m_tab .tab_item.btn_list', function (e) {
    //    $('.list-block').toggleClass('u_grid');
    //});

    //$('#js_searchbar').on('click', function () {
    //    $.popup('.u_popup-search');
    //})

    $(document).on('touchstart', '.u_item', function () {
        $.router.load('/views/detail.html');
    })
    $.init();
});