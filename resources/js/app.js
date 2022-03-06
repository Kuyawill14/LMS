/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

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

import VueCountdownTimer from 'vuejs-countdown-timer';
Vue.use(VueCountdownTimer);

import VueElementLoading from "vue-element-loading";
Vue.component("VueElementLoading", VueElementLoading);

//QuilEditor
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
Vue.use(VueQuillEditor, /* { default global options } */ )

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'
Vue.use(VueViewer)

//Vuex Store
import store from "./store/store";
import router from "./router";

import titleMixin from './mixins/titleMixin';

axios.interceptors.response.use(undefined, function (error) {
    if(error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            store.dispatch('clearClassesNames');
            store.dispatch('clear_current_user')
            return router.push('/login')
        }
    }
})

Vue.component('main-component', require('./components/app.vue').default);
Vue.mixin({
    ...titleMixin,
    methods: {
        toastNormal(message) {
            return this.$toasted.show(message, {
                theme: "toasted-primary",
                position: "top-right",
                duration: 7000,
            });
        },

        toastSuccess(message) {
            return this.$toasted.success(message, {
                theme: "toasted-primary",
                position: "top-right",
                icon: "check",
                duration: 7000
            });
        },

        toastError(message) {
            return this.$toasted.error(message, {
                theme: "toasted-primary",
                position: "top-right",
                icon: "warning",
                duration: 7000
            });
        },
        toastInfo(message) {
            return this.$toasted.show(message, {
                theme: "toasted-primary",

                position: "top-center",
                icon: "info",
                duration: 7000
            });
        },
    }
})

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify,
});