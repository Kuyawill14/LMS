import axios from 'axios'

const state = {
    class_post: [],
    lastPage: null,
    currentPage: null,
};
const getters = {
    getclass_post: (state) => {
        return state.class_post.slice()
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    },
    current_page: (state) => {
        return state.currentPage;
    },
    last_page: (state) => {
        return state.lastPage;
    },


};

const actions = {
    async fetchClassPost({ commit }, id) {

        const res = await axios.get(
            `/api/announcement/allpost/${id}`
        );
        state.currentPage = res.data.current_page;
        state.lastPage = res.data.last_page;

        commit('FETCH_CLASSPOST', res.data.data);
        return res.status;


    },
    async loadMore({ commit }, id) {
        if (state.currentPage != state.lastPage) {
            let nextpage = state.currentPage + 1;
            const res = await axios.get(
                `/api/announcement/allpost/${id}?page=${nextpage}`
            );
            state.currentPage = state.currentPage + 1;
            res.data.data.forEach(item => {
                state.class_post.push(item);
            });
            return res.status;
        }

    },
    async createClassPost({ commit }, postItem) {

        let res = await axios.post(`/api/announcement/insert`, { announcement: postItem });

        let newCLassPost = res.data;
        // commit('ADD_CLASSPOST', newCLassPost);
        ////console.log(state.class_post);
        state.class_post.push({...newCLassPost });
        return res;
    },

    async deleteClassPost({ commit }, data) {

        const res = await axios.delete(`/api/announcement/delete/${data.id}`);
        if(res){
            state.class_post.splice(data.index, 1);
        }
    },

    async updateClasspost({ commit }, data) {

        const res = await axios.put(`/api/announcement/update/${data.post_id}`,data);
      
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