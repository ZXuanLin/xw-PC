
//创建内联页面的函数,根据需求显示不同的页面
var createPage = (function () {
            //创建头部函数
            var header = function () {
                var topHeader = $(' <header class="bar bar-nav row top-content">' +
                   ' <div class="logo">' +
                        '<a href="#">' +
                            '<img src="asset/imgs/top/logo.jpg" style="width:100%;height:100%;"/>' +
                        '</a>' +
                    '</div>' +
                    '<div class="searchbar row col-60 search-label">' +
                        '<div class="search-input col-100">' +
                           '<input type="search" id="search"class="open-popup" placeholder="输入关键字..." style="border-radius:1rem;background:#fff" disabled/>' +
                        '</div>' +
                        '<a class="button button-primary top-button"><span class="icon icon-search"></span></a>' +
                    '</div>' +
                    '<div class="top-shop col-10">' +
                        ' <a href="#" class="">' +
                        '<span class="icon icon-menu in-top-menu open-panel" data-panel="#index-login-panel"></span>' +
                    '</a>' +
                    '</div>' +
                   ' </header>');
                topHeader.css({
                    zIndex:'999999999'
                })
                return topHeader;
            }
            //创建底部函数
            var footer = function () {
                var bottomFooter = $('<nav class="bar bar-tab" style="background:#FFF">' +
                    '<a class="tab-item external active" href="index.html">' +
                    '<span class="icon icon-home"></span>' +
                    '<span class="tab-label">首页</span>' +
                '</a>' +

                '<a class="tab-item external" href="views/cart.html">' +
                    '<span class="icon icon-cart"></span>' +
                    '<span class="tab-label">购物车</span>' +
                '</a>' +
                '<a class="tab-item external" href="views/recommend.html">' +
                    '<span class="icon icon-app"></span>' +
                    '<span class="tab-label">我的订单</span>' +
                '</a>' +
                '<a class="tab-item external" href="views/account.html">' +
                    '<span class="icon icon-me"></span>' +
                    '<span class="tab-label">我的</span>' +
                '</a>' +
                '</nav>');
                bottomFooter.css({
                    zIndex: '999999999'
                })
                return bottomFooter;
            }
            //创建一个标题函数
            function createTitle(titleType) {
                //根据类型创建不同的标题 1,2,3,4
                var contentTitle = $('<div class="bar bar-nav page-top-nav"></div>');
                switch (titleType) {
                    case 1:
                        var title = $('<a class="button button-link button-nav pull-left back" href="">'+
                           ' <span class="icon icon-left"></span>'+
                       ' 返回'+
                   ' </a>'+
                    '<h1 class="title">'+arguments[1]+'</h1>');
                        contentTitle.append(title);
                        return contentTitle;
                    case 2:
                        var title = $('<a class="button button-link button-nav pull-left back" href="../index.html">' +
                    '<span class="icon icon-left"></span>' +
                        '返回' +
                    '</a>' +
                    '<h1 class="title">品牌分类</h1>' +
                    '<a class="button button-link button-nav pull-right class-top-search-show" href="">' +
                        '搜索' +
                        '<span class="icon icon-down"></span>' +
                    '</a>');
                        contentTitle.append(title);
                        return contentTitle;

                }
            }

            //创建shops页面
            function createShops() {
                createTitle(1,'kkkkkkkkkkk')
            }
            //创建goodList页面
            function createGoodList() {

            }
            //创建classifiCation页面（品牌分类）
            function classifiCation(pinpai) {
                var title = createTitle(2);
                var flag = true;
                //点击搜索按钮
                $(document).on('touchstart', '.class-top-search-show', function () {
                    if (flag) {
                        searchBar.show();
                        $('.class-top-search-show span').removeClass('icon-down');
                        $('.class-top-search-show span').addClass('icon-up');
                        flag = false;
                    } else {
                        searchBar.hide();
                        $('.class-top-search-show span').removeClass('icon-up');
                        $('.class-top-search-show span').addClass('icon-down');
                        flag = true;
                    }
                })
                if (!outContent || !contentPadd || !contentGutter) {
                    var outContent = $('<div class="content p-xjae"></div>');
                    var contentPadd = $('<div class="content-padded p-con"></div>');
                    var contentGutter = $('<div class="row no-gutter p-scroll"></div>');
                }

                var searchBar = $('<div class="searchbar row c-search-top" style="display:none;">' +
                        '<div class="search-input col-75 c-search-con-left">' +
                            '<label class="icon icon-search" for="search"></label>' +
                            '<input type="search" id="search" placeholder="请输入您要的品牌" class="c-search-inp"/>' +
                        '</div>' +
                        '<a class="button button-fill button-primary col-27 c-search-button">搜索品牌</a>' +
                    '</div>');
                contentPadd.append(searchBar)
                var c_search_m = $('<div class="c-search-m col-100"></div>');
                    var c_ser_ul = $('<ul class="c-ser-ul"></ul>');
                    c_search_m.append(c_ser_ul);
                
                var AKZ = 'ABCDEFJHIJKLMNOPQRSTUVWXYZ';
                for (var j = 0; j <= AKZ.length-1; j++) {
                    var c_ser_ul_li_a = $('<li><a>' + AKZ[j] + '</a></li>');
                    c_ser_ul.append(c_ser_ul_li_a);
                }
                //品牌名称
                var dataName = [];
                var txt = '';
                for (var i = 0; i < pinpai;i++){
                    txt += "品牌名称"+i+" ";

                }
                dataName.push(txt);
                dataName = dataName.toString().split(' ').slice(0, dataName.length - 2);
                var c_pp_con = $('<div class="row no-gutter c-pp-con col-100"></div>');
                for (var i = 0; i < pinpai; i++) {
                    var c_pp_inner = $('<div class="col-50 c-pp-inner">' +
                            '<div class="c-pp-name col-40">' + dataName[i]+ '</div>' +
                            '<div class="c-pp-im col-60">' +
                                '<img src="../asset/a1.png" />' +
                            '</div>' +
                        '</div>');
                    c_pp_con.append(c_pp_inner)
                }
                
                contentPadd.append(c_search_m);
                contentPadd.append(c_pp_con);
                outContent.append(contentPadd);
                createGoodContent('#classifiCation').append(title);
                createGoodContent('#classifiCation').append(outContent);
                createGoodContent('#classifiCation').append(footer());
                $('.c-ser-ul li a').eq(0).addClass('c-search-activty');
                $(document).on('touchstart', '.c-ser-ul li a', function () {
                    $('.c-ser-ul li a').removeClass('c-search-activty');
                    $(this).addClass('c-search-activty');
                })
            }
            //创建goodClass页面（商品分类）
            function createGoodClass() {
                //创建标题
                var title = createTitle(1, '商品分类');
               
                //数据填充
                var data = [];
                var txt = '';
                for (var i = 0; i < 20; i++) {
                    txt += '工具' + i + ' ';
                }
                    data.push(txt);
                    data = data.toString().split(' ').slice(0,data.length-2);
       
                if (!outContent || !contentPadd || !contentGutter ) {
                    var outContent = $('<div class="content p-xjae"></div>');
                    var contentPadd = $('<div class="content-padded p-con"></div>');
                    var contentGutter = $('<div class="row no-gutter p-scroll"></div>');
                }

                var contentLife = $('<div class="col-30 p-left"></div>');
                var contentRight = $('<div class="col-70 p-right"></div>');
                var contentLifeUl = $('<ul class="p-cjs"></ul>');
                var contentRightUl = $('<ul class="p-ccs"></ul>');
                var marginDiv = $('<div style="height:2.5rem;"></div>');
                var marginDivo = $('<div style="height:2.5rem;"></div>');
                for (var i = 0; i < data.length; i++) {
                    var contentLeftLi = $('<li><a><span>' + data[i] + '</span></a></li>');
                    var contentRightLi = $('<li><div class="pro-panels"><p class="p-img"><img src="../asset/03_03.jpg" /></p><p class="p-name"><span>'+data[i]+'</span></p></div></li>')
                    contentLifeUl.append(contentLeftLi);
                    contentRightUl.append(contentRightLi);
                }
                    contentLifeUl.on('touchstart', 'li', function () {
                        $('.p-cjs li a').removeClass('current')
                        $(this).find('a').addClass('current');
                    })
                contentLifeUl.find('li').eq(0).find('a').addClass('current')
                contentLife.append(contentLifeUl);
                contentGutter.append(contentLife);
                contentRight.append(contentRightUl);
                contentLife.append(marginDiv);
                contentRight.append(marginDivo);
                contentGutter.append(contentRight);
                contentPadd.append(contentGutter);
                outContent.append(contentPadd);
                createGoodContent('#pageGoodClass').append(outContent);
                createGoodContent('#pageGoodClass').append(title);
                createGoodContent('#pageGoodClass').append(footer())
            }
            //创建detail页面
            function createDetail() {

            }
            //创建personal页面
            function createPersonal() {

            }

            //返回外部容器
            function createGoodContent(id) {
                //外部容器
                return createGoodClassContent = $(id);
                
            }
            var returnPage = function (type) {
                switch (type) {
                    //根据类型返回不同的页面
                    case 'createGoodClass':
                        return new createGoodClass();
                        break;
                    case 'classifiCation':
                        return new classifiCation(17);
                        break;

                }
            }

            //把创建的页面返回
            return {
                returnPage: returnPage,
                header: header,
                footer: footer
            }
})()