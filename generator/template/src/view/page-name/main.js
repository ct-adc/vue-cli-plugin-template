__webpack_public_path__ = document.querySelector('meta[name="imgSrc"]').content;

import Vue from 'vue';
import router from '@/router/<%= pageName %>.js';
import app from './App';
import VueRouter from 'vue-router';
import '../../assets/scss/common.scss';
Vue.config.productionTip = false;
Vue.use(VueRouter);
new Vue({
    el: '#app',
    router,
    render: h => h(app)
}); 