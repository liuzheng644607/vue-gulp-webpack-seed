// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/less/lib/normalize.css';
import 'element-ui/lib/theme-default/index.css';
import Vue from 'vue';
import Element from 'element-ui';
import store from './store';
import App from './App';
import router from './router';
import common from './common';

Vue.use(Element);
Vue.use(common);

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.$vue = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
