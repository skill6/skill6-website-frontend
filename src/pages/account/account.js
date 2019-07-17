// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import Account from './Account.vue'
import router from './router'
import store from '../../store'

import ElementUI from '../../lib/element-ui'
import IView from '../../lib/iview'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(IView)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#account',
  store,
  router,
  components: {
    Account
  },
  template: '<Account/>',
  render: h => h(Account)
})
