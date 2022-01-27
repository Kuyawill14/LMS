import axios from 'axios';
const state = {
    classesNames: [],
};
const getters = {
    getClassesNames: (state) => state.classesNames,

};

const actions = {
    async fetchClassesNames({ commit }, id) {
        const response = await axios.get(`/api/class/class_list/${id}`);
        commit("setClassesNames", response.data);
    },

    async clearClassesNames({ commit }, id) {
        state.classesNames = [];
    }

};
const mutations = {
    setClassesNames: (state, classesNames) => (state.classesNames = classesNames),

};

export default {
    state,
    getters,
    actions,
    mutations
};