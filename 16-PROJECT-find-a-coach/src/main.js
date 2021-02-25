import { createApp } from 'vue';

import router from './routes';
import store from './store/index';
import App from './App';
import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import BaseBadge from './components/UI/BaseBadge';
import BasePrice from './components/UI/BasePrice';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-price', BasePrice);

app.mount('#app');
