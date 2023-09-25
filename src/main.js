import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Crea una instancia de la aplicación Vue
const app = createApp(App);

// Define el bus de eventos global en la instancia de la aplicación
app.config.globalProperties.$bus = new Object();

// Monta la aplicación en el elemento #app
app.use(router).mount('#app');





// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'


// // Bus de eventos global
// app.config.globalProperties.$bus = new app;


// createApp(App).use(router).mount('#app')



