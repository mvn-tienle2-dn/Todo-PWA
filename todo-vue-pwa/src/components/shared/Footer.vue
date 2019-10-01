<template>
  <div class="page-footer">
    <ul class="filter-list flex flex-between flex-vertical-center flex-row flex-wrap">
      <li class="filter-item">
        <button class="btn primary-btn btn-filter btn-none-border">All Tasks</button>
      </li>
      <li class="filter-item">
        <button class="btn warning-btn btn-filter btn-none-border">Actice</button>
      </li>
      <li class="filter-item">
        <button class="btn success-btn btn-filter btn-none-border">Completed</button>
      </li>
      <li class="filter-item">
        <button class="btn danger-btn btn-filter btn-none-border">Clear completed</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default ({
    name: 'Footer',
  });
</script>
