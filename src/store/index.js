/**
 * @Author: liuyan
 * @Date:   2017-06-24T18:01:35+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Copyright: 
 * @Description:
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import modules from './modules';

const debug = process.env.NODE_ENV !== 'production';
const plugins = [];

Vue.use(Vuex);

if (debug) {
    plugins.push(createLogger());
}

export default new Vuex.Store({
    modules,
    plugins,
    strict: debug
});
