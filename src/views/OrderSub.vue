<template>
  <div id="wrap">
    <div class="leftWrap">
      <p>请确认您的订单：</p>
      <ul class="list">
        <li>
          <span>金额</span>
          <em>成都</em>
        </li>
        <li>
          <span>金额</span>
          <em>成都</em>
        </li>
        <li>
          <span>金额</span>
          <em>成都</em>
        </li>
        <li>
          <span>金额</span>
          <em>成都</em>
        </li>
        <li>
          <span>金额</span>
          <em>成都</em>
        </li>
        <li>
          <span>金额</span>
          <em>成都</em>
        </li>
        <li>
          <span>金额</span>
          <em>成都</em>
        </li>
        <li>
          <span>金额</span>
          <em>成都</em>
        </li>
      </ul>
    </div>
    <div class="rightWrap">
      <p>
        <input type="text" placeholder="请输入你的手机号码" />
      </p>
      <dl>
        <dd>7</dd>
        <dd>8</dd>
        <dd>9</dd>
        <dd>4</dd>
        <dd>5</dd>
        <dd>6</dd>
        <dd>1</dd>
        <dd>2</dd>
        <dd>3</dd>
        <dd>返回</dd>
        <dd>0</dd>
        <dd>确认</dd>
      </dl>
      <span @click="open">提交订单</span>
    </div>

    <!-- 弹窗 -->
    <div class="Popup" v-if="show">
      <i @click="show=false"></i>
      <p>请选择支付方式</p>
      <span>
        支付金额：
        <strong>￥90.00</strong>
      </span>
      <em>微信扫码支付</em>
      <em>支付宝扫码支付</em>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    open() {
      this.show = true;
    },
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
.leftWrap {
  width: 30vw;
  overflow: hidden;
  float: left;
  margin-left: 20%;
}
.leftWrap > p {
  font-size: 1.5vw;
}
.list li {
  height: 2.5vw;
  font: 1.5vw / 2.5vw "微软雅黑";
}
.list li:nth-child(even) {
  background: #9edae0;
}
.list li > span {
  display: inline-block;
  width: 8vw;
  text-align: right;
  margin-right: 2vw;
}
.rightWrap {
  width: 14vw;
  height: 20vw;
  float: left;
  margin-left: 6vw;
}
.rightWrap > p {
  width: 100%;
  height: 3vw;
  border: 0.1vw solid rgb(180, 180, 180);
  border-radius: 0.5vw;
}
.rightWrap > p > input {
  width: 18vw;
  height: 2.7vw;
  margin-left: 0.5vw;
  font-size: 1.2vw;
}
.rightWrap dl {
  overflow: hidden;
  margin: 0.5vw 0;
}
.rightWrap dl dd {
  float: left;
  margin: 0 0 0.7vw 1.3vw;
  width: 3vw;
  height: 3vw;
  background: #005cce;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font: 1vw / 3vw "微软雅黑";
  border-radius: 0.5vw;
}
.rightWrap dl dd:hover {
  background: #2e7ad6;
}
.rightWrap > span {
  width: 100%;
  height: 3vw;
  background: #fea000;
  display: block;
  color: #fff;
  text-align: center;
  font: 1.3vw / 3vw "微软雅黑";
  border-radius: 0.3vw;
  cursor: pointer;
}
.rightWrap > span:hover {
  background: #e69100;
}
.Popup {
  position: absolute;
  width: 30vw;
  height: 20vw;
  background: #fff;
  top: 6vw;
  left: 35vw;
  padding: 2vw 3vw;
}

.Popup > i {
  width: 3vw;
  height: 3vw;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

.Popup > i:after {
  position: absolute;
  content: "";
  background: #000;
  border-radius: 1vw;
  width: 2.3vw;
  height: 0.2vw;
  top: 1.4vw;
  left: 0.3vw;
  transform: rotateZ(45deg);
}
.Popup > i:before {
  position: absolute;
  content: "";
  background: #000;
  border-radius: 1vw;
  width: 2.3vw;
  height: 0.2vw;
  top: 1.4vw;
  left: 0.3vw;
  transform: rotateZ(-45deg);
}

.Popup > p {
  width: 100%;
  height: 3vw;
  border-bottom: 0.1vw solid #eee;
  text-align: center;
  font: 1.5vw / 3vw "微软雅黑";
}
.Popup > span {
  height: 3vw;
  display: block;
  font: 1vw / 3vw "微软雅黑";
  text-align: center;
}
.Popup > span > strong {
  color: red;
  font-size: 1.5vw;
}
.Popup > em {
  width: 13vw;
  height: 3vw;
  border-radius: 0.5vw;
  display: block;
  text-indent: 4.5vw;
  border-radius: 0.5vw;
  color: #fff;
  font: 1vw / 3vw "微软雅黑";
  margin: 1vw auto;
}
.Popup > em:first-of-type {
  background: #2ba246 url("../assets/img/weChart.png") 1.5vw no-repeat;
}
.Popup > em:last-of-type {
  background: #01aaef url("../assets/img/Alipay.png") 1.5vw no-repeat;
}
</style>