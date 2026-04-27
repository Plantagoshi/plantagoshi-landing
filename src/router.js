import { createRouter, createWebHistory } from "vue-router";
import ContactPage from "./pages/ContactPage.vue";
import HomePage from "./pages/HomePage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/contact", component: ContactPage },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return { el: to.hash, behavior: "smooth" };
        }
        return { top: 0 };
    },
});
