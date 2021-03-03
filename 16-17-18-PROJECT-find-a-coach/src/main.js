// https://16-project-find-a-coach-mat2ja.vercel.app

import { createApp, defineAsyncComponent } from 'vue';

import router from './routes';
import store from './store/index';
import App from './App';

import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import BaseBadge from './components/UI/BaseBadge';
import BasePrice from './components/UI/BasePrice';
import BaseSpinner from './components/UI/BaseSpinner';

// vue will import it only when its required
const BaseDialog = defineAsyncComponent(() =>
	import('./components/UI/BaseDialog')
);

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-price', BasePrice);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
