<script setup>
import { todosFactory } from "../todosSetup";

const { todosIncompleted, todosCompleted, toggle, deleteTodo } = todosFactory();
</script>

<template>
  <h3>Task List</h3>
  <p v-if="todosIncompleted.length === 0">you have no tasks available</p>
  <ul id="incompleted-tasks">
    <li
      v-for="todo in todosIncompleted"
      :key="todo.id"
      @click="toggle(todo.id)"
    >
      <input class="boton-check" type="checkbox" />
      <label>{{ todo.name }}</label>
      <span class="icon"
        ><i class="bi bi-trash" @click="deleteTodo(todo.id)"></i
      ></span>
    </li>
  </ul>
  <h3>Completed</h3>
  <ul id="completed-tasks">
    <li v-for="todo in todosCompleted" :key="todo.id" @click="toggle(todo.id)">
      <input class="boton-check" type="checkbox" checked />
      <label>{{ todo.name }}</label>
      <input type="text" />
      <span class="icon"
        ><i class="bi bi-trash" @click="deleteTodo(todo.id)"></i
      ></span>
    </li>
  </ul>
</template>

<style></style>
../todosSetup
