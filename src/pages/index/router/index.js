import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage'
import ArticlePreview from '@/components/article/preview/ArticlePreview'
import QuestionPreview from '@/components/question/preview/QuestionPreview'
import VideoPreview from '@/components/video/VideoPreview'
import SharePreview from '@/components/share/preview/SharePreview'
import AboutPreview from '@/components/about/AboutPreview'
import Article from '@/components/article/Article'
import Question from '@/components/question/Question'

Vue.use(Router)

const routes = [{
  path: '/',
  component: HomePage
},
{
  path: '/article',
  component: ArticlePreview
},
{
  path: '/question',
  component: QuestionPreview
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
  path: '/article/:articleId',
  component: Article
},
{
  path: '/question/:questionId',
  component: Question
},
{
  path: '*',
  redirect: '/'
}
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
