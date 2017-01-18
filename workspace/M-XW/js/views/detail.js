$(function () {
    
    
    $('.bar.bar-tab').on('click', '.tab-item', function () {
        console.log($(this));
    })
    $("#picker-name").picker({
        toolbarTemplate: '<header class="bar bar-nav">\
          <button class="button button-link pull-right close-picker">确定</button>\
          <h1 class="title">请选择地址</h1>\
          </header>',
        cols: [
          {
              textAlign: 'center',
              values: ['北京', '上海', '武汉', '广州', '天津', '厦门', '西安', '深圳']
              //如果你希望显示文案和实际值不同，可以在这里加一个displayValues: [.....]
          },
          {
              textAlign: 'center',
              values: ['朝阳', '朝阳', '朝阳', '朝阳', '朝阳', '朝阳', '朝阳']
          },
          {
              textAlign: 'center',
              values: ['xx', 'xx']
          }
        ]
    });
    
    (function () {
        var inputNum = parseInt($('.h-caldj').val(1));
        var nowNum = parseInt($('.h-caldj').val());
        var tabItemExternal = $('.tab-item.external');
        var reg = /^[0-9]*$/;
        //总价格
        var totalMoney = parseInt($('.g-efhak').html());
        $('.h-jluh').html(nowNum);
        
        $('.h-caldj').on('focus', function () {
            $('.h-caldj').on('keypress', function () {
            })
        })
        $('.h-caldj').on('blur', function () {
            nowNum = parseInt($('.h-caldj').val());
            if (!reg.test(nowNum)) {
                $('.h-caldj').val(1);
                nowNum = 1;
                $('.h-jluh').html(nowNum);
            } else {
               $('.h-jluh').html(nowNum);
            }
            console.log(typeof nowNum)
        })
        tabItemExternal.eq(3).on('tap', function () {
            $.toast("添加成功", '2000', 'jumpShop');
        })
        function addNowNum() {
            if (!reg.test(nowNum)) {
                nowNum = 1;
            }
            nowNum++;
            
            $('.h-jluh').html(nowNum);
            $('.h-caldj').val(nowNum);
           // $('.g-efhak').html(totalMoney * nowNum);
        }
        function subNowNum() {
            if (!reg.test(nowNum)) {
                nowNum = 1;
            }
            nowNum--;
            if (nowNum == 'NaN') {
                nowNum = 1;
            }
            if (nowNum <= 0) {
                nowNum = 0;
               // $('.g-efhak').html(300);
            }
            $('.h-jluh').html(nowNum);
            $('.h-caldj').val(nowNum);
           // $('.g-efhak').html($('.g-efhak').html() - 300);
        }
        $('.h-acladr').on('click', addNowNum);
        $('.h-adljd').on('click', subNowNum);
       
    })()
   
});