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
};
