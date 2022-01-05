<script setup lang="ts">
import { useTodoStore } from '~/stores/todo'

const todo = useTodoStore()
const userTodo = ref('')
</script>

<template>
  <div>
    <input
      id="input"
      v-model="userTodo"
      placeholder="Enter a todo entry"
      aria-label="Enter a todo entry"
      type="text"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="todo.addTodoList(userTodo)"
    >

    <button
      class="m-3 text-sm btn"
      @click="todo.clearNewTodo(); userTodo=''"
    >
      Clear
    </button>
    <button
      class="m-3 text-sm btn"
      :disabled="!todo.getNewTodo && !userTodo"
      @click="todo.addTodoList(userTodo)"
    >
      Add
    </button>
    <ul>
      <li v-for="(todoEntry, i) in todo.allTodo" :key="i">
        <span class="todoText">{{ todoEntry }}</span><button class="btn mx-4 my-2" @click="todo.removeTodo(todoEntry)">
          X
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todoText {

}
.btn--x {
  margin: 2em 1em;
  padding: 1em 2em;
}
</style>
<route lang="yaml">
meta:
  layout: home
</route>
