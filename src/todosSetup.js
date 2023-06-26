// Aqui se configura todo lo que tenga que ver con los "TODOS" en cuanto a datos
import initialTodos from "./mock/todos";

import { computed, ref } from "vue";
// cuando este dato cambie quiero generar los datos para los
//"todos" que estan completados y los que no se encuentran completados
const todos = ref([...initialTodos]);

const todosCompleted = computed(() => todos.value.filter((t) => t.completed));

const todosIncompleted = computed(() =>
  todos.value.filter((t) => !t.completed)
);

/* esto va leer mi estado y va a buscar si existe el "id" que esta definido y cuando detecta el todo le va a cambiar el estado del "Completed" y lo va a negar*/
const toggle = (id) => {
  const todo = todos.value.find((t) => t.id === id);
  if (todo?.completed !== undefined) {
    todo.completed = !todo.completed;
  }
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter((t) => t.id !== id);
};

const add = (name) => {
  const newTodo = { id: todos.value.length + 1, name, completed: false };
  todos.value.push(newTodo);
};

const update = (payload) => {
  todos.value = payload;
};

const todosFactory = () => ({
  todosIncompleted,
  todosCompleted,
  toggle,
  deleteTodo,
  add,
  update,
});

export { todosFactory };
