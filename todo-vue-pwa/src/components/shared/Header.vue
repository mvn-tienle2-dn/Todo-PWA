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
      <div class="header-right">
        <div class="dropdown" v-if="userEmail">
          <img src="../../assets/img/user-icon.png" alt="User">
          <div @click="signout" class="dropdown-content">
            <p>Sign Out:</p>
            <p> {{ userEmail }} </p>
          </div>
        </div>
        <router-link class="link-login" to="/login" v-else>Sign In</router-link>
      </div>
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
