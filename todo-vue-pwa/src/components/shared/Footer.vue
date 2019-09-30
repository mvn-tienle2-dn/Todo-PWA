<template>
  <div class="footer">
    <button @click="changeFilter(null)">All</button>
    <button @click="changeFilter('done')">Done</button>
    <button @click="changeFilter('notdone')">Not Done</button>
  </div>
</template>

<script lang="ts">
  import { mapActions } from 'vuex';

  export default ({
    name: 'Footer',
    methods: {
      ...mapActions(['changeFilter']),
    },
  });
</script>

<style scoped>

</style>
