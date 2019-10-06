import { State } from './state';

export default {
  mutateIncrease: (state: { counter: number; }, payload: any) => {
    state.counter++;
  },
  mutateDecrease: (state: { counter: number; }, payload: any) => {
    state.counter--;
  },
  addTodo: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    state.todos.push({
      id: Math.random().toString(32).replace('0.', ''),
      content: payload,
      status: 'notdone',
    });
  },
  removeTodo: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    state.todos = state.todos.filter((todo) => {
      return todo.id !== payload;
    });
  },
  applyFilter: (state: { filter: any; }, payload: any) => {
    state.filter = payload;
  },
};
