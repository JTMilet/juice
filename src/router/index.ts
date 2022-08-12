/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-08-12 14:49:13
 */
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import loginRoutes from './modules/login/index'
import homeRoutes from './modules/home/index'
const routes: Array<RouteRecordRaw> = [
  ...loginRoutes,
  ...homeRoutes
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router