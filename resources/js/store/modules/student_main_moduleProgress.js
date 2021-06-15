import axios from 'axios'

const state = {
    sub_module: [],
    main_module_progress: [],
    sub_module_progress: []
};
const getters = {

    getStudentMainModuleProgress: (state) => state.main_module_progress,

    SubModuleProgress: state => (id, student_id) => {
        return state.sub_module_progress.filter(sub_module_progress => sub_module_progress.main_module_id == id && sub_module_progress.student_id == student_id);
    },
};

const actions = {

    async studentMainProgress({ commit }, id) {

        const res = await axios.get(
            `/api/student_sub_module/student_main_progress/${id}`
        );
        //console.log(res.data);
        commit('FETCH_STUDENT_MAIN_PROGRESS', res.data);
        return;
    },
    async studentSubProgress({ commit }, id) {

        const res = await axios.get(
            `/api/student_sub_module/student_sub_progress/${id}`
        );
        //console.log(res.data);
        commit('FETCH_STUDENT_SUB_PROGRESS', res.data);
        return;
    },


};
const mutations = {

    FETCH_STUDENT_MAIN_PROGRESS: (state, main_module_progress) => (state.main_module_progress = main_module_progress),
    FETCH_STUDENT_SUB_PROGRESS: (state, sub_module_progress) => (state.sub_module_progress = sub_module_progress),
};

export default {
    state,
    getters,
    actions,
    mutations
};