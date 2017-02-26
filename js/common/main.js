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
        jquerycookie:'lib/jquery-cookie/jquery.cookie',

        // 自己写的路径配置
        /*js/user*/
        userList:'js/user/list',
        userProfile: 'js/user/profile',

        /*js/teacher*/
        teacherAdd:'js/teacher/add',
        teacherList:'js/teacher/list',

        /*js/home*/
        homeLogin:'js/home/login',
        homeRepass:'js/home/repass',
        homeSetting:'js/home/setting',

        /*js/course*/
        courseAdd:'js/course/add',
        courseAddStep1:'js/course/add_step1',
        courseAddStep2:'js/course/add_step2',
        courseAddStep3: 'js/course/add_step3',
        courseCategory: 'js/course/category',
        courseCategoryAdd: 'js/course/category_add',
        courseList: 'js/course/list',
        courseTopic: 'js/course/topic',
        common:'js/common/common'
    },
    shim:{
        bootsrap:{
            deps:['jquery']
        }
    }
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
    //判断是这个路径
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
            require(['homeLogin']);
            break;
        case '/html/home/repass.html':
            require(['homeRepass']);
            break;
        case '/html/home/settings.html':
            require(['homeSettings']);
            break;
    }
})(window);