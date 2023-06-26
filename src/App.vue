<script setup>
import { ref } from "vue";
import { todosFactory } from "./todosSetup";
import { RouterLink, RouterView } from "vue-router";
import todosService from "./services/todosService";

const { update } = todosFactory();

const isLoading = ref(true); // spinner
async function prefetch() {
  update(await todosService.getTodos());
  isLoading.value = false;
}
prefetch();
</script>

<template>
  <div class="container">
    <h2 class="loader" v-if="isLoading">Loading TASK LIST..</h2>
    <template v-if="!isLoading">
      <ul class="order-list">
        <RouterLink to="/"><li class="title-list">Task List</li></RouterLink>
        <RouterLink to="/new"><li class="title-list">New Todo</li></RouterLink>
      </ul>
      <RouterView />
    </template>
  </div>
</template>

<style>
@import "./assets/base.css";
</style>
