// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import Skill6 from './Skill6'
import InfoFlow from './InfoFlow'
import router from './router'

import ElementUI from '../../lib/element-ui'
import { Button, Divider, Icon, BackTop, Card } from 'iview'
import VueVideoPlayer from 'vue-video-player'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueVideoPlayer)

Vue.component('Button', Button)
Vue.component('Divider', Divider)
Vue.component('Icon', Icon)
Vue.component('BackTop', BackTop)
Vue.component('Card', Card)

const store = new Vuex.Store({
  state: {
    infoFlowShow: false,
    skill6Show: true
  },
  mutations: {
    showInfoFlow (state) {
      state.infoFlowShow = true
      state.skill6Show = false
    },
    showSkill6 (state) {
      state.infoFlowShow = false
      state.skill6Show = true
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#infoflow',
  store,
  components: {
    InfoFlow
  },
  template: '<InfoFlow/>',
  render: h => h(InfoFlow)
})

new Vue({
  el: '#skill6',
  store,
  router,
  components: {
    Skill6
  },
  template: '<Skill6/>',
  render: h => h(Skill6)
})
