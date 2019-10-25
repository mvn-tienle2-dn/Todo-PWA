<template>
  <form>
    <input class="input email" id="emailIn" type="email" placeholder="Email" v-model="email">
    <input class="input password" id="passwordIn" type="password" placeholder="Password" v-model="password">
    <input class="input password" id="passwordIn" type="password" placeholder="Confirm password" v-model="confirmpw">
    <button type="button" class="btn btn-primary" @click="signUp()">Submit</button>
  </form>
</template>

<script lang="ts">
  import firebase from 'firebase';
  export default ({
    name: 'Login',
    data() {
      return {
        email: null,
        password: null,
        confirmpw: null,
      };
    },
    methods: {
      signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user: any) => {
            console.log(user, 'Success');
            var db = firebase.firestore();
            db.collection('users').add({
              email: user.user.email,
              uid: user.user.uid,
            });
            this.$router.replace('todos');
          },
          (err: any) => {
            console.log(err, 'Error');

          }
        )
      }
    }
  });
</script>
