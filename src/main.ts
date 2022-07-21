/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 20:00:22
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import 'normalize.css/normalize.css'
import Router from './router'
import App from './App.vue'
import './styles/main.css'
import 'ant-design-vue/dist/antd.css';

const pinia = createPinia()
createApp(App)
  .use(pinia)
  .use(Router)
  .use(Antd)
  .mount('#app')
