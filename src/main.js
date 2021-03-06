import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/static/index'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
// import './assets/normalize.css'
import './assets/reset.css'
import './assets/border.css'
import './assets/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 
