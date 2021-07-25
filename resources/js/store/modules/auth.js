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
        let status;
        axios.get('/sanctum/csrf-cookie').then(response => {
            form.post('/api/login')
                .then((res) => {
                    if(res.status == 200) {
                        //this.$store.dispatch('fetchCurrentUser');
                        //return res;
               
                        router.push({ path: "/" })
                    }
                    else{
                       
                        status =  203;
                    
                    }
                    
                })

                //return response;
           
        });
        return status;
        
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