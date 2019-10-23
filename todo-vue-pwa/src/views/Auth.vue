<template>
  <div class="page-auth">
    <div class="site-wrapper">
      <div class="form-wrapper">
        <div class="box">
          <input type="radio" id="signInTitle" class="hiddenInput" name="formTitle" checked>
          <label class="tab-item" for="signInTitle">Sign In</label>
          <input type="radio" id="signUpTitle" class="hiddenInput" name="formTitle">
          <label class="tab-item active" for="signUpTitle">Sign Up</label>
          <div class="clearfix"></div>
          <div class="singIn">
            Sign In
          </div>
          <div class="singUp">
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
