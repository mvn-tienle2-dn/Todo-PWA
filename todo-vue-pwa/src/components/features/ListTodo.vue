<template>
  <div class="page-list-todo">
    <div class="container">
      <ul v-if="todoList.length" class="list-todo">
        <li v-for="(todo, idx) in todoList" :key="idx" class="todo-item">
          <div class="checkbox-section">
            <input class="checkbox-input" type="checkbox" :checked="todo.status === 'done' ? true : false" id="status">
            <label class="checkbox-label" v-bind:class="todo.status === 'done' ? 'done' : ''" for="status">{{todo.content}}</label>
          </div>
          <button class="item-btn"><i class="fa fa-times"></i></button>
        </li>
      </ul>
      <div class="text-centered no-task" v-else>
        <i class="fa fa-tasks"></i>
        <h6 class="no-task-msg">You don't have any task.</h6>
      </div>
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
