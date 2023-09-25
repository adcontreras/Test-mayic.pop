import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')

// const app = createApp(App);
// app.use(router); // Usa Vue Router en tu aplicación
// app.mount('#app');

createApp(App).use(router).mount('#app')
