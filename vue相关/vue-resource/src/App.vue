<template>
  <div id="app">
    <h1>{{test}}</h1>
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
      test: 'zd'
    }
  },
  computed: {
    ...mapState(['navigator']),
    mgLeft () {
      return this.navigator.isCollapse ? '64px' : this.navigator.unCollapseWidth
    }
  },
  beforeCreate () {
    console.log('beforeCreate', this)
  },
  created () {
    console.log('created', this)
  },
  beforeMount () {
    console.log('beforeMount', this)
  },
  mounted () {
    console.log('mounted', this)
  },
  beforeUpdate () {
    console.log('beforeUpdate', this)
  },
  updated () {
    console.log('updated', this)
  }

}
</script>

<style>
body {
  background-color: #f2f2f2;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
