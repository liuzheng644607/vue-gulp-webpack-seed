/**
 * @Author: lyan
 * @Date:   2017-06-26T11:41:20+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Description:
 */

import userCenter from './user-center';
import dataCenter from './data-center';

/**
 * 顶部导航， name对应左侧菜单的名字
 * @type {Array}
 */
const topMenu = [
    {
        title: '用户中心',
        name: 'userCenter',
        // 模块路径
        path: '/user-center'
    },
    {
        title: '数据中心',
        name: 'dataCenter',
        path: '/data-center'
    },
    { title: '业务中心', name: 'businessCenter', path: '/business-center' }
];

/**
 * 顶部导航对应的左侧菜单
 * @type {Object}
 */
const leftMenus = {
    // 用户中心
    userCenter,
    // 数据中心
    dataCenter
};

export { topMenu, leftMenus };
