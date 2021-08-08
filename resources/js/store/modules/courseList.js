import axios from "axios";

const state = {
    courseList: [],
};
const getters = {
    allCourse: state => state.courseList,
    getCourse: state => id => {
        return state.courseList.find(courseList => courseList.id === id);
    }
};

const actions = {
    async fetchCourseList({ commit }) {
        const response = await axios.get("/api/course/all");
        commit("setcourseList", response.data);
    },
    async createCourse({ commit, rootState }, courseItem) {
        delete courseItem.id;
        let res = await axios.post(`/api/course/insert`, { courseItem: courseItem });
        let newCourse = res.data;
        rootState.CurrentUser.MyCourses.push({
            id: newCourse.id,
            status: 0
        })
        commit("ADD_COURSE", newCourse);
        return newCourse;
    },

    async updateCourse({ commit }, courseItem) {
        console.log('course_item', courseItem);
        let response = await axios
            .post(`/api/course/update/${courseItem.id}`, { courseItem: courseItem })
            .then(res => {

                let newCourse = res.data;
                commit("EDIT_COURSE", newCourse);
                return res;
            })
            .catch(e => {
                return e.response;
            });

        return response;
    },


};
const mutations = {
    setcourseList: (state, courseList) => (state.courseList = courseList),

    ADD_COURSE: (state, newCourse) => (state.courseList.push(newCourse)),
    EDIT_COURSE(state, newCourse) {
        const idx = state.courseList.indexOf(
            state.courseList.find(c => {
                c.id === newCourse.id;
            })
        );
        state.courseList.splice(idx, 1, newCourse);
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};