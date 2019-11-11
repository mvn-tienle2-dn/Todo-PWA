<template>
  <div class="signup-page">
    <div v-if="isProcessing">
      <Loading/>
    </div>
    <form>
      <input class="input email" id="emailIn" type="email" placeholder="Email" v-model="email">
      <input class="input password" id="passwordIn" type="password" placeholder="Password" v-model="password">
      <button type="button" class="btn btn-primary" @click="signUp()">Submit</button>
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
      ...mapActions(['signup']),
      signUp() {
        this.isProcessing = true;
        const payload = {
          email: this.email,
          password: this.password
        };
        this.signup(payload);
        setTimeout(() => {
          this.isProcessing = false;
        }, 2000);
      }
    }
  });
</script>
