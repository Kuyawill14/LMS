import axios from "axios";

const state = {
    classList: []
};
const getters = {
    allClass: state => state.classList,
    getClass: state => id => {
        return state.classList.find(classList => classList.id === id);
    }
};

const actions = {
    async fetchClassList({ commit }) {
        const response = await axios.get("/api/class/all");

        commit("setClassList", response.data);
    },
    async fetchSubjectCourseClassList({ commit }, course_id) {
        const response = await axios.get("/api/class/subjectCourseClassList/all/" + course_id);

        commit("setClassList", response.data);
    },

    async createClass({ commit }, classItem) {
        delete classItem.id;
        let res = await axios.post(`/api/class/insert`, { class: classItem });

        let newCLass = res.data;
        commit("ADD_class", newCLass);
        // state.classList.push({...newCLass });

        return newCLass;
    },

    async updateClass({ commit }, classItem) {
        let response = await axios
            .post(`/api/class/update/${classItem.class_id}`, { class: classItem })
            .then(res => {

                let newCLass = res.data;
                commit("EDIT_class", newCLass);
                return res;
            })
            .catch(e => {
                return e.response;
            });

        return response;
    },

    async joinClass({ commit }, classItem) {
        let res = await axios
            .post(`/api/student/join/${classItem.class_code}`)
            .then(response => {
                if (response.status == 200) {
                    alert(response.data)

                } else if (response.status == 202) {
                    alert(response.data)
                } else {
                    alert(response.data)
                }
            });
    },
    async Unenroll({ commit }, id) {
        let res = await axios
            .delete(`/api/student/${id}`)
            .then(response => {
                Toast.fire({
                    icon: "success",
                    title: "Your have been unrolled to the class."
                });
                let newCLass = response.data;
                commit("Unenroll_class", newCLass);
                return newCLass;

            });


    }


};
const mutations = {
    setClassList: (state, classList) => (state.classList = classList),

    ADD_class: (state, newCLass) => (state.classList = newCLass),
    EDIT_class(state, newCLass) {
        const idx = state.classList.indexOf(
            state.classList.find(c => {
                c.id === newCLass.id;
            })
        );
        state.classList.splice(idx, 1, newCLass);
    },
    //JOIN_class: (state, newCLass) => (state.classList = newCLass),
    Unenroll_class: (state, newCLass) => (state.classList = newCLass),
};

export default {
    state,
    getters,
    actions,
    mutations
};