<template>
  <div id="app">
    <div v-if="isLoading" class="boxLoading">
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import * as types from './store/types';

  export default Vue.extend({
    name: 'todo',
    data() {
      return {
        isLoading: true,
      };
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  });
</script>

<style lang="scss">
  @import "./assets/styling/styles.scss";
</style>
