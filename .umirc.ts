import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/layout/index', routes: [
        { path: '/', component: '@/pages/react-demo/welcome/index' },
        { path: 'react-demo/chess', component: '@/pages/react-demo/chess/index' }
      ]
    },
  ],
  fastRefresh: {},
});
