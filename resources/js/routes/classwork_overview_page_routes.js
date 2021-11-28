const routes = [
    {
        path: "/classwork-overview/:id",
        component: () => import ("../components/Classwork_View/classworkSubmission-Overview.vue"),
        name: "classwork_overview"
    },

]
  
export default routes
