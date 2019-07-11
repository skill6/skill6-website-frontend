// 导入自己需要的组件
import {
  Button, Card, Radio, RadioGroup, Timeline, TimelineItem, Form,
  FormItem, Row, Col, Input, TabPane, Icon, Image, Steps, Step,
  Avatar, Divider, Tooltip, Badge, Pagination, Autocomplete,
  Carousel, CarouselItem, Tag, Tabs, ButtonGroup
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Card)
    Vue.use(Radio)
    Vue.use(RadioGroup)
    Vue.use(Timeline)
    Vue.use(TimelineItem)
    Vue.use(Tabs)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Input)
    Vue.use(TabPane)
    Vue.use(Icon)
    Vue.use(Image)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(Avatar)
    Vue.use(Divider)
    Vue.use(Tooltip)
    Vue.use(Badge)
    Vue.use(Pagination)
    Vue.use(Autocomplete)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Tag)
    Vue.use(ButtonGroup)
  }
}

export default element
