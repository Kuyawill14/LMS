import store from '../store/store'
const routes = [{
        path: "/departments",
        component: () =>
            import ("../components/.campus-director/monitor-departments/monitorDepartmentComponent"),
        name: "campus_director-monitor_deparments",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'CampusDirector') next()
            else next({ path: '/page-access-denied', replace: true })
        }
    },
    {
        path: "/department/:id",
        component: () =>
            import ("../components/.campus-director/monitor-departments/department_page"),
        children: [{
                path: "overview",
                component: () =>
                    import ("../components/.campus-director/monitor-departments/overview"),
                name: "campus_director-monitor_deparments-id",
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'CampusDirector') next()
                    else next({ path: '/page-access-denied', replace: true })
                }
            },
            {
                path: "teacher",
                component: () =>
                    import ("../components/.monitor-teachers/teacherProfile/teacherProfile"),
                name: "departmentMonitorTeacher_id",
                beforeEnter: (to, from, next) => {
                    if (store.state.CurrentUser.UserRole == 'CampusDirector') next()
                    else next({ path: '/page-access-denied', replace: true })
                }
            },

        ]
    },

]

export default routes