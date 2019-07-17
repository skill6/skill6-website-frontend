import Vue from 'vue'
import Router from 'vue-router'

const PersonalCenter = () => import('@/components/profile/PersonalCenter')
const EditArticle = () => import('@/components/profile/publish/EditArticle')

const Setting = () => import('@/components/profile/setting/Setting')
const User = () => import('@/components/profile/setting/subsetting/User')
const Security = () => import('@/components/profile/setting/subsetting/Security')
const Contact = () => import('@/components/profile/setting/subsetting/Contact')
const Infomation = () => import('@/components/profile/setting/subsetting/Infomation')

Vue.use(Router)

const routes = [{
  path: '/',
  component: PersonalCenter
}, {
  path: '/publish/article',
  component: EditArticle
}, {
  path: '/setting',
  component: Setting,
  redirect: '/setting/user',
  children: [
    {
      path: 'user',
      component: User
    },
    {
      path: 'security',
      component: Security
    },
    {
      path: 'contact',
      component: Contact
    },
    {
      path: 'infomation',
      component: Infomation
    }
  ]
}, {
  path: '/:userName',
  component: PersonalCenter
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
