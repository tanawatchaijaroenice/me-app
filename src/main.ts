import './assets/main.css';
import { initializeGSAPAndLenis } from './plugin/lenis-gsap.client';
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';

const app = createApp(App)
initializeGSAPAndLenis(app);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.mount('#app')
app.component('Button', Button);