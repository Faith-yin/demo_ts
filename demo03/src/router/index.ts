/*
 * @Date: 2020-07-06 11:52:36
 * @information: 路由
 */ 
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Article',
  },
  {
    path: '/Article', // 首页
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/Article/Detail/:index', // 文章详情
    name:'Detail',
    component: () => import("@/views/Detail.vue")
  },
  {
    path: '/Message', // 消息
    name: 'Message',
    component: () => import('@/views/Message.vue')
  },
  {
    path: '/User', // 用户
    name: 'User',
    component: () => import('@/views/User.vue')
  },
  {
    path: '/Mine', // 我的
    name: 'Mine',
    component: () => import('@/views/Mine.vue')
  }
]
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

// 避免要跳转的路由与当前路由相同而报错
const resolveOriginal = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: any) {
  return (resolveOriginal.call(this, location) as any).catch((err: any) => err)
}

export default router
