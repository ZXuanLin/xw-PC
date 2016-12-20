; (function ($) {
    
    //默认配置

    var defaults = {
        nowPage: 1,//当前显示页数
        showPage: 6,//当前页显示条数
        allPage: 100,//总页数
        allMsg: 500,//总数据
        callback: function () { }//回调函数
    }

    //利用默认配置执行内部程序执行过程
    //参数：第一个是容器，也就是前面的选择器，第二个参数是要和默认配置联系起来，这样才能使用它里面的属性
    var Page = function (ele, option) {
        //ele.css('backgroundColor','red')
        //执行对象上所有的方法
        for (var key in option) {
            if (typeof option[key] === 'function') {
                option[key]();
            }
        }
        var nowPage = option.nowPage || 1;
        var showPage = option.showPage || 5;
        var allPage = option.allPage || 5;
        var allMsg = option.allMsg || 100;
        //外部的大容器是ele
        //创建里面的容器 并填充数据
        this.createContent = function () {
            var createDiv = $('<div class="page-items fr clearfix"></div>');
            var prevP = $('<a id="prePage" class="prev disabled fl" href=""><i class="iconfont sign left"></i>上一页</a>');
            createDiv.append(prevP);
            //如果小于当前总数据,不管多少条数据都只显示5条
            if (option.allPage <= 5) {
                for (var i = 1; i <= option.allPage; i++) {
                    var aLink = $('<a class="fl" href="" data-type="pageTab">' + i + '</a>');
                if (i == option.nowPage) {
                    aLink.addClass(' cur');
                }
               
                createDiv.append(aLink);
                }
            } else {
                for (var i = 1; i <= 5; i++) {
                    //判断当前页是否等于1或2或3，这几个需要另外处理，否则前面会出现负数
                    if (option.nowPage == 1 || option.nowPage == 2 || option.nowPage == 3){
                        var aLink = $('<a class="fl" href="" data-type="pageTab">' + i + '</a>');
                        if (i == option.nowPage) {
                            aLink.addClass(' cur');
                        } 
                    }//后面多出来的页数
                    else if ((option.allPage - option.nowPage) == 0 || (option.allPage - option.nowPage) == 1) {
                        var aLink = $('<a class="fl" href="" data-type="pageTab">' + (option.allPage - 5 + i) + '</a>');
                        if ((option.allPage - option.nowPage) == 0 && i==5) {
                            aLink.addClass(' cur');
                        } else if ((option.allPage - option.nowPage) == 1 && i == 4) {
                            aLink.addClass(' cur');
                        } 
                    }
                    else {
                        var aLink = $('<a class="fl" href="" data-type="pageTab">' + (option.nowPage - 3 + i) + '</a>');
                        if ((option.nowPage - 3 + i) == option.nowPage) {
                                aLink.addClass(' cur');
                        }
                        
                    }
                    
                    createDiv.append(aLink);
                }
            }
            
            var nextP = $('<a id="nextPage" class="next fl" title="下一页" href="">下一页<i class="iconfont sign right"></i></a> ');
            createDiv.append(nextP);
            var jumpage = $('<a class="fl allPage"><span>共' + option.allPage + '页</span></a><div class="fl"><span class="fl">到</span><input class="fl jumpPage" data-url="" type="text"><span class="fl">页</span><a class="pageGo fl" href="">确定</a></div>');
            createDiv.append(jumpage);
            return createDiv;
        };
        
        var pageContent = $('.page-bg');
        //事件绑定
        this.eventBind = function () {
            //给每一个a绑定事件
            var tabA = $('a[data-type="pageTab"]');
            tabA.click(function (e) {
                e.preventDefault();
                var nowNum = $(this).html();
                $('.page-bg').html('');
               
                pageContent.pageUser({
                    nowPage: nowNum,//当前显示页数
                    showPage: showPage,//当前页显示条数
                    allPage: allPage,//总页数
                    allMsg: allMsg,//总数据
                    callback: function () { }//回调函数
                })
            })

            //点击上一页
            var prePage = $('#prePage');
            prePage.click(function (e) {
                e.preventDefault();
                var nowNum = $('a.fl.cur').html() - 1;
                if (nowNum <= 0) {
                    nowNum = 1;
                    return false;
                }
                $('.page-bg').html('');
                pageContent.pageUser({
                    nowPage: nowNum,//当前显示页数
                    showPage: showPage,//当前页显示条数
                    allPage: allPage,//总页数
                    allMsg: allMsg,//总数据
                    callback: function () { }//回调函数
                })

            })

            prePage.mouseover(function () {
                prePage.css('cursor', 'pointer')
            })
            //点击下一页
            var nextPage = $('#nextPage');
            nextPage.click(function (e) {
                e.preventDefault();
                var nowNum = parseInt($('a.fl.cur').html()) + 1;
                console.log(nowNum)
                if (nowNum >= allPage) {
                    nowNum = allPage;
                    tabA.last().addClass(' cur').siblings().removeClass(' cur');
                    return false;
                }
                $('.page-bg').html('');
                pageContent.pageUser({
                    nowPage: nowNum,//当前显示页数
                    showPage: showPage,//当前页显示条数
                    allPage: allPage,//总页数
                    allMsg: allMsg,//总数据
                    callback: function () { }//回调函数
                })

            })

            //点击确定
            var pageGo = $('.pageGo');
            pageGo.click(function (e) {
                e.preventDefault();
                var jumpPage = $('.jumpPage').val();
                var nowNum = jumpPage;
                if (nowNum >= allPage) {
                    nowNum = allPage;
                    
                } else if(nowNum <= 0) {
                    nowNum = 1;
                    return false;
                }
                $('.page-bg').html('');
                pageContent.pageUser({
                    nowPage: nowNum,//当前显示页数
                    showPage: showPage,//当前页显示条数
                    allPage: allPage,//总页数
                    allMsg: allMsg,//总数据
                    callback: function () { }//回调函数
                })
            })
        }

        //创建显示的条数
        //把创建的条数显示出来
        this.showAll = function () {
            ele.append(this.createContent());
            this.eventBind();
        }
        this.showAll();
    }

    //传的参数只能是一个对象，这样最后返回的才能是一个对象
    $.fn.pageUser = function (parameter, callback) {
        //不管有没有重载的配置参数，parameter都是一个对象，这样可以传递多个参数
        if (typeof parameter === 'function') {
            callback = parameter;
            parameter = {};
        } else {
            parameter = parameter || {};
            callback = callback || function () { };
        }
        //解决方法的关键，要让pageUser继承defaults
        //这里只是合拼，前面两个都是空的，所以合拼后还是defaults,还是不能实现重载
        //现在的option === defaults
        //记住这里的合并是以最后一个为主
        var option = $.extend({}, defaults, parameter)
       // console.log(canshu)
        //实现重载的关键还是在return 这里
        //把一个个选择器返回
        return this.each(function(){
            var pagetion = new Page($(this), option);
        })
    }

})(jQuery)

$(function () {

    //问题：如何把创建的元素加入到选择器中
    //函数调用形式
    //扩展pageUser,那pageUser一定得是一个字面量对象，只要pageUser继承defaults就变成了字面量对象
    //扩展只是传参数，其中的执行过程已经在父对象完成，子对象只是传参数覆盖父对象的变量，所以就算是子对象不传参数，程序也能正常运行
    var pageContent = $('.page-bg');
    pageContent.pageUser({
        nowPage: 1,//当前显示页数
        showPage: 5,//当前页显示条数
        allPage: 5,//总页数
        allMsg: 500,//总数据
        callback: function () { }//回调函数
    })
})