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
  countCompleted: (state: {todos: any; filter: any}) => {
    const completed = state.todos.filter((todo: any) => todo.status === 'done');
    return completed.length;
  },
};
