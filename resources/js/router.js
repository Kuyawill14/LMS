import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);


//login
let login = () =>
    import ("./components/login/login");
// let register = () =>
//     import ("./components/register/register");

// //Main Pages
// let mainApp = () =>
//     import ("./mainApp");
// let dashboard = () =>
//     import ("./components/dashboard/dashboard-page");
// let myclass = () =>
//     import ("./components/class/myclass-page");
// let mycourse = () =>
//     import ("./components/course_subject/mycourse-page");
// let classwork_main = () =>
//     import ("./components/classwork_main/classwork_main");


let routes = [

    {
        path: "/login",
        component: login,
        name: "login"
    },
    // {
    //     path: "/register",
    //     component: register,
    //     name: "register"
    // },
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