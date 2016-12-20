/// <reference path="jquery-1.11.0.min.js" />
$(function () {

    $("#button").click(function () {
        var bs = $("#bshow");

        bs.toggleClass('hide');
        //if (bs.hasClass('show')) {
        //    bs.removeClass('show').addClass('hide');
        //} else {
        //    bs.removeClass('hide').addClass('show');
        //}
    })

})