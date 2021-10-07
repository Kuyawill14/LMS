import axios from 'axios'

const state = {
    Classworks: [],
    classwork_show_details: {},
    current_classwork_id: null,
    current_course_id: null,
};
const getters = {
    get_Classworks: (state) => state.Classworks,
    get_classwork_show_details : (state) => state.classwork_show_details,
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
        //state.Classworks.push({ })
        return res;
    },

    async fetchClassworkShowDetails({ commit }, data) {
        if(data.classwork_id != state.current_classwork_id || data.course_id != state.current_course_id){
            state.current_classwork_id = data.classwork_id;
            state.current_course_id = data.course_id;
            const res = await axios.get(`/api/classwork/showDetails/${data.classwork_id}/${data.course_id}`);
            commit('FETCH_CLASSWORK_SHOW_DETAILS', res.data);
        }
    },

};
const mutations = {
    //CREATE_MAIN_MODULE: (state, main_module) => (state.main_module = main_module),
    FETCH_CLASSWORK: (state, Classworks) => (state.Classworks = Classworks),
    FETCH_CLASSWORK_SHOW_DETAILS: (state, classwork_show_details) => (state.classwork_show_details = classwork_show_details),
};

export default {
    state,
    getters,
    actions,
    mutations
};