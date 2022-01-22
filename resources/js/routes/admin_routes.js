import store from '../store/store'
const routes = [

    {
        path: "/manage-users/program-chair",
        component: () =>
            import ("../components/admin/manage-users/manage-programChairComponent"),
        name: "manageProgramChair",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }

    },
    {
        path: "/manage-users/teachers",
        component: () =>
            import ("../components/admin/manage-users/manage-teachersComponent"),
        name: "manageteachers",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }
    },
    {
        path: "/manage-users/students",
        component: () =>
            import ("../components/admin/manage-users/manage-studentsComponent"),
        name: "managestudents",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }
    },
    {
        path: "/manage-users/campus-director",
        component: () =>
            import ("../components/admin/manage-users/manage-campusDirectorComponent"),
        name: "manageCampusDirector",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }
    },
    {
        path: "/manage-users/security-guard",
        component: () =>
            import ("../components/admin/manage-users/manage-SecurityGuardComponent"),
        name: "manageSecurityGuard",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }
    },
    {
        path: "/schoolyear-semester",
        component: () =>
            import ("../components/admin/schoolyear-semester/schoolyear-semesterComponent"),
        name: "schoolyear_semester",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }


    },
    {
        path: "/manage-departments",
        component: () =>
            import ("../components/admin/departments/department"),
        name: "manage_departments",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }
    },
    {
        path: '/vaccination-upload',
        name: "vaccination_upload",
        component: () =>
            import ("./components/vaccine/vaccineComponents-upload"),
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }

    },

]
export default routes