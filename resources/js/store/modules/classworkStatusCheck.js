import axios from 'axios'

const state = {
    statusDetails: [],
    currentType: null,
    
};
const getters = {
    statusDetails: (state) => state.statusDetails,
};

const actions = {
    async checkClassworkStatus({ commit }, data) {
        if(data.type == 'Objective Type'){
            if(state.currentType != data.type){
                state.currentType = data.type;
                const res = await axios.get(
                    `/api/student/check-status/${data.id}`
                );
                commit('FETCH_CLASSWORK_STATUS', res.data);
            }
            else{
                if(state.statusDetails.length == 0){
                    const res = await axios.get(
                        `/api/student/check-status/${data.id}`
                    );
                    commit('FETCH_CLASSWORK_STATUS', res.data);
                }
                else{
                    if(state.statusDetails.cl_id != data.id){
                        const res = await axios.get(
                            `/api/student/check-status/${data.id}`
                        );

                        commit('FETCH_CLASSWORK_STATUS', res.data);
                    }
                }
            }
           
        }
        else if(data.type == 'Subjective Type'){
            if(state.currentType != data.type){
                state.currentType = data.type;
                const res = await axios.get(
                    `/api/submission/check-sbj/${data.id}`
                );
                
                commit('FETCH_CLASSWORK_STATUS', res.data);
            }
            else{
                if(state.statusDetails.length == 0){
                    const res = await axios.get(
                        `/api/submission/check-sbj/${data.id}`
                    );
                    commit('FETCH_CLASSWORK_STATUS', res.data);
                }
                else{
                    if(state.statusDetails.classwork_id != data.id){
                        const res = await axios.get(
                            `/api/submission/check-sbj/${data.id}`
                        );
                        commit('FETCH_CLASSWORK_STATUS', res.data);
                    }
                }
            }
          
        }

    
    },

  /*   async GetClassworkDetails({ commit }, {course_id, classwor_id}) {
        const res = await axios.get(
            `'/api/classwork/showDetails/${course_id}/${classwor_id}`
        );

        axios.get('/api/classwork/showDetails/'+ this.$route.query.clwk+'/'+this.$route.params.id)
        .then(res=>{
           this.classworkDetailsData = res.data;
            this.totalPoints = res.data.totalpoints;
            this.totalQuestion = res.data.ItemsCount;
            this.checkStatus(res.data.Details.type);
            this.iChange = false;
            this.isloading = false;
        })
        .catch(e=>{
            this.iChange = false;
            this.isloading = false;
        })
        
        
     }, */

};
const mutations = {
    FETCH_CLASSWORK_STATUS: (state, statusDetails) => (state.statusDetails = statusDetails),
};

export default {
    state,
    getters,
    actions,
    mutations
};