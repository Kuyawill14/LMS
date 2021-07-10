import axios from 'axios'

const state = {
    class_notification: [],
    notificationCount: null
};
const getters = {
    get_notification: (state) => {
        return state.class_notification;
    },
    get_notification_count: (state) => {
        return state.notificationCount;
    }


};

const actions = {
    async fetchNotification({ commit }, id) {
        let NotifList;
        let count = 0;
        const res = await axios.get(
            `/api/notification/all`)
            .then(response=>{
                for (let i = 0; i < response.data.length; i++) {
                    if(response.data[i].status == null || response.data[i].status == 0){
                        count += 1;
                    }
                }
                NotifList = response.data;
            })
          
        commit('FETCH_NOTIFICATION', NotifList);
        commit('NOTIFICATION_COUNT', count);
    },
  /*   async UnreadMessage({ commit }, id) {
        let res = await axios
            .post(`/api/notification/${id}`)
            .then(response => {
                Toast.fire({
                    icon: "success",
                    title: "Your have been unrolled to the class."
                });
                let newCLass = response.data;
                commit("UNREAD_NOTIFICATION", newCLass);
                return newCLass;
                
            });

          
    }, */

  
 
};
const mutations = {
    FETCH_NOTIFICATION: (state, class_notification) => (state.class_notification = class_notification),
    //UNREAD_NOTIFICATION: (state, RemoveNotif) => (state.class_notification = RemoveNotif),
    UNREAD_NOTIFICATION: (state, newCLass) => (state.class_notification = newCLass),
    NOTIFICATION_COUNT: (state, count) => (state.notificationCount = count),
    
};

export default {
    state,
    getters,
    actions,
    mutations
};