const routes = [
    {
        path: "/course-not-found/:id",
        component: () => import (/* webpackChunkName: "not-found-callback-page" */ "../components/error_pages/ClassNotFound"),
        name: "course-not-found"
    },

    {
        path: "/page-access-denied",
        component: () => import (/* webpackChunkName: "not-found-callback-page" */ "../components/error_pages/PageRestrictedDisplayPage"),
        name: "page-access-denied"
    },
]
  
export default routes
