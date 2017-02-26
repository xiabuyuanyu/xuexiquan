define(['jquery'], function ($) {

    $('#form-login').on('submit', function () {
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function (data){
                if(data.code===200){
                    location.href = '/';
                    console.log(123);
                }
            }
        });
        return false;
    })

});
