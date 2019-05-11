<template>
  <el-menu class="navbar" mode="horizontal">
    <div class="fj-title">
      <img src="./../../../images/logo.png" alt="辅警社区">
      <h1>辅警社区</h1>
    </div>
    <div class="user-info">
      <!-- {{userInfo.name}} -->
      <span class="separator">|</span>邵阳市公安局
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import { getToken,removeToken } from '@/utils/auth'

export default {
    data() {
    return {
      userInfo:getToken(),//用户信息
    };
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    logout() {
      removeToken();
      this.$router.push('/login');
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
      margin-top: -6px;
      vertical-align: middle;
    }
  }
  .user-info {
    float: right;
    margin-right: 100px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    cursor: pointer;
    .separator {
      margin: 0px 6px;
      color: rgba(0, 0, 0, 0.15);
    }
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

