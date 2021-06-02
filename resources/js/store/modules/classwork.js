import axios from 'axios'

const state = {
    Classworks: []
};
const getters = {
    get_Classworks: (state) => state.Classworks,


};

const actions = {
    async fetchClassworks({ commit }, id) {
        const res = await axios.get(
            `/api/classwork/all/${id}`
        );
        //console.log(res.data);
        commit('FETCH_CLASSWORK', res.data);
        return res.status;

    },

    async createClasswork({ commit }, details) {

        const res = await axios.post(`/api/classwork/insert`, details);

        let newClasswork = res.data;
        // commit("CREATE_MAIN_MODULE", newMainModule);
        state.Classworks.push({...newClasswork })


       /*  axios.post('/api/classwork/insert', this.form)
            .then(res=>{
                if(res.status == 201){
                    this.toastSuccess();
                    this.form.reset()
                    this.dialog = false;
                    this.$emit('realodClassworks');

                }

            }).catch(e=>{
                console.log(e);
            }) */


        return res.status;
    },



};
const mutations = {
    //CREATE_MAIN_MODULE: (state, main_module) => (state.main_module = main_module),
    FETCH_CLASSWORK: (state, Classworks) => (state.Classworks = Classworks),
};

export default {
    state,
    getters,
    actions,
    mutations
};