<template>
  <div class="page-list-todo">
    <div v-if="isProcessing">
      <Loading/>
    </div>
    <div v-else>
      <div v-if="todoList.length">
        <h6 class="text-centered total">You have {{todoList.length}} task(s) here.</h6>
        <transition name="fade">
          <ul v-if="todoList.length" class="list-todo">
            <transition-group name="fade">
              <li v-for="(todo, idx) in todoList" :key="idx" class="todo-item">
                <div class="checkbox-section">
                  <input class="checkbox-input" type="checkbox" @click="handleUpdateStatus(todo.id)" :checked="todo.status === 'done' ? true : false" :id="todo.id">
                  <label class="checkbox-label" v-bind:class="todo.status === 'done' ? 'done' : ''" :for="todo.id">{{todo.content}}</label>
                </div>
                <button class="item-btn" @click="handleRemoveTodo(todo.id)"><i class="fa fa-trash-alt"></i></button>
              </li>
            </transition-group>
          </ul>
        </transition>
      </div>
      <div class="text-centered no-task" v-else>
        <i class="fa fa-tasks"></i>
        <h6 class="no-task-msg">You don't have any task.</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
  import Loading from '../shared/Loading.vue';

  export default ({
    name: 'TodoList',
    components: {
      Loading,
    },
    computed: {
      ...mapGetters(['todoList']),
    },
    data() {
      return {
        isProcessing: true,
      };
    },
    methods: {
      ...mapActions(['changeStatus', 'removeTodo', 'setDataToState']),
      handleRemoveTodo(todoId) {
        this.removeTodo(todoId);
      },
      handleUpdateStatus(todoId) {
        this.changeStatus(todoId);
      },
    },
    mounted() {
      this.setDataToState();
      setTimeout(() => {
        this.isProcessing = false;
      }, 1000);
    },
  });
</script>
