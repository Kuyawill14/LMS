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
            console.log(res.data[0]);
            commit('setcourseInfo', res.data[0]);
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