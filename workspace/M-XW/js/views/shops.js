/// <reference path="../frames/zepto.js" />
$(function () {
    function shopsClick(targetTitle, target) {
        targetTitle.on('tap', function () {
            if ($('.icon-up')) {
                $('.shops-more').addClass('icon-down')
            }
            $('.shops-more').removeClass('icon-up');
            $('.shops-m').css({ 'display': 'none', 'height': 0, 'transition':'all 1s' })
            $('.shops-y').removeClass('shops-activty')
            $(this).addClass('shops-activty');
            $('.shops-activty .shops-more').addClass('icon-up');
            target.animate({
                display: 'block',
                height: '13rem'
            }, 500)
        })
    }
    shopsClick($('#shops-one-title'), $('#shops-one'))
    shopsClick($('#shops-two-title'), $('#shops-two'))
    shopsClick($('#shops-three-title'), $('#shops-three'))
    shopsClick($('#shops-four-title'), $('#shops-four'))
    shopsClick($('#shops-five-title'), $('#shops-five'))


})