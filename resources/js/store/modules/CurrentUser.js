import axios from 'axios'

const state = {
    CurrentUser: [],
    UserRole: null,

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
            commit('FETCH_USER', res.data);
            commit('SET_USER_ROLE', res.data.role);
        }
    },
    setUserRole({ commit }) {
        state.UserRole = localStorage.getItem(btoa('user_role'))
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