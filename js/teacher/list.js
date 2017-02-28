define(['jquery', 'common', 'nprogress', 'template'], function ($, undefined, nprogress, template) {

    // 该页所有的js加载完毕，进度条结束。
    nprogress.done();

    // 渲染讲师列表  /v6/teacher 接口 后面是回调
    $.get('/v6/teacher', function (data) {
        if (data.code == 200) {
            //teacher-list-tpl 模板ID  后面是数据
            var html = template('teacher-list-tpl', {list: data.result});
            //渲染  #teacher-list-tbody到指定位置
            $('#teacher-list-tbody').html(html);
        }
    });

    // 通过事件委托的方式给动态生成的a标签绑定点击事件，
    // 然后获取讲师详细信息并展示。
    //事件委托：
    $('#teacher-list-tbody').on('click', '.teacher-view', function () {
        $.get('/v6/teacher/view', {
            //this为A，找父级添加属性
            tc_id: $(this).parent().attr('data-id')
            //回调
        }, function (data) {
            //判断
            if (data.code == 200) {
                //渲染
                var html = template('teacher-view-tpl', data.result);
                $('#teacherModal').html(html);
            }
        });
    });
});
