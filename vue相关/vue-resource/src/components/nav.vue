<template>
  <div class="nav">
    <el-button type="text" class="collapse-btn"
               @click="changeCollapse">{{isCollapse?'展开':'收起'}}</el-button>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="text"
                          :to="{ path: '/' }">首页</el-breadcrumb-item>

    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse
      this.$store.commit('changeCollapse', this.isCollapse)
    }
  }
}
</script>

<style lang="scss">
.nav {
  display: flex;
  .text {
    height: 56px;
    line-height: 56px;
  }
  .collapse-btn {
    margin-right: 10px;
  }
}
</style>
