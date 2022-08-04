import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import router from "./router";
import store from './store';
import antDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(router).use(store).use(antDesignVue).mount('#app');
