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




// course view tabs
// let description_tab = () =>
//     import ("./components/view-course/tabs/description-tab/descriptionComponent");
let classwork_tab = () =>
    import ("./components/course-view/tabs/classwork-tab/classworkComponent");
let announcement_tab = () =>
    import ("./components/course-view/tabs/announcement-tab/announcementComponent");
// let students_tab = () =>
//     import ("./components/view-course/tabs/students-tab/studentsComponent");
// let settings_tab = () =>
//     import ("./components/view-course/tabs/settings-tab/settingsComponent");
// let grading_criteria_tab = () =>
//     import ("./components/view-course/tabs/grading_criteria-tab/grading_criteriaComponent");
// let students_grade_tab = () =>
//     import ("./components/view-course/tabs/students_grade-tab/student_gradeComponent");
// let modules_tab = () =>
//     import ("./components/view-course/tabs/modules-tab/modulesComponent");
// let studentmodules_tab = () =>
//     import ("./components/view-course/tabs/modules-tab/user-type/studentmodulesComponent");
let classes_tab = () =>
    import ("./components/course-view/tabs/classes-tab/classesComponent");

//view course page 
let courseView = () =>
    import ("./components/course-view/course-view-page");

let routes = [{
        path: "",
        component: mainApp,
        name: "mainApp",
        beforeEnter: (to, form, next) => {
            axios
                .get("/api/authenticated")
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({
                        path: "/login"
                    });
                });
        },
        children: [{
                path: "/courses",
                component: mycourse,
                name: "courses"
            },
            {
                path: "course/:id",
                component: courseView,
                name: "selectedCourse",
                redirect: {
                    name: "coursePage"
                },

                children: [{
                        name: "coursePage",
                        path: "coursePage",
                        component: classes_tab,

                    },
                    {
                        name: "announcement",
                        path: "announcement",
                        component: announcement_tab
                    },
                    {
                        name: "classwork",
                        path: "classwork",
                        component: classwork_tab
                    },
                ],
            },

            {
                path: "/profile",
                component: profile,
                name: "profile_page"
            },
        ],

    },


    {
        path: "/login",
        component: login,
        name: "login"
    }, {
        path: "/register",
        component: register,
        name: "register"
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