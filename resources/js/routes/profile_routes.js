import store from '../store/store'
const routes = [
    {
        path: "/profile",
        component: () => import (/* webpackChunkName: "profile" */ "../components/profile/profile"),
        children:[
            {
                path:"details",
                component: () => import (/* webpackChunkName: "profile_user_details" */ "../components/profile/editprofile"),     
                name:"profile_page",
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
                path:"courses_progress",
                component: () => import (/* webpackChunkName: "profile_course_progress" */ "../components/profile/coursesProgress"),     
                name:"courses_progress",
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
                path:"my_calendar",
                component: () => import (/* webpackChunkName: "profile_my_calendar" */ "../components/profile/myCalendar"),     
                name:"my_calendar",
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
                path:"change_password",
                component: () => import (/* webpackChunkName: "change_password" */ "../components/profile/changePassword"),     
                name:"change_password",
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
    },
   
   
]
  
export default routes
