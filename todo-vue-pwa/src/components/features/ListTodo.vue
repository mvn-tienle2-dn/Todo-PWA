<template>
  <div class="page-list-todo">
    <div class="">
      <ul class="list-todo">
        <li v-for="(todo, idx) in todoList" :key="(todo && todo.id) || idx" class="todo-item">
          <div class="checkbox-section">
            <input class="checkbox-input" type="checkbox" :checked="todo.status === 'done' ? true :
            false" id="status" @change="mark(todo)">
            <label class="checkbox-label" v-bind:class="todo.status === 'done' ? 'done' : ''" for="status">{{todo.content}}</label>
          </div>
          <button class="item-btn"><i class="fa fa-times"></i></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { mapGetters, mapActions } from 'vuex';
  export default ({
    name: 'TodoList',
    computed: {
      ...mapGetters(['todoList']),
    },
    methods: {
      ...mapActions(['markDone']),
      mark(todo: any) {
        if (!todo) {
          return;
        }

        this.markDone(todo.id);
      },
    },
  });
</script>
