<!--
 * @LastEditors: 杜康
 * @LastEditTime: 2022-08-12 17:35:23
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
const Cesium = window.Cesium

onMounted(() => {
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMjEyMGE5MS00YmQ0LTRjNmItOGQyOC05NjNmMGNiNjM2YzUiLCJpZCI6MTA0MTQ4LCJpYXQiOjE2NjAyOTI3MDZ9.JyHLwHxvHB63hr3wcv3oaYIWIZam7eMFXxyT13BSefo';
  var viewer = new Cesium.Viewer("cesium-container", {
    animation: true, // 是否开启动画
    timeline: false, // 是否显示时间轴
  });
});
</script>

<template>
  <section class="w-screen h-screen flex flex-col">
    <!-- 头部信息 -->
    <section class="w-full h-16 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></section>
    <!-- 地图容器 -->
    <section class="w-full flex-1 relative">
      <!-- 容器 -->
      <div id="cesium-container" class="absolute w-full h-full bg-gray-50"></div>
    </section>
  </section>
</template>