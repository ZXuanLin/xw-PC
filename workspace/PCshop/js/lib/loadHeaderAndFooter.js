var Load = (function () {
    //创建指引列表
    var ListItem = function () {
        //a 的属性填充
        this.Adata = [];
        //a 的页面text
        this.html = arguments;
        //创建外部ul容器
        this.floorMiddleListUl = createElement('ul', 'floor-middle-list-ul');
        floorMiddleListContent.appendChild(this.floorMiddleListUl)
    }

    //创建指引列表并给 a 填充数据
    ListItem.prototype.dataFill = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.Adata.push(arguments[i]);
            var floorMiddleLi = createElement("li", 'floor-middle-li');
            var floorMiddleLiinnerA = createElement('a');
            floorMiddleLiinnerA.innerHTML = this.html[i];
            floorMiddleLiinnerA.setAttribute('href', this.Adata[i]);
            floorMiddleLi.appendChild(floorMiddleLiinnerA);
            this.floorMiddleListUl.appendChild(floorMiddleLi);
        }
    }
    //创建元素
    function createElement(ele,className) {
        var ELE = document.createElement(ele);
        if (className) {
            ELE.className = className;
        }
        return ELE;
    }


    var header = function (index) {
        if (index && index == 'index') {
            
        } else {
            
        }
    };

    var footer = function () {
            floorMiddleListContent = createElement('div', 'floor-middle-list-content');//列表项容器-----全局变量
        var footerContent = createElement('div'),//外部容器
            floorMiddleAd = createElement('div', 'floor-middle-ad'),//联系帮助标题容器
            Gsbq = createElement('div', 'gsbq'),//公司版权容器
            footerService = createElement('div', 'footer-service'),
            listService = createElement('ul', 'list-service clearfix');
        Gsbq.innerHTML = 'Copyright © 2009-2014 czvv.com 广西雄威供应链管理有限公司(15279189.czvv.com) 版权所有';
        //指引列表创建
        var listitem = new ListItem('购物流程', '交易条款', '开票须知', '订单答疑');
        listitem.dataFill('one.html', 'two.html', 'three.html', 'four.html');
        var listitem1 = new ListItem('购物流程', '交易条款', '开票须知', '订单答疑');
        listitem1.dataFill('five.html', 'six.html', 'seven.html', 'eigth.html');

        var serviceData = ['购物指南', '商品配送', '商品售后', '需要帮助', '联系我们'];
        var serviceA_DataSet = ['Guide', 'Delivery', 'Service', 'Help', 'Contact'];
        for (var i = 0; i < serviceData.length; i++) {
            
            var dataType = serviceA_DataSet[i];
            var serviceLi = createElement('li'),
                serviceA = createElement('a'),
                iconI = createElement('i', 'fa fa-2x');
            serviceA.setAttribute('data-type', dataType);
            serviceA.innerHTML = serviceData[i];
            
            switch (dataType) {
                case 'Guide':
                    iconI.className += " fa-shopping-cart";
                    serviceA.setAttribute('href', dataType);
                    break;
                case 'Delivery':
                    iconI.className += " fa-truck";
                    serviceA.setAttribute('href', dataType);
                    break;
                case 'Service':
                    iconI.className += " fa-wrench";
                    serviceA.setAttribute('href', dataType);
                    break;
                case 'Help':
                    iconI.className += " fa-question-circle-o";
                    serviceA.setAttribute('href', dataType);
                    break;
                case 'Contact':
                    iconI.className += " fa-commenting";
                    serviceA.setAttribute('href', dataType);
                    break;
            }
            
            serviceA.appendChild(iconI);
            serviceLi.appendChild(serviceA);
            listService.appendChild(serviceLi)
        }
        
        footerService.appendChild(listService);
        floorMiddleAd.appendChild(footerService)
        

        footerContent.appendChild(floorMiddleAd);
        footerContent.appendChild(floorMiddleListContent);
        footerContent.appendChild(Gsbq);
        return footerContent;
    };
    return {
        header: header,
        footer:footer
    }
})();