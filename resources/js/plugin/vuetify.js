import Vue from 'vue'
import DatetimePicker from 'vuetify-datetime-picker'
import Vuetify from 'vuetify/dist/vuetify.min.js'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.use(DatetimePicker)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#EF6C00',
                secondary: '#696969',
                accent: '#8c9eff',
                error: '#b71c1c',
                grey_active: '#F5F5F5',
               
            },
        },
    },
})