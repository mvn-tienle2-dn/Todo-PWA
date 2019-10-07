<template>
  <div class="page-footer">
    <div class="container">
      <ul class="filter-list flex flex-between flex-vertical-center flex-row flex-wrap">
        <li class="filter-item">
          <button class="btn btn-primary btn-filter btn-none-border" :disabled="!typeFilter" @click="change(null)">All Tasks</button>
        </li>
        <li class="filter-item">
          <button class="btn btn-warning btn-filter btn-none-border" :disabled="typeFilter === 'notdone'" @click="change('notdone')">Actice</button>
        </li>
        <li class="filter-item">
          <button class="btn btn-success btn-filter btn-none-border" :disabled="typeFilter === 'done'" @click="change('done')">Completed</button>
        </li>
        <li class="filter-item">
          <button class="btn btn-danger btn-filter btn-none-border" @click="removeCompleted">Clear completed</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
  import { mapActions } from 'vuex';

  export default ({
    name: 'Footer',
    data() {
      return {
        typeFilter: null
      };
    },
    methods: {
      ...mapActions(['changeFilter', 'removeCompleted']),
      change(type: string) {
        this.typeFilter = type;
        this.changeFilter(type);
      }
    }
  });
</script>
