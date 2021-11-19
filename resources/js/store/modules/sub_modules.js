// import axios from 'axios'

// const state = {
//     sub_module: [],
// };
// const getters = {
//     getAll_sub_module: (state) => state.sub_module,
//     getSub_module: state => id => {
//         return state.sub_module.filter(sub_module => sub_module.main_module_id == id);
//     },
// };

// const actions = {
//     async fetchSubModule({ commit }, id) {

//         const res = await axios.get(
//             `/api/sub_module/all/${id}`
//         );
//         //////console.log(res.data);
//         commit('FETCH_SUB_MODULE', res.data);

//     },

//     async createSubModule({ commit }, SubmoduleForm) {

//         const res = await axios.post(`/api/sub_module/insert`, SubmoduleForm);

//         let newSubModule = res.data;
//         // commit("CREATE_SUB_MODULE", newSubModule);
//         state.sub_module.push({...newSubModule })

//         return res;
//     },




// };
// const mutations = {

//     CREATE_SUB_MODULE: (state, sub_module) => (state.sub_module = sub_module),
//     FETCH_SUB_MODULE: (state, sub_module) => (state.sub_module = sub_module),
// };

// export default {
//     state,
//     getters,
//     actions,
//     mutations
// };