/**
 * @Author: liuyan
 * @Date:   2017-06-24T22:42:38+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Copyright: 
 * @Description: 全局app 状态
 */

import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const state = {
    isMenuShow: true,
    // 当前选中的顶部菜单
    topMenuActived: '',
    activeMenuPath: '/',
    topMenu: [],
    leftMenu: [],
    isLogin: localStorage.getItem('isLogin') === 'true'
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
