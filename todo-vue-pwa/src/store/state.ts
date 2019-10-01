export interface State {
  counter: number;
  todos: Array<{ id: string; content: string; status: State['filter'] }>;
  filter: null | true | false;
}

export default {
  counter: 0,
  todos: [
    {
      id: 'abcd',
      content: 'Making UI',
      status: true,
    },
    {
      id: 'ysgfyds',
      content: 'Implement logic',
      status: false,
    },
    {
      id: 'abcd',
      content: 'Making UI',
      status: true,
    },
    {
      id: 'ysgfyds',
      content: 'Implement logic',
      status: false,
    },
    {
      id: 'abcd',
      content: 'Making UI',
      status: true,
    },
    {
      id: 'ysgfyds',
      content: 'Implement logic',
      status: false,
    },
    {
      id: 'abcd',
      content: 'Making UI',
      status: true,
    },
    {
      id: 'ysgfyds',
      content: 'Implement logic',
      status: false,
    },
  ],
  filter: null,
} as State;
