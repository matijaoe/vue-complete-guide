import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import BaseDialog from './components/UI/BaseDialog';

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
