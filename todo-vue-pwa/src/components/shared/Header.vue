<template>
  <div class="page-header">
    <div class="container flex-between">
      <div class="header-left">
        <h6 class="app-title txt-upper">todos</h6>
      </div>
      <div class="header-center">
        <a href="/" class="page-logo flex-centered">
          <img src="../../assets/img/logo.png" alt="Logo">
        </a>
      </div>
      <div class="header-right dropdown" v-if="userEmail">
        <img src="../../assets/img/user-icon.png" alt="User">
        <div @click="handleSignout()" class="dropdown-content">
          <p>Sign Out:</p>
          <p> {{ userEmail }} </p>
        </div>
      </div>
      <a class="link-login" href="/auth" v-else>Sign In</a>
    </div>
  </div>
</template>

<script lang="ts">
  import firebase from 'firebase';
  import { mapActions } from 'vuex';

  export default ({
    name: 'Header',
    data() {
      return {
        userEmail: null,
      }
    },
    computed: {
    },
    methods: {
      ...mapActions(['signout']),
      handleSignout() {
        this.signout();
      },
    },
    beforeMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {          
          this.userEmail = user.email;
        }
      });
    },
  })
</script>
