/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'

import router from "./router";
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: '#EF6C00',
    failedColor: '#B71C1C',
    thickness: '6px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
        
});


import Toasted from 'vue-toasted';
import vuetify from './plugin/vuetify';
import VueCoreVideoPlayer from 'vue-core-video-player'
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
Vue.use(VueCoreVideoPlayer)


//Vuex Store
import store from "./store/store";

Vue.component('example-component', require('./components/app.vue').default);


const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify,
});