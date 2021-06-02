import axios from 'axios'

const state = {
    class_post: []
};
const getters = {
    getclass_post: (state) => {


        return state.class_post.slice()
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }


};

const actions = {
    async fetchClassPost({ commit }, id) {

        const res = await axios.get(
            `/api/announcement/allpost/${id}`
        );
        //console.log(res.data);
        commit('FETCH_CLASSPOST', res.data);
        return res.status;


    },


    async createClassPost({ commit }, postItem) {

        let res = await axios.post(`/api/announcement/insert`, { announcement: postItem });

        let newCLassPost = res.data;
        // commit('ADD_CLASSPOST', newCLassPost);
        console.log(state.class_post);
        state.class_post.push({...newCLassPost });


        //return newCLassPost;
    },
};
const mutations = {
    FETCH_CLASSPOST: (state, class_post) => (state.class_post = class_post),
    ADD_CLASSPOST: (state, class_post) => (state.class_post = class_post),
};

export default {
    state,
    getters,
    actions,
    mutations
};