import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    infoFlowShow: false,
    skill6Show: true,
    token: ''
  },
  mutations: {
    showInfoFlow (state) {
      state.infoFlowShow = true
      state.skill6Show = false
    },
    showSkill6 (state) {
      state.infoFlowShow = false
      state.skill6Show = true
    },
    setToken (state, token) {
      state.token = token
      localStorage.token = token
    },
    logout (state) {
      state.token = ''
      localStorage.clear()
    }
  },
  getters: {
    getToken: state => {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }

      return state.token
    },
    isLogin: state => {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }

      return state.token !== '' && state.token !== null
    }
  }
})

export default store
