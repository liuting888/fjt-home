<template>
  <div class="app-container index">
    <div class="top">
      <img src="./../../images/bigbac.png" alt>
    </div>
    <div class="body">
      <div class="main-top divs">
        <div class="fl">
          <h2>辅警社区</h2>
          <p class="user">
            已有
            <span>256629</span>人加入
          </p>
          <p class="info">打造国内最大辅警社区，为广大辅警提供一个相互交流学习的家园。齐心协力，共建和谐社会。</p>
          <p>
            <el-button type="primary">立即体验</el-button>
          </p>
        </div>
        <div class="fr">
          <img src="./../../images/1.png" alt>
        </div>
      </div>
      <div class="main-center divs">
        <div class="center-back"></div>
        <div class="fl">
          <img src="./../../images/2.png" alt>
        </div>
        <div class="fl right">
          <h2>辅警通APP</h2>
          <p class="user">做你聪明的秘书，让警务协作更轻松</p>
          <p class="info">一款专门为辅警工作而设计的高效率APP</p>
          <p>
            <el-button type="primary">了解更多</el-button>
          </p>
        </div>
      </div>
      <div class="total">
        <div class="yuan">
          <div>4,933</div>
          <p>日均访问量（次数）</p>
        </div>
        <div class="yuan">
          <div>1,707</div>
          <p>日均在线人数</p>
        </div>
        <div class="yuan">
          <div>1,589,439</div>
          <p>访问总量（次）</p>
        </div>
        <div class="yuan">
          <div>6,812,661</div>
          <p>总数据量（条）</p>
        </div>
      </div>
      <div class="main-bottom divs">
        <div class="fl">
          <h2>相关案例</h2>
          <p class="user">邵阳市公安局</p>
          <p class="info">2017年9月：四区县试运行；</p>
          <p class="info">2018年4月：全市投入使用。</p>
          <p>
            <el-button type="primary">了解更多</el-button>
          </p>
        </div>
        <div class="fr">
          <img src="./../../images/3.png" alt>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-top">
        <div class="fl footer-left">
          <div class="fl footer-left-right">
            <div class="top">
              <img src="./../../images/Phootoshop_Logo@2x.png" alt>
            </div>
            <div class="center">辅警通</div>
            <div class="bottom">让警务协作更轻松</div>
          </div>
          <div class="fr">
            <p class="user">联系我们</p>
            <p class="user">长沙公信诚丰信息技术服务有限公司</p>
            <p class="info">电话：0731-8951 0000</p>
            <p class="info">Email：fujing@csgxcf.com</p>
            <p class="info">地址：湖南省长沙市岳麓区麓谷企业广场F4栋14楼</p>
          </div>
        </div>
        <div class="fr footer-right">
          <div class="fr">
            <div class="top">
              <img src="./../../images/wx1.png" alt>
            </div>
            <div class="center">辅警通APP</div>
          </div>
          <div class="fr">
            <div class="top">
              <img src="./../../images/wx2.png" alt>
            </div>
            <div class="center">客服微信</div>
          </div>
          <div class="fr">
            <div class="top">
              <img src="./../../images/wx3.png" alt>
            </div>
            <div class="center">微信公众号</div>
          </div>
          <!-- <img
            src="./../../images/1.png"
            alt=""
          >-->
        </div>
      </div>
      <div class="footer-bottom">
        <div>
          <span>站点导航</span>
          <span>中华人民共和国公安部</span>
          <span>湖南省公安厅</span>
          <span>湘警网</span>
          <span>邵阳市公安局</span>
          <span>邵阳市公安局</span>
          <span>邵阳市公安局</span>
        </div>
        <p>Copyright © 2016 - 2026 All Rights Reserved 公信诚丰信息技术服务有限公司</p>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
// import { getToken } from "@/utils/auth";
// import { getIndexPage, getIndexPageCityData } from "@/api/index";

export default {
  name: "",
  data() {
    return {
      userInfo: "", //用户信息
      list: {},
      CityData: [] //地图城市数据
    };
  },
  methods: {
    //获取首页信息
    getIndexPage() {
      let vm = this;
    }
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
    img {
      width: 100%;
    }
  }
  .body {
    padding: 0;
    .divs {
      height: 520px;
    }
    .main-top {
      .fl {
        width: 330px;
        margin-top: 129px;
        margin-left: 147px;
        h2 {
          font-size: 40px;
          line-height: 55px;
          color: rgba(0, 0, 0, 0.9);
        }
        .user {
          font-size: 20px;
          line-height: 28px;
          color: rgba(0, 0, 0, 0.8);
          span {
            color: #1980ff;
          }
        }
        .info {
          font-size: 12px;
          font-weight: 300;
          line-height: 19px;
          color: rgba(0, 0, 0, 0.75);
        }
        p {
          margin-top: 8px;
        }
      }
      .fr {
      }
      img {
        width: 733px;
        margin-top: 78px;
      }
    }
    .main-center {
      position: relative;
      height: 440px;
      margin-bottom: 40px;
      .center-back {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 1159px;
        height: 373px;
        background: rgba(242, 245, 248, 1);
      }
      .right{
        top:80px;
        left: 480px;
      }
      .fl {
        position: absolute;
        width: 330px;
        // margin-top: 129px;
        margin-left: 213px;
        z-index: 100;
        h2 {
          margin-top: 100px;
          font-size: 40px;
          line-height: 55px;
          color: rgba(0, 0, 0, 0.9);
        }
        .user {
          font-size: 20px;
          line-height: 28px;
          color: rgba(0, 0, 0, 0.8);
          span {
            color: #1980ff;
          }
        }
        .info {
          font-size: 12px;
          font-weight: 300;
          line-height: 19px;
          color: rgba(0, 0, 0, 0.75);
        }
        p {
          margin-top: 8px;
        }
      }
      img {
        width: 387px;
      }
    }
    .main-bottom {
      .fl {
        width: 330px;
        margin-top: 129px;
        margin-left: 147px;
        h2 {
          font-size: 40px;
          line-height: 55px;
          color: rgba(0, 0, 0, 0.9);
        }
        .user {
          font-size: 20px;
          line-height: 28px;
          color: rgba(0, 0, 0, 0.8);
          span {
            color: #1980ff;
          }
        }
        .info {
          font-size: 12px;
          font-weight: 300;
          line-height: 19px;
          color: rgba(0, 0, 0, 0.75);
        }
        p {
          margin-top: 8px;
          // .el-button--primary {
          //   width: 133px;
          //   height: 33px;
          //   background: rgba(25, 128, 255, 1);
          // }
        }
      }
      .fr {
        margin-right: 121px;
      }
      img {
        width: 656px;
      }
    }
  }
  .footer {
    height: 370px;
    background: rgba(242, 245, 248, 1);
    .footer-top {
      height: 240px;
      overflow: hidden;
      .footer-left {
        margin-top: 45px;
        margin-left: 147px;
        margin-right: 67px;
        .footer-left-right {
          margin-right: 40px;
          text-align: center;
          .top {
            img {
              width: 87px;
            }
          }
          .center {
            margin-top: 4px;
            text-align: center;
            font-size: 24px;
            font-weight: 400;
            line-height: 33px;
            color: rgba(0, 0, 0, 0.85);
          }
          .bottom {
            margin-top: 4px;
            text-align: center;
            font-size: 12px;
            font-weight: 400;
            line-height: 15px;
            color: rgba(0, 0, 0, 0.65);
          }
        }

        .user {
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          color: rgba(0, 0, 0, 0.85);
        }
        .info {
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
          color: rgba(0, 0, 0, 0.65);
        }
        p {
          margin-top: 8px;
        }
      }
      .footer-right {
        margin-top: 45px;
        margin-right: 94px;
        .fr {
          width: 177px;
          text-align: center;
          font-size: 16px;
          line-height: 22px;
          color: rgba(0, 0, 0, 0.85);
          img {
            width: 133px;
          }
        }
      }
    }
    .footer-bottom {
      height: 130px;
      background: rgba(2, 16, 31, 1);
      text-align: center;
      div {
        font-size: 13px;
        font-weight: 400;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.9);
        span {
          display: inline-block;
          margin: 40px;
          cursor: pointer;
        }
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 13px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  .total {
    display: flex;
    flex-direction: row;
    .yuan {
      width: 25%;
      text-align: center;
      div {
        display: inline-block;
        width: 120px;
        height: 112px;
        line-height: 112px;
        text-align: center;
        font-size: 24px;
        font-weight: 500;
        color: rgba(25, 128, 255, 1);
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(25, 128, 255, 1);
        border-radius: 50%;
        opacity: 1;
      }
      p {
        width: 100%;
        height: 40px;
        margin-bottom: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        color: rgba(0, 0, 0, 0.65);
        opacity: 1;
      }
    }
  }
  p {
    .el-button--primary {
      width: 133px;
      background: rgba(25, 128, 255, 1);
    }
  }
}

.fl {
  float: left;
}
.fr {
  float: right;
}
</style>
