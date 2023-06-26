<script setup>
import { todosFactory } from "../todosSetup";
import router from "../router";

const { add } = todosFactory();

const addAndNavigate = (name) => {
  add(name);
  router.push("/");
};
</script>

<template>
  <div class="list-container">
    <label for="new-task">New Task</label>
    <input id="new-task" type="text" v-model="name" />
    <button type="add" @click="addAndNavigate(name)"><i class="bi bi-plus-circle-fill"></i></button>
  </div>
</template>

<style></style>
