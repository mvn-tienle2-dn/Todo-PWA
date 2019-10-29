<template>
  <div class="login-page">
    <div v-if="isProcessing">
      <Loading/>
    </div>
    <form>
      <input class="input email" id="emailIn" type="email" placeholder="Email" v-model="email">
      <input class="input password" id="passwordIn" type="password" placeholder="Password" v-model="password">
      <button type="button" class="btn btn-primary" @click="login()">Submit</button>
      <div class="action">
        <button type="button" class="btn btn-fb" @click="signinWithFB()"><i class="fab fa-facebook-f"></i></button>
        <button type="button" class="btn btn-google" @click="signinWithGoogle()"><i class="fab fa-google"></i></button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import firebase from 'firebase';
  import { mapActions } from 'vuex';
  import Loading from '../shared/Loading.vue';

  export default ({
    name: 'Login',
    components: {
      Loading,
    },
    data() {
      return {
        email: null,
        password: null,
        isProcessing: false,
      };
    },
    methods: {
      ...mapActions(['signin', 'signinWithGoogle', 'signinWithFB']),
      login() {
        this.isProcessing = true;
        const payload = {
          email: this.email,
          password: this.password,
        };
        this.signin(payload);
        setTimeout(() => {
          this.isProcessing = false;
        }, 2000);
      },
    },
  });
</script>
