import Vue from 'vue'
import {
  Button, Divider, Icon, BackTop, Card, Steps, Step, Affix, Anchor, AnchorLink, LoadingBar
} from 'iview'

const iview = {
  install: function (Vue) {
    Vue.component('Affix', Affix)
    Vue.component('Anchor', Anchor)
    Vue.component('AnchorLink', AnchorLink)
    Vue.component('Button', Button)
    Vue.component('BackTop', BackTop)
    Vue.component('Card', Card)
    Vue.component('Divider', Divider)
    Vue.component('Icon', Icon)
    Vue.component('LoadingBar', LoadingBar)
    Vue.component('Steps', Steps)
    Vue.component('Step', Step)
  }
}

Vue.prototype.$Loading = LoadingBar

export default iview
