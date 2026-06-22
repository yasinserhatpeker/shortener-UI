import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OpenAPI } from './services/api'

OpenAPI.BASE=import.meta.env.VITE_API_BASE_URL;

createApp(App).mount('#app')
