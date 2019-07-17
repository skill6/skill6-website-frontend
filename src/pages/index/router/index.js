import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage'

Vue.use(Router)

const routes =
  [{
    path: '/',
    component: HomePage
  }, {
    path: '/article',
    component: () => import('@/components/article/preview/ArticlePreview')
  }, {
    path: '/question',
    component: () => import('@/components/question/preview/QuestionPreview')
  }, {
    path: '/video',
    component: () => import('@/components/video/preview/VideoPreview')
  }, {
    path: '/share',
    component: () => import('@/components/share/preview/SharePreview')
  }, {
    path: '/about',
    component: () => import('@/components/about/AboutPreview')
  }, {
    path: '/article/:articleId',
    component: () => import('@/components/article/Article')
  }, {
    path: '/question/:questionId',
    component: () => import('@/components/question/Question')
  }, {
    path: '/video/:videoId',
    component: () => import('@/components/video/Video')
  }, {
    path: '*',
    redirect: '/'
  }]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
