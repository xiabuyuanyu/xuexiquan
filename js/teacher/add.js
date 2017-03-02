define(['jquery', 'common', 'nprogress','util','template', 'datepicker', 'datepickerLanguage'],  function ($, undefined, nprogress, util, template, datepicker, undefined) {

    // 该页所有的js加载完毕，进度条结束。
    nprogress.done();

    /**
     * 获取tc_id查询字符串，如果有则认为当前是讲师编辑页面，没有则认为是新讲师添加页面。
     *
     * 编辑讲师：
     * 1、先获取讲师信息，展示到表单中
     * 2、监听提交表单事件，转为ajax方式提交到讲师修改接口。
     *
     * 添加讲师：
     * 1、监听提交表单事件，转为ajax方式提交到讲师添加接口。
     * */

// 根据编辑和添加，对应的渲染表单
    var tcId=util.getQueryString('tc_id');
    if(tcId){
        // 获取该讲师之前的信息，填充到表单中
        $.get('/v6/teacher/edit',{tc_id:tcId}, function (data) {
            if(data.code == 200){
                var html = template('teacher-form-tpl', data.result);
                $('.teacher-add').html(html);
                //时间插件
                $('#datepicter').datepicker({
                    language: 'zh-CN',
                    endDate: new Date(),
                    format: 'yyyy-mm-dd'
                });
                $('#datepicter2').datepicker({
                    language: 'zh-CN',
                    endDate: new Date(),
                    format: 'yyyy-mm-dd'
                })
            }
        });
    }
    // 这里是添加讲师相关的操作
    else {
        var html = template('teacher-form-tpl', {});
        $('.teacher-add').html(html);
        $('#datepicter').datepicker({
            language: 'zh-CN',
            endDate: new Date(),
            format: 'yyyy-mm-dd'
        });
        $('#datepicter2').datepicker({
            language: 'zh-CN',
            endDate: new Date(),
            format: 'yyyy-mm-dd'
        });
    }
    // 这里是添加讲师相关的操作

    /**
     * 监听表单提交事件，转换为ajax请求。
     * 如果是编辑，那么请求/v6/teacher/update， 额外需要一个tc_id参数；
     * 如果是添加，那么请求/v6/teacher/add。
     * */
    $('.teacher-add').on('submit','#teacher-add-form', function () {
        $.ajax({
            //如果有ID，就使用update接口，没有就使用添加的add接口
            url: '/v6/teacher/'+ ( tcId? 'update': 'add' ),
            type: 'post',
            //因为serialize获取到所有name="tc_pass" type="password"里的属性和属性值，并转化为：tc_pass&password 所有格式为'&tc_id=' + tcId
            data: $(this).serialize()+ ( tcId? '&tc_id=' + tcId : '' ),
            success: function(data) {
                if(data.code == 200) {
                    location.href = '/html/teacher/list.html';
                }
            }
        });
        return false;
    });

});
