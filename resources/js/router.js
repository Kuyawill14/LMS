import Vue from "vue";
import Router from "vue-router";
import NProgress from 'nprogress';
//import '../node_modules/nprogress/nprogress.css'
import '../../node_modules/nprogress/nprogress.css'
import store from './store/store'
import { flatMap, toNumber } from "lodash";
import axios from "axios";

Vue.use(Router);



let profile = () =>
    import ("./components/profile/profile");
//Main Pages
let mainApp = () =>
    import ( /* webpackChunkName: "main-view" */ "./components/mainApp");
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

let invites = () =>
    import ("./components/layout/notification/invites");
// let classwork_main = () =>
//     import ("./components/classwork_main/classwork_main");

let EmailPending = () =>
    import ("./components/verify/EmailPending.vue");


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
let teacher_studentProgress_tab = () =>
    import ("./components/course-view/tabs/studentProgress-tab/teacher-studentProgressComponent");
let teacher_course_dashboard = () =>
    import ("./components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent");
// let student_course_dashboard = () =>
//     import ("./components/course-view/tabs/dashboard-tab/student_course_dashboardComponent");




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
    import ( /* webpackChunkName: "classworks-details-view" */ "./components/Classwork_View/classworkDetailsView");
let addQuestionTab = () =>
    import ( /* webpackChunkName: "classworks-details-view" */ "./components/Classwork_View/tabs/addQuestionTab");
let questionList = () =>
    import ( /* webpackChunkName: "classworks-details-view" */ "./components/Classwork_View/tabs/questionListTab");

let questionnAnalyticstab = () =>
    import ( /* webpackChunkName: "classworks-details-view" */ "./components/Classwork_View/tabs/questionnAnalyticstab");
let submissionListTab = () =>
    import ( /* webpackChunkName: "classworks-details-view" */ "./components/Classwork_View/tabs/submissionListTab");
let publishClassworkTab = () =>
    import ( /* webpackChunkName: "classworks-details-view" */ "./components/Classwork_View/tabs/publishClassworkTab");


let classworkDetailsTab = () =>
    import ( /* webpackChunkName: "classworks-details-view" */ "./components/Classwork_View/tabs/classworkDetailsTab");

let documentPreview = () =>
    import ("./components/course-view/tabs/classwork-tab/documentPreview");


//admin

let manageProgramChair = () =>
    import ("./components/admin/manage-users/manage-programChairComponent");
let manageteachers = () =>
    import ("./components/admin/manage-users/manage-teachersComponent");
let managestudents = () =>
    import ("./components/admin/manage-users/manage-studentsComponent");


let manageCampusDirector = () =>
    import ("./components/admin/manage-users/manage-campusDirectorComponent");
let monitorTeachers = () =>
    import ("./components/.monitor-teachers/monitorTeachersComponent");
let teacherProfile = () =>
    import ("./components/.monitor-teachers/teacherProfile/teacherProfile");
let schoolyear_semester = () =>
    import ("./components/admin/schoolyear-semester/schoolyear-semesterComponent");
let department = () =>
    import ("./components/admin/departments/department");

const router = new Router({
    mode: "history",
    routes: [{
            path: "",
            component: mainApp,
            name: "mainApp",
            beforeEnter: (to, form, next) => {
                //store.dispatch('fetchCurrentUser').then(()=>{
                store.dispatch('IsAuthenticated').then(() => {
                        if (store.state.CurrentUser.IsAuthenticated == true) {
                            store.dispatch('fetchCurrentUser').then(() => {
                                if(store.state.CurrentUser.isSuccess){
                                    if (store.state.CurrentUser.IsVerified == true) {
                                        next();
                                    } else {
                                        return next({
                                            path: "/EmailPending"
                                        });
                                    }
                                }
                                else{
                                    next(false);
                                }
                            }).catch(() => {
                                return next({
                                    path: "/login"
                                });
                            })

                        } else {
                            return next({
                                path: "/login"
                            });
                        }
                    }).catch(() => {
                        store.state.CurrentUser.IsAuthenticated = false;
                        return next({
                            path: "/login"
                        });
                    })
                    //})

            },
            children: [{
                    path: "",
                    component: dashboard,
                    name: "dashboard"
                },

                {
                    path: "/manage-users/program-chair",
                    component: manageProgramChair,
                    name: "manageProgramChair",


                },
                {
                    path: "/manage-users/teachers",
                    component: manageteachers,
                    name: "manageteachers",


                },
                {
                    path: "/manage-users/students",
                    component: managestudents,
                    name: "managestudents",


                },
                {
                    path: "/manage-users/campus-director",
                    component: manageCampusDirector,
                    name: "manageCampusDirector",


                },

                //program chair
                {
                    path: "/monitor-teachers",
                    component: monitorTeachers,
                    name: "monitorTeachers",
                },


                {
                    path: "/monitor-teacher/:id/",
                    component: teacherProfile,
                    name: "monitorTeacher_id",


                },
                {
                    path: "/schoolyear-semester",
                    component: schoolyear_semester,
                    name: "schoolyear_semester",


                },
                {
                    path: "/manage-departments",
                    component: department,
                    name: "manage_departments",
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
                    children: [{
                            name: "coursePage",
                            path: "",
                            component: teacher_course_dashboard,
                            beforeEnter: (to, from, next) => {
                                store.dispatch('fetchMyCoursesStatus').then((res) => {

                                    if (res.status == 200) {
                                        /*  let Exist = false;
                                         let Completed = false;
                                         let CourseStatus = store.state.CurrentUser.MyCourses;
                                         CourseStatus.forEach(item => {
                                             if (to.params.id == item.id) {
                                                 Exist = true;
                                                 if (item.status == 1) {
                                                     Completed = true
                                                 }
                                             }
                                         }); */
                                        store.dispatch('CheckMyCourse', to.params.id).then(response => {
                                            if (response.exist == true) {
                                                if (response.status == true) {
                                                    if (store.state.CurrentUser.UserRole == 'Teacher') {
                                                        next();
                                                    } else {
                                                        return next({
                                                            name: "announcement",
                                                            params: { id: to.params.id }
                                                        })
                                                    }

                                                } else {
                                                    return next({
                                                        name: "courseSetup",
                                                        params: { id: to.params.id }
                                                    })
                                                }
                                            } else {
                                                return next({
                                                    name: "course-not-found",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        })
                                    }
                                })

                            },
                        },
                        {
                            path: "setup",
                            component: course_setup,
                            name: "courseSetup",
                            beforeEnter: (to, from, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('fetchCurrentUser').then(() => {
                                        if (store.state.CurrentUser.UserRole == 'Teacher') {
                                            store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                                if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                                    if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                        return next({
                                                            name: "coursePage",
                                                            params: { id: to.params.id }
                                                        })
                                                    } else {
                                                        next();
                                                    }
                                                } else {
                                                    return next({
                                                        name: "course-not-found",
                                                        params: { id: to.params.id }
                                                    })
                                                }
                                            })
                                        } else {
                                            return next({
                                                name: "courses",

                                            })
                                        }
                                    })
                                })
                            },

                        },
                        {
                            name: "classses",
                            path: "my-class",
                            component: classes_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then((res) => {
                                    if (res.status == 200) {
                                        store.dispatch('CheckMyCourse', to.params.id).then(response => {

                                            if (response.exist == true) {
                                                if (response.status == 1) {
                                                    next();
                                                } else {
                                                    return next({
                                                        name: "courseSetup",
                                                        params: { id: to.params.id }
                                                    })
                                                }
                                            } else {
                                                return next({
                                                    name: "course-not-found",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        },
                        {
                            name: "announcement",
                            path: "announcement",
                            component: announcement_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then((res) => {
                                    if (res.status == 200) {
                                        store.dispatch('CheckMyCourse', to.params.id).then(response => {

                                            if (response.exist == true) {
                                                if (response.status == 1) {
                                                    next();
                                                } else {
                                                    return next({
                                                        name: "courseSetup",
                                                        params: { id: to.params.id }
                                                    })
                                                }
                                            } else {
                                                return next({
                                                    name: "course-not-found",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        },
                        {
                            name: "classwork",
                            path: "classwork",
                            component: classwork_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then((res) => {
                                    if (res.status == 200) {
                                        store.dispatch('CheckMyCourse', to.params.id).then(response => {
                                            if (response.exist == true) {
                                                if (response.status == 1) {
                                                    next();
                                                } else {
                                                    return next({
                                                        name: "courseSetup",
                                                        params: { id: to.params.id }
                                                    })
                                                }
                                            } else {
                                                return next({
                                                    name: "course-not-found",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        },
                        {
                            name: "modules",
                            path: "modules",
                            component: modules_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus');
                                if (store.state.CurrentUser.UserRole == 'Teacher') {
                                    next();
                                } else if (store.state.CurrentUser.UserRole == 'Student') {
                                    next({
                                        path: "my-modules"
                                    });
                                }
                            },

                        },
                        {
                            name: "student-modules",
                            path: "my-modules",
                            component: studentmodules_tab,
                            props: { role: 'Student' },
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }

                        },
                        {
                            name: "modules-preview",
                            path: "modules-preview",
                            component: studentmodules_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }
                        },
                        {
                            name: "Student-list",
                            path: "people",
                            component: studentListComponent,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }
                        },
                        {
                            name: "about",
                            path: "about",
                            component: about_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }
                        },
                        {
                            name: "settings",
                            path: "settings",
                            component: settings_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }
                        },
                        {
                            name: "gradingCriteria",
                            path: "grading-criteria",
                            component: grading_criteria_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }
                        },
                        {
                            name: "studentProgress",
                            path: "progress",
                            component: teacher_studentProgress_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }
                        },
                        {
                            name: "mystudentProgress",
                            path: "my-progress",
                            component: studentProgress_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }
                        },
                        {
                            name: "gradebook",
                            path: "grade-book",
                            component: teacherGradeBook_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }
                        },
                        {
                            name: "studentGradebook",
                            path: "my-grades",
                            component: studentGradeBook_tab,
                            beforeEnter: (to, form, next) => {
                                store.dispatch('fetchMyCoursesStatus').then(() => {
                                    store.dispatch('CheckMyCourse', to.params.id).then(res => {
                                        if (store.state.CurrentUser.CurrentStatus.exist == true) {
                                            if (store.state.CurrentUser.CurrentStatus.status == 1) {
                                                next();
                                            } else {
                                                return next({
                                                    name: "courseSetup",
                                                    params: { id: to.params.id }
                                                })
                                            }
                                        } else {
                                            return next({
                                                name: "course-not-found",
                                                params: { id: to.params.id }
                                            })
                                        }
                                    })
                                })
                            }
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
                    path: "/notifications/:slug",
                    component: SeeAllNotification,
                    name: "notifications"
                },

                {
                    path: "/invites",
                    component: invites,
                    name: "invites"
                },

                {
                    path: "/classwork-overview/:id",
                    component: () =>
                        import ("./components/Classwork_View/classworkSubmission-Overview.vue"),
                    name: "classwork_overview",
                    beforeEnter: (to, form, next) => {
                        store.dispatch('IsAuthenticated').then(() => {
                                store.dispatch('fetchMyCoursesStatus').then((res) => {
                                        if (res.status == 200) {
                                            store.dispatch('CheckMyCourse', to.params.id).then(response => {
                                                if (response.exist == true) {
                                                    if (response.status == 1) {
                                                        next();
                                                    }
                                                } else {
                                                    return next({
                                                        name: "course-not-found",
                                                        params: { id: to.params.id }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                    .catch(() => {
                                        store.state.CurrentUser.IsAuthenticated = false;
                                        return next({
                                            path: "/login"
                                        });
                                    })
                            })
                            .catch(() => {
                                store.state.CurrentUser.IsAuthenticated = false;
                                return next({
                                    path: "/login"
                                });
                            })
                    },
                },

                {
                    path: "/classwork/:id",
                    name: "classwork-preview",
                    component: classworkView,
                    beforeEnter: (to, form, next) => {
                        store.dispatch('IsAuthenticated').then(() => {
                                store.dispatch('fetchMyCoursesStatus').then((res) => {
                                        if (res.status == 200) {
                                            store.dispatch('CheckMyCourse', to.params.id).then(response => {
                                                if (response.exist == true) {
                                                    if (response.status == 1) {
                                                        next();
                                                    }
                                                } else {
                                                    return next({
                                                        name: "course-not-found",
                                                        params: { id: to.params.id }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                    .catch(() => {
                                        store.state.CurrentUser.IsAuthenticated = false;
                                        return next({
                                            path: "/login"
                                        });
                                    })
                            })
                            .catch(() => {
                                store.state.CurrentUser.IsAuthenticated = false;
                                return next({
                                    path: "/login"
                                });
                            })
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


                //Campus Director

                {
                    path: "/departments",
                    component: () =>
                        import ("./components/.campus-director/monitor-departments/monitorDepartmentComponent"),
                    name: "campus_director-monitor_deparments"
                },
                {
                    path: "/department/:id",
                    component: () =>
                        import ("./components/.campus-director/monitor-departments/department_page"),

                    children: [{
                            path: "",
                            component: () =>
                                import ("./components/.campus-director/monitor-departments/overview"),
                            name: "campus_director-monitor_deparments-id",
                        },
                        {
                            path: "teacher",
                            component: teacherProfile,
                            name: "departmentMonitorTeacher_id",


                        },

                    ]
                },


                //Program Chair
                {
                    path: "/program_chair/announcement",
                    component: () =>
                        import ("./components/.program-chair/announcement/programChair-announcement"),
                    name: "program_chair-announcement"
                },







            ],
        },


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
        },

        //login
        {
            path: "/login",
            component: () =>
                import ( /*webpackChunkName: "login"*/ "./components/login/login.vue"),
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

        {
            path: "/testpicker",
            component: () =>
                import ( /*webpackChunkName: "login"*/ "./components/login/test"),
            name: "testpicker",
        },
        {
            path: "/register",
            component: () =>
                import ( /*webpackChunkName: "register"*/ "./components/register/register.vue"),
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
        },

        {
            path: "/verify-email",
            name: "verifyEmail",
            component: () =>
                import ( /*webpackChunkName: "verifyEmail"*/ "./components/verify/verifyEmail.vue"),

        },

        {
            path: "/reset-password",
            name: "resetPassword",
            component: () =>
                import ( /*webpackChunkName: "ResetPassword"*/ "./components/ResetPassword/resetPassword.vue"),

        },

        {
            path: "/EmailPending",
            name: "EmailPending",
            component: EmailPending,
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
    NProgress.done()
})



/* export default new Router({
    mode: "history",

    routes
});
 */
export default router