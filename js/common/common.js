//定义
define(['jquery','jqueryCookie'],function($,undefined){
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });

    /**
     * 根据页面路径定位左侧导航
     * 1、获取当前页面的pathname
     * 2、然后获取所有的a，remove掉active class，
     * 然后再使用pathname获取到应该被选中的a，给它添加active class即可。
     * 3、最后获取该a标签所有的父ul标签，让他们展示出来，如果不展示，我是看不着的。
     * */
    var pathname = window.location.pathname;//获取路径例如http://boxuegu.com/html/home/login.html
    //filter过滤器，遍历前面的，寻找href里的路径
    //parents遍历所有父级，选择ul
    $('.navs a').removeClass('active').filter('[href="' + pathname + '"]')
        .addClass('active').parents('ul').show();

    //$.ajax({
    //    url: '/v6/login',
    //    type: 'post',
    //    data: {
    //        tc_name: 123456,
    //        tc_pass: 123456
    //    },
    //    success: function() {
    //        console.log('成了');
    //    },
    //    error: function() {
    //        console.log('败了');
    //    }
    //});

    //退出功能
    $('#logout').on('click',function(){
        $.post('/v6/logout',function(data){
            if(data.code==200){
                location.href = '/html/home/login.html';
            }
        })
    });

// 获取本地cookie用户信息，同时做容错处理
    var userInfo = null;
    try {
        //$.cookie('userInfo'是字符串，需要JSON.parse解析，并存储
        userInfo = JSON.parse($.cookie('userInfo'))
    }catch(e) {
        userInfo = {};
    }

    // 然后展示到左侧导航
    $('.aside .profile h4').html(userInfo.tc_name? userInfo.tc_name:'dagenimeiminga');
    $('.aside .profile img').attr('src', userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.png');

    console.log(userInfo.tc_avatar);

});

