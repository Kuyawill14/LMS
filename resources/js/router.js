import Vue from "vue";
import Router from "vue-router";
import NProgress from 'nprogress';
//import '../node_modules/nprogress/nprogress.css'
import '../../node_modules/nprogress/nprogress.css'
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
let about_tab = () =>
    import ("./components/course-view/tabs/about-tab/aboutComponent");
let classwork_tab = () =>
    import ("./components/course-view/tabs/classwork-tab/classworkComponent");
let announcement_tab = () =>
    import ("./components/course-view/tabs/announcement-tab/announcementComponent");
// let students_tab = () =>
//     import ("./components/view-course/tabs/students-tab/studentsComponent");
let settings_tab = () =>
    import ("./components/course-view/tabs/settings-tab/settingsComponent");
let grading_criteria_tab = () =>
    import ("./components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent");
// let students_grade_tab = () =>
//     import ("./components/view-course/tabs/students_grade-tab/student_gradeComponent");
let modules_tab = () =>
    import ("./components/course-view/tabs/modules-tab/modulesComponent");
let studentmodules_tab = () =>
    import ("./components/course-view/tabs/modules-tab/user-type/studentmodulesComponent");
let classes_tab = () =>
    import ("./components/course-view/tabs/classes-tab/classesComponent");
let gradeBook_tab = () =>
    import ("./components/course-view/tabs/gradebook-tab/gradebookComponent");
let pdftest_tab = () =>
    import ("./components/course-view/tabs/modules-tab/user-type/pdfview");





let studentListComponent = () =>
    import ("./components/course-view/tabs/student-list/studentListComponent");


//Quiz Page
let QuizPage = () =>
    import ("./components/Classwork_View/StudentPage/ExamQuestionListPage");

//view course page 
let courseView = () =>
    import ("./components/course-view/course-view-page");

//View Classworks Details
let classworkView = () =>
    import ("./components/Classwork_View/classworkDetailsView");
let addQuestionTab = () =>
    import ("./components/Classwork_View/tabs/addQuestionTab");
let questionList = () =>
    import ("./components/Classwork_View/tabs/questionListTab");

let questionnAnalyticstab = () =>
    import ("./components/Classwork_View/tabs/questionnAnalyticstab");
let submissionListTab = () =>
    import ("./components/Classwork_View/tabs/submissionListTab");
let publishClassworkTab = () =>
    import ("./components/Classwork_View/tabs/publishClassworkTab");
let test = () =>
    import ("./components/Classwork_View/tabs/test");

let classworkDetailsTab = () =>
    import ("./components/Classwork_View/tabs/classworkDetailsTab");

let documentPreview = () =>
    import ("./components/course-view/tabs/classwork-tab/documentPreview");
    


const router = new Router({
    mode: "history",
    routes: [{
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
                    path: "",
                    component: mycourse,
                    name: "courses"
                },
                {
                    path: "course/:id",
                    component: courseView,
                    name: "selectedCourse",
                    children: [{
                            name: "coursePage",
                            path: "",
                            component: classes_tab,
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
                        {
                            name: "modules",
                            path: "modules",
                            component: modules_tab,
                            beforeEnter: (to, form, next) => {
                                axios.get("/api/role")
                                    .then((res) => {
                                        console.log(res.data);
                                        if (res.data == 'Teacher') {
                                            next();
                                        } else if (res.data == 'Student') {
                                            next({
                                                path: "my-modules"
                                            });
                                        }
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    });
                            },

                        },
                        {
                            name: "student-modules",
                            path: "my-modules",
                            component: studentmodules_tab
                        },
                        {
                            name: "modules-preview",
                            path: "modules-preview",
                            component: studentmodules_tab
                        },
                        {
                            name: "Student-list",
                            path: "Student-list",
                            component: studentListComponent
                        },
                        {
                            name: "about",
                            path: "about",
                            component: about_tab
                        },
                        {
                            name: "settings",
                            path: "settings",
                            component: settings_tab
                        },
                        {
                            name: "gradingCriteria",
                            path: "grading-criteria",
                            component: grading_criteria_tab
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
            path: "/classwork/:id",
            component: classworkView,

            props: true,
            children: [
                {
                    name: "clwk",
                    path: "classwork-details",
                    component: classworkDetailsTab
                },
                {
                    name: "add-question",
                    path: "add-question",
                    component: addQuestionTab
                },
                {
                    name: "question-list",
                    path: "question-list",
                    component: questionList
                },
                {
                    name: "submission-list",
                    path: "submission-list",
                    component: submissionListTab
                },
                {
                    name: "question-analytics",
                    path: "question-analytics",
                    component: questionnAnalyticstab
                },
                {
                    name: "publish-to",
                    path: "publish-to",
                    component: publishClassworkTab
                }, 

            ]
        },
        {
            path: "/quiz/:id",
            component: QuizPage,
            name: "quizstart",
            props: true
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

        {
            path: "/testing",
            component: test,
            name: "testing"
        },

        {
            path: "/documentPreview",
            component: documentPreview,
            name: "documentPreview"
        },


        
        // {
        //     path: '/:pathMatch(.*)*',
        //     component: error404
        // },
        // {
        //     path: "/nopermission",
        //     component: error404
        // }

    ]
})

router.beforeEach((to, from, next) => {

    if (to.name) {
        NProgress.start()
    }
    next()
})
router.afterEach(() => {
    //app.$Progress.finish();
    NProgress.done()
})

/* export default new Router({
    mode: "history",

    routes
});
 */
export default router