import axios from 'axios'

const state = {
    CurrentUser: []
};
const getters = {
    get_CurrentUser: (state) => state.CurrentUser,
};

const actions = {
    async fetchCurrentUser({ commit }, id) {
        const res = await axios.get(
            `/api/user/`
        );
        commit('FETCH_USER', res.data);
        return res.data;
    },
};
const mutations = {
    FETCH_USER: (state, CurrentUser) => (state.CurrentUser = CurrentUser),
};

export default {
    state,
    getters,
    actions,
    mutations
};