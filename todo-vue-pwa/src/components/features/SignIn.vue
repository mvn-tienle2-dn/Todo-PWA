<template>
  <form>
    <input class="input email" id="emailIn" type="email" placeholder="Email">
    <input class="input password" id="passwordIn" type="password" placeholder="Password">
    <button type="button" class="btn btn-primary">Submit</button>
    <div class="action">
      <button class="btn btn-fb"><i class="fab fa-facebook-f"></i></button>
      <button class="btn btn-google"><i class="fab fa-google"></i></button>
    </div>
  </form>
</template>

<script lang="ts">
  export default ({
    name: 'Login',
  });
</script>
