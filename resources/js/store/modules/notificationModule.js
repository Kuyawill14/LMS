import axios from 'axios'

const state = {
    class_notification: {},
    notificationCount: null,
    page: 0,
    loadMore: false,
};
const getters = {
    get_notification: (state) => {
        return state.class_notification;
    },
    get_notification_count: (state) => {
        return state.notificationCount;
    },
    ShowPage: (state) => {
        return state.page;
    },
    ShowLoadMore: (state) => {
        return state.loadMore;
    },
   

};

const actions = {
    async fetchNotification({ commit }, page) {
        let NotifList;
        const res = await axios.get(
            `/api/notification/all`)
            .then(response=>{
                NotifList = response.data.data;
                if(response.data.current_page != response.data.last_page){
                    state.loadMore = true;
                    state.page = response.data.current_page + 1;
                }
                else{
                    state.loadMore = false;
                }
            })
          
        commit('FETCH_NOTIFICATION', NotifList);
    },

    async ShowMore({ commit }, page) {
        const res = await axios.get(
            `/api/notification/all?page=`+page)
            .then(response=>{
              /*   let more = response.data.data;
                state.classList.push({...more }); */
                response.data.data.forEach(data => {
                    state.class_notification.push(data);
                   
                });

                if(response.data.current_page != response.data.last_page){
                    state.loadMore = true;
                    state.page = response.data.current_page + 1;
                }
                else{
                    state.loadMore = false;
                }
            })
    },


    async fetchNotificationCount({ commit }, id) {
        let NotifList;
        let count = 0;
        const res = await axios.get(
            `/api/notification/notifCount`)
            .then(response=>{
                count = response.data;
            })
          
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