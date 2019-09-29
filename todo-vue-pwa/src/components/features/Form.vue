<template>
  <div class="page-form">
    <div class="container text-between">
      <form>
        <div class="flex-centered">
          <input type="text" class="input-todo" placeholder="Enter something">
          <button class="btn btn-circle">+</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  export default ({
    name: 'TodoForm',
  });
</script>
