import { State } from './state';

export default {
  mutateIncrease: (state: { counter: number; }, payload: any) => {
    state.counter++;
  },
  mutateDecrease: (state: { counter: number; }, payload: any) => {
    state.counter--;
  },
  addTodo: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    state.todos.unshift({
      id: Math.random().toString(32).replace('0.', ''),
      content: payload,
      status: 'notdone',
    });
  },
  changeStatus: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    const todo = state.todos.find((value: any) => value.id === payload);
    if (todo) {
      if (todo.status === 'done') {
        return todo.status = 'notdone';
      } else {
        return todo.status = 'done';
      }
    }
  },
  removeTodo: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    state.todos = state.todos.filter((todo) => {
      return todo.id !== payload;
    });
  },
  removeCompleted: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    state.todos = state.todos.filter((todo) => {
      return todo.status !== 'done';
    });
  },
  applyFilter: (state: { filter: any; }, payload: any) => {
    state.filter = payload;
  },
};
