import store from '../store/store'
const routes = [

    {
        path: "/classwork/:id",
        name: "classwork-preview",
        component: () => import ( /* webpackChunkName: "classworks-details-view" */ 
            "../components/Classwork_View/classworkDetailsView"),
        props: true,
        children: [
            {
                name: "clwk",
                path: "classwork-details",
                component: () => import ( /* webpackChunkName: "classworks-details-view" */ 
                "../components/Classwork_View/tabs/classworkDetailsTab"),
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
                name: "add-question",
                path: "add-question",
                component: () => import (/* webpackChunkName: "classworks-details-view" */ 
                "../components/Classwork_View/tabs/addQuestionTab"),
                beforeEnter: (to, from, next) => {
                    store.dispatch('IsAuthenticated').then(() => {
                        if (store.state.CurrentUser.IsAuthenticated == true) {
                            if (store.state.CurrentUser.UserRole == 'Teacher') next()
                            else next({ path: '/page-access-denied', replace: true })
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
                name: "submission-list",
                path: "submission-list",
                component: () => import (/* webpackChunkName: "classworks-details-view" */ 
                "../components/Classwork_View/tabs/submissionListTab"),
                beforeEnter: (to, from, next) => {
                    store.dispatch('IsAuthenticated').then(() => {
                        if (store.state.CurrentUser.IsAuthenticated == true) {
                            if (store.state.CurrentUser.UserRole == 'Teacher') next()
                            else next({ path: '/page-access-denied', replace: true })
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
                name: "question-analytics",
                path: "question-analytics",
                component: () => import (/* webpackChunkName: "classworks-details-view" */ 
                "../components/Classwork_View/tabs/questionnAnalyticstab"),
                beforeEnter: (to, from, next) => {
                    store.dispatch('IsAuthenticated').then(() => {
                        if (store.state.CurrentUser.IsAuthenticated == true) {
                            if (store.state.CurrentUser.UserRole == 'Teacher') next()
                            else next({ path: '/page-access-denied', replace: true })
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
                name: "publish-to",
                path: "publish-to",
                component: () => import (/* webpackChunkName: "classworks-details-view" */ 
                "../components/Classwork_View/tabs/publishClassworkTab"),
                beforeEnter: (to, from, next) => {
                    store.dispatch('IsAuthenticated').then(() => {
                        if (store.state.CurrentUser.IsAuthenticated == true) {
                            if (store.state.CurrentUser.UserRole == 'Teacher') next()
                            else next({ path: '/page-access-denied', replace: true })
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
    },
   
   
]
  
export default routes
