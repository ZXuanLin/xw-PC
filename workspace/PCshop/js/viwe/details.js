$(function () {

    //小图切换大图
    var smallPicItem = $('#smallPicItem li');
    var bigImg = $('#bigPic img');

    function taggBigImg(smallPicItem, bigImg) {
        smallPicItem.mouseover(function () {
            $(this).addClass('active').siblings().removeClass('active');
            smallPicItem.each(function (index) {
                switch (index) {
                    case 0:
                        bigImg.attr('src', '');
                        break;
                    case 1:
                        bigImg.attr('src', '');
                        break;
                    case 2:
                        bigImg.attr('src', '');
                        break;
                }
            })

        })
    }
    taggBigImg(smallPicItem, bigImg);

    //鼠标移入放大图片预览
    (function () {
        var bigPic = document.getElementById('bigPic');
        var moveDiv = document.getElementById('moveDiv');
        var targetImg = $('#targetImg');
        var previeDiv = document.getElementById('previeDiv');
        moveDiv.style.display = 'none';
        previeDiv.style.display = 'none';

        var tLeft = targetImg.offset().left;
        var tTop = targetImg.offset().top;
        bigPic.onmouseover = function (e) {
            var e = window.e || e;
            moveDiv.style.display = 'block';
            previeDiv.style.display = 'block';
            //var myLeft = e.clientX - moveDiv.offsetLeft;
            //var myTop = e.clientY - moveDiv.offsetTop;
            

        }
        bigPic.onmousemove = function (e) {
            moveDiv.style.display = 'block'
            previeDiv.style.display = 'block';
            bigPic.style.cursor = 'move';
            var mLeft = e.clientX;
            //滚动条会影响Y 轴上的坐标，所以要加上滚动条的距离
            var mTop = e.clientY + $(window).scrollTop();
            //要判断scrollTop 和 e.clientY 的关系
            //计算鼠标相对于图片区域的位置
            var l = Math.ceil(mLeft - tLeft);
            var t = Math.ceil(mTop - tTop);
            if (l <= moveDiv.offsetWidth /2) {
                l = moveDiv.offsetWidth / 2;
            } else if (l >= (bigPic.offsetWidth - moveDiv.offsetWidth / 2)) {
                l = bigPic.offsetWidth - moveDiv.offsetWidth / 2
            }
            if (t <= moveDiv.offsetHeight / 2) {
                t = moveDiv.offsetHeight / 2;
            } else if (t >= bigPic.offsetHeight - moveDiv.offsetHeight / 2) {
                t = bigPic.offsetHeight - moveDiv.offsetHeight / 2;
            }
            //鼠标移动时移动moveDiv
          // console.log(t)
                    moveDiv.style.left = (l - 100) + 'px';
                    moveDiv.style.top = (t - 100) + 'px';
            
           //计算大图位置比例
            var ll = -((l - 100) * (bigPic.offsetWidth)/(moveDiv.offsetWidth ));
            var tt = -((t - 100) * (bigPic.offsetHeight)/(moveDiv.offsetHeight)); 
            previeDiv.style.backgroundPosition = ll + 'px' + ' ' + tt + 'px';
        }
        bigPic.onmouseout = function () {
            moveDiv.style.display = 'none';
            previeDiv.style.display = 'none';
        }
        
    })()

    //导航栏固定

    function detaiInfoFixed() {
        var detaiInfoHdBar = $('#detaiInfoHdBar');
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 771) {
                detaiInfoHdBar.addClass('fixedSubNav');
            } else {
                detaiInfoHdBar.removeClass('fixedSubNav')
            }
        })
    }
    detaiInfoFixed();
})