export default {
  addTodo: ({commit}: any, payload: any) => {
    commit('addTodo', payload);
  },
  markDone: ({commit}: any, payload: any) => {
    commit('setDone', payload);
  },
  changeFilter: ({commit}: any, payload: any) => {
    commit('applyFilter', payload);
  },
  increase: ({commit}: any, payload: any) => {
    commit('mutateIncrease', payload);
  },
  decrease: ({commit}: any, payload: any) => {
    commit('mutateDecrease', payload);
  },
};
