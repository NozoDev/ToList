import { createRouter, createWebHistory } from "vue-router";
import TaskList from "../components/TaskList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TaskList,
    },
    {
      path: "/new",
      name: "new",
      component: () => import("../components/NewTodoView.vue"),
    },
  ],
});

export default router;
