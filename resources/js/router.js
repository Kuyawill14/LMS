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
        path: "/login",
        component: login,
        name: "login"
    }, {
        path: "/register",
        component: register,
        name: "register"
    }, {
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