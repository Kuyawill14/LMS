import axios from 'axios'

const state = {
    classworks_grades: []
};
const getters = {

    AllStudentClassworkGrades: state => (student_id, grading_criteria_id) => {
        return state.classworks_grades.filter(classworks_grades => classworks_grades.student_id == student_id && classworks_grades.grading_criteria_id == grading_criteria_id);
    },
    StudentClassworkGrades: state => (grading_criteria_id) => {
        return state.classworks_grades.filter(classworks_grades => classworks_grades.grading_criteria_id == grading_criteria_id);
    },
    AllStudentClassworkGradesFortable: state => (student_id) => {
        return state.classworks_grades.filter(classworks_grades => classworks_grades.student_id == student_id);
    },

};

const actions = {

    async fetchAllStudentClassworkGrades({ commit }, id) {

        const res = await axios.get(
            `/api/grade-book/classworkGrades/${id}`
        );

        commit('FETCH_STUDENT_CLASSWORK_GRADES', res.data);
        return;
    },

    async fetchStudentClassworkGrades({ commit }, id) {

        const res = await axios.get(
            `/api/grade-book/student-classworkGrades/${id}`
        );

        commit('FETCH_STUDENT_CLASSWORK_GRADES', res.data);
        return;
    },


};
const mutations = {
    FETCH_STUDENT_CLASSWORK_GRADES: (state, classworks_grades) => (state.classworks_grades = classworks_grades),
};

export default {
    state,
    getters,
    actions,
    mutations
};