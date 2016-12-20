$(function () {
    //手机切换
    var tab = $('.top_tags');
    var tab_show = $('.t-c');
    for (var i = 0; i < tab.length; i++) {
        tab_show[i].style.display = 'none';
        (function (i) {
            tab[i].onmouseover = function () {
                tab_show[i].style.display = 'block';
            }
            tab[i].onmouseout = function () {
                tab_show[i].style.display = 'none';
            }
        })(i)
    }
    //菜单切换
    var item = $('.category-item');
    var children = $('.children');
    for (var i = 0; i < item.length; i++) {
        children[i].style.display = 'none';
        (function (i) {
            item[i].onmouseover = function () {
                children[i].style.display = 'block';
            };
            item[i].onmouseout = function () {
                children[i].style.display = 'none';
            };
        })(i)
    }
    //top切换
    var nav_li = $('.ng-nav-index .ng-nav li');
    nav_li[4].onmouseover = function () {
        $('.about-xw').show();
    }
    nav_li[4].onmouseout = function () {
        $('.about-xw').hide();
    }

    //搜索框
    $('#searchForm').bind('keyup', function () {
        var searchText = $('#input_searche_text').val();
        $.get('http://api.bing.com/qsonhs.aspx?q=' + searchText, function (data) {
            console.log(data)
        });
        $('.xwsug').show();
    })











    //图片滚动
    var slide = $('.slide');
    var prev = $('.ui-prev');
    var next = $('.ui-next');
    var status = 0;
    var tab_pointer = $('.ui-pager-link');
    var stopImg = $('.home-hero-slider');
    //需求分析： 哪个有loaded它的z-index就为1，否则为0
    if ($("[loaded='loaded']")) {
        $("[loaded='loaded']").css({ 'backgroundColor': '#fff' });
        tab_pointer[0].style.backgroundColor = '#fff';
    }
    //上一张
    prev.click(function () {
        pointClick();
        for (var i = 0; i < slide.length; i++) {
            slide.removeAttr('loaded');
            slide.fadeOut();
            tab_pointer[i].style.backgroundColor = '';
        }
        status--;
        if (status <= -1) {
            status = 4;
        }
        console.log(status)
        slide[status].setAttribute('loaded', 'loaded');
        if ($("[loaded='loaded']")) {
            $("[loaded='loaded']").fadeIn();
            tab_pointer[status].style.backgroundColor = '#fff';
        }
    })
    //下一张 判断从有白色背景开始
    function nextP() {
        pointClick();
        for (var i = 0; i < slide.length; i++) {
            slide.removeAttr('loaded');
            slide.fadeOut();
            tab_pointer[i].style.backgroundColor = '';
        }
        status++;
        if (status >= 5) {
            status = 0;
        }
        slide[status].setAttribute('loaded', 'loaded');
        if ($("[loaded='loaded']")) {
            $("[loaded='loaded']").fadeIn();
            tab_pointer[status].style.backgroundColor = '#fff';
        }
    }
    next.click(function () {
        nextP();
    })

    //五个小点
    function pointClick() {
        for (var i = 0; i < slide.length; i++) {
            tab_pointer[i].index = i;
            tab_pointer[i].onclick = function () {
                for (var j = 0; j < slide.length; j++) {
                    tab_pointer[j].style.backgroundColor = '';
                    slide[j].removeAttribute('loaded');
                    slide.fadeOut();
                }
                tab_pointer[this.index].style.backgroundColor = '#fff';
                slide[this.index].setAttribute('loaded', 'loaded');
                status = this.index;
                if ($("[loaded='loaded']")) {
                    $("[loaded='loaded']").fadeIn();
                }
            }
        }
    }
    pointClick()
    //自动播放 2秒自动执行
    var timer = null;
    function startMove() {
        clearInterval(timer);
        timer = setInterval(nextP, 2000);
    }
   stopImg.mouseover(function () {
       clearInterval(timer);
       next.show();
       prev.show();
   })
   stopImg.mouseout(function () {
       startMove();
       next.hide();
       prev.hide();
   })

   next.mouseover(function () {
       clearInterval(timer);
       next.show();
       prev.show();
   })
   next.mouseout(function () {
       startMove();
       next.hide();
       prev.hide();
   })
   prev.mouseover(function () {
       clearInterval(timer);
       prev.show();
       next.show();
   })
   prev.mouseout(function () {
       startMove();
       prev.hide();
       next.hide();
   })
   startMove()
    
    //左侧导航
    window.onresize = function () {
        if ($(window).width() < 1220) {
            $('#lift').fadeOut(300).css('display', 'none')
        }
    }
    
    var AllHet = $(window).height();
    var mainHet = $('#lift').height();
    var fixedTop = (AllHet - mainHet) / 2;
    var textli = $('#lift ul li');
    //$('#lift').css({ top: fixedTop + 'px' });
    $('#lift li').click(function () {
        var ind = $('#lift li').index(this) + 1;
        var topVal = $('.floors' + ind).offset().top;
        $('body,html').animate({ scrollTop: topVal }, 1000)
    })
    $('#lift a').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        $('#lift').fadeOut(200).css('display', 'none');
    })
    for (var i = 0; i < textli.length; i++) {
        textli[i].onmouseover = function () {
            if (this.className != 'cur') {
                this.className = ' on';
            } else {
                this.className += ' on';
               
            }
            $('#lift .lift-num').css('display', 'block');
            $('#lift .name').css('display', 'none');
            $('#lift .on .lift-num').css('display', 'none')
            $('#lift .on .name').css('display', 'block');
            $('#lift .cur .lift-num').css('display', 'none')
            $('#lift .cur .name').css('display', 'block');
           
        }
        textli[i].onmouseout = function () {
            
            if (this.className == 'cur on') {
                this.className = 'cur';
            } else {
                this.className = '';
               
            }
            if (this.className != 'on') {
                $('#lift .lift-num').css('display', 'block');
                $('#lift .name').css('display', 'none');
                $('#lift .cur .lift-num').css('display', 'none')
                $('#lift .cur .name').css('display', 'block');
            }
        }
        textli[i].onclick = function () {
            if (this.className != 'cur') {
                this.className = ' on';
            } else {
                this.className += ' on';

            }
            $('#lift .lift-num').css('display', 'block');
            $('#lift .name').css('display', 'none');
            $('#lift .on .lift-num').css('display', 'none')
            $('#lift .on .name').css('display', 'block');
            $('#lift .cur .lift-num').css('display', 'none')
            $('#lift .cur .name').css('display', 'block');

        }
    }
    
    $(window).scroll(scrolls)
    scrolls()
    windowSize()
    function scrolls() {
        windowSize()
        var f1, f2, f3, f4, f5, f6, f7,f8, f9, f10, f11, f12, bck;
        var fixRight = $('#lift li');
        var blackTop = $('#lift')
        var sTop = $(window).scrollTop();
        fl = $('.floors1').offset().top;
        f2 = $('.floors2').offset().top;
        f3 = $('.floors3').offset().top;
        f4 = $('.floors4').offset().top;
        f5 = $('.floors5').offset().top;
        f6 = $('.floors6').offset().top;
        f7 = $('.floors7').offset().top;
        f8 = $('.floors8').offset().top;
        f9 = $('.floors9').offset().top;
        f10 = $('.floors10').offset().top;
        f11 = $('.floors11').offset().top;
        f12 = $('.floors12').offset().top;
        if (sTop <= f2 - 400) {
            blackTop.fadeOut(300).css('display', 'none')
        }
        else {
            if ($(window).width() < $(document).width()) {
                $('#lift').hide();
                return;
            }
           blackTop.fadeIn(300).css('display', 'block')
        }
        
        if (sTop >= fl) {
            //下标为0的添加类名cur,并且为它的所以兄弟元素都移除类名cur
            fixRight.eq(0).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f2 - 100) {
            fixRight.eq(1).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f3 - 100) {
            fixRight.eq(2).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f4 - 100) {
            fixRight.eq(3).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f5 - 100) {
            fixRight.eq(4).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f6 - 100) {
            fixRight.eq(5).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f7 - 100) {
            fixRight.eq(6).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f8 - 100) {
            fixRight.eq(7).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f9 - 100) {
            fixRight.eq(8).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f10 - 100) {
            fixRight.eq(9).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f11 - 100) {
            fixRight.eq(10).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f12 - 100) {
            fixRight.eq(11).addClass('cur').siblings().removeClass('cur');
        }
        
        numTab()
        
    }
    function numTab() {
        $('#lift .lift-num').css('display', 'block');
        $('#lift .name').css('display', 'none');
        $('#lift .cur .lift-num').css('display', 'none')
        $('#lift .cur .name').css('display', 'block');
    }

    function windowSize() {
        $(window).resize(function () {
            if ($(window).width() < $(document).width()) {
                $('#lift').hide();
                return;
            }
        })
    }
})