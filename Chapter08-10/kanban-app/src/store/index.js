import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vue.Store({
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
