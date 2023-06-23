<script setup lang="ts">
import {IStore, ITodo} from "../interfaces.ts";
import {OhVueIcon} from 'oh-vue-icons'
import {useStore} from "vuex";
import {ref} from "vue";

const props = defineProps<ITodo>();

const store = useStore<IStore>();

const isEditMode = ref(false);
const itemValue = ref(props.value);
const deleteTodo = (todoId: string) => {
  store.commit('deleteTodo', todoId);
}

const toggleEditMode = (mode: 'on' | 'off') => {
  isEditMode.value = mode === 'on';
}

const updateTodo = () => {
  toggleEditMode('off');
  if (itemValue.value.length === 0) {
    return;
  }
  const updated: ITodo = {
    ...props,
    value: itemValue.value
  }
  store.commit('updateTodoState', updated);
}

</script>
<template>
  <li class="item">
    <input
        type="checkbox"
        :checked="isCompleted"
        @change="store.commit('updateTodoState', {...props, isCompleted: !isCompleted})"
    >
    <span v-show="!isEditMode" class="item-content">
      {{ value }}
    </span>
    <input
        v-show="isEditMode"
        type="text"
        v-model.trim="itemValue"
        class="item-content-edit-input"
        @blur="updateTodo"
        @keydown.enter="updateTodo"
    />
    <OhVueIcon name="fa-regular-edit" class="icon-option-button edit-icon" @click="() => toggleEditMode('on')"/>
    <OhVueIcon name="md-delete" @click="() => deleteTodo(id)" class="icon-option-button delete-icon"/>
  </li>
</template>
<style lang="sass" scoped>
.item
  list-style: none
  text-align: left
  margin-block: 1rem
  border-radius: 5px
  background-color: #3b3b3b
  padding: 10px 5px
  display: flex
  align-items: center
  gap: 5px

.item-content,
.item-content-edit-input
  flex: 1 0

.item-content-edit-input
  padding: 5px

.icon-option-button
  cursor: pointer
  transition: 300ms ease

  &.delete-icon:hover
    color: #cb2929

  &.edit-icon:hover
    color: #24b724

</style>