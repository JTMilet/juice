/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-08-12 14:48:36
 */
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  }
]
export default routes