import axios from 'axios'

const state = {
    gradingCriteria: []
};
const getters = {
    get_gradingCriteria: (state) => state.gradingCriteria,

};

const actions = {
    async fetchGradingCriteria({ commit }, id) {

        const res = await axios.get(
            `/api/grading-criteria/all/${id}`
        ).then((res) => {
            console.log(res.data);
            commit('SET_CRITERIA', res.data);
        });
    },

    async addGradingCriteria({ commit }, criteriaItem) {

        let res = await axios.post(`/api/grading-criteria/insert`, { grading_criteria: criteriaItem });

        let newCriteria = res.data;
        if (res.data[0] == 'error') {

            return newCriteria;
        }

        commit("ADD_CRITERIA", newCriteria);
        // state.gradingCriteria.push({...newCriteria });
        return ['no error'];
    },
    async updateGradingCriteria({ commit }, criteriaItem) {
        let res = await axios
            .post(`/api/grading-criteria/update/${criteriaItem.id}`, { grading_criteria: criteriaItem })


        let newgradingCriteria = res.data;

        if (res.data[0] == 'error') {

            return newgradingCriteria;
        }
        commit("UPDATE_CRITERIA", newgradingCriteria);
        return ['no error'];

    },


    async removeGradingCriteria({ commit }, id) {

        let res = await axios.delete(`/api/grading-criteria/remove/${id}`);

        let message = res.data;


        commit("REMOVE_CRITERIA", id);
        // state.gradingCriteria.push({...newCriteria });
        return message;
    },


};
const mutations = {
    SET_CRITERIA: (state, gradingCriteria) => (state.gradingCriteria = gradingCriteria),
    ADD_CRITERIA: (state, gradingCriteria) => (state.gradingCriteria.push(gradingCriteria)),
    REMOVE_CRITERIA(state, id) {
        var index = state.gradingCriteria.findIndex(gradingCriteria => gradingCriteria.id == id)
        state.gradingCriteria.splice(index, 1);
    },
    UPDATE_CRITERIA(state, newgradingCriteria) {
        const idx = state.gradingCriteria.indexOf(
            state.gradingCriteria.find(c => {
                c.id === newgradingCriteria.id;
            })
        );
        state.gradingCriteria.splice(idx, 1, newgradingCriteria);
    },
    UPDATE_CRITERIA: (state, newgradingCriteria) => {
        var index = state.gradingCriteria.findIndex(function(item, i) {
            return item.id === newgradingCriteria.id;
        });
        state.gradingCriteria[index] = newgradingCriteria;
        state.gradingCriteria = JSON.parse(JSON.stringify(state.gradingCriteria))

    },
};

export default {
    state,
    getters,
    actions,
    mutations
};