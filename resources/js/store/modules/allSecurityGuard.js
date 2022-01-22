import axios from 'axios'

const state = {
    allSecurityGuard: []
};
const getters = {
    getSecurityGuard: state => state.allSecurityGuard,
    filterSecurityGuard: state => (user_id) => {


        return state.allSecurityGuard.filter(allSecurityGuard => allSecurityGuard.user_id == user_id)[0];


    },

};

const actions = {
    async fetchAllSecurityGuard({ commit }) {
        let user_type = 'SecurityGuard';
        const res = await axios.get(
            `/api/admin/users/all/${user_type}`
        );
        //////console.log(res.data);
        commit('FETCH_SecurityGuard', res.data);



    },

    // async createMainModule({ commit }, moduleForm) {

    //     var res = await axios.post(`/api/main_module/insert`, { moduleForm: moduleForm });

    //     var newMainModule = res.data;
    //     // commit("CREATE_MAIN_MODULE", newMainModule);
    //     state.main_module.push({...newMainModule })


    //     return res;
    // },
};
const mutations = {
    FETCH_SecurityGuard: (state, allSecurityGuard) => (state.allSecurityGuard = allSecurityGuard),

};

export default {
    state,
    getters,
    actions,
    mutations
};