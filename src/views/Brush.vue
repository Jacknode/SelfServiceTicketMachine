<template>
  <div id="wrap">
    <div style="margin-left:25%">
      <span>刷二代身份证</span>
      <span>取票验证码</span>
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
#wrap span {
  width: 20vw;
  height: 14vw;
  display: inline-block;
  margin-top: 5vw;
  border-radius: 0.5vw;
  font: 2.5vw / 20vw "微软雅黑";
  color: #fff;
  text-align: center;
  cursor: pointer;
}
#wrap span:nth-child(1) {
  background: #ff6600 url("../assets/img/IDCard.png") 5vw 1vw no-repeat;
  background-size: 50%;
}

#wrap span:nth-child(2) {
  background: #01aaef url("../assets/img/code.png") 6vw 0.5vw no-repeat;
  margin-left: 5vw;
  background-size: 40%;
}
</style>