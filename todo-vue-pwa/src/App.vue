<template>
  <div id="app">
    <!-- <TodoApp /> -->
    <!-- <router-view :key="$route.fullPath"/> -->
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import * as types from './store/types'
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
