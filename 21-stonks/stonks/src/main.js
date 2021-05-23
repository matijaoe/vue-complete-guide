import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import router from './routes';
import store from './store/index';

import BaseButton from './components/UI/BaseButton.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import PageTitle from './components/UI/PageTitle.vue';
import BaseSection from './components/UI/BaseSection.vue';
import TrendingUpIcon from './components/UI/TrendingUpIcon.vue';
import TrendingDownIcon from './components/UI/TrendingDownIcon.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('page-title', PageTitle);
app.component('base-section', BaseSection);
app.component('trending-up', TrendingUpIcon);
app.component('trending-down', TrendingDownIcon);

app.use(router);
app.use(store);

app.mount('#app');
