const routes = [
    {
        path: "/profile",
        component: () => import (/* webpackChunkName: "profile" */ "../components/profile/profile"),
        children:[
            {
                path:"details",
                component: () => import (/* webpackChunkName: "profile_user_details" */ "../components/profile/editprofile"),     
                name:"profile_page",                  
            },
            {
                path:"courses_progress",
                component: () => import (/* webpackChunkName: "profile_course_progress" */ "../components/profile/coursesProgress"),     
                name:"courses_progress",                  
            },
            {
                path:"my_calendar",
                component: () => import (/* webpackChunkName: "profile_my_calendar" */ "../components/profile/myCalendar"),     
                name:"my_calendar",                  
            },
        
            {
                path:"change_password",
                component: () => import (/* webpackChunkName: "change_password" */ "../components/profile/changePassword"),     
                name:"change_password",                  
            },
        ]
    },
   
   
]
  
export default routes
