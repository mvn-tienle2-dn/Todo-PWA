<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import * as types from './store/types';

  export default Vue.extend({
    name: 'todo',
  });
</script>

<style lang="scss">
  @import "./assets/styling/styles.scss";
</style>
