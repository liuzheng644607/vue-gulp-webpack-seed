/**
 * @Author: liuyan
 * @Date:   2017-06-25T14:59:28+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Copyright: 
 * @Description:
 */

import ajax from 'Common/ajax';
import urlMap from 'Common/urlMap';

let userInfoCache;

export default {
    getUserInfo(cache = false) {
        if (cache && userInfoCache) {
            return Promise.resolve(userInfoCache);
        }

        return ajax.get(urlMap.userDetail).then(res => {
            return (userInfoCache = res);
        });
    }
};
