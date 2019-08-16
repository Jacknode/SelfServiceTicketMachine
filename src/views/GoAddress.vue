<template>
  <div id="wrap">
    <!--选择目的地-->
    <div class="changeAddress" v-if="!dateShow">
      <strong>到达目的地</strong>
      <!--目的地列表-->
      <ul class="addressList">
        <li
          v-for="(item, index) in addressList"
          :class="{active: index == addressIndex}"
          :key="index"
        >{{item}}</li>
      </ul>
      <!--搜索框-->
      <div class="searchBox">
        <i></i>
        <div>
          <input type="text" placeholder="输入查询站点" v-model="seachCon" />
        </div>
      </div>
      <!--键盘区-->
      <div class="keyboardBox">
        <ul class="keyboardList">
          <li v-for="(item, index) in keyboardList" :key="index">{{item}}</li>
          <li>删除</li>
        </ul>
      </div>
    </div>
    <!--查询日期-->
    <div class="changeDate" v-if="dateShow">
      <div class="weekList">
        <span>日</span>
        <span>一</span>
        <span>二</span>
        <span>三</span>
        <span>四</span>
        <span>五</span>
        <span>六</span>
      </div>
      <div class="dateBox">
        <div class="switchMonth">
          <a href="javascript:;" class="last">
            <i></i>
          </a>
          <strong>2019-08-13</strong>
          <a href="javascript:;" class="next">
            <i></i>
          </a>
        </div>
        <ul class="dateList">
          <li v-for="(item, index) in 42" :key="index">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!--查询列表-->
    <div class="changePoint">
      <div class="startPoint">
        <strong>起点</strong>
        <p>泸州</p>
      </div>
      <div class="changeTime">
        <strong>终点</strong>
        <p>
          南溪
          <a href="javascript:;" @click="onData" v-show="dateShow">修改</a>
        </p>
      </div>
      <div class="changeTime">
        <strong>时间</strong>
        <p>
          2019-08-14
          <a href="javascript:;" @click="onData" v-show="!dateShow">查询</a>
        </p>
      </div>
      <div class="searchSubmit">
        <a href="javascript:;" @click.stop="goSearchShifts">确 认 查 询</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoAddress",
  data() {
    return {
      addressList: [
        "成都",
        "泸州",
        "广元",
        "长宁",
        "昆明",
        "水清",
        "铁青",
        "广福",
        "江安",
        "宜宾",
        "成都",
        "泸州",
        "广元",
        "长宁",
        "昆明",
        "水清"
      ],
      seachCon: "CDDDD",
      keyboardList: [
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M"
      ],
      addressIndex: 0,
      dateShow: false,
    };
  },
  created() { },
  mounted() { },
  methods: {
    //查询班次
    goSearchShifts() {
      this.$router.push({ name: "SearchShifts" });
    },
    //切换日期
    onData() {
      this.dateShow = !this.dateShow;
    }

  }
};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100%;
  padding: 1.5vw;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #c1ffff;
}

.changeAddress {
  float: left;
  width: 68vw;
}

.changeAddress > strong {
  display: block;
  font: 1.6vw/2.5vw "微软雅黑";
  color: #333;
  padding-left: 0.5vw;
  margin-bottom: 0.5vw;
}

.addressList {
  overflow: hidden;
  font: 2vw/4vw "微软雅黑";
  height: 21.6vw;
}

.addressList li {
  float: left;
  margin: 0.5vw;
  width: 16vw;
  border: 0.2vw solid #99cccc;
  border-radius: 0.5vw;
  padding: 0 0.5vw;
  text-align: center;
  color: #005cce;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.addressList li.active {
  background-color: #0000ba;
  color: #c1ffff;
  border-color: #0000ba;
}

.searchBox {
  border: 0.2vw solid #699d9d;
  margin: 1vw 0.5vw;
  border-radius: 0.5vw;
  padding: 0.5vw;
  color: #333;
}

.searchBox i {
  float: left;
  width: 3vw;
  height: 3vw;
  background: url("../assets/img/search.png") no-repeat;
  background-size: 100% 100%;
}

.searchBox div {
  overflow: hidden;
}

.searchBox input {
  padding-left: 1vw;
  font: 2vw/3vw "微软雅黑";
  float: left;
  width: 100%;
}

.keyboardBox {
  padding-left: 0.5vw;
  color: #fff;
}

.keyboardList {
  overflow: hidden;
  font: 2vw/5.7vw "微软雅黑";
}

.keyboardList li {
  float: left;
  margin: 0.5vw;
  background-color: #005cce;
  width: 5.7vw;
  border-radius: 0.5vw;
  text-align: center;
  cursor: pointer;
}

.keyboardList li:active {
  background-color: #2bbbff;
}

.keyboardList li:nth-of-type(11) {
  margin-left: 3.7vw;
}

.keyboardList li:nth-of-type(20) {
  margin-left: 7.2vw;
}

.changePoint {
  float: right;
  width: 25vw;
  color: #666;
}

.changePoint > div {
  margin-bottom: 3vw;
}

.changePoint strong {
  display: block;
  font: 1.5vw/3vw "微软雅黑";
  padding-top: 0.5vw;
}

.changePoint p {
  font: 2.1vw/4vw "微软雅黑";
  border: 0.2vw solid #a1d6d6;
  padding: 0 1vw;
  border-radius: 0.5vw;
  overflow: hidden;
}

.startPoint p {
  background-color: #61daff;
}

.changeTime p {
  padding-right: 0;
}

.changeTime a {
  float: right;
  background: #0000ff;
  color: #fff;
  padding: 0 1vw;
}

.changePoint .searchSubmit {
  padding-top: 4vw;
  margin-bottom: 0;
}

.searchSubmit a {
  background-color: #fea000;
  color: #fff;
  border-radius: 0.5vw;
  display: block;
  text-align: center;
  font: 2vw/5vw "微软雅黑";
}

.changeDate {
  float: left;
  width: 68vw;
  padding: 0 4vw;
}

.weekList {
  border-bottom: 0.2vw solid #000;
  overflow: hidden;
  font: 3vw/4vw "微软雅黑";
}

.weekList span {
  float: left;
  width: 8.57vw;
  text-align: center;
  color: #333;
}

.switchMonth {
  padding-top: 1vw;
  overflow: hidden;
  font: 2.5vw/4vw "微软雅黑";
}

.switchMonth a:active {
  background-color: #2bbbff;
}

.switchMonth .last {
  float: left;
  width: 10vw;
  height: 4vw;
  text-align: center;
}

.switchMonth .last::before {
  display: inline-block;
  content: "";
  width: 1.5vw;
  height: 2.5vw;
  background-color: #0a8afb;
  margin-top: 0.75vw;
  clip-path: polygon(0 50%, 80% 0, 100% 0, 20% 50%, 100% 100%, 80% 100%);
  vertical-align: top;
}

.switchMonth strong {
  float: left;
  width: 40vw;
  text-align: center;
  color: #333;
}

.switchMonth .next {
  float: left;
  width: 10vw;
  height: 4vw;
  text-align: center;
}

.switchMonth .next::before {
  display: inline-block;
  content: "";
  width: 1.5vw;
  height: 2.5vw;
  background-color: #0a8afb;
  margin-top: 0.75vw;
  clip-path: polygon(0 0, 20% 0, 100% 50%, 20% 100%, 0 100%, 80% 50%);
  vertical-align: top;
}

.dateList {
  overflow: hidden;
}

.dateList li {
  float: left;
  width: 6.57vw;
  margin: 1vw;
  font: 2.5vw/4.5vw "微软雅黑";
  color: #fff;
}

.dateList span {
  display: block;
  margin: 0 auto;
  width: 4.5vw;
  height: 4.5vw;
  text-align: center;
  background-color: #005cce;
  border-radius: 0.5vw;
}

.dateList span.active {
  background: #fea000;
}
</style>