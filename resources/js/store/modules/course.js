import axios from 'axios'

const state = {
    courseInfo: [

    ]
};
const getters = {
    getcourseInfo: (state) => state.courseInfo,

};

const actions = {
    async fetchScourse({ commit }, id) {

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