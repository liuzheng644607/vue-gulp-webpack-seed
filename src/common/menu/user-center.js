/**
 * @Author: lyan
 * @Date:   2017-06-26T11:43:08+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Description: 用户中心模块菜单
 */

export default [
    {
        title: '用户管理',
        children: [
            // 菜单路径
            { title: '认证审核管理', path: '/user-center/user-authed' },
            { title: '未认证注册用户', path: '/user-center/user-visitor' },
            { title: '待审核用户', path: '/user-center/user-pending' },
            { title: '未通过用户', path: '/user-center/user-reject' }
        ]
    },
    {
        title: '消息管理',
        children: [
            { title: 'push管理', path: '/user-center/msg-push' },
            { title: '短信管理', path: '/user-center/msg-sms' }
        ]
    },
    {
        title: '小调查',
        path: '/user-center/short-surveys'
    }
];
