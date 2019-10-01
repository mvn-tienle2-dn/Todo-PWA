<template>
  <div class="page-list-todo">
    <div class="container">
      <ul class="list-todo">
        <li v-for="(todo, idx) in todoList" :key="idx" class="todo-item">
          <div class="checkbox-section">
            <input class="checkbox-input" type="checkbox" checked="todo.status" id="status">
            <label class="checkbox-label" for="status">{{todo.content}}</label>
          </div>
          <button class="item-btn"><i class="fa fa-times"></i></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  export default ({
    name: 'TodoList',
    computed: {
      ...mapGetters(['todoList']),
    },
  });
</script>
