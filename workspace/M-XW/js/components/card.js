var Card = (function () {
    var creatCard;
    var map = {
        order: {
            '1': '全部订单',
            '2': '待收货订单',
            '3': '待付款订单',
            '4': '退换/返修订单'
        }
    }

    function createOrderListCard(type, data) {
        var html = ['<div class="card m_card u_order-item">',
                   '<div class="card-header">',
                   '<div class="pull-left">单号：<a href="#">DA-34-2016040519034</a></div>',
                   '<div class="pull-right"><span>待付款</span><i class="m_icon icon-crash"></i></div>',
                   '</div>',
                   '<div class="card-content"><div class="list-block media-list">',
                   '<ul>',
                   '<li><a href="#" class="item-link item-content">',
                   '<div class="item-media"><img src="../asset/imgs/hj/hj.png" alt="" /></div>',
                   '<div class="item-inner"><div class="item-title-row">',
                   '<div class="item-text">逆变空气等离子切割机LGK-80/CUT80 工业型逆变空气等离子切割机LT80 工业型</div>',
                   '<div class="item-after"><span class="u_price"><dfn>¥</dfn><b>1298</b></span></div></div>',
                   '<div class="item-footer item-sm-footer"><div class="u_count">共<b>3</b><span>台</span></div>',
                   '<div class="u_total"><span>合计：<dfn>¥</dfn><b>1298</b></span></div>',
                   '<div class="u_discount"><span> 优惠： <dfn>¥</dfn><b>580</b></span></div>',
                   '</div></div></a></li>',
                   '<li><a href="#" class="item-link item-content">',
                   '<div class="item-media"><img src="../asset/imgs/hj/hj.png" alt="" /></div>',
                   '<div class="item-inner"><div class="item-title-row">',
                   '<div class="item-text">逆变空气等离子切割机LGK-80/CUT80 工业型逆变空气等离子切割机LT80 工业型</div>',
                   '<div class="item-after"><span class="u_price"><dfn>¥</dfn><b>1298</b></span></div></div>',
                   '<div class="item-footer item-sm-footer"><div class="u_count">共<b>3</b><span>台</span></div>',
                   '<div class="u_total"><span>合计：<dfn>¥</dfn><b>1298</b></span></div>',
                   '<div class="u_discount"><span> 优惠： <dfn>¥</dfn><b>580</b></span></div>',
                   '</div></div></a></li>',
                   '</ul> </div></div>',
                   '<div class="card-footer"><div class="u_total"><span>合计：<dfn>¥</dfn><b>1298</b></span></div>',
                   '<a href="#">立即付款</a></div></div>'];

        return html.join('');
    }

    creatCard = function (type, data ) {
        return createOrderListCard(type, data);
    }

    return {
        creatCard: creatCard
    }
})();