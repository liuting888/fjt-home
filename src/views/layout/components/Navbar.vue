<template>
  <el-menu
    class="navbar"
    mode="horizontal"
  >
    <div class="fj-title">
      <img
        src="./../../../images/辅警通logo@2x.png"
        alt="辅警通"
      >
      <!-- <h1>辅警通</h1> -->
    </div>
    <div class="user-info">
      <el-link
        type="primary"
        :underline="false"
      >首页</el-link>
      <el-link :underline="false">产品方案</el-link>
      <el-link :underline="false">相关案例</el-link>
      <el-link :underline="false">辅警社区</el-link>
      <el-link :underline="false">服务与支持</el-link>
      <el-link :underline="false">关于我们</el-link>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import { getToken, removeToken } from "@/utils/auth";

export default {
  data() {
    return {
      userInfo: getToken() //用户信息
    };
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    logout() {
      removeToken();
      this.$router.push("/login");
      // this.$store.dispatch("LogOut").then(() => {
      //   location.reload(); // 为了重新实例化vue-router对象 避免bug
      // });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  position: fixed;
  height: 80px;
  width: 100%;
  line-height: 80px;
  border-radius: 0px !important;
  z-index: 1001;
  .fj-title {
    float: left;
    margin-left: 20px;
    h1 {
      display: inline-block;
      margin-left: 15px;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.85);
    }
    img {
      width: 120px;
      margin-top: -6px;
      margin-left: 20px;
      vertical-align: middle;
    }
  }
  .user-info {
    float: right;
    margin-right:80px;
    cursor: pointer;
    el-link {
      width: 35px;
      height: 25px;
      margin-left: 20px;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      opacity: 1;
    }
    el-link:first-child {
      color: rgba(25, 128, 255, 0.85);
    }
  }
}
</style>

