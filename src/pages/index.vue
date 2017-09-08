<template>

  <div>
    <transition name="el-zoom-in-center">
      <div class="msg">{{ msg }}</div>
    </transition>
    <div class="msg">{{ txt }}</div>
    <el-button type="primary" @click="reverse()">翻转文字</el-button>
  </div>

</template>

<script>
  export default {
    computed: {
      msg() {
        return this.$store.state.index.msg;
      },
      txt() {
        return this.$store.state.index.txt;
      },
    },
    methods: {
      reverse() {
        this.$store.dispatch('reverse');
      }
    }
  }
</script>

<style lang="less">
  .msg{
    width: 200px;
    height: 50px;
    background: #20A0FF;
    color: #fff;
    text-align: center;
    line-height: 50px;
    margin: 20px;
    border-radius: 5px;
  }
</style>
