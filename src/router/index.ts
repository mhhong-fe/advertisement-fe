import { createRouter, createWebHistory } from 'vue-router';

import Plan from '../pages/plan/index.vue';
import Channel from '../pages/channel/index.vue';

const routes = [
    { path: '/ad', redirect: '/plan' },
    { path: '/ad/plan', component: Plan },
    { path: '/ad/channel', component: Channel },
];

const router = createRouter({
    history: createWebHistory('fe'),
    routes,
});

export default router;
