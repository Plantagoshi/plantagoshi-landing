import './assets/main.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue';
import { createHead } from '@unhead/vue/client';
import AOS from 'aos';
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue';
import { i18n } from './composables/useI18n';
import { router } from './router';

AOS.init({ duration: 700, once: true });

const app = createApp(App);
const head = createHead();
app.use(head);
app.use(i18n);
app.use(router);
app.use(MotionPlugin);
app.mount('#app');