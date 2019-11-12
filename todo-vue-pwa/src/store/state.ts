export interface State {
  counter: number;
  todos: [] | Array<{ id: string; content: string; status: State['filter']; }>;
  filter: null | 'done' | 'notdone';
  user: {email: string, uid: string};
  err: string;
  isSignin: boolean;
  isProgress: boolean;
}

export default {
  counter: 0,
  todos: [],
  filter: null,
  user: {},
  err: '',
  isSignin: false,
  isProgress: true,
} as State;
