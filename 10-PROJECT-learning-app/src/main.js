import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
