<template>
  <div class="breadcrumb">
    <el-menu class="breadcrumb-box" mode="horizontal">
      <hamburger
        class="hamburger-container"
        :toggleClick="toggleSideBar"
        :isActive="sidebar.opened"
      ></hamburger>
      <breadcrumb></breadcrumb>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.breadcrumb {
  height: 60px;
  background-color: #F0F3F7;
  .breadcrumb-box {
    height: 50px;
    width: 100%;
    line-height: 50px;
    border-radius: 0px !important;
    border-bottom: none;
    background-color: #fff;
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .screenfull {
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    }
  }
}
</style>

