import axios from 'axios'

const state = {
    final_grades: []
};
const getters = {

    allStudentFinalGrades: state => (student_id) => {
        var grades = state.final_grades.filter(final_grades => final_grades.student_id == student_id);

        return grades.length > 0 ? grades[0].grades : [];


    },


};

const actions = {

    async fetchAllStudentFinalGrades({ commit }, data) {
        ////console.log('ffffck', data);
        const res = await axios.get(
            `/api/grade-book/all-student-finalgrade/${data.course_id}/${data.class_id}`
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