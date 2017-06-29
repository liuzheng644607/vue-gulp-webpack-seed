/**
 * @Author: liuyan
 * @Date:   2017-06-21T10:47:29+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Copyright: 
 * @Description: ajax 封装
 */

import axios from 'axios';
import { Loading } from 'element-ui';

let loadingInstance;

/**
 * loading
 * @type {Object}
 */
const loading = {
    show(opt = { fullscreen: true }) {
        loadingInstance = Loading.service(opt);
    },
    hide() {
        loadingInstance && loadingInstance.close();
    }
};

const ajax = axios.create({
    baseURL: process.env.BASE_URL || '',
    timeout: 3000,
    withCredentials: true,
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
});

/**
 * 数据请求前全部打开loading，可通过配置 showLoading: false 关闭
 * @type {[type]}
 */
ajax.interceptors.request.use(
    config => {
        // TODO:
        return config;
    },
    error => {
        return Promise.reject(new Error(error));
    }
);

/**
 * 对response统一处理
 * @type {[type]}
 */
ajax.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(new Error(error));
    }
);

/**
 * 扩展一个ajax方法，用于自动加上一个全屏loading效果
 * @param  {[type]} url         [description]
 * @param  {Object} [config={}] [description]
 * @return {[type]}             [description]
 */
ajax.loading = function(url, config = {}) {
    if (Object.prototype.toString.call(url) === '[object Object]') {
        config = { ...url, ...config };
    } else {
        config = { url, ...config };
    }

    loading.show();

    return ajax(config)
        .then(res => {
            loading.hide();
            return res;
        })
        .catch(error => {
            loading.hide();
            return Promise.reject(new Error(error));
        });
};

export default ajax;
