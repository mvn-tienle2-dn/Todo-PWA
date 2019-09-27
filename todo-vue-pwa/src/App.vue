<template>
  <div id="app">
    <TodoApp />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import TodoApp from '@/components/Todo.vue'; // @ is an alias to /src

  export default Vue.extend({
    name: 'todo',
    components: {
      TodoApp,
    },
  });
</script>

<style lang="scss">
  @import "./assets/styling/styles.scss";
</style>
