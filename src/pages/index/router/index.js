import Vue from 'vue'
import Router from 'vue-router'

import InfoPreview from '@/components/InfoPreview'
import ArticlePreview from '@/components/article/ArticlePreview'
import CodePreview from '@/components/code/CodePreview'
import CoursePreview from '@/components/course/CoursePreview'
import VideoPreview from '@/components/video/VideoPreview'
import SharePreview from '@/components/share/SharePreview'
import AboutPreview from '@/components/about/AboutPreview'

Vue.use(Router)

const routes = [{
  path: '/',
  component: InfoPreview
},
{
  path: '/article',
  component: ArticlePreview
},
{
  path: '/code',
  component: CodePreview
},
{
  path: '/course',
  component: CoursePreview
},
{
  path: '/video',
  component: VideoPreview
},
{
  path: '/share',
  component: SharePreview
},
{
  path: '/about',
  component: AboutPreview
},
{
  path: '*',
  redirect: '/'
}
]

export default new Router({
  routes,
  mode: 'history'
})
