<template>
  <div class="page-footer">
    <ul class="filter-list flex flex-between flex-vertical-center flex-row flex-wrap">
      <li class="filter-item">
        <button class="btn btn-primary btn-filter btn-none-border" @click="changeFilter(null)">All Tasks</button>
      </li>
      <li class="filter-item">
        <button class="btn btn-warning btn-filter btn-none-border" @click="changeFilter('notdone')">Actice</button>
      </li>
      <li class="filter-item">
        <button class="btn btn-success btn-filter btn-none-border" @click="changeFilter('done')">Completed</button>
      </li>
      <li class="filter-item">
        <button class="btn btn-danger btn-filter btn-none-border" @click="delComplete()">Clear completed</button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
  import { mapActions } from 'vuex';

  export default ({
    name: 'Footer',
    methods: {
      ...mapActions(['changeFilter', 'delComplete']),
    },
  });
</script>
