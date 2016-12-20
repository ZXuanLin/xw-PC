var Tpl = (function () {
    var map = {
        orderTitle: {
            '1': '全部订单',
            '2': '待付款订单',
            '3': '待收货订单',
            '4': '退换/返修订单'
        }
    }

    /**
     * @param {String|Int} type - Header type
     * @param {String} titleType
     */
    function createTitle(type, titleType) {
        var titleHtml = Title.generateTitle(type, map.orderTitle[titleType]);
        return titleHtml;
    }

    /**
     * @param {String|Int} type - Order type
     * @param {Array} data
     */
    function tplOrders(type, data) {
        var title = createTitle(1, type);
        var cards = [];
        //var len = data.length;
        var len = 3;

        for (var i = 0; i < len; i++) {
            var card = Card.creatCard(type, data[i]);
            cards.push(card);
        }

        return {
            title: title,
            cards: cards.join('')
        }
    }

    /**
    * @param {Array} data
    */
    function tplSubCategory(data) {
        var html = [];
        //头部标题
        var title = Title.generateTitle(3);
        var categories = $(' <ul id="js_sub-category" class="u_categories clearfix"></ul>');
        //var len = data.length;
        var len = 7;
        for (var i = 0; i < len; i++) {
            var category = '<li class="u_item"><a href="#"><img src="asset/imgs/hj.jpg" alt="" /><span>焊接与切割</span></a></li>';
            html.push(category);
        }

        categories.append($(html.join('')));

        return {
            title: title,
            category: categories
        }
    }


    function tplItems(data) {
        var html = [];
        var tabs;
        var title = Title.generateTitle(3);
        var items = $('<div id="items_list" class="m_part">');
        //var len = data.length;
        var len = 10;

        tabs = '<ul class="m_tab">' +
               '<li class="tab_item active">综合</li>'+
               '<li class="tab_item">销量</li>' +
               '<li class="tab_item">价格</li>' +
               '<li class="tab_item btn_list"><i class="m_icon icon-sm_list"></i></li>' +
               '</ul>';

        items.append($(' <div class="list-block media-list"><ul></ul></div>'));

        for (var i = 0; i < len; i++) {
            var item = ['<li><a href="#" class="item-link item-content">',
                        '<div class="item-media"><img src="../asset/imgs/hj/hj.png" alt="" /></div>',
                        '<div class="item-inner"><div class="item-text">逆变空气等离子切割机LGK-80/CUT80 工业型</div>',
                        '<div class="item-footer item-sm-footer">',
                        '<div class="pull-left"><span class="price"><dfn>¥</dfn><b>1298</b></span><span class="unit">台</span></div>',
                        '<div class="pull-right buynow"><b><span class="icon icon-cart"></span></b></div></div></div></a></li>'];
            html.push(item.join(''));
        }

        items.find('ul').html(html.join(''));

        return {
            title: title,
            tabs: tabs,
            items: items
        }
    }

    return {
        tplOrder: tplOrders,
        tplSubCategory: tplSubCategory,
        tplItems: tplItems
    }
})();