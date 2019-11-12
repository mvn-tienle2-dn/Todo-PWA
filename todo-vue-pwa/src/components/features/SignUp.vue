<template>
  <div class="signup-page">
    <div v-if="isSignin">
      <Loading/>
    </div>
    <form>
      <span class="err-msg" v-if="errMsg && !isSignin"> {{ errMsg }} </span>
      <input class="input email" id="emailIn" type="email" placeholder="Email" v-model="email">
      <input class="input password" id="passwordIn" type="password" placeholder="Password" v-model="password">
      <button type="button" class="btn btn-primary" @click="signUp()">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
  import firebase from 'firebase';
  import { mapActions, mapGetters, mapState } from 'vuex';
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
      };
    },
    computed: {
      ...mapGetters(['errMsg']),
      ...mapState(['isSignin']),
    },
    methods: {
      ...mapActions(['signup']),
      signUp() {
        const payload = {
          email: this.email,
          password: this.password,
        };
        this.signup(payload);
      },
    },
    mounted() {
      this.resetStore();
    },
  });
</script>
