//NProgress.start();
//
//NProgress.done();
//
////实现下拉效果
//$('.navs ul').prev('a').on('click', function () {
//    $(this).next().slideToggle();
//});


//定义
define(['jquery'],function($){
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });


    $.ajax({
        url: '/v6/login',
        type: 'post',
        data: {
            tc_name: 123456,
            tc_pass: 123456
        },
        success: function() {
            console.log('成了');
        },
        error: function() {
            console.log('败了');
        }
    });

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
    $('.aside .profile h4').html(userInfo.tc_name? userInfo.tc_name: 'dagenimeiminga');
    $('.aside .profile img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar: '/img/default.png');


});

