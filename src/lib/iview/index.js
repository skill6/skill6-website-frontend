import { Button, Divider, Icon, BackTop, Card, Steps, Step } from 'iview'

const iview = {
  install: function (Vue) {
    Vue.component('Button', Button)
    Vue.component('BackTop', BackTop)
    Vue.component('Card', Card)
    Vue.component('Divider', Divider)
    Vue.component('Icon', Icon)
    Vue.component('Steps', Steps)
    Vue.component('Step', Step)
  }
}

export default iview