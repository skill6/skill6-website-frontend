import Vuex from 'vuex'

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
    }
  },
  getters: {
    getToken (state) {
      if (state.token) {
        state.token = localStorage.getItem('token')
      }

      return state.token
    }
  }
})

export default store
