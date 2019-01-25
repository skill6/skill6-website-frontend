import Vue from 'vue'
import VueRouter from 'vue-router'

import Skill6 from './Skill6.vue'
import Sign from './Sign.vue'

import InfoPreview from './components/InfoPreview'
import ArticlePreview from './components/article/ArticlePreview'
import CodePreview from './components/code/CodePreview'
import CoursePreview from './components/course/CoursePreview'
import VideoPreview from './components/video/VideoPreview'
import SharePreview from './components/share/SharePreview'
import AboutPreview from './components/about/AboutPreview'

Vue.use(VueRouter);

const routes = [
    {
      path: '/', component: InfoPreview
    },
    {
      path: '/article', component: ArticlePreview
    },
    {
      path: '/code', component: CodePreview
    },
    {
      path: '/course', component: CoursePreview
    },
    {
      path: '/video', component: VideoPreview
    },
    {
      path: '/share', component: SharePreview
    },
    {
      path: '/about', component: AboutPreview
    },
    {
      path: '*', redirect: "/"
    }
  ]
;

const router = new VueRouter({
  routes,
  mode: 'history'
});

//前端页面
var skill6 = new Vue({
  el: '#skill6',
  router,
  render: h => h(Skill6)
});

//登录注册页面
var sign = new Vue({
  el: '#sign',
  render: h => h(Sign)
});
