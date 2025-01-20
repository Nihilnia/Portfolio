import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import TheProjects from "@/pages/TheProjects.vue";
import TheLab from "@/pages/TheLab.vue";
import TheNihil from "@/pages/TheNihil.vue";
import ThePortfolio from "@/pages/ThePortfolio.vue";
import UsefulLinks from "@/pages/UsefulLinks.vue";

const routes = [
  { path: "/", component: HomePage }, // Home route remains "/"
  { path: "/projects", component: TheProjects },
  { path: "/lab", component: TheLab },
  { path: "/about-me", component: TheNihil },
  { path: "/this-project", component: ThePortfolio },
  { path: "/useful-links", component: UsefulLinks },
];

const router = createRouter({
  history: createWebHistory("/Portfolio/"), // Ensure all routes are prefixed with '/Portfolio/'
  routes,
});

export default router;
