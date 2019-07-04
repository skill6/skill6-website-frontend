// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import InfoFlow from './InfoFlow.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import IView from 'iview'
import 'iview/dist/styles/iview.css'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(IView)
Vue.use(VueVideoPlayer)

/* eslint-disable no-new */
new Vue({
  el: '#infoflow',
  components: {
    InfoFlow
  },
  template: '<InfoFlow/>',
  render: h => h(InfoFlow)
})
