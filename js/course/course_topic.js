<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>学IT - 后台管理系统</title>
    <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="./assets/nprogress/nprogress.css">
    <link rel="stylesheet" href="./less/index.css">
</head>
<body>
    
    <!-- 侧边栏 -->
    <div class="aside">
        <!-- 个人资料 -->
        <div class="profile">
            <!-- 头像 -->
            <div class="avatar img-circle">
                <img src="./uploads/avatar.jpg">
            </div>
            <h4>布头儿</h4>
        </div>
        <!-- 导航菜单 -->
        <div class="navs">
            <ul class="list-unstyled">
                <li>
                    <a href="../../index.html">
                        <i class="fa fa-home"></i>
                        仪表盘
                    </a>
                </li>
                <li>
                    <a href="./user_list.html">
                        <i class="fa fa-bell"></i>
                        用户管理
                    </a>
                </li>
                <li>
                    <a href="./teacher_list.html">
                        <i class="fa fa-bell"></i>
                        讲师管理
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-cog"></i>
                        课程管理
                        <i class="arrow fa fa-angle-right"></i>
                    </a>
                    <ul class="list-unstyled" style="display: block;">
                        <li>
                            <a href="course_add.js">
                                 课程添加
                            </a>
                        </li>
                        <li>
                            <a href="course_list.js">
                                课程列表
                            </a>
                        </li>
                        <li>
                            <a href="category.js">
                                课程分类
                            </a>
                        </li>
                        <li>
                            <a href="./course_topic.html" class="active">
                                课程专题
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="../advert_list.html">
                        <i class="fa fa-bell"></i>
                        广告管理
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-cog"></i>
                        系统设置
                        <i class="arrow fa fa-angle-right"></i>
                    </a>
                    <ul class="list-unstyled">
                        <li>
                            <a href="javascript:;">
                                网站设置
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                 权限管理
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <!-- 主体 -->
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
            <div class="header">
                <nav class="navbar navbar-custom">
                    <div class="navbar-header">
                        <a href="javascript:;" class="navbar-brand">
                            <i class="fa fa-navicon"></i>
                        </a>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa-bell"></i>
                                <span class="badge">8</span>
                            </a>
                        </li>
                        <li>
                            <a href="../home/settings.html">
                                <i class="fa fa-user"></i>
                                个人中心
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa-sign-out"></i>
                                退出
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa-tasks"></i>
                            </a>
                        </li>
                    </ul>
                </nav>          
            </div>
            <div class="body course-topic">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">课程管理</a></li>
                    <li class="active">课程专题</li>
                </ol>
                <h3>敬请期待...</h3>
            </div>
        </div>
    </div>

    <script src="./assets/jquery/jquery.min.js"></script>
    <script src="./assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/nprogress/nprogress.js"></script>
    <script src="./js/common.js"></script>
</body>
</html>