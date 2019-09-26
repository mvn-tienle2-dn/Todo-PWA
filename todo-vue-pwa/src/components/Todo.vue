<template>
  <div class="page-todo">
    To do app
    <Header/>
    <TodoForm/>
    <TodoList/>
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Header from './shared/Header.vue';
  import Footer from './shared/Footer.vue';
  import TodoForm from './features/Form.vue';
  import TodoList from './features/ListTodo.vue';

  export default ({
    name: 'TodoApp',
    components: {
      Header,
      Footer,
      TodoForm,
      TodoList,
    },
  });
</script>
