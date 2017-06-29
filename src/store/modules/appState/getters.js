/**
 * @Author: liuyan
 * @Date:   2017-06-25T10:42:02+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Copyright: 
 * @Description:
 */

import _ from 'lodash';
// import { leftMenus, topMenu } from 'Common/menus';

export const leftMenu = (state, getters) => {
    const { leftMenu } = state;
    const leftMenuClone = _.cloneDeep(leftMenu);
    let id = 0;
    const walkMenu = menus => {
        return menus.map(menu => {
            menu.id = '' + id++;
            if (menu.children) {
                menu.children = walkMenu(menu.children);
            }
            return menu;
        });
    };

    return walkMenu(leftMenuClone);
};
