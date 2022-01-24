import axios from 'axios'

const state = {
    allStudents: []
};
const getters = {
    getStudentList: state => state.allStudents,
};

const actions = {
    async fetchAllStudents({ commit }, {course_id: course_id, class_id: class_id}) {
        const res = await axios.get(
            `/api/student/all/${course_id}/${class_id}`
        );
        commit('FETCH_STUDENTS', res.data.StudentList);
    },
};
const mutations = {
    FETCH_STUDENTS: (state, allStudents) => (state.allStudents = allStudents),

};

export default {
    state,
    getters,
    actions,
    mutations
};