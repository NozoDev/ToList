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
    <label class="new-task">New Task</label>
    <input class="new-task" type="text" v-model="name" />
    <span class="boton-add">
      <i
        class="bi bi-plus-circle-fill"
        type="add"
        @click="addAndNavigate(name)"
      ></i>
    </span>
  </div>
</template>

<style></style>
