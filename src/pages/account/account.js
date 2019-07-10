// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import Account from './Account.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import IView from 'iview'
import 'iview/dist/styles/iview.css'

import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(IView)
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#account',
  router,
  components: {
    Account
  },
  template: '<Account/>',
  render: h => h(Account)
})
