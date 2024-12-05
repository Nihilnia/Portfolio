import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue"; // Correctly referencing HomePage
import ProjectsPage from "../pages/ProjectsPage.vue";
import AboutPage from "@/pages/AboutPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/projects", component: ProjectsPage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
