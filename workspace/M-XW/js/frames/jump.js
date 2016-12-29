/// <reference path="../../views/login.html" />
$(function () {
    //侧边栏跳转
    $('.login-go li a').eq(0).on('click', function () {
        window.location.href = 'http://m.xw-scm.com/index.html';
    })
    $('.login-go li a').eq(1).on('click', function () {
        window.location.href = 'http://m.xw-scm.com/views/login.html';
    })
    $('.login-go li a').eq(2).on('click', function () {
        window.location.href = 'http://m.xw-scm.com/views/reg.html';
    })
})