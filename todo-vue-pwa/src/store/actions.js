export default {
  increase: ({commit}, payload) => {
    commit('mutateIncrease', payload)
  },
  decrease: ({commit}, payload) => {
    commit('mutateDecrease', payload)
  }
}
