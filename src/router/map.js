// 导入组件

import menuRouters from './menu-router';

import NotFound from 'Pages/404';
// 页面框架
import frame from 'Components/frame/frame.vue';
/* 登录页 */
import login from 'Pages/login';
// 路由map
export default [
    { path: '*', component: NotFound },
    { path: '/login', name: 'login', component: login },
    {
        path: '/',
        name: 'frame',
        component: frame,
        children: menuRouters
    }
];
