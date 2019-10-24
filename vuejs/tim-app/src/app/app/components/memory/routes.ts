import { RouteConfig } from 'vue-router/types/router';

export const MemoryRoutes: RouteConfig[] = [
    {
        path: '/app/components/memory',
        name: 'memorypage',
        component: () => import('./MemoryPage.vue').then((m: any) => m.default),
        meta: {
            requiresAuth: false,
        },
    },
]; 