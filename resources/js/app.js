/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'

import Toasted from 'vue-toasted';
import vuetify from './plugin/vuetify';


Vue.use(Toasted)

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


import router from "./router";
//Vuex Store
import store from "./store/store";

Vue.component('example-component', require('./components/app.vue').default);


const app = new Vue({
    router,
    store,
    vuetify,
    el: '#app',
});