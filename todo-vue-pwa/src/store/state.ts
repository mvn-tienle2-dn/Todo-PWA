export interface State {
  counter: number;
  todos: Array<{ id: string; content: string; status: State['filter'] }>;
  filter: null | 'done' | 'notdone';
}

export default {
  counter: 0,
  todos: [
    {
      id: 'abcd',
      content: 'Making UI',
      status: 'done',
    },
    {
      id: 'ysgfyds',
      content: 'Implement logic',
      status: 'notdone',
    },
  ],
  filter: null,
} as State;
