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
  removeTodo: ({commit}: any, payload: any) => {
    commit('removeTodo', payload);
  },
  changeFilter: ({commit}: any, payload: any) => {
    commit('applyFilter', payload);
  },
};
