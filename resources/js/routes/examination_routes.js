const routes = [
  
    {
        path: "/quiz/:id",
        component: () => import (/*webpackChunkName: "Examination_Page"*/"../components/Classwork_View/StudentPage/ExamQuestionListPage"),
        name: "quizstart",
        props: true
    },
    {
        path: "/submitted-result/:id",
        component: () => import ("../components/Classwork_View/StudentPage/resultPage"),
        name: "result-page",
    },

]
  
export default routes