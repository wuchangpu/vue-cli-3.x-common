import Vue from 'vue'
import Vuex from 'vuex'

// 公共getters，actions，mutations
import getters from './getters'
import actions from './getters'
import mutations from './getters'

// module
import common from './modules/common'

// 把vuex数据缓存到sessionStorage
import plugins from './sessionPlugin'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins,
  getters,
  actions,
  mutations,
  modules: {
    common,
  },
})

export default store