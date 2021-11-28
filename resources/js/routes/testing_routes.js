const routes = [
  
    {
        path: "/testpicker",
        component: () =>
            import ( /*webpackChunkName: "login"*/ "../components/login/test"),
        name: "testpicker",
    },

]
  
export default routes
