import axios from 'axios'

const state = {
    CurrentUser: [],
    UserRole: null,
    MyCourses: [],

};
const getters = {
    get_CurrentUser: (state) => state.CurrentUser,
    get_UserRole: (state) => state.UserRole,
  
};
const actions = {
    async fetchCurrentUser({ commit }) {
        if(state.CurrentUser.length == 0){
            const res = await axios.get(
                `/api/profile/details`
            );  
     
            state.CurrentUser = res.data;
            state.UserRole = res.data.role
          /*   commit('FETCH_USER', res.data);
            commit('SET_USER_ROLE', res.data.role); */
        }
    },
    clear_current_user({ commit }) {
        state.CurrentUser = [];
        state.UserRole = null;
        state.MyCourses = [];
    },
    async fetchMyCoursesStatus({ commit }){
        if(state.MyCourses.length == 0){
            const res = await axios.get(`/api/course/status`);
            state.MyCourses = res.data;
        }
    },
    setCourseStatus({ commit }, id){
        state.MyCourses.forEach(item => {
            if(item.id == id){
                item.status = 1;
            }
        });
    }
};
const mutations = {
    FETCH_USER: (state, CurrentUser) => (state.CurrentUser = CurrentUser),
    SET_USER_ROLE: (state, UserRole) => (state.UserRole = UserRole),

};

export default {
    state,
    getters,
    actions,
    mutations
};