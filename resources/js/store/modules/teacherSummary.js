import axios from 'axios'

const state = {
    allTeachers: [],
    teacherDetails: []
};
const getters = {
    getTeachersSumarry: state => state.allTeachers,
    filterTeacherSumarry: state => (user_id) => {
        return state.allTeachers.filter(allTeachers => allTeachers.user_id == user_id)[0];


    },
    getTeacherDetails: state => state.teacherDetails,


};

const actions = {
    async teacherSummarryData({
        commit
    }, id) {
        const res = await axios.get(
            `/api/admin/teachers/all/summarry`
        );
        //////console.log(res.data);
        commit('FETCH_TEACHERS', res.data);
    },

    async fetchTeacherDetails({
        commit
    }, id) {
        const res = await axios.get(
            '/api/admin/teachers/profile/' + id
        );
        ////console.log(res.data);
        commit('FETCH_TEACHERS', res.data);
    },
};
const mutations = {
    FETCH_TEACHERS: (state, allTeachers) => (state.allTeachers = allTeachers),
    FETCH_TEACHER_DETAILS: (state, teacherDetails) => (state.teacherDetails = teacherDetails),

};

export default {
    state,
    getters,
    actions,
    mutations
};