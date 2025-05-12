import { createRouter, createWebHistory } from 'vue-router';

import Home from "@/Views/Home.vue";
import About from "@/Views/About.vue";
import Contact from "@/Views/Contact.vue";
import NotFound from "@/Views/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not-found',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router;