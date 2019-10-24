<template>
  <div class="page-auth">
    <div class="site-wrapper">
      <div class="form-wrapper">
        <div class="box">
          <input type="radio" id="signin-title" class="hidden-input" name="formTitle" checked>
          <label class="tab-item" for="signin-title">Sign In</label>
          <input type="radio" id="signup-title" class="hidden-input" name="formTitle">
          <label class="tab-item active" for="signup-title">Sign Up</label>
          <div class="clearfix"></div>
          <div class="sign-in">
            <SignIn/>
          </div>
          <div class="sign-up">
            <SignUp/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import SignIn from '../components/features/SignIn.vue';
  import SignUp from '../components/features/SignUp.vue';
  export default ({
    name: 'Auth',
    components: {
      SignIn,
      SignUp,
    },
  });
</script>
