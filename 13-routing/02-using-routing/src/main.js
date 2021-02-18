// https://02-using-routing.vercel.app

import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import TheFooter from './components/nav/TheFooter.vue';

const app = createApp(App);

app.use(router);
app.component('the-footer', TheFooter);

app.mount('#app');
