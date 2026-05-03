import './assets/main.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue';
import AOS from 'aos';
import App from './App.vue';
import { i18n } from './composables/useI18n';
import { router } from './router';

AOS.init({ duration: 700, once: true });

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');