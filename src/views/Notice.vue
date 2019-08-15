<template>
  <div id="wrap">
    <div id="listWrap">
      <p v-for="(item, index) in 3" :key="index">
        <strong>不知道</strong>
        <span>前往前往</span>
        <em>510502199908127011</em>
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
  padding: 2vw;
}
#listWrap {
  width: 66vw;
  float: left;
}
#listWrap > p {
  background: #d0e8e2;
  padding: 1vw;
  font: 2vw/3vw "微软雅黑";
  border-radius: 0.5vw;
  margin-bottom: 1.5vw;
  overflow: hidden;
}
#listWrap > p > strong {
  display: inline-block;
  padding: 0 1vw;
  width: 15vw;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#listWrap > p > span {
  width: 15vw;
  padding: 0 1vw;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#listWrap > p > em {
  padding: 0 1vw;
  display: inline-block;
  width: 31vw;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#listWrap > p > i {
  width: 3vw;
  height: 3vw;
  display: inline-block;
  border-radius: 50%;
  background: red;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
}
#listWrap > p > i::after {
  display: inline-block;
  content: "";
  width: 1.5vw;
  height: 1.5vw;
  background-color: #fff;
  clip-path: polygon(
    0 5%,
    5% 0,
    50% 45%,
    95% 0,
    100% 5%,
    55% 50%,
    100% 95%,
    95% 100%,
    50% 55%,
    5% 100%,
    0 95%,
    45% 50%
  );
}
#listWrap > span {
  width: 20vw;
  height: 4.5vw;
  background: #005cce;
  border-radius: 0.5vw;
  display: block;
  margin: 10vw auto 0;
  font: 1.5vw / 4.5vw "微软雅黑";
  text-align: center;
  color: #fff;
}
#noticeWrap {
  float: right;
  width: 27vw;
}
#noticeWrap > strong {
  font: 2vw/4vw "微软雅黑";
  color: #333;
}
#noticeWrap > p {
  font: 1.5vw/2vw "微软雅黑";
  padding: 1vw 0;
}
#noticeWrap > span {
  height: 4vw;
  background: #fea000;
  display: block;
  border-radius: 0.5vw;
  font: 1.5vw / 4vw "微软雅黑";
  color: #fff;
  margin-top: 10vw;
  text-align: center;
}
</style>