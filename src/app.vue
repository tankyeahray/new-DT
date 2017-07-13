<template>
  <div id="app">
    <left-menu></left-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import leftMenu from './common/left-menu.vue';

export default {
  name: 'app',
  components: {
    leftMenu
  }
}
</script>