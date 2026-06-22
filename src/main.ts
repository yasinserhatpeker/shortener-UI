import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OpenAPI } from './services/api'
import router from './router/index.ts';

const app = createApp(App)
OpenAPI.BASE=import.meta.env.VITE_API_BASE_URL;
app.use(router)
app.mount('#app')
