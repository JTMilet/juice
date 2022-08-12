/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-08-12 16:41:45
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import 'normalize.css/normalize.css'
import Router from './router'
import App from './App.vue'
import './styles/main.css'
import 'ant-design-vue/dist/antd.css';
// import 'cesium/Build/Cesium/Widgets/widgets.css'

// Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMjEyMGE5MS00YmQ0LTRjNmItOGQyOC05NjNmMGNiNjM2YzUiLCJpZCI6MTA0MTQ4LCJpYXQiOjE2NjAyOTI3MDZ9.JyHLwHxvHB63hr3wcv3oaYIWIZam7eMFXxyT13BSefo';

const pinia = createPinia()
createApp(App)
  .use(pinia)
  .use(Router)
  .use(Antd)
  .mount('#app')
