$(function () {
    function tabGo() {
        var p_cjs = $('.p-cjs');
        p_cjs.on('touchstart', 'li', function () {
            $('.p-cjs li a').removeClass('current')
            $(this).find('a').addClass('current');
        })
    }
    tabGo();
    createPage.returnPage('createGoodClass', 'wwwwwwwww')
})