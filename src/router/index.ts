/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 15:13:22
 */
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import loginRoutes from './modules/login/index'
const routes: Array<RouteRecordRaw> = [
  ...loginRoutes
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router