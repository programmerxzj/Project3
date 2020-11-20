/*
* 入口js文件
* */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters'


Vue.component(Button.name,Button) //<mt-button>
Vue.use(VueLazyload,{
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
