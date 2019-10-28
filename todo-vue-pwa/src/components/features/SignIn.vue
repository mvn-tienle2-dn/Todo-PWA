<template>
  <form>
    <input class="input email" id="emailIn" type="email" placeholder="Email" v-model="email">
    <input class="input password" id="passwordIn" type="password" placeholder="Password" v-model="password">
    <button type="button" class="btn btn-primary" @click="login()">Submit</button>
    <div class="action">
      <button type="button" class="btn btn-fb" @click="signinWithFB()"><i class="fab fa-facebook-f"></i></button>
      <button type="button" class="btn btn-google" @click="loginWithGoogle()"><i class="fab fa-google"></i></button>
    </div>
  </form>
</template>

<script lang="ts">
  import firebase from 'firebase';
  import { mapActions } from 'vuex';

  export default ({
    name: 'Login',
    data() {
      return {
        email: null,
        password: null,
      };
    },
    methods: {
      ...mapActions(['signin', 'signinWithGoogle', 'signinWithFB']),
      login() {
        const payload = {
          email: this.email,
          password: this.password,
        };
        this.signin(payload);
      },
      loginWithGoogle() {
        this.signinWithGoogle();
      },
    },
  });
</script>
