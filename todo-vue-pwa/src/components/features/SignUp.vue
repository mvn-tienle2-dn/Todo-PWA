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
  import { mapActions } from 'vuex';

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
      ...mapActions(['signup']),
      signUp() {
        const payload = {
          email: this.email,
          password: this.password
        };
        this.signup(payload);
      }
    }
  });
</script>
