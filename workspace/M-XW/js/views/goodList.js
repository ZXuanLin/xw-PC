$(function () {
    var iNow = 0;
    
    var changTitle = $('.gl-sxtitle').html();
    var targetTitle = $('.item-title').html();
    $(document).on('touchstart', '.gl-part ul li', function () {
        $('.gl-sxtitle').html($(this).find('.item-title').html());
        
        var totalTitle = $.trim($(this).find('.item-title').html());
        switch (totalTitle) {
            case '分类':
                emptyAll();
                createCategory();
                break;
            case '品牌':
                emptyAll();
                createBrand();
                break;
            case '价格':
                emptyAll();
                createPrice();
                break;
            case '电钻类':
                createCategory();
                break;
            case '磨切类':
                createCategory();
                break;
            case '附件类':
                createCategory();
                break;
            case '其他功能类':
                createCategory();
                break;
           
        }
           
        iNow++;
        
        goToPre();
    });
    
    $(document).on('touchstart', '.good-go-pre', function () {
        if (iNow == 0) {
            $('.good-go-pre').addClass('close-panel');
        } else {
            $('.good-go-pre').removeClass('close-panel');
        }
        if (iNow == 1) {
            $('.gl-part ul').empty();
            beforeContent();
        }
    })
   
    //全部分类
    function createCategory() {
        var categoryDat = ['水泵', '工具', '水泵', '吊机', '空压机', '水管/水带', '园林机械', '建筑机械', '食品机械', '清洗设备', '通风设备' ];
        for (var i = 0; i < categoryDat.length; i++) {
            var categoryHtml = '<li>' +
                                    '<a href="" class="item-link item-content">' +
                                    '<div class="item-inner">' +
                                    '<div class="item-title">' + categoryDat[i]+ '</div>' +
                                    '<div class="text-rigth">示例文字示例文字示例文字示例文字示例文字示例文字示例文字</div>' +
                                    '</div>' +
                                    '</a>' +
                                '</li>';
           
            $('.gl-part ul').append(categoryHtml);
           
        }
    }

    //品牌
    function createBrand() {
        var brandDate = ['新界泵业', '老百姓', '日井', '水骆驼', '凌霄', '杰仕力', '杭潜泵', '东成', '国强', '东音泵业', '立澳机电'];
        for (var i = 0; i < brandDate.length; i++) {
            var brandHtml = '<li>' +
                                    '<a href="" class="item-link item-content">' +
                                    '<div class="item-inner">' +
                                    '<div class="item-title">' + brandDate[i] + '</div>' +
                                    '<div class="text-rigth text-check"></div>' +
                                    '</div>' +
                                    '</a>' +
                            '</li>';
           
            $('.gl-part ul').append(brandHtml);
            $('li').find('.item-inner').css('background', 'none');
            
        }
        
        $('li').on('touchstart', function () {
            $(this).find('.text-rigth').append('<span class="icon icon-check"></span>');
            if ($(this).find('.text-rigth').children('.icon.icon-check').length >= 2) {
                $(this).find('.icon.icon-check').remove();
            }
            if ($('.icon.icon-check').length > 5) {
                $(this).find('.icon.icon-check').remove();
                alert('最多选择5个哦~~');
            }
        });
        
        
    }
    //价格
    function createPrice() {
        var priceData = ['0-199', '200-399', '400-599', '600-999', '1000-1499', '1500-2099', '2100-19699'];
        for (var i = 0; i < priceData.length; i++) {
        var priceHtml = '<li>' +
                                            '<a href="" class="item-link item-content">' +
                                            '<div class="item-inner">' +
                                            '<div class="item-title">' + priceData[i] + '</div>' +
                                            '<div class="text-rigth text-check"></div>' +
                                            '</div>' +
                                            '</a>' +
                                    '</li>';
                $('.gl-part ul').append(priceHtml);
                $('li').find('.item-inner').css('background', 'none');
        }

        $('li').on('touchstart', function () {
            $('li').find('.icon.icon-check').remove();
            $(this).find('.text-rigth').append('<span class="icon icon-check"></span>');
        })
        
    }
    //原始内容
    function beforeContent() {
        var beforeDate = ['分类', '品牌', '价格', '电钻类', '磨切类', '附件类', '其他功能类'];
        for (var i = 0; i < beforeDate.length; i++) {
            var beforeHtml = '<li>' +
                                    '<a href="" class="item-link item-content">' +
                                    '<div class="item-inner">' +
                                    '<div class="item-title">' + beforeDate[i] + '</div>' +
                                    '<div class="text-rigth have-select-text">不限</div>' +
                                    '</div>' +
                                    '</a>' +
                                '</li>';
            $('.gl-part ul').append(beforeHtml);
        }
        $('.text-rigth').eq(0).html('全部分类');
    }
    //返回上一步
    function goToPre() {
        if (iNow != 0) {
            iNow = 1;
        }
        switch(iNow){
            case 0:
                $('.good-go-pre').addClass('close-panel');
                break;
            case 1:
                $('.good-go-pre').removeClass('close-panel');

        }
    }
    //确定函数
    function goCompless() {
        var haveSelect = '';
        var selectArray = []
       for (var i = 0; i < $('.gl-part ul li').length; i++) {
           if ($('.gl-part ul li div').find('.text-rigth').eq(i).children().hasClass('icon-check')) {
               haveSelect = $('.item-title').eq(i).html();
               selectArray.push(haveSelect)
           }
       }
       return selectArray;
    }
    //点击确定
    $(document).on('touchstart', '.gl-compless', function () {
        var okSelect = goCompless();
        okSelect = okSelect.toString();
         emptyAll();
         beforeContent();
         $('.have-select-text').eq(1).html(okSelect);
         console.log(okSelect)
    })
    //清空

    function emptyAll() {
        $('.gl-part ul').empty();
    }
    
})