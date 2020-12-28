import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryList: {
      list1: [1,2,3,4,5,6,7,8,9],
      list2: [10,11,12,13,14,15,16,17,18,19],
      list3: [20,21,22,23,24,25,26,27,28,29]
    }
  },
  mutations: {
    updateList() {
      
    }
  },
  actions: {
  },
  modules: {
  }
})
