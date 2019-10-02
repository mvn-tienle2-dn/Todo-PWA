export default {
  increase: ({commit}: any, payload: any) => {
    commit('mutateIncrease', payload);
  },
  decrease: ({commit}: any, payload: any) => {
    commit('mutateDecrease', payload);
  },
  addTodo: ({commit}: any, payload: any) => {
    commit('addTodo', payload);
  },
  changeFilter: ({commit}: any, payload: any) => {
    commit('applyFilter', payload);
  },
  markDone: ({commit}: any, payload: any) => {
    commit('markDone', payload);
  },
  delTodo: ({commit}: any, payload: any) => {
    commit('delTodo', payload);
  },
  delComplete: ({commit}: any, payload: any) => {
    commit('delComplete', payload);
  },
};
