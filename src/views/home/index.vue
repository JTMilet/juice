<!--
 * @LastEditors: 杜康
 * @LastEditTime: 2022-08-15 11:19:23
-->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const slider = ref('slider')
const Cesium = window.Cesium

onMounted(() => {
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMjEyMGE5MS00YmQ0LTRjNmItOGQyOC05NjNmMGNiNjM2YzUiLCJpZCI6MTA0MTQ4LCJpYXQiOjE2NjAyOTI3MDZ9.JyHLwHxvHB63hr3wcv3oaYIWIZam7eMFXxyT13BSefo';
  // 使用高德地图
  const viewer = new Cesium.Viewer("cesium-container", {
    geocoder: false, // 查找工具
    sceneModePicker: false, // 全球场景设置
    fullscreenButton: false, // 全屏按钮
    homeButton: false, // 返回地球按钮
    navigationHelpButton: false, // 帮助问号
    baseLayerPicker: false, // 地图选择器按钮
    animation: false, // 是否开启动画
    timeline: false, // 是否显示时间轴
  });
  viewer._cesiumWidget._creditContainer.style.display = 'none' // 去除版权信息
  // const layer = new Cesium.UrlTemplateImageryProvider({
  //   // url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
  //   minimumLevel: 4,
  //   maximumLevel: 18
  // })
  // viewer.imageryLayers.addImageryProvider(layer)
  // 使用夜间地图
  // const layer = viewer.imageryLayers;
  // const earthAtNight = layer.addImageryProvider(
  //   new Cesium.IonImageryProvider({
  //     assetId: 3812
  //   })
  // )
  // 开局地球视点飞行至湖北省武汉市
  const position = Cesium.Cartesian3.fromDegrees(114.31667, 30.51667, 1500)
  viewer.camera.flyTo({
    destination: position,
    duration: 10
  })
});
</script>

<template>
  <section class="w-screen h-screen flex flex-col">
    <!-- 头部信息 -->
    <section class="w-full h-16 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 flex justify-start items-center">
      <div class="pl-4 text-lg text-white">数智BG创新开发组</div>
    </section>
    <!-- 地图容器 -->
    <section class="w-full flex-1 relative">
      <!-- 容器 -->
      <div id="cesium-container" class="absolute w-full h-full bg-gray-50">
        <div ref="slider"></div>
      </div>
    </section>
  </section>
</template>