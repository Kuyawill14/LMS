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
    inviteAll: []
};
const getters = {
    get_notification: (state) => {
        return state.class_notification;
    },
    get_notification_count: (state) => {
        return state.notificationCount;
    },
    get_invites: (state) => {
        return state.inviteAll;
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

        if(state.notificationCount > 0){
            state.notificationCount -= 1;
            let text = document.title.substring( document.title.indexOf(' ') + 1);
            if(state.notificationCount != 0){
                let nunber = '('+state.notificationCount+') ';
                document.title =  nunber+text;
            }
            else{
                document.title = text;
            }
        }
       
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
        if(count != 0){
            let text = document.title.substring( document.title.indexOf(' ') + 1);
            let nunber = '('+count+') ';
            document.title =  nunber+text;
        }
        commit('NOTIFICATION_COUNT', count);
        commit('INVITE_COUNT', inviteCount);
    },

    async fetchClassInvites({ commit }, id) {
        const res = await axios.get(`/api/notification/invite/all`)

        commit('FETCH_INVITE', res.data.data);
    },
    async LessInviteCount({ commit }) {
        state.inviteCount -= 1;
    },
    async ClearNotification({ commit }) {
        state.class_notification = [];
    }



};
const mutations = {
    FETCH_NOTIFICATION: (state, class_notification) => (state.class_notification = class_notification),
    //UNREAD_NOTIFICATION: (state, RemoveNotif) => (state.class_notification = RemoveNotif),
    UNREAD_NOTIFICATION: (state, newCLass) => (state.class_notification = newCLass),
    NOTIFICATION_COUNT: (state, count) => (state.notificationCount = count),
    FETCH_INVITE: (state, inviteAll) => (state.inviteAll = inviteAll),
    INVITE_COUNT: (state, inviteCount) => (state.inviteCount = inviteCount),

};

export default {
    state,
    getters,
    actions,
    mutations
};