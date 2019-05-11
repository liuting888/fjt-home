<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div class="app-container index">
    <div class="top">
      <!-- <img src="./../../images/290商务办公画板 1-100@2x.png" alt=""> -->
      <img src="./../../images/index.jpg" alt="">
    </div>
    <div class="body"></div>
    <div class="footer"></div>
</div>
</template>
<script>
// import echarts from "echarts";
// import axios from "axios";
// import Highcharts from "highcharts";
// import Highmaps from "highcharts/modules/map";
// import drilldown from "highcharts/modules/drilldown";
// import Exporting from "highcharts/modules/exporting";
// import { getToken } from "@/utils/auth";
// import { getIndexPage, getIndexPageCityData } from "@/api/index";
// Highmaps(Highcharts);
// drilldown(Highcharts);
// Exporting(Highcharts);

export default {
  name: "",
  data() {
    return {
      userInfo: "", //用户信息
      list: {},
      CityData: [], //地图城市数据
    };
  },
  methods: {
    //获取首页信息
    getIndexPage() {
      let vm = this;
    },
  },
  //调用
  mounted() {
    // this.$nextTick(function() {
    //   this.getIndexPage();
    // });
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.index {
  background-color: #fff;
  .top {
    // display: flex;
    // flex-direction: row;
    img{
      width: 100%;
    }
  }

}
</style>
