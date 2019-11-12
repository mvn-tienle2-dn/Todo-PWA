<template>
  <div class="page-auth">
    <div class="site-wrapper">
      <div class="form-wrapper">
        <div class="box">
          <ul class="list-auth-tab">
            <router-link tag="li" class="auth-tab" class-active="active" to="login" exact>Login</router-link>
            <router-link tag="li" class="auth-tab" class-active="active" to="signup" exact>Register</router-link>
          </ul>
          <SignUp/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import SignUp from '../components/features/SignUp.vue';
  export default ({
    name: 'Auth',
    components: {
      SignUp,
    },
  });
</script>
