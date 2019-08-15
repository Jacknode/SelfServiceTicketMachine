<template>
  <div id="wrap">
    <header>
      <div class="logoBox"></div>
      <div class="stepBox">
        <ul class="stepList">
          <li
            v-for="(item, index) in stepList"
            :class="{active: index == stepIndex}"
            :key="index"
          >{{item.label}}</li>
        </ul>
      </div>
      <div class="backBox">
        <a href="javascript:;" @click.stop="goBack">返回</a>
      </div>
    </header>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      stepIndex: 0,
      stepList: [
        {
          label: "1.查询车票"
        },
        {
          label: "2.选择购票"
        },
        {
          label: "3.提交订单"
        },
        {
          label: "4.付款出票"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    //返回
    goBack() {
      this.$router.go(-1);
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
  padding: .5vw;
  z-index: 2;
  overflow: hidden;
}

header > * {
  float: left;
  height: 100%;
}

.logoBox {
  width: 25%;
}

.stepBox {
  width: 55%;
  padding: .5vw 0;
}

.stepBox li {
  float: left;
  width: 25%;
  text-align: center;
  clip-path: polygon(0 0, 12vw 0, 100% 50%, 12vw 100%, 0 100%);
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.stepList {
  font: 1.5vw/3vw "微软雅黑";
  color: #c1ffff;
  background-color: #0000ba;
  overflow: hidden;
  clip-path: polygon(0 0, 53vw 0, 100% 50%, 53vw 100%, 0 100%);
}

.stepBox li.active {
  background-color: #c1ffff;
  color: #0000ba;
}

.backBox {
  width: 20%;
  font: 2vw/2 "微软雅黑";
  overflow: hidden;
}

.backBox a {
  color: #fff;
  background-color: #2bbbff;
  float: right;
  padding: 0 2vw;
  border-radius: .5vw;
}

section {
  padding-top: 5vw;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
</style>