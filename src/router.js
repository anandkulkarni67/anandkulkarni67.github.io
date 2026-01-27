import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home-Component.vue';
import Photography from './components/Photography-component.vue';
import Projects from './components/Projects-component.vue';
import Resume from './components/Resume-component.vue';

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;