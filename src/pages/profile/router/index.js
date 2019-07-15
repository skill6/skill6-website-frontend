import Vue from 'vue'
import Router from 'vue-router'

const PersonalCenter = () => import('@/components/profile/PersonalCenter')
const EditArticle = () => import('@/components/profile/publish/EditArticle')

Vue.use(Router)

const routes = [{
  path: '/',
  component: PersonalCenter
}, {
  path: '/:userName',
  component: PersonalCenter
}, {
  path: '/publish/article',
  component: EditArticle
}, {
  path: '*',
  redirect: '/'
}]

const router = new Router({
  routes,
  base: '/profile',
  mode: 'history'
})

export default router
