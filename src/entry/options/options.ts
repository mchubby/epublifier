import { createApp } from 'vue'
import MyApp from "./OptionsApp.vue";
import PrimeVue from 'primevue/config';

const app = createApp(MyApp);
app.use(PrimeVue);

app.mount('#app')