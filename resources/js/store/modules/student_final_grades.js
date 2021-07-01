import axios from 'axios'

const state = {
    final_grades: []
};
const getters = {

    allStudentFinalGrades: state => (student_id) => {
        var grades = state.final_grades.filter(final_grades => final_grades.student_id == student_id);
        return grades;


    },


};

const actions = {

    async fetchAllStudentFinalGrades({ commit }, id) {

        const res = await axios.get(
            `/api/grade-book/all-student-finalgrade/${id}`
        );

        commit('FETCH_STUDENT_FINAL_GRADES', res.data);
        return;
    },



};
const mutations = {
    FETCH_STUDENT_FINAL_GRADES: (state, final_grades) => (state.final_grades = final_grades),
};

export default {
    state,
    getters,
    actions,
    mutations
};