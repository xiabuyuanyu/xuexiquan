define(['jquery', 'common', 'nprogress'], function ($, undefined, nprogress) {

    // 该页所有的js加载完毕，进度条结束。
    nprogress.done();

    //编辑讲师
    //var tcld=util.getQueryString('tc_id');
    //if(tcld){
    //}

    // 添加讲师
    $('#teacher-add-form').on('submit', function () {
        $.ajax({
            url: '/v6/teacher/add',
            type: 'post',
            data: $(this).serialize(),
            success: function (data) {
                // 添加成功，跳转到讲师列表页
                if (data.code == 200) {
                    location.href = '/html/teacher/list.html';
                }
            }
        })
        return false;
    });

});
