import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import auth from './modules/auth'
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
import studentMainmoduleProgress from './modules/student_main_moduleProgress'
import classwork from './modules/classwork'
import studentClassworkGrades from './modules/student_classwork_grades'
import stduentFinalGrades from './modules/student_final_grades'
import allTeachers from './modules/allTeachers'
import teacherSummary from './modules/teacherSummary'
import verifyEmail from './modules/verifyEmail'
import classworkStatusCheck from './modules/classworkStatusCheck'
import allProgramChair from './modules/allProgramChair'
import allCampusDirector from './modules/allCampusDirector'
export default new Vuex.Store({
    modules: {
        auth,
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
        studentSubmoduleProgress,
        classwork,
        studentMainmoduleProgress,
        studentClassworkGrades,
        stduentFinalGrades,
        allTeachers,
        teacherSummary,
        verifyEmail,
        classworkStatusCheck,
        allProgramChair,
        allCampusDirector


    },
})