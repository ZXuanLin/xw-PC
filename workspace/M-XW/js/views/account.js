$(function () {
    $('#js_orders').on('click', 'a[data-page]', function () {
        var item = $(this);
        var pageType = item.attr('data-page');
        var page = Pager.createOrderPage(pageType, []);
        $.router.load('#page-Orders');

    });

    $.init();
});