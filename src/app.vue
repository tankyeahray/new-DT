<template>
  <div id="app">

    <!-- 头部 -->
    <el-row>
      <el-col :span="24">
        <top-header></top-header>
      </el-col>
    </el-row>

    <el-row class="left-menu">

      <!-- 左侧菜单 -->
      <el-col :span="3">
        <left-menu></left-menu>
      </el-col>

      <el-col :span="21">
        <el-row>

          <!-- 路由 -->
          <el-col :span="24">
            <router-view></router-view>
          </el-col>

          <el-col :span="24">
            <footer-msg></footer-msg>
          </el-col>

        </el-row>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import leftMenu from './common/left-menu.vue';
import topHeader from './common/top-header.vue';
import footerMsg from './common/footerMsg.vue';

export default {
  name: 'app',
  components: {
    leftMenu,
    topHeader,
    footerMsg
  }
}
</script>

<style lang="less">
  html, body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app{
    min-height: 100%;
    .left-menu{
      height: 100%;
    }
  }
</style>
