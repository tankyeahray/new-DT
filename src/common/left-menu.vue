<template>
  <div class="left-menu">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '首页'
        },
        {
          label: '表格'
        },
        {
          label: '跑马灯'
        },
        {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
        switch(data.label) {
          case '首页':
            this.$router.replace('/');
            break;
          case '表格':
            this.$router.replace('/table');
            break;
          case '跑马灯':
            this.$router.replace('/carousel');
            break;
          default:
            this.$router.replace('/index');
            break;
        }
      }
    }
  };
</script>

<style lang="less">

</style>
