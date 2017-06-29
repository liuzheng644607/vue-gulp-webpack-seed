/**
 * @Author: liuyan
 * @Date:   2017-06-25T10:41:50+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Copyright: 
 * @Description:
 */

// import ajax from 'Common/ajax';
// import urlMap from 'Common/urlMap';
import types from 'Store/constants/mutation-types';
import { topMenu } from 'Common/menu';

export const logout = ({ commit }) => {
    return new Promise(resolve => {
        setTimeout(() => {
            localStorage.setItem('isLogin', false);
            commit(types.CHANGE_LOGIN_STATUS, { isLogin: false });
            window.$vue.$router.replace('/login');
            resolve({});
        });
    });
    // ajax.post(urlMap.logout).then(() => {
    //     window.$vue.$router.replace('/login');
    // });
};

export const login = ({ commit }, data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            localStorage.setItem('isLogin', true);
            commit(types.CHANGE_LOGIN_STATUS, { isLogin: true });
            resolve({});
        }, 1000);
    });
    // return ajax.post(urlMap.login, data).then(res => {
    //     commit(types.CHANGE_LOGIN_STATUS, { isLogin: true });
    // });
};

export const initMenu = ({ commit, rootState }) => {
    commit(types.CHANGE_TOP_MENU, { topMenu });
    // commit(types.CHANGE_LEFT_MENU, { leftMenu });
};
