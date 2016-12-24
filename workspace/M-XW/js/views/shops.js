﻿/// <reference path="../frames/zepto.js" />
$(function () {
    function shopsClick(targetTitle, target) {
        targetTitle.on('click', function () {
            if ($('.icon-up')) {
                $('.shops-more').addClass('icon-down')
            }
            $('.shops-more').removeClass('icon-up');
            $('.shops-m').css({ 'display': 'none', 'height': 0 })
            $('.shops-y').removeClass('shops-activty')
            $(this).addClass('shops-activty');
            $('.shops-activty .shops-more').addClass('icon-up');
            target.animate({
                height: '13rem',
                display: 'block',
                opacity: 1
            }, 100)
        })
    }
    shopsClick($('#shops-one-title'), $('#shops-one'))
    shopsClick($('#shops-two-title'), $('#shops-two'))
    shopsClick($('#shops-three-title'), $('#shops-three'))
    shopsClick($('#shops-four-title'), $('#shops-four'))
    shopsClick($('#shops-five-title'), $('#shops-five'))


})