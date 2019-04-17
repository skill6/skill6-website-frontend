// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import 'jquery'
import 'uikit'
import 'uikit/dist/css/uikit.min.css'

import Skill6 from './Skill6'
import router from './router'
import UIkit from './uikit'
import './mock' // 刚刚手写的mock.js文件

Vue.config.productionTip = false
Vue.use(UIkit)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#skill6',
  router,
  components: {
    Skill6
  },
  template: '<Skill6/>',
  render: h => h(Skill6)
})
