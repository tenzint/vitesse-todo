import { acceptHMRUpdate, defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const newTodo = ref('')
  const todoList = ref(new Set<string>())
  const getNewTodo = computed(() => newTodo.value)
  const allTodo = computed(() => Array.from(todoList.value))

  /**
   */
  function addTodoList(userTodo: string) {
    console.log('-------addTodoList store entry')
    console.log(`---newTodo = ${newTodo}`)
    if (newTodo.value)
      todoList.value.add(newTodo.value)
    else if (userTodo)
      todoList.value.add(userTodo)
  }
  function removeTodo(entry: string) {
    todoList.value.forEach((todo) => {
      if (todo === entry)
        todoList.value.delete(todo)
    })
  }
  function clearNewTodo() {
    newTodo.value = ''
  }

  return {
    addTodoList,
    removeTodo,
    clearNewTodo,
    getNewTodo,
    allTodo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
