import axios from 'axios'

const state = {
    main_module: []
};
const getters = {
    getmain_module: (state) => state.main_module,


};

const actions = {
    async fetchMainModule({ commit }, id) {

        const res = await axios.get(
            `/api/main_module/all/${id}`
        );
        //console.log(res.data);
        commit('FETCH_MAIN_MODULE', res.data);

    },

    async createMainModule({ commit }, moduleForm) {

        const res = await axios.post(`/api/main_module/insert`, { moduleForm: moduleForm });

        let newMainModule = res.data;
        // commit("CREATE_MAIN_MODULE", newMainModule);
        state.main_module.push({...newMainModule })


        return res;
    },



};
const mutations = {
    CREATE_MAIN_MODULE: (state, main_module) => (state.main_module = main_module),
    FETCH_MAIN_MODULE: (state, main_module) => (state.main_module = main_module),
};

export default {
    state,
    getters,
    actions,
    mutations
};