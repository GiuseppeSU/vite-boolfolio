import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import ProgettiList from './pages/ProgettiList.vue';
import SingleProgetto from './pages/SingleProgetto.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/contattami',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/blog',
                name: 'progetti',
                component: ProgettiList
            },
            {
                path: '/blog/:progetto',
                name: 'single-progetto',
                component: SingleProgetto
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'not-found',
                component: NotFound
            }
        ]
    }
);

export { router };