import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import ProgettiList from './pages/ProgettiList.vue';
//import SingleProgetto from './pages/SingleProgetto.vue';

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
            /* {
                 path: '/blog/:slug',
                 name: 'single-progetto',
                 component: SingleProgetto
             }*/
        ]
    }
);

export { router };