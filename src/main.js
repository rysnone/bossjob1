import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter);
// 导入全局的样式
import './style/style.css'
// 导入mui樣式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需导入mint-ui
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 导入axios包
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)

// 导入自己的 router 路由模块
import router from './router/index.js'

// 导入app组件
import App from './App.vue'




Vue.config.productionTip = false


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  router
})
