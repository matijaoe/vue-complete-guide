import { createApp } from 'vue';

import loggerMixin from '@/mixins/logger.js';

import App from './App.vue';

const app = createApp(App);

app.mixin(loggerMixin);

app.mount('#app');
