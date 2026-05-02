import { createRouter, createWebHistory } from "vue-router";
import ContactPage from "./pages/ContactPage.vue";
import HomePage from "./pages/HomePage.vue";
import TimelinePage from "./pages/TimelinePage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/timeline", component: TimelinePage },
    { path: "/contact", component: ContactPage },
    { path: "/:pathMatch(.*)*", component: NotFoundPage },
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
