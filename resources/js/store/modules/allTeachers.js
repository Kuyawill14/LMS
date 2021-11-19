import axios from 'axios'

const state = {
    allTeachers: []
};
const getters = {
    getTeachers: state => state.allTeachers,
    filterTeacher: state => (user_id) => {


        return state.allTeachers.filter(allTeachers => allTeachers.user_id == user_id)[0];


    },

};

const actions = {
    async fetchAllTeachers({ commit }, id) {
        let user_type = 'Teacher';
        const res = await axios.get(
            `/api/admin/users/all/${user_type}`
        );
        //////console.log(res.data);
        commit('FETCH_TEACHERS', res.data);



    },


    // async createClassPost({ commit }, postItem) {

    //     let res = await axios.post(`/api/announcement/insert`, { announcement: postItem });

    //     let newCLassPost = res.data;
    //     // commit('ADD_CLASSPOST', newCLassPost);
    //     ////console.log(state.class_post);
    //     state.class_post.push({...newCLassPost });
    //     return res;
    // },
};
const mutations = {
    FETCH_TEACHERS: (state, allTeachers) => (state.allTeachers = allTeachers),

};

export default {
    state,
    getters,
    actions,
    mutations
};