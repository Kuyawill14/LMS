import axios from 'axios'
import router from "../../router";
const state = {
    CurrentUser: []
};
const getters = {
    //get_CurrentUser: (state) => state.CurrentUser,
};

const actions = {

    async login({}, form) {
        axios.get('/sanctum/csrf-cookie').then(response => {
            form.post('/api/login')
                .then((res) => {
                    if (res.status == 200) {
                        //this.$store.dispatch('fetchCurrentUser');
                        router.push({ path: "/" })
                    }
                })
        });
    },


};
const mutations = {
    //FETCH_USER: (state, CurrentUser) => (state.CurrentUser = CurrentUser),
};

export default {
    state,
    getters,
    actions,
    mutations
};