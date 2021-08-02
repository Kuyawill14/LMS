import axios from "axios";

const state = {
    courseList: [],
    courseStatus: JSON.parse(localStorage.getItem(btoa('course-status')))
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
        localStorage.removeItem(btoa('course-status'));
        state.courseStatus = [];
        response.data.forEach(item => {
            state.courseStatus.push({
                id: btoa(item.id),
                status: btoa(item.completed)
            })
        });
        localStorage.setItem(btoa('course-status'), JSON.stringify(state.courseStatus));
        commit("setcourseList", response.data);
    },
    async createCourse({ commit }, courseItem) {
        delete courseItem.id;
        let res = await axios.post(`/api/course/insert`, { courseItem: courseItem });
        localStorage.removeItem(btoa('course-status'));
        let newCourse = res.data;
        console.log(newCourse);
        state.courseStatus.push({
            id: btoa(newCourse.id),
            status: btoa(0)
        })
        localStorage.setItem(btoa('course-status'), JSON.stringify(state.courseStatus));
        commit("ADD_COURSE", newCourse);
        return newCourse;
    },

    async updateCourse({ commit }, courseItem) {
        console.log(courseItem);
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
    setCourseStatus({ commit }, id){
        state.courseStatus.forEach(item => {
            if(atob(item.id) == id){
                item.status = btoa(1);
                localStorage.setItem(btoa('course-status'), JSON.stringify(state.courseStatus));
            }
        });
    },
    ReSetCourseStatus({ commit }, id){
        let find = false
        state.courseStatus = JSON.parse(localStorage.getItem(btoa('course-status')));
        state.courseStatus.forEach(item => {
            if(id == atob(item.id)){
                find =  true;
            }
        });
        if(find == true){
            return find;
        }
        else{
            return find;
        }  
    }


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