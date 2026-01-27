import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithubSquare, faLinkedin, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/app.css';

library.add(faGithubSquare, faLinkedin, faFacebookSquare, faInstagramSquare);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.provide('bootstrap', bootstrap);
app.use(router);
app.mount('#app');