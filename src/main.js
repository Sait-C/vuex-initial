import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store.js';

const app = createApp(App);

// Now Vuex is going to be installed on our application
app.use(store);

app.mount('#app');