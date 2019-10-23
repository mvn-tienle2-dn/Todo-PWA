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
            <form>
              <input class="input email" id="emailIn" type="email" placeholder="Email">
              <input class="input password" id="passwordIn" type="password" placeholder="Password">
              <button type="button" class="btn btn-primary">Submit</button>
              <div class="action">
                <button class="btn btn-fb"><i class="fab fa-facebook-f"></i></button>
                <button class="btn btn-google"><i class="fab fa-google"></i></button>
              </div>
            </form>
          </div>
          <div class="sign-up">
            <form>
              <input class="input email" id="emailIn" type="email" placeholder="Email">
              <input class="input password" id="passwordIn" type="password" placeholder="Password">
              <input class="input password" id="passwordIn" type="password" placeholder="Confirm password">
              <button type="button" class="btn btn-primary">Submit</button>
            </form>
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
