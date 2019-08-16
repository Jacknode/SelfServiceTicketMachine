<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  name: "app",
  data() {
    return {
      isFullscreen: false
    };
  },
  methods: {},
  mounted() {
    if (!screenfull.enabled) {
      // 如果不允许进入全屏，发出不允许提示
      alert("不支持全屏");
      return false;
    } else {
      screenfull.toggle();
    }
  }
};
</script>

<style>
</style>
