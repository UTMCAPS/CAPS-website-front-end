import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import PeopleDirectory from "@/views/PeopleDirectory.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/people",
    name: "PeopleDirectory",
    component: PeopleDirectory,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
