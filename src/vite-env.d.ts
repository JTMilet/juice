/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-08-12 17:37:02
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  Cesium: any
}