/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueModal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
Vue.use(VueMaterial)

import Form from 'vform'
import {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess
} from "vform/src/components/bootstrap4";
window.Form = Form;
// Vue.component(Button.name, Button);
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component(AlertErrors.name, AlertErrors);
Vue.component(AlertSuccess.name, AlertSuccess);
Vue.component('Modal', VueModal)

import router from "./router";
//Vuex Store
import store from "./store/store";

Vue.component('example-component', require('./components/app.vue').default);


const app = new Vue({
    router,
    store,
    el: '#app',
});