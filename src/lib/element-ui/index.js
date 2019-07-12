// 导入自己需要的组件
import {
  Button, Card, Radio, RadioGroup, Timeline, TimelineItem, Form,
  FormItem, Row, Col, Input, TabPane, Icon, Image, Steps, Step,
  Avatar, Divider, Tooltip, Badge, Pagination, Autocomplete,
  Carousel, CarouselItem, Tag, Tabs, ButtonGroup, Link
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Avatar)
    Vue.use(Autocomplete)
    Vue.use(Badge)
    Vue.use(Button)
    Vue.use(ButtonGroup)
    Vue.use(Card)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Col)
    Vue.use(Divider)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Link)
    Vue.use(Icon)
    Vue.use(Image)
    Vue.use(Pagination)
    Vue.use(Radio)
    Vue.use(RadioGroup)
    Vue.use(Row)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(TabPane)
    Vue.use(Tabs)
    Vue.use(Tag)
    Vue.use(Timeline)
    Vue.use(TimelineItem)
    Vue.use(Tooltip)
  }
}

export default element
