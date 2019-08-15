<template>
  <div id="wrap">
    <div id="listWrap">
      <p>
        <span>姓名:前往前往</span>
        <em>身份证:510502199908127011</em>
        <i></i>
      </p>
      <span>+购买全票</span>
    </div>
    <div id="noticeWrap">
      <strong>购票须知：</strong>
      <p>小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象小飞象</p>
      <span>下一步</span>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
#wrap {
  width: 100%;
  height: 100%;
  background-color: #c1ffff;
  padding: 1vw;
}
#listWrap {
  width: 50vw;
  float: left;
}
#listWrap > p {
  width: 45vw;
  background: #d0e8e2;
  padding: 1vw 2vw;
  font-size: 1.5vw;
  border-radius: 0.5vw;
  margin: 1vw auto;
  overflow: hidden;
}
#listWrap > p > span {
  float: left;
  margin-right: 2vw;
}
#listWrap > p > em {
  float: left;
}
#listWrap > p > i {
  width: 2vw;
  height: 2vw;
  float: right;
  border-radius: 50%;
  background: red;
  margin-top: 0.3vw;
  position: relative;
}
#listWrap > p > i::after {
  position: absolute;
  content: "";
  background: #fff;
  border-radius: 1vw;
  width: 1.4vw;
  height: 0.2vw;
  top: 0.9vw;
  left: 0.3vw;
  transform: rotateZ(45deg);
}
#listWrap > p > i::before {
  position: absolute;
  content: "";
  background: #fff;
  border-radius: 1vw;
  width: 1.4vw;
  height: 0.2vw;
  top: 0.9vw;
  left: 0.3vw;
  transform: rotateZ(-45deg);
}
#listWrap > span {
  width: 20vw;
  height: 4.5vw;
  background: #005cce;
  border-radius: 0.5vw;
  display: block;
  margin: 10vw auto;
  font: 1.5vw / 4.5vw "微软雅黑";
  text-align: center;
  color: #fff;
}
#noticeWrap {
  width: 20vw;
  float: left;
}
#noticeWrap > strong {
  font-size: 2vw;
}
#noticeWrap > p {
  font-size: 1vw;
}
#noticeWrap > span {
  width: 100%;
  height: 2.5vw;
  background: #fea000;
  display: block;
  border-radius: 0.5vw;
  font: 1.5vw / 2.5vw "微软雅黑";
  color: #fff;
  margin-top: 1vw;
  text-align: center;
}
</style>