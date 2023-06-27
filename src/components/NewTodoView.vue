<script setup>
import { todosFactory } from "../todosSetup";
import router from "../router";

const { add } = todosFactory();
const addAndNavigate = (name) => {
  if (name.trim().length === 0) {
    // El campo está vacío, mostrar mensaje de error o realizar alguna acción
    return;
  }
  add(name);
  router.push("/");
};

let name = "";
let isNameEmpty = true;

const checkEmpty = () => {
  isNameEmpty = name.trim().length === 0;
};
</script>

<template>
  <div class="list-container">
    <label class="new-task">New Task</label>
    <input class="new-task" type="text" v-model="name" @input="checkEmpty" />
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
