import store from '../store/store'
const routes = [{
        path: "/monitor-teachers",
        component: () =>
            import ("../components/.program-chair/dashboard/programChair-dashboard"),
        children: [{
            path: ":id",
            component: () =>
                import ("../components/.monitor-teachers/teacherProfile/teacherProfile"),
            name: "monitorTeacher_id",
            beforeEnter: (to, from, next) => {
                if (store.state.CurrentUser.UserRole == 'ProgramChair' || store.state.CurrentUser.UserRole == 'Administrator') next()
                else next({ path: '/page-access-denied', replace: true })
            }
        }, ]
    },

    {
        path: "/program_chair/announcement",
        component: () =>
            import ("../components/.program-chair/announcement/programChair-announcement"),
        name: "program_chair-announcement",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'ProgramChair' || store.state.CurrentUser.UserRole == 'Administrator') next()
            else next({ path: '/page-access-denied', replace: true })
        }
    },

]

export default routes