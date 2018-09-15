import Vue from 'vue'
import Vuex from 'vuex'
import navigator from './modules/navigator'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  modules: {
    navigator
  }
})

export default store
