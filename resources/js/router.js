import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);


//login
let login = () =>
    import ("./components/login/login");
let register = () =>
    import ("./components/register/register");
let profile = () =>
    import ("./components/profile/profile");
//Main Pages
let mainApp = () =>
    import ("./components/mainApp");
// let dashboard = () =>
//     import ("./components/dashboard/dashboard-page");
// let myclass = () =>
//     import ("./components/class/myclass-page");
let mycourse = () =>
    import ("./components/course_subject/mycourse-page");
// let classwork_main = () =>
//     import ("./components/classwork_main/classwork_main");


//view course page 
let courseView = () =>
    import ("./components/course-view/course-view-page");

let routes = [{
        path: "",
        component: mainApp,
        name: "mainApp",
        children: [{
            path: "/courses",
            component: mycourse,
            name: "courses"
        }, ],
    },
    {
        path: "course/:id",
        component: courseView,
        name: "selectedCourse",

        children: [{
                name: "coursePage",
                path: "",
                // component: classes_tab,
                beforeEnter: (to, form, next) => {
                    axios.get("/api/role")
                        .then((res) => {
                            console.log(res.data);
                            if (res.data == 'Teacher') {
                                next();
                            } else if (res.data == 'Student') {
                                next({
                                    path: "course/" + to.params.id + "/announcement"
                                });
                            }
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                },

            },
            // {
            //     name: "announcement",
            //     path: "announcement",
            //     component: announcement_tab
            // },
            // {
            //     name: "about",
            //     path: "about",
            //     component: description_tab
            // },
            // {
            //     name: "classwork",
            //     path: "classwork",
            //     component: classwork_tab
            // },

            // {
            //     name: "students",
            //     path: "students",
            //     component: students_tab
            // },
            // {
            //     name: "settings",
            //     path: "settings",
            //     component: settings_tab
            // },
            // {
            //     name: "students_grade",
            //     path: "students-grade",
            //     component: students_grade_tab,

            // },
            // {
            //     name: "grading_criteria",
            //     path: "grading-criteria",
            //     component: grading_criteria_tab,
            //     beforeEnter: (to, form, next) => {
            //         axios.get("/api/role")
            //             .then((res) => {
            //                 if (res.data == 'Teacher') {
            //                     next();
            //                 }
            //             })
            //             .catch(() => {
            //                 return next({
            //                     //path: "/nopermission"
            //                 });
            //             });
            //     },
            // },
            // {
            //     name: "modules",
            //     path: "modules",
            //     component: modules_tab,
            //     beforeEnter: (to, form, next) => {
            //         axios.get("/api/role")
            //             .then((res) => {
            //                 console.log(res.data);
            //                 if (res.data == 'Teacher') {
            //                     next();
            //                 } else if (res.data == 'Student') {
            //                     next({
            //                         path: "test"
            //                     });
            //                 }
            //             })
            //             .catch((e) => {
            //                 console.log(e);
            //             });
            //     },

            // }, ,
            // {
            //     name: "test",
            //     path: "test",
            //     component: studentmodules_tab
            // }

        ],
    },

    {
        path: "/login",
        component: login,
        name: "login"
    },
    {
        path: "/register",
        component: register,
        name: "register"
    },
    {
        path: "profile",
        component: profile,
        name: "profile_page"
    },

    // {
    //     path: '/:pathMatch(.*)*',
    //     component: error404
    // },
    // {
    //     path: "/nopermission",
    //     component: error404
    // }
];

export default new Router({
    mode: "history",
    routes
});