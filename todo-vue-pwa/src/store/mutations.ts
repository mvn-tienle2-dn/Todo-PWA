import firebase from 'firebase';
import { State } from './state';
import router from '../router/index';

export default {
  mutateIncrease: (state: { counter: number; }, payload: any) => {
    state.counter++;
  },
  mutateDecrease: (state: { counter: number; }, payload: any) => {
    state.counter--;
  },
  addTodo: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    if (payload && payload.replace(/\s/g, '').length) {
      state.todos.push({
        id: Math.random().toString(32).replace('0.', ''),
        content: payload,
        status: 'notdone',
      });
    }
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
  signup: (state: { user: any }, payload: any) => {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
      (user: any) => {
        const db = firebase.firestore();
        db.collection('users').add({
          email: user.user.email,
          uid: user.user.uid,
        });
        router.push('/todos');
      },
      (err: any) => {
        // Show error message
      },
    );
  },
  signin: (state: {user: any}, payload: any) => {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
      (user: any) => {
        router.push('/todos');
      },
      (err: any) => {
        // Show error message
      },
    );
  },
  signinWithGoogle: (state: {user: any}) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
      (result) => {
        router.push('todos');
      }, (err: any) => {
        // Show error message
      },
    );
  },
};
