import { createRouter, createWebHistory } from 'vue-router';
import Profil from './views/Profil.vue';
import Formation from './views/Formation.vue';
import ExperiencePro from './views/ExperiencePro.vue';
import Contact from './views/Contact.vue';

const routes = [
  { path: '/', component: Profil },
  { path: '/formation', component: Formation },
  { path: '/experience', component: ExperiencePro },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
