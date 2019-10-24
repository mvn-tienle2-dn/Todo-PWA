<template>
  <form>
    <input class="input email" id="emailIn" type="email" placeholder="Email">
    <input class="input password" id="passwordIn" type="password" placeholder="Password">
    <input class="input password" id="passwordIn" type="password" placeholder="Confirm password">
    <button type="button" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts">
  export default ({
    name: 'Login',
  });
</script>
