// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import Profile from './Profile.vue'
import router from './router'

import ElementUI from '../../lib/element-ui'
import IView from '../../lib/iview'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(IView)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(MavonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#profile',
  router,
  components: {
    Profile
  },
  template: '<Profile/>',
  render: h => h(Profile)
})
