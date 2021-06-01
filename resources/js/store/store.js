import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import CLassList from './modules/classList'
import CourseList from './modules/courseList'
import SCLass from './modules/class'
import SCourse from './modules/course'
import AnnouncementPost from './modules/announcement_post'
import CurrentUser from './modules/CurrentUser'
import Notification from './modules/notificationModule'
import MainModules from './modules/main_modules'
import SubModules from './modules/sub_modules'
import question from './modules/question'
import gradingCriteria from './modules/gradingCriteria'
import studentSubmoduleProgress from './modules/student_sub_moduleProgress'
export default new Vuex.Store({
    modules: {
        SCLass,
        CLassList,
        SCourse,
        CourseList,
        AnnouncementPost,
        CurrentUser,
        Notification,
        MainModules,
        SubModules,
        question,
        gradingCriteria,
        studentSubmoduleProgress

    },
})