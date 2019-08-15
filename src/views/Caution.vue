<template>
  <div id="wrap">
    <div class="Caution">
      <p>注意事项：</p>
      <span>注意小心小心注意注意小心小心注意</span>
      <span>注意小心小心注意注意小心小心注意</span>
      <span>注意小心小心注意注意小心小心注意</span>
      <span>注意小心小心注意注意小心小心注意</span>
      <span>注意小心小心注意注意小心小心注意</span>
      <span>注意小心小心注意注意小心小心注意</span>
      <span>注意小心小心注意注意小心小心注意</span>
      <span>注意小心小心注意注意小心小心注意</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
<style scoped>
#wrap {
  width: 100%;
  height: 100%;
  background-color: #c1ffff;
  padding: 1vw;
  position: relative;
}
.Caution {
  width: 65vw;
  margin-left: 20vw;
}
.Caution > p {
  height: 5vw;
  font: 2vw / 5vw "微软雅黑";
}
.Caution > span {
  height: 2vw;
  font: 1vw / 2vw "微软雅黑";
  display: block;
  text-indent: 4vw;
}
</style>