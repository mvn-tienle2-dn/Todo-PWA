<template>
  <div class="page-footer">
    <ul class="filter-list flex flex-between flex-vertical-center flex-row flex-wrap">
      <li class="filter-item">
        <button class="btn primary-btn btn-filter">All Tasks</button>
      </li>
      <li class="filter-item">
        <button class="btn warning-btn btn-filter">Actice</button>
      </li>
      <li class="filter-item">
        <button class="btn success-btn btn-filter">Completed</button>
      </li>
      <li class="filter-item">
        <button class="btn danger-btn btn-filter">Clear completed</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default ({
    name: 'Footer',
  });
</script>
