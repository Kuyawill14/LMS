import axios from 'axios'

const state = {
    main_module: [],
    single_main_module: []
};
const getters = {
    getmain_module: (state) => state.main_module,

    getmain_modulebyId: state => id => {
        return state.main_module.filter(main_module => main_module.main_module_id == id);
    },
};

const actions = {
    async fetchMainModule({ commit }, id) {

        const res = await axios.get(
            `/api/main_module/all/${id}`
        );
        //console.log(res.data);
        commit('FETCH_MAIN_MODULE', res.data);

    },

    async createMainModule({ commit }, moduleForm) {

        var res = await axios.post(`/api/main_module/insert`, { moduleForm: moduleForm });

        var newMainModule = res.data;
        // commit("CREATE_MAIN_MODULE", newMainModule);
        state.main_module.push({...newMainModule })


        return res;
    },

    async updateMainModule({ commit }, moduleForm) {
        var module_id = moduleForm.id;
        var res = await axios.post(`/api/main_module/update/${module_id}`, { moduleForm: moduleForm });

        var newMainModule = res.data;
        commit("EDIT_MODULE", newMainModule);
        state.main_module.push({...newMainModule })


        return res;
    },
    async deleteMainModule({ commit }, id) {
        var res = await axios.delete(`/api/main_module/delete/${id}`);

        var newMainModule = res.data;
        commit("DELETE_MODULE", newMainModule);
        return newMainModule;


    }



};
const mutations = {
    CREATE_MAIN_MODULE: (state, main_module) => (state.main_module = main_module),
    FETCH_MAIN_MODULE: (state, main_module) => (state.main_module = main_module),
    EDIT_MODULE: (state, main_module) => {
        var index = state.main_module.findIndex(function(item, i) {
            return item.id === main_module.id;
        });
        state.main_module[index] = main_module;
        state.main_module = JSON.parse(JSON.stringify(state.main_module))

    },
    DELETE_MODULE(state, main_module) {
        var index = state.main_module.findIndex(function(item, i) {
            return item.id === main_module.id;
        });
        state.main_module.splice(index, 1)

    },
};

export default {
    state,
    getters,
    actions,
    mutations
};