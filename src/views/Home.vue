<template>
  <div id="wrap">
    <header>
      <div class="logoBox"></div>
      <div class="inputBox"></div>
      <div class="dateBox">
        <span>2019-08-14 星期三 09:14</span>
      </div>
    </header>
    <section>
      <div class="bigImage"></div>
      <div class="ticketOperation">
        <a href="javascript:;" class="payTicket" @click.stop="buyCarTicket">
          <i></i>
          <em>买汽车票</em>
        </a>
        <a href="javascript:;" class="getTicket" @click="qupiao">
          <i></i>
          <em>取汽车票</em>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    //买汽车票
    buyCarTicket() {
      this.$router.push({ name: "GoAddress" });
    },
    qupiao() {
      this.$router.push({ name: "Brush" });
    }
  }
};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100%;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0016dc;
  height: 5vw;
  padding: 0.5vw;
  overflow: hidden;
}

header > * {
  float: left;
  height: 100%;
}

.logoBox {
  width: 25%;
}

.inputBox {
  width: 45%;
  background-color: #0000ba;
  border-radius: 2vw;
}

.dateBox {
  width: 30%;
  text-align: right;
  color: #fff;
  font: 2vw/2 "微软雅黑";
}

.dateBox span {
  display: block;
  white-space: pre-wrap;
}

section {
  padding-top: 5vw;
  width: 100%;
  height: 100%;
}

.bigImage {
  float: left;
  width: 70vw;
  height: 100%;
  background: url("../assets/img/homeBigBg.png") no-repeat;
  background-size: 100% 100%;
}

.ticketOperation {
  float: left;
  width: 30vw;
  height: 100%;
  background-color: #c1ffff;
  padding: 1.5vw;
  font: 2vw/3vw "微软雅黑";
  overflow-x: hidden;
  overflow-y: auto;
}

.ticketOperation a {
  display: block;
  color: #fff;
  padding: 3vw 0.9vw;
  text-align: center;
  margin-bottom: 1.5vw;
  border-radius: 1vw;
  font-size: 0;
}

.ticketOperation a * {
  display: inline-block;
}

.payTicket {
  background-color: #ff6600;
}

.getTicket {
  background-color: #00ba9e;
}

.ticketOperation em {
  font-size: 2.5vw;
  vertical-align: middle;
}

.ticketOperation i {
  margin-right: 0.5vw;
  width: 3vw;
  vertical-align: middle;
  height: 3vw;
}

.payTicket i {
  background: url("../assets/img/pay.png") no-repeat;
  background-size: 100% 100%;
}

.getTicket i {
  width: 2.7vw;
  background: url("../assets/img/ticket.png") no-repeat;
  background-size: 100% 100%;
}

.ticketOperation i {
  margin-right: 0.5vw;
  width: 3vw;
  vertical-align: middle;
  height: 3vw;
}
</style>