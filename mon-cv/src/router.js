import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import CV from './views/CV.vue';
import Contact from './views/Contact.vue';

const router = createRouter({
  history: createWebHashHistory(), 
  routes: [
    { path: '/', component: Home },
    { path: '/cv', component: CV },
    { path: '/contact', component: Contact }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
