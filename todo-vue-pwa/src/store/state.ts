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
      id: '1',
      content: 'Implement logic',
      status: false,
    },
    {
      id: '2',
      content: 'Implement logic',
      status: false,
    },
    {
      id: '3',
      content: 'Implement logic',
      status: false,
    },
    {
      id: '4',
      content: 'Implement logic',
      status: false,
    },
    {
      id: '5',
      content: 'Implement logic',
      status: false,
    },
    {
      id: '6',
      content: 'Implement logic',
      status: false,
    },
    {
      id: '7',
      content: 'Implement logic',
      status: false,
    },
    {
      id: '8',
      content: 'Implement logic',
      status: false,
    },
    {
      id: '9',
      content: 'Implement logic',
      status: false,
    },
    {
      id: '10',
      content: 'Implement logic 123',
      status: false,
    },
  ],
  filter: null,
} as State;
