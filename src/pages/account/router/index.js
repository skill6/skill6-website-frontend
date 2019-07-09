import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '@/components/sign/SignIn'
import SignUp from '@/components/sign/SignUp'

Vue.use(Router)

const routes = [{
  path: '/',
  component: SignIn
},
{
  path: '/signin',
  component: SignIn
},
{
  path: '/signup',
  component: SignUp
}
]

const router = new Router({
  routes,
  base: '/account',
  mode: 'history'
})

export default router
