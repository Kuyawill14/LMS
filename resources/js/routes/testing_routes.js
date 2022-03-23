const routes = [
  
    {
        path: "/testpicker",
        component: () =>
            import ( /*webpackChunkName: "testingpicker"*/ "../components/login/test"),
        name: "testpicker",
    },

]
  
export default routes
