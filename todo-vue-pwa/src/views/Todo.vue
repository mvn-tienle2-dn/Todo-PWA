<template>
  <div class="page-todo">
    <Header/>
    <div class="page-main layout-bg-blue">
      <div class="container">
        <TodoForm/>
        <TodoList/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Header from '../components/shared/Header.vue';
  import Footer from '../components/shared/Footer.vue';
  import TodoForm from '../components/features/Form.vue';
  import TodoList from '../components/features/ListTodo.vue';

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
