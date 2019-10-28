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
  addTodo: (state: { todos: Array<State['todos'][0]>; user: State['user'] }, payload: any) => {
    if (payload && payload.replace(/\s/g, '').length) {
      const db = firebase.firestore();
      db.collection('todos').add({
        id: Math.random().toString(32).replace('0.', ''),
        content: payload,
        status: 'notdone',
        uid: localStorage.getItem('uid'),
      });
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
        state.user.email = user.user.email || '';
        state.user.uid = user.user.uid || '';
        localStorage.setItem('uid', user.user.uid);
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
        state.user.email = user.user.email || '';
        state.user.uid = user.user.uid || '';
        localStorage.setItem('uid', user.user.uid);
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
      (result: any) => {
        state.user.email = result.user.email || '';
        state.user.uid = result.user.uid || '';
        localStorage.setItem('uid', result.user.uid);
        const db = firebase.firestore();
        db.collection('users').add({
          email: result.user.email,
          uid: result.user.uid,
        });
        router.push('todos');
      }, (err: any) => {
        // Show error message
      },
    );
  },
  signinWithFB: (state: {user: any}) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
      (result: any) => {
        router.push('todos');
      }, (err: any) => {
        // Show error message
      },
    );
  },
  setDataToState: (state: { todos: Array<State['todos'][0]>; }) => {
    const db = firebase.firestore();
    db.collection('todos').get().then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        state.todos.push(doc.data());
      });
    });
  },
};
