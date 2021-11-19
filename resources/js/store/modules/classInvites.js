import axios from 'axios'

const state = {
    class_notification: [],
    notificationCount: null,
    inviteCount: null,
    page: 0,
    loadMore: false,
    lastPage: 0,
    totalNotif: 0,
    lastPageCount: null,
    beforeLastPageCount: null,
    isGetting: null,
};
const getters = {
    get_notification: (state) => {
        return state.class_notification;
    },
    get_notification_count: (state) => {
        return state.notificationCount;
    },
    get_invite_count: (state) => {
        return state.inviteCount;
    },
    ShowPage: (state) => {
        return state.page;
    },
    LastPage: (state) => {
        return state.lastPage;
    },
    ShowLoadMore: (state) => {
        return state.loadMore;
    },
    isGetting: (state) => {
        return state.isGetting;
    },



};

const actions = {
    async fetchNotification({ commit }, type) {
        state.isGetting = true;
        let NotifList;
        let status;
        const res = await axios.get(
                `/api/notification/all/` + type)
            .then(response => {
                status = response.status;
                NotifList = response.data.data;
                state.lastPage = response.data.last_page;
                if (response.data.current_page != response.data.last_page) {
                    state.loadMore = true;
                    state.page = response.data.current_page;
                } else {
                    state.loadMore = false;
                }
                state.isGetting = false;
            })

        commit('FETCH_NOTIFICATION', NotifList);
        return status;

    },

    async ShowMore({ commit }, data) {
        state.isGetting = true;
        let nextPage = data.page + 1;
        let status;
        const res = await axios.get(
                '/api/notification/all/' + data.type + '?page=' + nextPage)
            .then(response => {
                status = response.status;
                state.beforeLastPageCount = state.lastPageCount;
                state.lastPageCount = response.data.data.length;
                ////console.log(state.beforeLastPageCount);
                response.data.data.forEach(data => {
                    state.class_notification.push(data);
                });

                if (response.data.current_page != response.data.last_page) {
                    state.loadMore = true;
                    state.page = response.data.current_page;
                } else {
                    state.page = response.data.current_page;
                    state.loadMore = false;
                }
                state.isGetting = false;
            })
        return status;
    },

    async ShowLess({ commit }, page) {

        let count = page == state.lastPage ? state.lastPageCount : state.beforeLastPageCount;
        let nextpage = page - 1;
        for (let j = 0; j < count; j++) {
            state.class_notification.splice(state.class_notification.length - 1, 1);
        }
        ////console.log(nextpage);
        if (nextpage != state.lastPage) {
            state.loadMore = true;
            state.page = nextpage;

        } else {
            state.page = nextpage;

            state.loadMore = false;
        }
    },

    async LessNotificationCount({ commit }) {
        state.notificationCount -= 1;
    },

    async HideNotification({ commit }, id) {
        let status;
        const res = await axios.put(`/api/notification/hide/` + id)
            .then(response => {
                status = response.status

            })
        return status;
    },
    async markAsReadNotification({ commit }, data) {
        let status;
        const res = await axios.put(`/api/notification/markread/` + data.id, { accepted: data.accepted })
            .then(response => {
                status = response.status
            })
        return status;
    },
    async removeNotification({ commit }, id, index) {
        const res = await axios.delete(`/api/notification/delete/` + id);



    },
    async fetchNotificationCount({ commit }, id) {
        let NotifList;
        let count = 0;
        let inviteCount = 0;
        const res = await axios.get(
                `/api/notification/notifCount`)
            .then(response => {
                count = response.data.notificationCount;
                inviteCount = response.data.invitesCount;
            })

        commit('NOTIFICATION_COUNT', count);
        commit('INVITE_COUNT', inviteCount);
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
    INVITE_COUNT: (state, inviteCount) => (state.inviteCount = inviteCount),

};

export default {
    state,
    getters,
    actions,
    mutations
};