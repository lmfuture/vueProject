// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引用基本的vue工具，vue框架、引用依赖DOM节点，引用vue-router
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont/iconfont.css'
import moment from 'moment'
import Toast from './toast.js'
import store from './store/index.js'
import VueBus from 'vue-bus';

//Vue插件
Vue.use(Toast)

Vue.use(VueBus)

//element-ui是vue的UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//用于vue的ajax请求
import axios from 'axios'
Vue.prototype.$http = axios

// 引用weui所有组件
import VueWeui from 'vue-weui';


//veu-resource跨域的第三方库
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

//引入mint ui 库
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';


import Wevue from 'we-vue';
Vue.use(Wevue);
import 'we-vue/lib/style.css';

//lazyload
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload,{
  preLoad: 1.4,
  error: 'http://static.oschina.net/uploads/img/201409/26073953_DP0i.gif',
  loading: 'http://static.oschina.net/uploads/img/201409/26073947_j9gz.gif',
  attempt: 2
});

// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '386e71a5908d37e79aba52b76818fb28',
  // 插件集合
  plugin: ['AMap.Autocomplete','AMap.PlaceSearch','AMap.Geolocation', 'AMap.PlaceSearch', 'AMap.Scale', '<AMap class="OverView"></AMap>', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});


Vue.config.productionTip = false


/* eslint-disable no-new */
var vm = new Vue({
  el:'#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


//vm.$mount('#app');手动挂在的方式
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    //document.title = to.meta.title
    //document.getElementsByClassName('mint-header-title')[0].innerHTML = to.meta.title;
  }
  next()
})

