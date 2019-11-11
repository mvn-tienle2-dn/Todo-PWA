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
      const uid = localStorage.getItem('uid') || '';
      const idTodo = Math.random().toString(32).replace('0.', '');
      const doc = uid + idTodo;
      db.collection('todos').doc(doc).set({
        id: idTodo,
        content: payload,
        status: 'notdone',
        uid: localStorage.getItem('uid'),
        created_date: new Date(),
      });
      state.todos.push({
        id: idTodo,
        content: payload,
        status: 'notdone',
      });
    }
  },
  changeStatus: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    const todo = state.todos.find((value: any) => value.id === payload);
    const db = firebase.firestore();
    const uid = localStorage.getItem('uid') || '';
    if (todo) {
      const id = todo.id;
      const doc = uid + id;
      db.collection('todos').doc(doc).update({
        status: todo.status === 'done' ? 'notdone' : 'done',
      });
      if (todo.status === 'done') {
        return todo.status = 'notdone';
      } else {
        return todo.status = 'done';
      }
    }
  },
  removeTodo: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    const uid = localStorage.getItem('uid') || '';
    const doc = uid + payload;
    const db = firebase.firestore();

    db.collection('todos').doc(doc).delete().then(() => {
      // Shoe message delete
    });
    state.todos = state.todos.filter((todo) => {
      return todo.id !== payload;
    });
  },
  removeCompleted: (state: { todos: Array<State['todos'][0]>; }, payload: any) => {
    const uid = localStorage.getItem('uid') || '';
    let doc: string;
    const db = firebase.firestore();
    state.todos.forEach((item: any) => {
      if (item.status === 'done') {
        doc = uid + item.id;
        db.collection('todos').doc(doc).delete().then(() => {
          // Show message
        });
      }
    });
    state.todos = state.todos.filter((todo) => {
      return todo.status !== 'done';
    });
  },
  applyFilter: (state: { filter: any; }, payload: any) => {
    state.filter = payload;
  },
  signup: (state: { user: any, err: string }, payload: any) => {
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
        state.err = '';
      },
      (err: any) => {
        state.err = err.code;
      },
    );
  },
  signin: (state: { user: any, err: string }, payload: any) => {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
      (user: any) => {
        state.user.email = user.user.email || '';
        state.user.uid = user.user.uid || '';
        localStorage.setItem('uid', user.user.uid);
        router.push('/todos');
        state.err = '';
      },
      (err: any) => {
        console.log(err);
        state.err = err.code;
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
        state.user.email = result.user.email || '';
        state.user.uid = result.user.uid || '';
        localStorage.setItem('uid', result.user.uid);
        router.push('todos');
      }, (err: any) => {
        // Show error message
      },
    );
  },
  signout: (state: { todos: Array<State['todos'][0]>; }) => {
    firebase.auth().signOut().then(() => {
      state.todos = [];
      localStorage.removeItem('uid');
      router.push('auth');
    });
  },
  setDataToState: (state: { todos: Array<State['todos'][0]>; }) => {
    const db = firebase.firestore();
    const uid = localStorage.getItem('uid');
    db.collection('todos').where('uid', '==', uid).orderBy('created_date').get().then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        state.todos.push(doc.data());
      });
    });
  },
};
