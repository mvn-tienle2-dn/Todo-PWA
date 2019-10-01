<template>
  <div class="page-list-todo">
    <div class="container">
      <ul class="list-todo">
        <li class="todo-item">
          <div class="checkbox-section">
            <input class="checkbox-input" type="checkbox" checked="">
            <label class="checkbox-label" for="remember">Finish UI all page of todo app</label>
          </div>
          <button class="item-btn"><i class="fa fa-times"></i></button>
        </li>
        <li class="todo-item">
          <div class="checkbox-section">
            <input class="checkbox-input" type="checkbox" checked="">
            <label class="checkbox-label" for="remember">Implement API all page of todo app</label>
          </div>
          <button class="item-btn"><i class="fa fa-times"></i></button>
        </li>
        <li class="todo-item">
          <div class="checkbox-section">
            <input class="checkbox-input" type="checkbox" checked="">
            <label class="checkbox-label" for="remember">Deploy app to Heroku</label>
          </div>
          <button class="item-btn"><i class="fa fa-times"></i></button>
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
