
//创建内联页面的函数,根据需求显示不同的页面
var createPage = (function () {
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
                //pageOne.append(contentTitle)
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
    //创建goodClass页面
    function createGoodClass() {
        var title = createTitle(1, '商品分类');
        //外部容器
        var createGoodClassContent = $('#page-One');
        //数据填充
        var data = [];
        var txt = '';
        for (var i = 0; i < 11; i++) {
            txt += '工具' + i + ' ';
        }
            data.push(txt);
            data = data.toString().split(' ').slice(0,data.length-2);
       
        if (!outContent || !contentPadd || !contentGutter ) {
            var outContent = $('<div class="content p-xjae"></div>');
            var contentPadd = $('<div class="content-padded p-con"></div>');
            var contentGutter = $('<div class="row no-gutter p-scroll"></div>');
        }

        console.log(data)
        var contentLife = $('<div class="col-30 p-left"></div>');
        var contentRight = $('<div class="col-70 p-right"></div>');
        var contentLifeUl = $('<ul class="p-cjs"></ul>');
        var contentRightUl = $('<ul class="p-ccs"></ul>');
        for (var i = 0; i < data.length; i++) {
            var contentLeftLi = $('<li><a><span>' + data[i] + '</span></a></li>');
            var contentRightLi = $('<li><div class="pro-panels"><p class="p-img"><img src="../asset/03_03.jpg" /></p><p class="p-name"><span>'+data[i]+'</span></p></div></li>')
            contentLifeUl.append(contentLeftLi);
           contentRightUl.append(contentRightLi);
        }
        contentLife.append(contentLifeUl);
        contentGutter.append(contentLife);
        contentRight.append(contentRightUl);
        contentGutter.append(contentRight);
        contentPadd.append(contentGutter);
        outContent.append(contentPadd);
        createGoodClassContent.append(outContent);
        createGoodClassContent.append(title)

       
    }
    //创建detail页面
    function createDetail() {

    }
    //创建personal页面
    function createPersonal() {

    }
    var returnPage = function (type) {
        switch (type) {
            //根据类型返回不同的页面
            case 'createGoodClass':
                return new createGoodClass()
        }
    }

    //把创建的页面返回
    return {
        returnPage:returnPage
    }
})()