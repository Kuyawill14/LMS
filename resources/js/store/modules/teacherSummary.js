import axios from 'axios'

const state = {
    allTeachers: []
};
const getters = {
    getTeachersSumarry: state => state.allTeachers,
    filterTeacherSumarry: state => (user_id) => {
        return state.allTeachers.filter(allTeachers => allTeachers.user_id == user_id)[0];


    },

};

const actions = {
    async teacherSummarryData({
        commit
    }, id) {
        const res = await axios.get(
            `/api/teachers/all/summarry`
        );
        //console.log(res.data);
        commit('FETCH_TEACHERS', res.data);



    },
};
const mutations = {
    FETCH_TEACHERS: (state, allTeachers) => (state.allTeachers = allTeachers),

};

export default {
    state,
    getters,
    actions,
    mutations
};