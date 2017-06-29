/**
 * @Author: liuyan
 * @Date:   2017-06-21T10:43:10+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Copyright: 
 * @Description:
 */

import ajax from './ajax';
import urlMap from './urlMap';
import mixin from './mixin';

const install = Vue => {
    Vue.mixin(mixin);
    Vue.prototype.$http = ajax;
    Vue.prototype.restURL = urlMap;
};

export default { install };
