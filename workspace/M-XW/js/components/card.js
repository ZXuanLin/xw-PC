$(function () {
    var cartPlay = $('.cart-play');
    var deletText = $('.delet-text');
    var deletContent = $('.delet-content');
    var deletAdd = $('.delet-add');
    var inputNum = $('input[type=text]');
    var checkbox = $('input[type=checkbox]').not("#allCheck");
    var allCheck = $('#allCheck');
    var deletReduce = $('.delet-reduce');
    var cartListContent = $('.cart-list-content');
    var tatolMoney = $('#tatolMoney');
    var singleMoney = $('.singleMoney');
    var mItemCheckbox = $('.m_item-checkbox');
    var itemMedia = $('.item-media');
    var selectNum = $('.selectNum');
    var len = checkbox.length;
    var complete = true;
    
    deletText.css({ 'width': '0','zIndex':'999' });
   
    for (var i = 0; i < len; i++) {
        (function (i) {
            //编辑按钮
            cartPlay.eq(i).on('tap', function () {
                var iNum = inputNum.eq(i).val();
               
                if (complete) {
                    $(this).html('完成')
                    deletText.eq(i).animate({
                        width: '2.6rem'
                    }, 300);
                    deletContent.eq(i).animate({
                        opacity: '1',
                        zIndex:'22'
                    }, 300)
                    complete = false;
                    
                } else {
                    $(this).html('编辑');
                    deletText.eq(i).animate({
                        width: '0'
                    }, 300);
                    deletContent.eq(i).animate({
                        opacity: '0',
                        zIndex: '-10'
                    }, 300)
                    complete = true;
                }
                selectNum.eq(i).html(iNum);
                getToMoney()
            })
            //增加按钮
            deletAdd.eq(i).on('tap', function () {
                var iNum = inputNum.eq(i).val();
                iNum++;
                inputNum.eq(i).val(iNum);
                selectNum.eq(i).html(iNum);
                getToMoney()
            });
            //减少按钮
            deletReduce.eq(i).on('tap', function () {
                var iNum = inputNum.eq(i).val();
                iNum--;
                if (iNum <= 0) {
                    iNum = 1;
                } else {
                    inputNum.eq(i).val(iNum);
                    selectNum.eq(i).html(iNum);
                }
                getToMoney()
            });
            //删除按钮
            deletText.eq(i).on('tap', function () {
                $.confirm('确定删除吗？', function () {
                    cartListContent.eq(i).remove();
                    var TOmoney = parseFloat(tatolMoney.html());
                    TOmoney -= parseFloat(singleMoney.eq(i).html() * inputNum.eq(i).val());
                    checkbox.eq(i).prop('checked', false);
                    if (TOmoney <= 0) {
                        TOmoney = 0;
                    }
                    tatolMoney.html(TOmoney);
                    
                }, function () {

                })

            });
            //单选按钮
            
            itemMedia.eq(i).on('tap', function () {
                if (checkbox.eq(i).prop('checked') == false) {
                    allCheck.prop('checked', checkbox.eq(i).prop('checked'));
                }
                getToMoney()
            })
        })(i)
    }
    //全选按钮
    mItemCheckbox.eq(0).on('tap', function () {
        checkbox.prop('checked', allCheck.prop('checked'));
        getToMoney()
    })

    //小计
    function getToMoney() {
        var TOmoney = 0;
        for (var i = 0; i < $('input[type=checkbox]').not("#allCheck").length; i++) {
            if ($('input[type=checkbox]').not("#allCheck").eq(i).prop('checked') == true) {
                TOmoney += parseFloat(singleMoney.eq(i).html() * inputNum.eq(i).val());
            }
        }
        tatolMoney.html(TOmoney);
    }
})


