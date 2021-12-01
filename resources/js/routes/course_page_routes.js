import store from '../store/store'
const routes = [
    {
        path: "/courses",
        component: () => import (/* webpackChunkName: "Courses" */"../components/course_subject/mycourse-page"),
        name: "courses",
    },
    {
        path: "course/:id",
        component: () => import (/* webpackChunkName: "Course_View" */"../components/course-view/course-view-page"),
        name: "selectedCourse",
        children: [
            {
                name: "coursePage",
                path: "",
                component: () => import (/* webpackChunkName: "Course_Page" */"../components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent"),
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'Teacher') next()
                    else next({ name: 'announcement', params: {id: to.params.id}, replace: true })
                }
            },
            {
                path: "setup",
                component: () => import (/* webpackChunkName: "Course_Setup" */"../components/course-view/course-setup/courseSetupComponent"),
                name: "courseSetup",
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'Teacher') next()
                    else next({ path: '/page-access-denied', replace: true })
                }
            },
            {
                name: "classses",
                path: "my-class",
                component: () => import (/* webpackChunkName: "Course_Classes" */"../components/course-view/tabs/classes-tab/classesComponent"),
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'Teacher') next()
                    else next({ path: '/page-access-denied', replace: true })
                }
            },
            {
                name: "announcement",
                path: "announcement",
                component: () => import (/* webpackChunkName: "Course_Announcement" */"../components/course-view/tabs/announcement-tab/announcementComponent")
            },
            {
                name: "classwork",
                path: "classwork",
                component: () => import (/* webpackChunkName: "Course_Classwork" */"../components/course-view/tabs/classwork-tab/classworkComponent")
            },
            {
                name: "modules",
                path: "modules",
                component: () => import (/* webpackChunkName: "Course_Modules" */"../components/course-view/tabs/modules-tab/modulesComponent"),
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'Teacher') next()
                    else return next({ name: 'student-modules', params:{id: to.params.id}, replace: true })
                }
            },
            {
                name: "student-modules",
                path: "my-modules",
                component: () => import (/* webpackChunkName: "Course_Student_Modules" */"../components/course-view/tabs/modules-tab/user-type/studentmodulesComponent"),
                props: { role: 'Student' }
            },
            {
                name: "modules-preview",
                path: "modules-preview",
                component: () => import (/* webpackChunkName: "Course_Module_Preview" */"../components/course-view/tabs/modules-tab/user-type/studentmodulesComponent"),
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'Teacher') next()
                    else next({ path: '/page-access-denied', replace: true })
                }
            },
            {
                name: "Student-list",
                path: "people",
                component: () => import (/* webpackChunkName: "Course_Student_List" */"../components/course-view/tabs/people-list/peopleListComponent"),
                
            },
            {
                name: "about",
                path: "about",
                component: () => import (/* webpackChunkName: "Course_About" */"../components/course-view/tabs/about-tab/aboutComponent"),
            },
            {
                name: "settings",
                path: "settings",
                component: () => import (/* webpackChunkName: "Course_Setting" */"../components/course-view/tabs/settings-tab/settingsComponent"),
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'Teacher') next()
                    else next({ path: '/page-access-denied', replace: true })
                }
            },
            {
                name: "gradingCriteria",
                path: "grading-criteria",
                component: () => import (/* webpackChunkName: "Course_Grading_Criteria" */"../components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent"),
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'Teacher') next()
                    else next({ path: '/page-access-denied', replace: true })
                }
            },
            {
                name: "studentProgress",
                path: "progress",
                component:  () => import (/* webpackChunkName: "Course_Student_Progress" */"../components/course-view/tabs/studentProgress-tab/teacher-studentProgressComponent"),
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'Teacher') next()
                    else next({ path: '/page-access-denied', replace: true })
                }
        
            },
            {
                name: "mystudentProgress",
                path: "my-progress",
                component: () => import (/* webpackChunkName: "Course_Student_My_Progress" */"../components/course-view/tabs/studentProgress-tab/studentProgressComponent"),
        
            },
            {
                name: "gradebook",
                path: "grade-book",
                component: () => import (/* webpackChunkName: "Course_GradeBook" */"../components/course-view/tabs/gradebook-tab/teacherGradebookComponent"),
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'Teacher') next()
                    else next({ path: '/page-access-denied', replace: true })
                }
               
            },
            {
                name: "studentGradebook",
                path: "my-grades",
                component: () => import (/* webpackChunkName: "Course_Student_GradeBook" */"../components/course-view/tabs/gradebook-tab/studentGradebookComponent")
            },
        
        ],
    },
    
]

export default routes
