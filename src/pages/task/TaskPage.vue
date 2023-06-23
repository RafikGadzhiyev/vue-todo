<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {Store, useStore} from 'vuex';
import {v4 as uuid4} from 'uuid';
import {IStore, ITodo} from "../../interfaces.ts";
import TodoForm from "../../components/TodoForm.vue";
import TodoElement from "../../components/TodoElement.vue";

const store: Store<IStore> = useStore();
const inputState = ref('');
const showOnlyIncompleteTasks = ref(false);

const completedTasks = computed(() => store.state.todos.filter((todo: ITodo) => todo.isCompleted).length);
const clickHandler = () => {
  if (inputState.value.trim().length === 0) return;
  const creationTime = Date.now();
  const newTodo: ITodo = {
    id: uuid4(),
    value: inputState.value,
    createdAt: creationTime,
    updateAt: creationTime,
    isCompleted: false
  }

  store.commit('createTodo', newTodo);
  inputState.value = '';
}

onMounted(() => {
  store.commit('getTodosFromStorage');
})

</script>

<template>
  <div class="task-page-container">
    <TodoForm
        v-model:inputState="inputState"
        @clickHandler="clickHandler"
    />
    <div class="task-helper-container">
      <h2>Total tasks: {{ store.state.todos.length }} / Completed tasks:
        {{ completedTasks }}</h2>
      <button @click="showOnlyIncompleteTasks=!showOnlyIncompleteTasks">
        <span v-show="!showOnlyIncompleteTasks">Show only incomplete tasks</span>
        <span v-show="showOnlyIncompleteTasks">Show all tasks</span>
      </button>
    </div>
    <ul>
      <TodoElement
          v-for="todo of store.state.todos"
          :="todo"
          v-show="!showOnlyIncompleteTasks || !todo.isCompleted"
      />
    </ul>
  </div>
</template>

<style lang="sass">
.task-page-container
  width: 80%


.task-helper-container
  display: flex
  align-items: center
  justify-content: center
  gap: 1rem

</style>