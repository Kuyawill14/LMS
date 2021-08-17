import axios from 'axios'

const state = {
    courseInfo: [

    ],
    completed: null
};
const getters = {
    getcourseInfo: (state) => state.courseInfo,
    getStatus: (state) => state.completed,

};

const actions = {
    async fetchScourse({ commit }, id) {
        let check;
        const res = await axios.get(
            `/api/course/ShowCourse/${id}`
        ).then((res) => {
      
            commit('setcourseInfo', res.data);
        });
    }
};
const mutations = {
    setcourseInfo: (state, courseInfo) => (state.courseInfo = courseInfo),
};

export default {
    state,
    getters,
    actions,
    mutations
};