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
  applyFilter: (state: { filter: any; }, payload: any) => {
    state.filter = payload;
  },
  markDone: (state: State, payload: any) => {
    const idx = state.todos.findIndex((todo: { id: any; }) => todo.id === payload);
    if (idx < 0) {
      return;
    }
    if (state.todos[idx].status === 'done') {
      state.todos[idx].status = 'notdone';
    } else {
      state.todos[idx].status = 'done';
    }
  },
};
