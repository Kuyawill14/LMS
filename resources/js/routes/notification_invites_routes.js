import store from '../store/store'
const routes = [
  
    { 
        path: "/notifications/:slug",
        component: () => import (/* webpackChunkName: "notification" */ "../components/layout/notification/SeeAllNotification"),
        name: "notifications",
        beforeEnter: (to, from, next) => {
            store.dispatch('IsAuthenticated').then(() => {
                if (store.state.CurrentUser.IsAuthenticated == true) {
                     next()
                }
                else{
                    next({
                        path: "/login",
                        replace: true
                    });
                }
            })
        }
    },

    {
        path: "/invites",
        component: () => import ("../components/layout/notification/invites"),
        name: "invites",
        beforeEnter: (to, from, next) => {
            store.dispatch('IsAuthenticated').then(() => {
                if (store.state.CurrentUser.IsAuthenticated == true) {
                     next()
                }
                else{
                    next({
                        path: "/login",
                        replace: true
                    });
                }
            })
        }
    },

]
  
export default routes
