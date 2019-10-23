import { RouteConfig } from 'vue-router/types/router';

export const GamePageRoutes: RouteConfig[] = [
  {
    path: '/app/components/tictactoe',
    name: 'gamepage',
    component: () => import('./GamePage.vue').then((m: any) => m.default),
    meta: {
      requiresAuth: false,
    },
  },
];
