import axios from 'axios'

const state = {
    classInfo: [

    ]
};
const getters = {
    getclassInfo: (state) => state.classInfo,

};

const actions = {
    async fetchSclass({ commit }, id) {

        const res = await axios.get(
            `/api/class/ShowClass/${id}`
        ).then((res) => {
            commit('setClassInfo', res.data[0]);
            ////console.log(res.data);
        });

    }
};
const mutations = {
    setClassInfo: (state, classInfo) => (state.classInfo = classInfo),

};

export default {
    state,
    getters,
    actions,
    mutations
};