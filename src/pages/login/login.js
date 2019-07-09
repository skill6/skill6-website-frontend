// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import Sign from './Sign'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import IView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(IView)

/* eslint-disable no-new */
new Vue({
  el: '#sign',
  router,
  components: {
    Sign
  },
  template: '<Sign/>',
  render: h => h(Sign)
})
