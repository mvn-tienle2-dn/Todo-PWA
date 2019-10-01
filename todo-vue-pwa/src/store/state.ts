export interface State {
  counter: number;
  todos: Array<{ id: string; content: string; status: State['filter'] }>;
  filter: null | true | false;
}

export default {
  counter: 0,
  todos: [],
  filter: null,
} as State;
