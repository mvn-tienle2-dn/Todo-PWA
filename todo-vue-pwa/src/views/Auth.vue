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
            Sign In
          </div>
          <div class="sign-up">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default ({
    name: 'Auth',
  });
</script>
