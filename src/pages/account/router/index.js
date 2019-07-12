import Vue from 'vue'
import Router from 'vue-router'

const SignIn = () => import('@/components/account/SignIn')
const SignUp = () => import('@/components/account/SignUp')
const RetrievePassword = () => import('@/components/account/RetrievePassword')
const ModifyPassword = () => import('@/components/account/ModifyPassword')

Vue.use(Router)

const routes = [{
  path: '/signin',
  component: SignIn
},
{
  path: '/signup',
  component: SignUp
},
{
  path: '/retrievepwd',
  component: RetrievePassword
},
{
  path: '/modifypwd',
  component: ModifyPassword
},
{
  path: '*',
  component: ModifyPassword
}
]

const router = new Router({
  routes,
  base: '/account',
  mode: 'history'
})

export default router
