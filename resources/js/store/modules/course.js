import axios from 'axios'

const state = {
    courseInfo: [

    ],
    completed: null,
    current_course: null
};
const getters = {
    getcourseInfo: (state) => state.courseInfo,
    getStatus: (state) => state.completed,

};

const actions = {
    async fetchScourse({ commit}, id) {
        if(state.current_course != id || state.courseInfo.completed != 1){
            state.current_course = id;
            const res = await axios.get(
                `/api/course/ShowCourse/${id}`
            ).then((res) => {
                commit('setcourseInfo', res.data);
            });
        }
    },
    async UpdateJoinCount() {
        if(state.courseInfo.join_request_count != 0){
            state.courseInfo.join_request_count--;
        }
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