import axios from 'axios'

const state = {

    module_progress: [],

    sub_module_progress: []
};
const getters = {

    getStudentModuleProgress: (state) => state.module_progress,
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
        //////console.log(res.data);
        commit('SET_STUDENT_PROGRESS', res.data);

    },

    async addSubStudentProgress({ commit }, SubStudentProgressForm) {

        const res = await axios.post(`/api/student_sub_module/insert`, SubStudentProgressForm);

        let newSubModuleProgress = res.data;
        commit("SET_STUDENT_PROGRESS", newSubModuleProgress);

        return res;
    },

    async studentmodule_progress({ commit }, id) {

        const res = await axios.get(
            `/api/student_sub_module/student_progress/${id}`
        );

        commit('FETCH_STUDENT_MODULE_PROGRESS', res.data);
        return;
    },


};
const mutations = {

    SET_STUDENT_PROGRESS: (state, sub_module_progress) => (state.sub_module_progress = sub_module_progress),

    FETCH_STUDENT_MODULE_PROGRESS: (state, module_progress) => (state.module_progress = module_progress),
};

export default {
    state,
    getters,
    actions,
    mutations
};