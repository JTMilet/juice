/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 15:11:45
 */
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]
export default routes