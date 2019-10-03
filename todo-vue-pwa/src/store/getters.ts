export default {
  counter: (state: { counter: any; }) => {
    return state.counter;
  },
  todoList: (state: { todos: any; filter: any}) => {
    const { todos, filter } = state;
    return todos.filter((todo: {status: any}) => {
      if (!filter) {
        return true;
      }
      return todo.status === filter;
    });
  },
  totalActive: (state: { todos: any; filter: any }) => {
    const { todos, filter } = state;
    const todosActive = state.todos.filter((todo: any) => {
      if (!filter) {
        return true;
      }
      return todo.status === filter;
    });
    return todosActive.length;
  },
};
