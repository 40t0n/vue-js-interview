import { createApp } from 'vue';
import App from './App.vue';
import { vuetify } from './providers/vuetify';
import { pinia } from './providers/pinia';
import './styles/tailwind.css';

createApp(App).use(vuetify).use(pinia).mount('#app');
