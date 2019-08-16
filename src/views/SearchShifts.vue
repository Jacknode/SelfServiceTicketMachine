<template>
  <div id="wrap">
    <header>
      <div class="dateList">
        <a href="javascript:;" class="last"></a>
        <div>
          <span>今天</span>
          <span>08-14</span>
          <span>08-15</span>
          <span>08-16</span>
        </div>
        <a href="javascript:;" class="next"></a>
      </div>
      <p>一段描述文字吧！！！！</p>
    </header>
    <section>
      <ul class="shiftsList">
        <li v-for="(item, index) in 3" :key="index">
          <span class="time">08:20</span>
          <span class="startAddress">南溪客运站东</span>
          <span class="reachIcon">
            <em>到</em>
            <i></i>
          </span>
          <span class="endAddress">泸州商贸城客运站西</span>
          <span class="payMoney">￥90</span>
          <span class="ticketDetails">
            <em>余票 37 张</em>
            <em>儿童 0 张</em>
          </span>
          <span class="payBtn" @click="payBtn">购买</span>
        </li>
      </ul>
      <!-- 分页 -->
      <div class="paging">
        <a href="javascript:;" class="lastPage">上一页</a>
        <span>1/2</span>
        <a href="javascript:;" class="nextPage">下一页</a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "SearchShifts",
    data() {
      return {};
    },
    created() {
    },
    mounted() {
    },
    methods: {
      payBtn(){
        this.$router.push({name:'Notice'})
      }
    }
  };
</script>

<style scoped>
  #wrap {
    width: 100%;
    height: 100%;
    background-color: #c1ffff;
    padding: 1vw;
    overflow-y: auto;
    overflow-x: hidden;
  }

  header {
    margin-bottom: 1vw;
  }

  .dateList {
    background-color: #1fd2ff;
    padding: 1vw 2vw;
    overflow: hidden;
  }

  .dateList a {
    float: left;
    width: 4vw;
    height: 4vw;
    background-color: #0064b2;
    border-radius: 50%;
    text-align: center;
    padding-top: 0.75vw;
  }

  .dateList > div {
    float: left;
    width: 86vw;
    padding: 0.5vw 2vw;
    font: 2vw/3vw "微软雅黑";
  }

  .dateList > div span {
    float: left;
    color: #fff;
    margin-right: 0.5vw;
    padding: 0 3vw;
    border-radius: 1.5vw;
    cursor: pointer;
  }

  .dateList > div span.active {
    background-color: #fff;
    color: #1fd2ff;
  }

  .dateList .last::before {
    display: inline-block;
    content: "";
    width: 1.5vw;
    height: 2.5vw;
    background-color: #fff;
    clip-path: polygon(0 50%, 80% 0, 100% 0, 20% 50%, 100% 100%, 80% 100%);
    vertical-align: top;
  }

  .dateList .next::before {
    display: inline-block;
    content: "";
    width: 1.5vw;
    height: 2.5vw;
    background-color: #fff;
    clip-path: polygon(0 0, 20% 0, 100% 50%, 20% 100%, 0 100%, 80% 50%);
    vertical-align: top;
  }

  header > p {
    font: 2vw/2 "微软雅黑";
    background-color: #fbfff3;
    padding: 0 2vw;
    color: #dc3300;
  }

  .shiftsList li {
    padding: 1vw 0;
    color: #444;
  }

  .shiftsList span {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }

  .time,
  .reachIcon,
  .payMoney {
    width: 9vw;
  }

  .time,
  .payMoney {
    font: 2.5vw/3vw "微软雅黑";
  }

  .reachIcon {
    padding: 0.5vw;
    font: 1.5vw/2vw "微软雅黑";
    margin-top: -2vw;
  }

  .reachIcon em {
    display: block;
  }

  .reachIcon i {
    display: block;
    height: 1vw;
    background-color: #333;
    clip-path: polygon(0 80%, 80% 80%, 70% 0, 100% 100%, 0 100%);
    margin-top: -.5vw;
  }

  .startAddress,
  .endAddress {
    width: 25vw;
    font: 2vw/2.5vw "微软雅黑";
  }
  .ticketDetails {
    width: 12vw;
  }

  .ticketDetails em {
    display: block;
    text-align: center;
    font: 1.5vw/2.5vw "微软雅黑";
  }

  .payBtn {
    width: 9vw;
    font: 1.9vw/4vw "微软雅黑";
    background-color: #ccc;
    border-radius: 2vw;
    color: #fff;
    background-color: #0064b2;
    cursor: pointer;
  }

  .paging {
    text-align: center;
    margin-top: 6vw;
    font: 3vw/2 "微软雅黑";
  }

  .paging span {
    display: inline-block;
    vertical-align: middle;
    margin: 0 2vw;
    color: #666;
  }

  .paging a {
    display: inline-block;
    vertical-align: middle;
    padding: 0 3vw;
    color: #fff;
    background-color: #0064b2;
    border-radius: .5vw;
  }
  
  .paging a:active {
    background-color: #00ccff;
  }
</style>