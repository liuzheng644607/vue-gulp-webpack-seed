/**
 * @Author: liuyan
 * @Date:   2017-06-24T22:50:46+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Copyright: 
 * @Description:
 */

import types from 'Store/constants/mutation-types';

export default {
    [types.TOGGLE_MENU_SHOW](state) {
        state.isMenuShow = !state.isMenuShow;
    },

    [types.CHANGE_TOP_MENU](state, { topMenu }) {
        state.topMenu = topMenu || [];
    },

    [types.CHANGE_LEFT_MENU](state, { leftMenu }) {
        state.leftMenu = leftMenu || [];
    },

    [types.CHANGE_TOP_SELECTED_MENU](state, { topMenuActived }) {
        state.topMenuActived = topMenuActived;
    },

    [types.CHANGE_LEFT_MENU_PATH](state, { activeMenuPath }) {
        state.activeMenuPath = activeMenuPath;
    },

    [types.CHANGE_LOGIN_STATUS](state, { isLogin }) {
        state.isLogin = isLogin;
    }
};
