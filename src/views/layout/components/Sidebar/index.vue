<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#409EFF"
    >
      <!-- <img src="./../../../../images/fj-sider-bg.png" alt class="menu-img"> -->
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import Hamburger from "@/components/Hamburger";

export default {
  components: { SidebarItem, Hamburger },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    }
  }
};
</script>
<style scope>
.menu-img {
  position: absolute;
  top: 0;
  height: 100%;
}
.el-menu-item:focus,
.el-menu-item:hover {
  color: #409EFF !important;
}
</style>


