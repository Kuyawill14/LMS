import Vue from "vue";
import Router from "vue-router";
import NProgress from 'nprogress';
import '../../node_modules/nprogress/nprogress.css'
import store from './store/store'
import auth_routes from "./routes/auth_routes";
import testing_routes from "./routes/testing_routes";
import classwork_preview_routes from "./routes/classwork_preview_routes";
import profile_routes from "./routes/profile_routes";
import course_page_routes from "./routes/course_page_routes";
import examination_routes from "./routes/examination_routes";
import campus_director_routes from "./routes/campus_director_routes";
import admin_routes from "./routes/admin_routes";
import program_chair_routes from "./routes/program_chair_routes";
import notification_invites_routes from "./routes/notification_invites_routes";
import restricted_pages_routes from "./routes/restricted_pages_routes";
import archive_page_routes from "./routes/archive_page_routes";
import classwork_overview_page_routes from "./routes/classwork_overview_page_routes";


Vue.use(Router);
const router = new Router({
    mode: "history",
    routes: [{
            path: "",
            component: () =>
                import ( /* webpackChunkName: "main-view" */ "./components/mainApp"),
            name: "mainApp",
            beforeEnter: (to, form, next) => {
                store.dispatch('fetchCurrentUser').then(() => {
                    if (store.state.CurrentUser.isSuccess) {
                        if (store.state.CurrentUser.IsVerified == true) {
                            next();
                        } else {
                            next({
                                path: "/EmailPending",
                                replace: true
                            });
                        }
                    } else {
                        next(false);
                    }
                }).catch(() => {
                    return next({
                        path: "/login",
                        replace: true
                    });
                })
            },
            children: [{
                    path: "",
                    component: () =>
                        import ( /* webpackChunkName: "Dashboard" */ "./components/dashboard/dashboardComponent"),
                    name: "dashboard"
                },

                //admin routes
                ...admin_routes,

                //program chair routes
                ...program_chair_routes,

                //Campus Director
                ...campus_director_routes,

                //Course Page routes
                ...course_page_routes,

                //Profile page routes
                ...profile_routes,

                //notification and invites routes
                ...notification_invites_routes,

                //archive page routes
                ...archive_page_routes,

                //classwork overview routes
                ...classwork_overview_page_routes,

                //Classwork Preview Routes
                ...classwork_preview_routes,


            ],
        },
        //Examination Routes
        ...examination_routes,
        //Auth Routes
        ...auth_routes,

        //Route for testing purposes
        ...testing_routes,

        //Page Callback for Erros page
        ...restricted_pages_routes,
    ]
})

router.beforeEach((to, from, next) => {
    NProgress.start()

    const protectedRoutes = ['studentGradebook', 'gradebook', 'mystudentProgress', 'studentProgress', 'gradingCriteria', 'settings', 'about', 'Student-list',
        'modules-preview', 'student-modules', 'classwork', 'announcement', 'courseSetup', 'modules', 'classses',
        'clwk', 'add-question', 'submission-list', 'question-analytics', 'publish-to'
    ];
    if (to.name != 'login' && to.name != 'register' && to.name != 'resetPassword') {

        store.dispatch('IsAuthenticated').then((res) => {
            if (store.state.CurrentUser.IsAuthenticated == true) {
                if (protectedRoutes.includes(to.name)) {
                    store.dispatch('fetchMyCoursesStatus').then(() => {
                        store.dispatch('fetchCurrentUser').then(() => {
                            store.dispatch('CheckMyCourse', to.params.id).then(() => {
                                if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                    if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                        if (to.name == 'courseSetup') {
                                            if (store.state.CurrentUser.UserRole == 'Teacher')
                                            return next({ name: 'coursePage', params: {id: to.params.id}, replace: true })
                                            else return next({ name: 'announcement', params: {id: to.params.id}, replace: true })

                                        } else {
                                            next();
                                        }
                                    } else {
                                        if (to.name == 'courseSetup') {
                                            next();
                                        } else {
                                            return next({
                                                name: "courseSetup",
                                                params: { id: to.params.id },
                                                replace: true
                                            })
                                        }
                                    }
                                } else {
                                    return next({
                                        name: "course-not-found",
                                        params: { id: to.params.id },
                                        replace: true
                                    })
                                }
                            })

                        })
                    })
                } else {
                    next()
                }
            } else {
                next({
                    path: "/login",
                    replace: true
                });
            }
        }).catch(() => {
            store.state.CurrentUser.IsAuthenticated = false;
            return next({
                path: "/login",
                replace: true
            });
        })
    } else {
        next();
    }


})

router.afterEach(() => {
    NProgress.done()
})



/* export default new Router({
    mode: "history",

    routes
});
 */
export default router