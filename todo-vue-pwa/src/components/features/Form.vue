<template>
  <div class="page-form">
    <div class="container text-between">
      <form>
        <div class="flex-centered">
          <input type="text" class="input-todo" placeholder="What needs to be done?">
          <button class="btn btn-circle"><i class="fa fa-plus"></i></button>
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
