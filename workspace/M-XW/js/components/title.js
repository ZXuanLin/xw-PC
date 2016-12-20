var Title = (function () {
    var generateTitle;

    generateTitle = function (type, title) {
        var title;
        switch (type) {
            case 1:
                title = '<header class="bar bar-nav">' +
                        '<a class="button button-link button-nav pull-left back">' +
                        '<span class="icon icon-left"></span> 返回</a>' +
                        '<h1 class="title">' + title + '</h1>' +
                        '</header>';
                break;
            case 2:
                title = '<header class="bar bar-nav row">' +
                        '<div class="col-10"><a href="#" class="open-panel"><span class="icon icon-menu"></span></a></div>' +
                        '<div class="col-80"><div class="searchbar"><a class="searchbar-cancel">取消</a>' +
                        '<div class="search-input"><label class="icon icon-search" for="search"></label><input type="search" id="search" placeholder="搜索" /></div>' +
                        '</div></div>' +
                        '<div class="col-10"><a href="cart.html"><span class="icon icon-cart"></span></a></div>' +
                        '</header>';
                break;
            case 3:
                title = '<header class="bar bar-nav row">' +
                       '<div class="col-15"><a class="button button-link button-nav pull-left back"><span class="icon icon-left"></span>返回</a></div>' +
                       '<div class="col-75"><div class="searchbar"><a class="searchbar-cancel">取消</a>' +
                       '<div class="search-input"><label class="icon icon-search" for="search"></label><input type="search" id="search" placeholder="搜索" /></div>' +
                       '</div></div>' +
                       '<div class="col-10"><a href="#" class="open-panel"><span class="icon icon-menu"></span></a></div>' +
                       '</header>';
                break;
        }


        return title;
    }

    return {
        generateTitle: generateTitle
    }
})();