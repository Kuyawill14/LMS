import axios from 'axios'

const state = {
    CurrentUser: [],
    UserRole: null,
    MyCourses: [],
    CurrentStatus: {
        exist: null,
        status: null
    },
    IsAuthenticated: window.localStorage.getItem('is_authenticated'),
    IsVerified: null,
    AccessToken: window.localStorage.getItem('personal_access_token'),
    isSuccess: null,
    evaluation_dialog: true,

};
const getters = {
    get_CurrentUser: (state) => state.CurrentUser,
    get_UserRole: (state) => state.UserRole,
    get_evaluation_dialog: (state) => state.evaluation_dialog,

};
const actions = {
    async IsAuthenticated({ commit, actions }) {
      
        if(state.CurrentUser.length == 0){
            const res = await axios.get(`/api/authenticated`)
            .catch((e) => {
                commit('SET_AUTHENTICATED', false);
                window.localStorage.removeItem('is_authenticated');
            })

            if (res.data == true) {
                window.localStorage.setItem('is_authenticated', true);
                commit('SET_AUTHENTICATED', true);
            }
          
        }   
        else{
            commit('SET_AUTHENTICATED', true);
            window.localStorage.setItem('is_authenticated', true);
        }
        
    },
    async fetchCurrentUser({ commit }) {
        if (state.CurrentUser.length == 0) {
          /*   const res = await axios.get(
                `/api/profile/details`
            ); */
            const res = await axios.get(`/api/profile/details`)
            .catch((e) => {
                state.isSuccess = false;
            })

            if(res){
                state.isSuccess = true;
                state.CurrentUser = res.data;
                state.UserRole = res.data.role;
                state.IsVerified = res.data.verified;
                return res.status;
            }
        }
    },
    clear_current_user({ rootState  }) {
        state.CurrentUser = [];
        state.UserRole = null;
        state.MyCourses = [];
        state.IsAuthenticated = false;
        state.AccessToken = null;
        rootState.classwork.current_classwork_id = null;
        rootState.classwork.current_course_id = null;
        window.localStorage.removeItem('is_authenticated');
        state.evaluation_dialog = true;
    },
    async fetchMyCoursesStatus({ commit }) {
        if (state.MyCourses.length == 0) {
            const res = await axios.get(`/api/course/status`);
            state.MyCourses = res.data;
            return { 'status': res.status };
        } else {
            return { 'status': 200 };
        }
    },
    async fetchMyCoursesStatusAgain({ commit }) {
        const res = await axios.get(`/api/course/status`);
        state.MyCourses = res.data;
    },
    async setCourseStatus({ commit }, id) {
        
        if(state.MyCourses.includes())
        state.MyCourses.forEach(item => {
            if (item.id == id) {
                item.status = 1;
            }
        });
    },
    async CheckMyCourse({ commit }, course_id) {
        let exist = false;
        let status = 0;
        state.MyCourses.forEach(item => {
            if (item.id == course_id) {
                exist = true;
                if (item.status == 1) {
                    status = item.status;
                }
            }
        });

        state.CurrentStatus.exist = exist;
        state.CurrentStatus.status = status;
        //return { 'exist': exist, 'status': status };
    },
    async setAsOffline({ commit }){
        axios.post('/api/logout')
        .then(() => {
           
        })
        .catch((e) => {
        })
        commit('SET_AUTHENTICATED', false);
        window.localStorage.removeItem('IsAuthenticated');
        window.localStorage.removeItem('personal_access_token');
    },
    async setEvaulationDialog({ commit }){
        state.evaluation_dialog = false;
    }

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