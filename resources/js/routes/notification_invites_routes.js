const routes = [
  
    { 
        path: "/notifications/:slug",
        component: () => import (/* webpackChunkName: "notification" */ "../components/layout/notification/SeeAllNotification"),
        name: "notifications"
    },

    {
        path: "/invites",
        component: () => import ("../components/layout/notification/invites"),
        name: "invites"
    },

]
  
export default routes
