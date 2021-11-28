const routes = [
    {
        path: "/course-not-found/:id",
        component: () => import (/* webpackChunkName: "not-found-callback-page" */ "../components/course_subject/class-type/ClassNotFound"),
        name: "course-not-found"
    },

]
  
export default routes
