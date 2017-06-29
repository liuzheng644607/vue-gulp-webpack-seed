/**
 * @Author: liuyan
 * @Date:   2017-06-24T18:43:06+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Copyright: 
 * @Description: mutation-types 统一维护
 */

const keyMirror = obj => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            obj[key] = key;
        }
    }
    return obj;
};

const constants = {
    // 切换菜单展示状态
    TOGGLE_MENU_SHOW: null,
    // 登出
    SYSTEM_LOGOUT: null,
    CHANGE_LOGIN_STATUS: null,
    // 改变顶部导航选中状态
    CHANGE_TOP_SELECTED_MENU: null,
    // 改变顶部导航
    CHANGE_TOP_MENU: null,
    // 改变左侧菜单
    CHANGE_LEFT_MENU: null,
    //
    CHANGE_LEFT_MENU_PATH: null
};

export default keyMirror(constants);
