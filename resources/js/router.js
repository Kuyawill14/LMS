import Vue from "vue";
import Router from "vue-router";
import NProgress from 'nprogress';
//import '../node_modules/nprogress/nprogress.css'
import '../../node_modules/nprogress/nprogress.css'
import store from './store/store'
import { toNumber } from "lodash";
import axios from "axios";

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
let dashboard = () =>
    import ("./components/dashboard/dashboardComponent");
// let myclass = () =>
//     import ("./components/class/myclass-page");
let mycourse = () =>
    import ("./components/course_subject/mycourse-page");

let archiveComponent = () =>
    import ("./components/archivesList/ArchiveComponent");

let SeeAllNotification = () =>
    import ("./components/layout/notification/SeeAllNotification");
// let classwork_main = () =>
//     import ("./components/classwork_main/classwork_main");



//class Not found
let ClassNotFound = () =>
    import ("./components/course_subject/class-type/ClassNotFound");


// course view tabs
let course_setup = () =>
    import ("./components/course-view/course-setup/courseSetupComponent");
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
let teacherGradeBook_tab = () =>
    import ("./components/course-view/tabs/gradebook-tab/teacherGradebookComponent");
let studentGradeBook_tab = () =>
    import ("./components/course-view/tabs/gradebook-tab/studentGradebookComponent");

let pdftest_tab = () =>
    import ("./components/course-view/tabs/modules-tab/user-type/pdfview");
let studentProgress_tab = () =>
    import ("./components/course-view/tabs/studentProgress-tab/studentProgressComponent");




let studentListComponent = () =>
    import ("./components/course-view/tabs/people-list/peopleListComponent");


//Quiz Page
let QuizPage = () =>
    import ("./components/Classwork_View/StudentPage/ExamQuestionListPage");
let resultPage = () =>
    import ("./components/Classwork_View/StudentPage/resultPage");


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


//admin

let manageUsers = () =>
    import ("./components/admin/manage-users/manage-usersComponent");
let monitorTeachers = () =>
    import ("./components/admin/monitor-teachers/monitorTeachersComponent");


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
                    component: dashboard,
                    name: "dashboard"
                },
                {
                    path: "/manage-users",
                    component: manageUsers,
                    name: "manageUsers",


                },
                {
                    path: "/monitor-teachers",
                    component: monitorTeachers,
                    name: "monitorTeachers",


                },
                {
                    path: "/courses",
                    component: mycourse,
                    name: "courses",


                },
                {
                    path: "course/:id",
                    component: courseView,
                    name: "selectedCourse",
                    beforeEnter: (to, from, next)=>{
                        let UserRole = atob(store.state.CurrentUser.UserRole);
                        let Exist = false
                        let Completed = false;
                        let CourseStatus = UserRole == 'Teacher' ? store.state.CourseList.courseStatus : store.state.CLassList.courseStatus; 
                        CourseStatus.forEach(item => {
                            if (to.params.id == atob(item.id)) {
                                Exist = true;
                            }
                        });
                        
                        if(Exist){
                            next();
                        }
                        else{
                            return next({
                                name: "course-not-found",
                                params:{id: to.params.id}
                            })
                        }
                    },
                    children: [{
                            name: "coursePage",
                            path: "",
                            component: classes_tab,
                        },
                        {
                            path: "setup",
                            component: course_setup,
                            name: "courseSetup",
                           

                        },
                        {
                            name: "announcement",
                            path: "announcement",
                            component: announcement_tab,
                           
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
                            component: studentmodules_tab,
                            props: { role: 'Student' }

                        },
                        {
                            name: "modules-preview",
                            path: "modules-preview",
                            component: studentmodules_tab
                        },
                        {
                            name: "Student-list",
                            path: "people",
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
                        {
                            name: "studentProgress",
                            path: "progress",
                            component: studentProgress_tab
                        },
                        {
                            name: "gradebook",
                            path: "grade-book",
                            component: teacherGradeBook_tab
                        },
                        {
                            name: "studentGradebook",
                            path: "my-grades",
                            component: studentGradeBook_tab
                        },

                    ],
                },

                {
                    path: "/profile",
                    component: profile,
                    name: "profile_page"
                },
                {
                    path: "/archives",
                    component: archiveComponent,
                    name: "archive-course"
                },

                {
                    path: "/notifications",
                    component: SeeAllNotification,
                    name: "notifications"
                },

                {
                    path: "/classwork/:id",
                    component: classworkView,
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
                    props: true,
                    children: [{
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
                    path: "/course-not-found/:id",
                    component: ClassNotFound,
                    name: "course-not-found"
                },

            ],

        },
        /* {
            path: "/classwork/:id",
            component: classworkView,
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
            props: true,
            children: [{
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
        }, */

        {
            path: "/quiz/:id",
            component: QuizPage,
            name: "quizstart",
            props: true
        },
        {
            path: "/submitted-result/:id",
            component: resultPage,
            name: "result-page",
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


/* Vue.mixin({
    beforeRouteLeave (to, from, next){
        if(to.name == 'quizstart'){
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
              next()
            } else {
              next(false)
            }
        }
        else{n';lokj        1`
            next()
        }
    }
}) */
router.beforeEach((to, from, next) => {
    store.dispatch('fetchCurrentUser')
    let UserRole = store.state.CurrentUser.UserRole;
    if (to.name == 'coursePage') {
        let Exist = false
        let Completed = false;
        let CourseStatus = UserRole == 'Teacher' ? store.state.CourseList.courseStatus : store.state.CLassList.courseStatus; 
       
        if(CourseStatus != null){
            
            CourseStatus.forEach(item => {
                if (to.params.id == atob(item.id)) {
                    Exist = true;
                    if (atob(item.status) == 1) {
                        Completed = true;
                    }
                }
            });

            if (UserRole == 'Teacher') {
                if(Exist == true && Completed == true){
                    next();
                } else if (Exist == true && Completed == false) {
                    return next({
                        name: "courseSetup",
                        params: { id: to.params.id }
                    })
                }
                else if(Exist == false && Completed == false){
                    return next({
                        name: "courses",
                    })
                }
            }
            else if(UserRole == 'Student') {
                if(Exist == true && Completed == true){
                    next({
                        name: 'announcement',
                        params: { id: to.params.id }
                    });
                } else if (Exist == true && Completed == false) {

                    return next({
                        name: "courses",
                    })
                } else if (Exist == false && Completed == false) {

                    return next({
                        name: "courses",
                    })
                }
            }
        } else {
            return next({
                name: "courses",
            })
        }


    } else if (to.name == 'login') {
        axios.get("/api/authenticated")
            .then(() => {
                next({
                    path: "/"
                });
            })
            .catch((e) => {
                console.log(e);
                next();
            });
    } else {
        if (to.name) {
            NProgress.start()
        }
        next()
    }
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