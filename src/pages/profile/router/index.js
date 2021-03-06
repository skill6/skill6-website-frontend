import Vue from 'vue'
import Router from 'vue-router'

import store from '../../../store'
import UrlConstant from '../../../api/constant'

const PersonalCenter = () => import('@/components/profile/PersonalCenter')
const EditArticle = () => import('@/components/profile/publish/EditArticle')
const UploadFile = () => import('@/components/profile/publish/UploadFile')
const UploadVideo = () => import('@/components/profile/publish/UploadVideo')
const EditQuestion = () => import('@/components/profile/publish/EditQuestion')

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
  component: EditArticle,
  meta: {
    requireAuth: true
  }
}, {
  path: '/publish/question',
  component: EditQuestion,
  meta: {
    requireAuth: true
  }
}, {
  path: '/upload/file',
  component: UploadFile,
  meta: {
    requireAuth: true
  }
}, {
  path: '/upload/video',
  component: UploadVideo,
  meta: {
    requireAuth: true
  }
}, {
  path: '/setting',
  component: Setting,
  redirect: '/setting/user',
  meta: {
    requireAuth: true
  },
  children: [
    {
      path: 'user',
      component: User,
      meta: {
        requireAuth: true
      }
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

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    Vue.http.get(UrlConstant.loginStateUrl).then(response => {
      if (response.body.success) {
        store.commit('setToken', true)
        next()
      } else {
        store.commit('logout')
        next(false)
        window.location.href = '/account/signin'
      }
    })
  } else {
    next()
  }
})

export default router
