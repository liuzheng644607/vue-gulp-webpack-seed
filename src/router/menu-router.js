/**
 * @Author: lyan
 * @Date:   2017-06-26T19:19:26+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Description:
 */

const test = r => require.ensure([], () => r(require('Pages/test')));

export default [
    // 用户中心
    {
        // 模块路径
        path: 'user-center',
        component: test,
        children: [
            // 菜单路径
            { component: test, path: 'user-authed' },
            { component: test, path: 'user-visitor' },
            { component: test, path: 'user-pending' },
            { component: test, path: 'user-reject' },
            { component: test, path: 'msg-push' },
            { component: test, path: 'msg-sms' },
            { component: test, path: 'short-surveys' }
        ]
    },
    // 数据中心
    {
        path: 'data-center',
        component: test,
        children: [
            { component: test, path: 'user-add' },
            { component: test, path: 'user-active' },
            { component: test, path: 'content-center-data' }
        ]
    }
];
