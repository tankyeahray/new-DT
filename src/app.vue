<template>
  <div id="app">

    <!-- 左侧菜单 -->
    <left-menu></left-menu>

    <!-- 头部 -->
    <top-header></top-header>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftMenu from './common/left-menu.vue';
import topHeader from './common/top-header.vue';

export default {
  name: 'app',
  components: {
    leftMenu,
    topHeader
  }
}
</script>