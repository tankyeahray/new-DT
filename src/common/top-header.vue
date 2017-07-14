<template>

  <div class="top-header">
    <el-row type="flex" justify="center">
      <el-col :span="3">
        <div class="left" >
        <i class="el-icon-share">top-left</i>
        </div>
      </el-col>
      <el-col :span="21">
        <div>top-right</div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style lang="less">
  .top-header{
    min-height: 50px;
    background: #20A0FF;
    .left{
      background: #1D8CE0;
      height: 50px;
    }
  }
</style>