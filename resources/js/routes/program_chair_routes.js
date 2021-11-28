import store from '../store/store'
const routes = [
  
    {
        path: "/monitor-teachers",
        component: () => import ("../components/.monitor-teachers/monitorTeachersComponent"),
        name: "monitorTeachers",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'ProgramChair' || store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }
    },

    {
        path: "/monitor-teacher/:id/",
        component: () => import ("../components/.monitor-teachers/teacherProfile/teacherProfile"),
        name: "monitorTeacher_id",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'ProgramChair' || store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }
    },
    {
        path: "/program_chair/announcement",
        component: () =>
            import ("../components/.program-chair/announcement/programChair-announcement"),
        name: "program_chair-announcement",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'ProgramChair' || store.state.CurrentUser.UserRole == 'Admin') next()
            else next({ path: '/', replace: true })
        }
    },

]
  
export default routes
