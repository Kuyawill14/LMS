import axios from 'axios'

const state = {
    CurrentUser: [],
    UserRole: null,
    MyCourses: [],
    CurrentStatus: {},
    IsAuthenticated: window.localStorage.getItem('IsAuthenticated')

};
const getters = {
    get_CurrentUser: (state) => state.CurrentUser,
    get_UserRole: (state) => state.UserRole,
  
};
const actions = {
    async IsAuthenticated({commit, actions}){
        const res = await axios.get(`/api/authenticated`)
        .catch((e)=>{
            commit('SET_AUTHENTICATED', false);
            window.localStorage.removeItem('IsAuthenticated');
        })
        if(res.data == true){
            commit('SET_AUTHENTICATED', true);
            window.localStorage.setItem('IsAuthenticated', true);
        }
    },
    async fetchCurrentUser({ commit }) {
        if(state.CurrentUser.length == 0){
            const res = await axios.get(
                `/api/profile/details`
            );
            
            state.CurrentUser = res.data;
            state.UserRole = res.data.role
            return res.status;
          /*   commit('FETCH_USER', res.data);
            commit('SET_USER_ROLE', res.data.role); */
     
        }
    },
    clear_current_user({ commit }) {
        state.CurrentUser = [];
        state.UserRole = null;
        state.MyCourses = [];
        state.IsAuthenticated = false;
        window.localStorage.removeItem('IsAuthenticated');
    },
    async fetchMyCoursesStatus({ commit }){
        if(state.MyCourses.length == 0){
            const res = await axios.get(`/api/course/status`);
            state.MyCourses = res.data;
            return res;
        }
        else{
            return {'status': 200};
        }
    },
    setCourseStatus({ commit }, id){
        console.log(id);
        state.MyCourses.forEach(item => {
            if(item.id == id){
                item.status = 1;
            }
        });
    },
    CheckMyCourse({ commit }, course_id){
        //console.log(course_id);
        let exist = false;
        let status = 0;
        state.MyCourses.forEach(item => {
            if(item.id == course_id){
                exist = true;
                if(item.status == 1){
                    status = item.status;
                }
            }
        });
       
        state.CurrentStatus.exist = exist;
        state.CurrentStatus.status = status;
        return {'exist' : exist, 'status': status };
    },

};
const mutations = {
    FETCH_USER: (state, CurrentUser) => (state.CurrentUser = CurrentUser),
    SET_USER_ROLE: (state, UserRole) => (state.UserRole = UserRole),
    SET_AUTHENTICATED: (state, IsAuthenticated) => (state.IsAuthenticated = IsAuthenticated),

};

export default {
    state,
    getters,
    actions,
    mutations
};