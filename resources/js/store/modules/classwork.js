import axios from 'axios'

const state = {
    Classworks: []
};
const getters = {
    get_Classworks: (state) => state.Classworks,
};

const actions = {
    async fetchClassworks({ commit }, id) {
        const res = await axios.get(
            `/api/classwork/all/${id}`
        );
        commit('FETCH_CLASSWORK', res.data);
        return res.status;

    },

    async createClasswork({ commit }, details) {
        const res = await axios.post(`/api/classwork/insert`, details);
        let newClasswork = res.data;
        state.Classworks.push({...newClasswork })
        return res;
    },
};
const mutations = {
    //CREATE_MAIN_MODULE: (state, main_module) => (state.main_module = main_module),
    FETCH_CLASSWORK: (state, Classworks) => (state.Classworks = Classworks),
};

export default {
    state,
    getters,
    actions,
    mutations
};