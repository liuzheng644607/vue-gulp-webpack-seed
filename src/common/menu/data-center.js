/**
 * @Author: lyan
 * @Date:   2017-06-27T13:53:49+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Description: 数据中心模块菜单
 */

export default [
    {
        title: '用户中心数据',
        children: [
            { title: '新增用户', path: '/data-center/user-add' },
            { title: '活跃用户', path: '/data-center/user-active' }
        ]
    },
    {
        title: '内容中心数据',
        path: '/data-center/content-center-data'
    }
];
