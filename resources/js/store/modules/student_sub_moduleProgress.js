import axios from 'axios'

const state = {
    sub_module: [],
    percentage: 0
};
const getters = {
    getAll_sub_module: (state) => state.sub_module,
    getSub_module: state => id => {
        return state.sub_module.filter(sub_module => sub_module.main_module_id == id);
    },
    getStudentModulePercentage: (state) => state.percentage,

};

const actions = {
    async fetchSubModule({ commit }, id) {

        const res = await axios.get(
            `/api/sub_module/all/${id}`
        );
        //console.log(res.data);
        commit('FETCH_SUB_MODULE', res.data);

    },

    async createSubModule({ commit }, SubmoduleForm) {

        const res = await axios.post(`/api/sub_module/insert`, SubmoduleForm);

        let newSubModule = res.data;
        // commit("CREATE_SUB_MODULE", newSubModule);
        state.sub_module.push({...newSubModule })

        return res;
    },
    async studentModulePercentage({ commit }, id) {

        const res = await axios.get(
            `/api/student_sub_module/student_progress/${id}`
        );
        //console.log(res.data);
        commit('FETCH_STUDENT_MODULE_PERCENTAGE', res.data);
    },


};
const mutations = {
    CREATE_SUB_MODULE: (state, sub_module) => (state.sub_module = sub_module),
    FETCH_SUB_MODULE: (state, sub_module) => (state.sub_module = sub_module),
    FETCH_STUDENT_MODULE_PERCENTAGE: (state, percentage) => (state.percentage = percentage),
};

export default {
    state,
    getters,
    actions,
    mutations
};