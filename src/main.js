import Vue from 'vue'
import Vuex from 'vuex'
import store from './store.js'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

Vue.use(Vuex)

const vueStore = new Vuex.Store(store);

new Vue({
  router:router,
  store:vueStore,
  render: h => h(App),
}).$mount('#app')