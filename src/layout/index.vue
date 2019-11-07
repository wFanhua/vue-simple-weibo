<template>
  <el-container class="layout">
    <el-header height="auto" class="layout__hd">
      <nav-bar class="layout__nav"/>
    </el-header>
    <el-main class="layout__bd">
      <router-view></router-view>
    </el-main>
    <!-- <el-footer class="layout__ft">Footer</el-footer> -->
  </el-container>
</template>

<script>
import NavBar from './components/navBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
  .layout {
    background-color: #F4F5F5;
    &__nav {
      max-width: 960px;
      margin: auto;
    }
    &__hd {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f1f1f1;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }

    &__bd {
      position: relative;
      margin-top: 70px;
      max-width: 960px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding: 0;
    }
  }
</style>
