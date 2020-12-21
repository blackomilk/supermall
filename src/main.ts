import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/antdesgin.js'
import '../config/webappREM.JS'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import Swiper2, {Autoplay} from 'swiper';

Swiper2.use([Autoplay]);
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
