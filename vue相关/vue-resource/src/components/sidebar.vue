<template>
  <div class="sidebar"
       :style="{width:sidebarWidth}">
    <el-menu default-active="2"
             :collapse="navigator.isCollapse"
             @select="jumpTo"
             @open="open"
             @close="close"
             class="el-menu-vertical-demo"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>页面</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item v-for="(item,i) of navigator.menuList"
                        :key="i"
                        :index="item[0]">{{item[1]}}</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3"
                    disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import { menu } from '../router'
export default {
  name: 'Sidebar',
  computed: {
    ...mapState(['navigator']),
    // menuList () {
    //   return [...menu.entries()]
    // },
    sidebarWidth () {
      return this.navigator.isCollapse ? '' : '200px'
    }
  },
  methods: {
    jumpTo (p) {
      this.$router.push({ name: p })
      let index = this.navigator.menuList.findIndex(ite => ite[0] === p)
      this.addToActiveMenus(index)
    },
    open () {
      console.log('open')
      // this.$store.commit('')
    },
    close () {
      console.log('close')
    },
    ...mapMutations(['addToActiveMenus'])
  },
  mounted () {

  }
}
</script>

<style lang='scss'>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  // display: inline;
  background-color: rgb(84, 92, 100);
  .el-menu {
    border-right: none;
  }
}
</style>
