import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: {
      name: window.localStorage.getItem('userinfo' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('userinfo' || '[]')).name
    }
  },
  mutations: {
    login (state, userinfo) {
      state.userinfo = userinfo
      window.localStorage.setItem('userinfo', JSON.stringify(userinfo))
    }
  }
})
