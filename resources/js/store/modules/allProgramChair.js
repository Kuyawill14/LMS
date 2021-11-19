import axios from 'axios'

const state = {
    allProgramChair: []
};
const getters = {
    getProgramChair: state => state.allProgramChair,
    filterProgramChair: state => (user_id) => {


        return state.allProgramChair.filter(allProgramChair => allProgramChair.user_id == user_id)[0];


    },

};

const actions = {
    async fetchAllProgramChair({ commit }) {
        let user_type = 'ProgramChair';
        const res = await axios.get(
            `/api/admin/users/all/${user_type}`
        );
        //////console.log(res.data);
        commit('FETCH_PROGRAMCHAIR', res.data);



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
    FETCH_PROGRAMCHAIR: (state, allProgramChair) => (state.allProgramChair = allProgramChair),

};

export default {
    state,
    getters,
    actions,
    mutations
};