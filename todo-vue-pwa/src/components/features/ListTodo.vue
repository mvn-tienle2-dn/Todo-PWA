<template>
  <div class="page-list-todo">
    <div class="container">
      <ul class="list-todo">
        <li class="todo-item">
          <input type="checkbox" class="item-cb">
          <label class="item-name">Finish UI</label>
          <button class="item-btn"><i class="fa fa-minus"></i></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  export default ({
    name: 'TodoList',
  });
</script>
