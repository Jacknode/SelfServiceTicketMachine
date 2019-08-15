<template>
  <div id="wrap">
    <div style="margin-left:33%">
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
  width: 10vw;
  height: 7vw;
  display: inline-block;
  margin-top: 5vw;
  border-radius: 0.5vw;
  font: 1vw / 11vw "微软雅黑";
  color: #fff;
  text-align: center;
  cursor: pointer;
}
#wrap span:nth-child(1) {
  background: #ff6600 url("../assets/img/IDCard.png") 2.8vw 1vw no-repeat;
}

#wrap span:nth-child(2) {
  background: #01aaef url("../assets/img/code.png") 3.1vw 0.7vw no-repeat;
  margin-left: 5vw;
}
</style>