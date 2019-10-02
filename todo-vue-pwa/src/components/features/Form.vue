<template>
  <div class="page-form">
    <div class="container text-between">
      <form>
        <div class="flex-centered">
          <input type="text" v-model="content" class="input-todo" @keypress.enter.prevent="addToList" placeholder="What needs to be done?">
          <button type="button" class="btn btn-circle" :disabled="!content" @click="addToList"><i class="fa fa-plus"></i></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import { mapActions } from 'vuex';

  export default ({
    name: 'TodoForm',
    data() {
      return {
        content: null,
      };
    },
    methods: {
      ...mapActions(['addTodo']),
      addToList() {
        this.addTodo(this.content);
        this.content = null;
      },
    },
  });
</script>
