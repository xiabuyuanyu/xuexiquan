define(['jquery', 'common', 'nprogress', 'template', 'region', 'datepicker', 'datepickerLanguage', 'ckeditor','uploadify'],
    function ($, undefined, nprogress, template, undefined, datepicker, undefined, ckeditor,uploadify) {

        // 该页所有的js加载完毕，进度条结束。
        nprogress.done();
        /**
         * 展示个人信息到表单
         * */
        $.get('/v6/teacher/profile', function(data) {
            if(data.code == 200) {
                $('#profile').html(template('profile-form-tpl', data.result));

                // 配置头像上传插件
                $("#upfile").uploadify({
                    //点击高度
                    height: $('.preview').width(),
                    swf: '/lib/uploadify/uploadify.swf',
                    uploader: '/v6/uploader/avatar',
                    //描述
                    buttonText:'',
                    //名称
                    fileObjName: 'tc_avatar',
                    fileTypeExts: '*.gif; *.jpg; *.png',
                    // 头像上传成功后，解析字符串数据，然后把上传的地址设置到表单中，供提交；同时更新用户头像的预览。
                    onUploadSuccess: function (file,data) {
                        var data = JSON.parse(data);
                        //console.log(data);//Object {code: 200, msg: "OK", result: Object, time: 1488554442}
                        //console.log(JSON.parse(data));
                        $('.preview img ').attr('src',data.result.path);
                    }
                });

                // 配置三级莲联动 使用插件region
                $('.hometown').region({
                    //获取数据
                    url: '/lib/region/region.json'
                });

                // 配置日期插件
                $('.datepicker').datepicker({
                    language: 'zh-CN',
                    format: 'yyyy-mm-dd',
                    endDate: new Date()
                });

                // 配置富文本编辑器
                var edit = ckeditor.replace('ckeditor');
                // 配置富文本编辑器
                //ckeditor.replace('ckeditor', {
                //    toolbarGroups: [
                //        {name: 'clipboard', groups: ['clipboard', 'undo']},
                //        {name: 'editing', groups: ['find', 'selection', 'spellchecker']},
                //        {name: 'insert'},
                //        {name: 'tools'},
                //        {name: 'styles'},
                //        {name: 'colors'},
                //    ]
                //});

                // 监听提交事件 form  <form action="" class="form-horizontal">
                $('.form-horizontal').on('submit',function () {
                    // 生成一个tc_hometown参数，格式为：省|市|县
                    var hometown = $('.hometown select').map(function() {
                        return $(this).find('option:selected').text();
                    }).toArray().join('|');

                    // 设置文本框的内容为富文本编辑器内容
                    edit.updateElement();

                //发送请求
                $.ajax({
                    url: '/v6/teacher/modify',
                    type: 'post',
                    data:$(this).serialize()+'&tc_hometown='+hometown,
                    success: function (data) {
                        if(data.code==200){
                            //刷新
                            location.reload();
                        }
                    }
                });
                return false;
            });
        }
    });

});