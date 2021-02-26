// https://16-project-find-a-coach-mat2ja.vercel.app

import { createApp } from 'vue';

import router from './routes';
import store from './store/index';
import App from './App';

import axios from 'axios';
import VueAxios from 'vue-axios';

import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import BaseBadge from './components/UI/BaseBadge';
import BasePrice from './components/UI/BasePrice';
import BaseSpinner from './components/UI/BaseSpinner';
import BaseDialog from './components/UI/BaseDialog';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-price', BasePrice);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
