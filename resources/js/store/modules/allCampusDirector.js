import axios from 'axios'

const state = {
    allCampusDirector: []
};
const getters = {
    getCampusDirector: state => state.allCampusDirector,
    filterCampusDirector: state => (user_id) => {


        return state.allCampusDirector.filter(allCampusDirector => allCampusDirector.user_id == user_id)[0];


    },

};

const actions = {
    async fetchAllCampusDirector({ commit }) {
        let user_type = 'CampusDirector';
        const res = await axios.get(
            `/api/admin/users/all/${user_type}`
        );
        //////console.log(res.data);
        commit('FETCH_CampusDirector', res.data);



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
    FETCH_CampusDirector: (state, allCampusDirector) => (state.allCampusDirector = allCampusDirector),

};

export default {
    state,
    getters,
    actions,
    mutations
};