<template>
  <div id="app">
    <Sidebar/>
    <div class="main"
         :style="{marginLeft:mgLeft}">
      <Nav></Nav>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar'
import Nav from './components/nav'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Sidebar, Nav
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['navigator']),
    mgLeft () {
      return this.navigator.isCollapse ? '64px' : '200px'
    }
  },
  created () {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#app > .main {
  padding: 0 10px;
}
</style>
