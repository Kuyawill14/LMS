import store from '../store/store'

const routes = [
    {
        path: "/login",
        component: () =>
            import ( /*webpackChunkName: "login"*/ "../components/login/login.vue"),
        name: "login",
        beforeEnter: (to, form, next) => {
            if (!store.state.CurrentUser.IsAuthenticated) {
                next()
            } else {
                return next({
                    path: "/"
                });
            }
        },
    },

   /*  {
        path: "/register",
        component: () =>
            import (  "../components/register/register.vue"),
        name: "register",
        beforeEnter: (to, form, next) => {
            if (!store.state.CurrentUser.IsAuthenticated) {
                next()
            } else {
                return next({
                    path: "/"
                });
            }
        },
    }, */

    {
        path: "/verify-email",
        name: "verifyEmail",
        component: () =>
            import ( /*webpackChunkName: "verifyEmail"*/ "../components/verify/verifyEmail.vue"),

    },

    {
        path: "/reset-password",
        name: "resetPassword",
        component: () =>
            import ( /*webpackChunkName: "ResetPassword"*/ "../components/ResetPassword/resetPassword.vue"),

    },

    {
        path: "/EmailPending",
        name: "EmailPending",
        component: () => import ("../components/verify/EmailPending.vue"),
        beforeEnter: (to, form, next) => {
            if (store.state.CurrentUser.IsAuthenticated == true) {
                store.dispatch('fetchCurrentUser').then(() => {
                    if (store.state.CurrentUser.IsVerified == false) {
                        next();
                    } else {
                        return next({
                            path: "/"
                        });
                    }
                }).catch(() => {
                    return next({
                        path: "/"
                    });
                })
            } else {
                return next({
                    path: "/login"
                });
            }
        },
    },


]
  
export default routes