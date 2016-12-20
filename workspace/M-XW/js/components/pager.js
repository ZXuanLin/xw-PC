var Pager = (function () {


    /**
     * @param {String|Int} type - page type
     * @param {Array} data - page data
     */
    function createOrderPage(type, data) {
        var title, cards, tpl;
        var page;
        var wrapper = $('body>.page-group');
        var content = $('<div class="content"></div>');
        var block = $('<div class="content-block u_content-block"><div class="u_order-lists"></div></div>');

        page = $('#page-Orders').length ? $('#page-Orders') : $('<div class="page" id="page-Orders"></div>');
        page.empty();

        tpl = Tpl.tplOrder(type, data);
        title = tpl.title;
        cards = tpl.cards;

        block.find('.u_order-lists').html(cards);
        content.append(block);
        page.append($(title));
        page.append(content);
        wrapper.append(page);

        return page;
    }

    function createCategoryPage(data) {
        var title, tpl;
        var page, categories;
        var wrapper = $('body>.page-group');
        var content = $('<div class="content"></div>');
        var category = $('<div class="m_part u_category"></div>');

        page = $('#page-subCategory').length ? $('#page-subCategory') : $('<div class="page" id="page-subCategory"></div>');
        //在一个页面里添加很多的侧栏,所以每次都要清空
        page.empty();

        tpl = Tpl.tplSubCategory(data);
        title = tpl.title;
        categories = tpl.category;
        category.append(categories)
       

        content.append(category);
        page.append($(title));
        page.append(content);
        wrapper.append(page);

        return page;
    }

    function createItems(data) {
        var title, tpl, tabs;
        var page, items;
        var wrapper = $('body>.page-group');
        var content = $('<div class="content"></div>');

        page = $('#page-items').length ? $('#page-items') : $('<div class="page" id="page-items"></div>');
        page.empty();

        tpl = Tpl.tplItems(data);
        title = tpl.title;
        tabs = tpl.tabs;
        items = tpl.items;

        content.append($(tabs));
        content.append($(items));
        page.append($(title));
        page.append(content);
        wrapper.append(page);

        return page;
    }

    return {
        createOrderPage: createOrderPage,
        createCategoryPage: createCategoryPage,
        createItems: createItems
    }

})();