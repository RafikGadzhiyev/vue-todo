<script setup lang="ts">
defineProps(['inputState']);
defineEmits(['update:inputState', 'clickHandler']);
</script>

<template>
  <form class="todo-form">
    <input type="text" maxlength="64" class="todo-form_input" :value="inputState"
      @input="$emit('update:inputState', ($event.target as HTMLInputElement).value)">
    <button class="todo-form_create-todo-button" @click.prevent="$emit('clickHandler')">Create todo</button>
  </form>
</template>

<style lang="sass" scoped>
.todo-form
  display: flex
  justify-content: center
  margin: 0 auto 50px
  width: 100%

.todo-form_input
  border: none
  outline: none
  border-radius: 5px 0 0 5px
  transition: 300ms ease
  flex: 1 0 200px
  text-indent: 10px
  background-color: #3B3B3B

  &:focus
    box-shadow: 0 0 0 3px #646cff
    &~button.todo-form_create-todo-button
      box-shadow: 0 0 0 3px #646cff


.todo-form_create-todo-button
  outline: none
  box-sizing: border-box
  transition: 300ms ease
  border-radius: 0 5px 5px 0
  flex: 1 0 150px
  max-width: 250px
</style>