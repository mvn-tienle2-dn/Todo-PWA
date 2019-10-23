import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import firebase from 'firebase';
import './registerServiceWorker';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyDvBlPH8-Y4IKsxJIyXxamPa6Y7qHnhfQ0',
  authDomain: 'todo-vue-pwa.firebaseapp.com',
  databaseURL: 'https://todo-vue-pwa.firebaseio.com',
  projectId: 'todo-vue-pwa',
  storageBucket: 'todo-vue-pwa.appspot.com',
  messagingSenderId: '450914789500',
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
