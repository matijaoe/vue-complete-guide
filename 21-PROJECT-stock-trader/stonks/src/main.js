import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import router from './routes';
import store from './store/index';

import BaseButton from './components/UI/BaseButton.vue';
import BaseContainer from './components/UI/BaseContainer.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);

app.use(router);
app.use(store);

app.mount('#app');
