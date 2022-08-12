<!--
 * @LastEditors: 杜康
 * @LastEditTime: 2022-08-12 16:43:01
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
// const mounted = onMounted(() =>{
//   var viewer = new Cesium.Viewer("cesium-container", {
//     animation: false, // 是否开启动画
//     timeline: false, // 是否显示时间轴
//   });
// })
</script>

<template>
  <section class="w-screen h-screen flex flex-col">
    <!-- 头部信息 -->
    <section class="w-full h-16 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></section>
    <!-- 地图容器 -->
    <section class="w-full flex-1 relative">
      <!-- 容器 -->
      <div id="cesium-container" class="absolute w-full h-full bg-green-500">123</div>
    </section>
  </section>
</template>