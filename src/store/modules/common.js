import types from '../types.js'

// 恢复Vuex 相应模块里面的数据
// const data = (sessionStorage.getItem('common') && JSON.parse(sessionStorage.getItem('common'))) || {}
const data = JSON.parse(sessionStorage.getItem('common'))

const state = {
  userInfo: data && data.userInfo || '',
}

const getters = {
  userInfo: state => {
    return state.userInfo;
  },
}

const actions = {
  getUserInfo({ commit }, userInfo) {
    commit(types.USERINFO, userInfo);
  },
}

const mutations = {
  [types.USERINFO](state, userInfo) {
    state.userInfo = userInfo;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}