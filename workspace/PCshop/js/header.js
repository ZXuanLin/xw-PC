/// <reference path="../introduce.html" />

$(function () {
    //全部产品分类按钮
    var ng_hook = $('.ng-all-hook');
    var public_content = $('.public-content');
    var icon_up = $('#icon-angle-up');
    var icon_down = $('#icon-angle-down');
    var children_col = $('.children-col-3')
    icon_up.hide();
    ng_hook.mouseover(function () {
        public_content.show();
        icon_up.show();
        icon_down.hide();
    })
    ng_hook.mouseout(function () {
        public_content.hide();
        icon_up.hide();
        icon_down.show();
    })
    public_content.mouseover(function () {
        public_content.show();
        icon_up.show();
        icon_down.hide();
    })
    public_content.mouseout(function () {
        public_content.hide();
        icon_up.hide();
        icon_down.show();
    })
    children_col.mouseout(function () {
        public_content.hide();
    })
})