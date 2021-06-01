import axios from 'axios'

const state = {
    sub_module_progress: []
};
const getters = {
    getStudentSubModuleProgress: (state) => state.sub_module_progress,
    // getSub_module: state => id => {
    //     return state.sub_module.filter(sub_module => sub_module.main_module_id == id);


    // }

};

const actions = {
    async fetchStudentSubModuleProgress({ commit }, id) {

        const res = await axios.get(
            `/api/student_sub_module/all/${id}`
        );
        //console.log(res.data);
        commit('SET_STUDENT_PROGRESS', res.data);

    },

    async addSubStudentProgress({ commit }, SubStudentProgressForm) {

        const res = await axios.post(`/api/student_sub_module/insert`, SubStudentProgressForm);

        let newSubModuleProgress = res.data;
        commit("SET_STUDENT_PROGRESS", newSubModuleProgress);

        return res;
    },



};
const mutations = {
    SET_STUDENT_PROGRESS: (state, sub_module_progress) => (state.sub_module_progress = sub_module_progress),

};

export default {
    state,
    getters,
    actions,
    mutations
};