/**
 * Created by Administrator on 2017/2/25 0025.
 */
requirejs.config({
    //绝对路径
    baseUrl:'/',
    paths:{
        // 第三方库的路径配置
        jquery: 'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap.min',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
        nprogress: 'lib/nprogress/nprogress',
        template: 'lib/artTemplate-3.0.1/template',

        // 自己写的路径配置

        /*js/user*/
        userList:'js/user/list',
        userProfile: 'js/user/profile',

        /*js/teacher*/
        teacherAdd:'js/teacher/add',
        teacherList:'js/teacher/list',

        /*js/home*/
        Login:'js/home/login',
        Repass:'js/home/repass',
        Setting:'js/home/setting',

        /*js/course*/
        courseAdd:'js/course/add',
        courseAddStep1:'js/course/add_step1',
        courseAddStep2:'js/course/add_step2',
        courseAddStep3: 'js/course/add_step3',
        courseCategory: 'js/course/category',
        courseCategoryAdd: 'js/course/category_add',
        courseList: 'js/course/list',
        courseTopic: 'js/course/topic',
        common:'js/common/common',
        index: 'js/index'

    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});

// 优先以最快的速度开启页面进度条，其他的js加载延后。
require(['nprogress'], function (nprogress) {
    nprogress.start();
});

// 所有的页面都需要这两个js，先加载他们。
require(['jquery', 'bootstrap','common']);
/*
 *这里获取页面的pathname，然后对应的加载js。
 * */
//获取文件路径，根据文件路径区分文件
(function(window) {
    //获取当前文件的路径
    var pathname = window.location.pathname;
    /**
     * 判断登陆状态:
     *
     * 1、登陆页
     * 1.1、没有SESSID，不用管
     * 1.2、有SESSID，跳转到首页
     *
     * 2、其它页
     * 2.1、没有SESSID，跳转到登陆页
     * 2.2、有SESSID，不用管
     */
    //判断是这个路径   undefined占位符  PHPSESSID后端定义的名
    require(['jquery', 'jqueryCookie'], function($, undefined) {
        var sessID = $.cookie('PHPSESSID');

        // 登陆状态前端效验  是登录页，并且有ID
        if(pathname === '/html/home/login.html' && sessID) {
            location.href = '/';
        }else if(pathname !== '/html/home/login.html' && !sessID) {
            location.href = '/html/home/login.html';
        }

        // 如果没有发生页面跳转，就加载对应的js模块
        switch(pathname) {
            case '/html/user/list.html':
                //根据上面的路径知道代表userList
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case '/html/teacher/list.html':
                require(['teacherList']);
                break;
            /*course*/
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAddStep2']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/topic.html':
                require(['courseTopic']);
                break;
            /*home*/
            case '/html/home/login.html':
                require(['Login']);
                break;
            case '/html/home/repass.html':
                require(['Repass']);
                break;
            case '/html/home/settings.html':
                require(['Settings']);
                break;
            case '/':
                require(['index']);
                break;
        }
    });


})(window);