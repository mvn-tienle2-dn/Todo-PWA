<template>
  <div class="page-list-todo">
    To do list
    <ul>
      <li v-for="(todo, idx) in todoList" :key="(todo && todo.id) || idx">
        <span>{{ todo.content }}</span>
        -
        <span>{{ todo.status }}</span>
        -
        <button @click="mark(todo)">Mark as Done</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { mapGetters, mapActions } from 'vuex';

  export default ({
    name: 'TodoList',
    computed: {
      ...mapGetters(['todoList']),
    },
    mounted() {
      // console.log(this);
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
