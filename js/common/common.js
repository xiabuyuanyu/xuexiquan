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

    $('#logout').on('click',function(){
        $.post('/v6/logout',function(data){
            if(data.code==200){
                location.href='/';
            }
        })
    });




});

