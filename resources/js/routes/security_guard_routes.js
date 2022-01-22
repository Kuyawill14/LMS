import store from '../store/store'
const routes = [

    {
        path: "/vaccination",
        component: () =>
            import ("../components/vaccine/vaccineComponents"),
        name: "check_vaccine",
        beforeEnter: (to, from, next) => {
            if (store.state.CurrentUser.UserRole == 'SecurityGuard') next()
            else next({ path: '/', replace: true })
        }

    },


]
export default routes