<template>
  <div class="page-profile">
    <Header/>
    Profile
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Header from '../components/shared/Header.vue';

  export default Vue.extend({
    name: 'Profile',
    components: {
      Header,
    },
  });
</script>
