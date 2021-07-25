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



//Vuex Store
import store from "./store/store";
import router from "./router";

Vue.component('main-component', require('./components/app.vue').default);
/* Vue.component('invite-component', require('./components/classInvites').default); */


Vue.mixin({
    methods: {
        toastSuccess(message) {
            return this.$toasted.success(message, {
                theme: "toasted-primary",
                position: "top-center",
                icon: "done",
                duration: 2000
            });
        },
        toastError(message) {
            return this.$toasted.error(message, {
                theme: "toasted-primary",
                position: "top-center",
                icon: "warning",
                duration: 2000
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