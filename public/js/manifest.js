/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
<<<<<<< HEAD
/******/ 			// return url for filenames based on template
/******/ 			return "js/app.js." + {"resources_js_components_login_login_vue":"bf5348a4568d0da1ff75","resources_js_components_register_register_vue":"6db15305e1168fd47233","resources_js_components_profile_profile_vue":"16bbf45c8c2a8b09cbb4","resources_js_components_mainApp_vue":"f6373106a048ffba6c12","resources_js_components_dashboard_dashboardComponent_vue":"b64aede1f6d25000d87f","resources_js_components_course_subject_mycourse-page_vue":"5549d4d522f1b5f89bd1","resources_js_components_archivesList_ArchiveComponent_vue":"ad0ed0d71a4fccec1760","resources_js_components_layout_notification_SeeAllNotification_vue":"27385422a1e729236227","resources_js_components_layout_notification_invites_vue-_c8ea0":"dbc62bafe89869ad63ea","resources_js_components_course_subject_class-type_ClassNotFound_vue":"055416bc620bae2ee4fd","resources_js_components_course-view_course-setup_courseSetupComponent_vue":"53d16d5839852d43950d","resources_js_components_course-view_tabs_about-tab_aboutComponent_vue":"f49f1c9e25b41fb71b8a","resources_js_components_course-view_tabs_classwork-tab_classworkComponent_vue":"2754e3a5ddbc7b8566d8","resources_js_components_course-view_tabs_announcement-tab_announcementComponent_vue":"109139a0de4e4c0dbd57","resources_js_components_course-view_tabs_settings-tab_settingsComponent_vue":"037e5ac0c0ca1444615f","resources_js_components_course-view_tabs_grading_criteria-tab_grading_criteriaComponent_vue":"f4d2118384fd8a8c2d94","resources_js_components_course-view_tabs_modules-tab_modulesComponent_vue":"0bd5826f62b7c96fb37b","resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesComponent_vue":"51929f5564a017787018","resources_js_components_course-view_tabs_classes-tab_classesComponent_vue":"75a0c1ef8efd8cb9ad1a","resources_js_components_course-view_tabs_gradebook-tab_teacherGradebookComponent_vue":"7b260b685897b5c98d7f","resources_js_components_course-view_tabs_gradebook-tab_studentGradebookComponent_vue":"5fd3b3ee589da221df88","resources_js_components_course-view_tabs_modules-tab_user-type_pdfview_vue":"ad3aca6a2de8dac74051","resources_js_components_course-view_tabs_studentProgress-tab_studentProgressComponent_vue":"18f8e6166ddbe2ebcf50","resources_js_components_course-view_tabs_people-list_peopleListComponent_vue":"e091fcc83c6b73147128","resources_js_components_Classwork_View_StudentPage_ExamQuestionListPage_vue":"ad02463a4a79438171ad","resources_js_components_Classwork_View_StudentPage_resultPage_vue":"7708321cd0dc31d449df","resources_js_components_course-view_course-view-page_vue":"d71ce5ef77fbe005126b","resources_js_components_Classwork_View_classworkDetailsView_vue":"9135c8746be92cbccbed","resources_js_components_Classwork_View_tabs_addQuestionTab_vue":"42915d54f4389fcba459","resources_js_components_Classwork_View_tabs_questionListTab_vue":"6360c73ad157b92eaf3c","resources_js_components_Classwork_View_tabs_questionnAnalyticstab_vue":"50442a04fc1cc69983aa","resources_js_components_Classwork_View_tabs_submissionListTab_vue":"4fa13dd2191999765c43","resources_js_components_Classwork_View_tabs_publishClassworkTab_vue":"6d9a7215a3f5e768bdf8","resources_js_components_Classwork_View_tabs_test_vue":"a60dfc3b79003db7c8fa","resources_js_components_Classwork_View_tabs_classworkDetailsTab_vue":"429bf4d2d5ba1b829931","resources_js_components_course-view_tabs_classwork-tab_documentPreview_vue":"18ecadb94d50f1ef99e9","resources_js_components_admin_manage-users_manage-usersComponent_vue":"e8fd2d9c796f0855bee4","resources_js_components_admin_monitor-teachers_monitorTeachersComponent_vue":"fdbd58d1d56d02788b5e","resources_js_components_admin_monitor-teachers_teacherProfile_teacherProfile_vue":"599e0428e60ecc10506d","resources_js_components_admin_schoolyear-semester_schoolyear-semesterComponent_vue":"311b5b124b491b313340","resources_js_components_admin_departments_department_vue":"383bcb8cc32fdd7c7475","resources_js_components_profile_editprofile_vue":"0f5dc19886efd5d38e90","resources_js_components_profile_changePassword_vue":"39138d957de31dc433cb","resources_js_components_profile_coursesProgress_vue":"372741a06a8b0a489b9c","resources_js_components_profile_myCalendar_vue":"d0ff66ea49d97fd9804a","resources_js_components_layout_navigation_main-navbar_vue":"49c003bf760f03f8a309","resources_js_components_layout_navigation_course-navbar_vue":"37a617a3756b4dce2807","resources_js_components_layout_navigation_admin_admin-navbar_vue":"97025f47b9e2158fe06a","resources_js_components_layout_notification_invites_vue-_c8ea1":"7fbc57f6b3fb6e1f5e01","resources_js_components_dashboard_student_student-dashboardComponent_vue":"065b4912cf5df25a0da8","resources_js_components_dashboard_teacher_teacher-dashboardComponent_vue":"59f144aa6a75733ff3ee","resources_js_components_dashboard_admin_admin-dashboardComponent_vue":"a5ada68dd6e95d66de6d","resources_js_components_course_subject_class-type_teacher-coursePage_vue":"dab47b34d1f8eb70aff9","resources_js_components_course_subject_class-type_student-classPage_vue":"5fe829f688bfd0a05c2d","resources_js_components_archivesList_ArchiveType_courses-archive_vue":"e011ddee4af6e5b0bce4","resources_js_components_archivesList_ArchiveType_classwork-archive_vue":"09eda37bf3c071949e85","resources_js_components_archivesList_ArchiveType_classes-archive_vue":"a36698554c1f731347de","resources_js_components_layout_notification_adminNotification_vue":"4c018916f26c631fa587","resources_js_components_layout_notification_teacher-studentNotification_vue":"179e7d20558aea9ff280","resources_js_components_course-view_course-setup_grading-criteria_vue":"b0c66ebd36e85a37883c","resources_js_components_course-view_course-setup_courseDetailsComponent_vue":"296ef8973556cb3a5b25","resources_js_components_course-view_course-setup_classComponent_vue":"e8633d75585c4f209f57","resources_js_components_course-view_tabs_about-tab_gradingCateogry_vue":"b1a69b04e9fd8cca6333","resources_js_components_course-view_tabs_about-tab_class_description_vue":"232f829dc2b29f4cb9c1","resources_js_components_course-view_tabs_classwork-tab_classworkList_vue":"71bc728b9664c6f2060c","resources_js_components_course-view_tabs_classwork-tab_newClassworkModal_vue-_69320":"4fef3ba69509d878629e","resources_js_components_course-view_tabs_announcement-tab_announcementCreate_vue":"e1cbeddfe280a1529884","resources_js_components_course-view_tabs_announcement-tab_announcementPostList_vue":"63e268db2c0ba9045f01","resources_js_components_course-view_tabs_modules-tab_modulesListComponent_vue":"cf251d07bf98222741be","resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesListComponent_vue":"6fb4b8346df72d36ebc9","resources_js_components_course-view_tabs_classes-tab_class-type_teacher-classPage_vue":"98e6f8f40918ef44ee09","resources_js_components_course-view_tabs_people-list_InstructorListView_vue":"55d4e7a85c9cfe6a9ac5","resources_js_components_course-view_tabs_people-list_studentListView_vue":"d5575ab8427a07cfe72a","resources_js_components_Classwork_View_StudentPage_viewSubmittedPage_vue":"a22c7b5da713318c7dbf","resources_js_components_course-view_SelectBackgroundDialog_vue":"7d9bbd467c762999cb60","resources_js_components_Classwork_View_type_studentStartPage_vue":"e490929d2c751271a12a","resources_js_components_Classwork_View_type_teacherStartPage_vue":"8a6b45b433e7a1d9c676","resources_js_components_Classwork_View_tabs_dialogs_optionRemoveDialog_vue":"e3ca7c8c0676dfe59d98","resources_js_components_Classwork_View_tabs_submissionType_objectiveSubmission_vue":"70dbac79be75a2688171","resources_js_components_Classwork_View_tabs_submissionType_subjectiveSubmission_vue":"f090271c2d43ed7cce76","resources_js_components_Classwork_View_tabs_dialogs_publishDialog_vue":"fb274942d5caaf6b7c72","resources_js_components_Classwork_View_tabs_dialogs_unpublishConfirmDialog_vue":"0783d2164c86fbaf5ad5","resources_js_components_Classwork_View_tabs_dialogs_UpdatePublishDialog_vue":"a64d01dfd5b4b1c813ee","resources_js_components_admin_monitor-teachers_teacherProfile_editprofile_vue":"dcda5d80b5d2d7b833a2","resources_js_components_admin_monitor-teachers_teacherProfile_changePassword_vue":"db9f11bae9bd014e8203","resources_js_components_admin_monitor-teachers_teacherProfile_coursesProgress_vue":"ed10cae05443e31f1af6","resources_js_components_admin_monitor-teachers_teacherProfile_myCalendar_vue":"85d8dbf331c7f9f2d5ef","resources_js_components_dashboard_myCalendar_vue":"74535771409aca22248f","resources_js_components_dashboard_notificationComponent_vue":"96c35b2da3c8a1004f5c","resources_js_components_dashboard_student_student-classes_vue":"bf06cfcc16c03be3b9f7","resources_js_components_dashboard_student_ProgressChart_vue":"f7bb2d0b05b894547f5f","resources_js_components_dashboard_teacher_teacher-courses_vue":"7621f33b0af3977cd684","resources_js_components_dashboard_teacher_ProgressChart_vue":"96e49a745a78328c998c","resources_js_components_course_subject_class-type_dialog_confirmArchiveCourse_vue":"15294ef4a7d12f4260a5","resources_js_components_archivesList_ArchiveType_archiveCourseType_teacherArchive_vue":"b36e303678e581dfbd29","resources_js_components_archivesList_ArchiveType_archiveCourseType_studentArchive_vue":"210bbcb693cf9a5cdd36","resources_js_components_archivesList_ArchiveType_archiveClassType_teacherClassArchive_vue":"7962a9ca7a798b00b32e","resources_js_components_archivesList_ArchiveType_archiveClassType_studentClassArchive_vue":"ed9ec4ee8fb161977e18","node_modules_vue-element-loading_lib_vue-element-loading_min_js":"2ecdda0a57abe363253b","resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListStudent_vue":"aa84ae9b75e327a3c09d","resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListTeacher_vue":"f2c450b71bac8135134b","resources_js_components_course-view_tabs_announcement-tab_PostListType_AnnouncementList_vue":"51d813465ca79b8c86c6","resources_js_components_course-view_tabs_announcement-tab_actions_commentList_vue":"0057627b2f18387b092c","resources_js_components_course-view_tabs_classes-tab_class-type_createClass_vue":"b535fa0975fda0c9328c","resources_js_components_course-view_tabs_classes-tab_class-type_editClass_vue":"95ec1a6b72f3eee86f93","resources_js_components_course-view_tabs_classes-tab_class-type_archiveClass_vue":"245309209bd13f479bdf","resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_student-list_vue":"db943549fdde388f66ca","resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_instructor-list_vue":"96c0dde3cda622902440","resources_js_components_Classwork_View_type_classworkType_ObjectiveComponent_vue":"a410d89ecc2374372386","resources_js_components_Classwork_View_type_classworkType_SubjectiveComponent_vue":"974773784b9579f741b4","resources_js_components_Classwork_View_type_classworkType_responseLateComponent_vue":"2824e12659aa8f435e43","resources_js_components_Classwork_View_tabs_dialogs_resetConfirmation_vue":"50be7d554f947728b501","resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_vue":"e4276017512246ea1486","resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-subjective_vue":"4258547a85dc9162bb1b","resources_js_components_admin_monitor-teachers_teacherProfile_courses_course_summary_preview_vue":"270577b77504ce73b0ca","resources_js_components_course-view_tabs_classwork-tab_dialogs_previewClassworkModal_vue":"b67e2efdd241dd71ea29","resources_js_components_course-view_tabs_classwork-tab_dialogs_deleteDiaglog_vue":"007db3f4476d13441421","resources_js_components_course-view_tabs_classwork-tab_newClassworkModal_vue-_69321":"129ec146b9f7bbe52abc","resources_js_components_course-view_tabs_people-list_dialog_removeConfirmDialog_vue":"6603fd47f2d2cdb4c67b","resources_js_components_course-view_tabs_people-list_dialog_addStudentDialog_vue":"ae68dbbb955429321378","resources_js_components_Classwork_View_type_classworkType_attachLinkDialog_vue":"b50fd07d552b7ad3166d","resources_js_components_admin_monitor-teachers_teacherProfile_courses_summary_content_modules_vue":"1db54bd995d6fa7d0279","resources_js_components_admin_monitor-teachers_teacherProfile_courses_summary_content_classes_vue":"a3d131eae342ddef577d"}[chunkId] + ".js";
=======
/******/ 			// return url for filenames not based on template
/******/ 			if ({"resources_js_components_login_login_vue":1,"resources_js_components_register_register_vue":1,"resources_js_components_profile_profile_vue":1,"resources_js_components_mainApp_vue":1,"resources_js_components_dashboard_dashboardComponent_vue":1,"resources_js_components_course_subject_mycourse-page_vue":1,"resources_js_components_archivesList_ArchiveComponent_vue":1,"resources_js_components_layout_notification_SeeAllNotification_vue":1,"resources_js_components_layout_notification_invites_vue-_c8ea0":1,"resources_js_components_course_subject_class-type_ClassNotFound_vue":1,"resources_js_components_course-view_course-setup_courseSetupComponent_vue":1,"resources_js_components_course-view_tabs_about-tab_aboutComponent_vue":1,"resources_js_components_course-view_tabs_classwork-tab_classworkComponent_vue":1,"resources_js_components_course-view_tabs_announcement-tab_announcementComponent_vue":1,"resources_js_components_course-view_tabs_settings-tab_settingsComponent_vue":1,"resources_js_components_course-view_tabs_grading_criteria-tab_grading_criteriaComponent_vue":1,"resources_js_components_course-view_tabs_modules-tab_modulesComponent_vue":1,"resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesComponent_vue":1,"resources_js_components_course-view_tabs_classes-tab_classesComponent_vue":1,"resources_js_components_course-view_tabs_gradebook-tab_teacherGradebookComponent_vue":1,"resources_js_components_course-view_tabs_gradebook-tab_studentGradebookComponent_vue":1,"resources_js_components_course-view_tabs_modules-tab_user-type_pdfview_vue":1,"resources_js_components_course-view_tabs_studentProgress-tab_studentProgressComponent_vue":1,"resources_js_components_course-view_tabs_people-list_peopleListComponent_vue":1,"resources_js_components_Classwork_View_StudentPage_ExamQuestionListPage_vue":1,"resources_js_components_Classwork_View_StudentPage_resultPage_vue":1,"resources_js_components_course-view_course-view-page_vue":1,"resources_js_components_Classwork_View_classworkDetailsView_vue":1,"resources_js_components_Classwork_View_tabs_addQuestionTab_vue":1,"resources_js_components_Classwork_View_tabs_questionListTab_vue":1,"resources_js_components_Classwork_View_tabs_questionnAnalyticstab_vue":1,"resources_js_components_Classwork_View_tabs_submissionListTab_vue":1,"resources_js_components_Classwork_View_tabs_publishClassworkTab_vue":1,"resources_js_components_Classwork_View_tabs_test_vue":1,"resources_js_components_Classwork_View_tabs_classworkDetailsTab_vue":1,"resources_js_components_course-view_tabs_classwork-tab_documentPreview_vue":1,"resources_js_components_admin_manage-users_manage-usersComponent_vue":1,"resources_js_components_admin_monitor-teachers_monitorTeachersComponent_vue":1,"resources_js_components_admin_monitor-teachers_teacherProfile_teacherProfile_vue":1,"resources_js_components_admin_schoolyear-semester_schoolyear-semesterComponent_vue":1,"resources_js_components_admin_departments_department_vue":1,"resources_js_components_profile_editprofile_vue":1,"resources_js_components_profile_changePassword_vue":1,"resources_js_components_profile_coursesProgress_vue":1,"resources_js_components_profile_myCalendar_vue":1,"resources_js_components_layout_navigation_main-navbar_vue":1,"resources_js_components_layout_navigation_course-navbar_vue":1,"resources_js_components_layout_navigation_admin_admin-navbar_vue":1,"resources_js_components_layout_notification_invites_vue-_c8ea1":1,"resources_js_components_dashboard_student_student-dashboardComponent_vue":1,"resources_js_components_dashboard_teacher_teacher-dashboardComponent_vue":1,"resources_js_components_dashboard_admin_admin-dashboardComponent_vue":1,"resources_js_components_course_subject_class-type_teacher-coursePage_vue":1,"resources_js_components_course_subject_class-type_student-classPage_vue":1,"resources_js_components_archivesList_ArchiveType_courses-archive_vue":1,"resources_js_components_archivesList_ArchiveType_classwork-archive_vue":1,"resources_js_components_archivesList_ArchiveType_classes-archive_vue":1,"resources_js_components_layout_notification_adminNotification_vue":1,"resources_js_components_layout_notification_teacher-studentNotification_vue":1,"resources_js_components_course-view_course-setup_grading-criteria_vue":1,"resources_js_components_course-view_course-setup_courseDetailsComponent_vue":1,"resources_js_components_course-view_course-setup_classComponent_vue":1,"resources_js_components_course-view_tabs_about-tab_gradingCateogry_vue":1,"resources_js_components_course-view_tabs_about-tab_class_description_vue":1,"resources_js_components_course-view_tabs_classwork-tab_classworkList_vue":1,"resources_js_components_course-view_tabs_classwork-tab_newClassworkModal_vue-_69320":1,"resources_js_components_course-view_tabs_announcement-tab_announcementCreate_vue":1,"resources_js_components_course-view_tabs_announcement-tab_announcementPostList_vue":1,"resources_js_components_course-view_tabs_modules-tab_modulesListComponent_vue":1,"resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesListComponent_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_teacher-classPage_vue":1,"resources_js_components_course-view_tabs_people-list_InstructorListView_vue":1,"resources_js_components_course-view_tabs_people-list_studentListView_vue":1,"resources_js_components_Classwork_View_StudentPage_viewSubmittedPage_vue":1,"resources_js_components_course-view_SelectBackgroundDialog_vue":1,"resources_js_components_Classwork_View_type_studentStartPage_vue":1,"resources_js_components_Classwork_View_type_teacherStartPage_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_optionRemoveDialog_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_objectiveSubmission_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_subjectiveSubmission_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_publishDialog_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_unpublishConfirmDialog_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_UpdatePublishDialog_vue":1,"resources_js_components_admin_monitor-teachers_teacherProfile_editprofile_vue":1,"resources_js_components_admin_monitor-teachers_teacherProfile_changePassword_vue":1,"resources_js_components_admin_monitor-teachers_teacherProfile_coursesProgress_vue":1,"resources_js_components_admin_monitor-teachers_teacherProfile_myCalendar_vue":1,"resources_js_components_dashboard_myCalendar_vue":1,"resources_js_components_dashboard_notificationComponent_vue":1,"resources_js_components_dashboard_student_student-classes_vue":1,"resources_js_components_dashboard_student_ProgressChart_vue":1,"resources_js_components_dashboard_teacher_teacher-courses_vue":1,"resources_js_components_dashboard_teacher_ProgressChart_vue":1,"resources_js_components_course_subject_class-type_dialog_confirmArchiveCourse_vue":1,"resources_js_components_archivesList_ArchiveType_archiveCourseType_teacherArchive_vue":1,"resources_js_components_archivesList_ArchiveType_archiveCourseType_studentArchive_vue":1,"resources_js_components_archivesList_ArchiveType_archiveClassType_teacherClassArchive_vue":1,"resources_js_components_archivesList_ArchiveType_archiveClassType_studentClassArchive_vue":1,"node_modules_vue-element-loading_lib_vue-element-loading_min_js":1,"resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListStudent_vue":1,"resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListTeacher_vue":1,"resources_js_components_course-view_tabs_announcement-tab_PostListType_AnnouncementList_vue":1,"resources_js_components_course-view_tabs_announcement-tab_actions_commentList_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_createClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_editClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_archiveClass_vue":1,"resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_student-list_vue":1,"resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_instructor-list_vue":1,"resources_js_components_Classwork_View_type_classworkType_ObjectiveComponent_vue":1,"resources_js_components_Classwork_View_type_classworkType_SubjectiveComponent_vue":1,"resources_js_components_Classwork_View_type_classworkType_responseLateComponent_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_resetConfirmation_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-subjective_vue":1,"resources_js_components_admin_monitor-teachers_teacherProfile_courses_course_summary_preview_vue":1,"resources_js_components_course-view_tabs_classwork-tab_dialogs_previewClassworkModal_vue":1,"resources_js_components_course-view_tabs_classwork-tab_dialogs_deleteDiaglog_vue":1,"resources_js_components_course-view_tabs_classwork-tab_newClassworkModal_vue-_69321":1,"resources_js_components_course-view_tabs_people-list_dialog_removeConfirmDialog_vue":1,"resources_js_components_course-view_tabs_people-list_dialog_addStudentDialog_vue":1,"resources_js_components_Classwork_View_type_classworkType_attachLinkDialog_vue":1,"resources_js_components_admin_monitor-teachers_teacherProfile_courses_summary_content_modules_vue":1,"resources_js_components_admin_monitor-teachers_teacherProfile_courses_summary_content_classes_vue":1}[chunkId]) return "js/" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
>>>>>>> f226564a7b83821ba1ef55126e939385153b5b6b
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/manifest": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^(\/js\/manifest|css\/app)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;