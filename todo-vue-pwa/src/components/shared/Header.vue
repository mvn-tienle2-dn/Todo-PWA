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
      <div class="header-right dropdown">
        <img src="../../assets/img/user-icon.png" alt="User">
        <div class="dropdown-content">
          <p @click="handleSignout()">Signout</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { mapActions } from 'vuex';

  export default ({
    name: 'Header',
    methods: {
      ...mapActions(['signout']),
      handleSignout() {
        this.signout();
      },
    },
  })
</script>
