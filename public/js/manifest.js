<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 736ee3a14cebaa5e4a00e494107d3e4fcd74eb13
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
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
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
/******/ 			// return url for filenames not based on template
<<<<<<< HEAD
/******/ 			if ({"main-view":1,"Dashboard":1,"login":1,"register":1,"verifyEmail":1,"ResetPassword":1,"resources_js_components_verify_EmailPending_vue":1,"classworks-details-view":1,"profile":1,"user_profile":1,"course_progress":1,"my_calendar":1,"change_password":1,"Courses":1,"Course_View":1,"Course_Page":1,"Course_Setup":1,"Course_Classes":1,"Course_Announcement":1,"Course_Classwork":1,"Course_Modules":1,"Course_Module_Preview":1,"Course_Student_List":1,"Course_About":1,"Course_Setting":1,"Course_Grading_Criteria":1,"Course_Student_Progress":1,"Course_Student_My_Progress":1,"Course_GradeBook":1,"Course_Student_GradeBook":1,"Examination_Page":1,"resources_js_components_Classwork_View_StudentPage_resultPage_vue":1,"resources_js_components_campus-director_monitor-departments_monitorDepartmentComponent_vue":1,"resources_js_components_campus-director_monitor-departments_department_page_vue":1,"resources_js_components_campus-director_monitor-departments_overview_vue":1,"resources_js_components_monitor-teachers_teacherProfile_teacherProfile_vue":1,"resources_js_components_admin_manage-users_manage-programChairComponent_vue":1,"resources_js_components_admin_manage-users_manage-teachersComponent_vue":1,"resources_js_components_admin_manage-users_manage-studentsComponent_vue":1,"resources_js_components_admin_manage-users_manage-campusDirectorComponent_vue":1,"resources_js_components_admin_schoolyear-semester_schoolyear-semesterComponent_vue":1,"resources_js_components_admin_departments_department_vue":1,"resources_js_components_program-chair_dashboard_programChair-dashboard_vue":1,"resources_js_components_program-chair_announcement_programChair-announcement_vue":1,"notification":1,"resources_js_components_layout_notification_invites_vue":1,"not-found-callback-page":1,"resources_js_components_archivesList_ArchiveComponent_vue":1,"resources_js_components_Classwork_View_classworkSubmission-Overview_vue":1,"layout":1,"resources_js_components_dashboard_student_student-dashboardComponent_vue":1,"resources_js_components_dashboard_teacher_teacher-dashboardComponent_vue":1,"resources_js_components_dashboard_admin_admin-dashboardComponent_vue":1,"forgot_password":1,"login_layout":1,"verify-email":1,"resources_js_components_Classwork_View_type_studentStartPage_vue":1,"resources_js_components_Classwork_View_type_teacherStartPage_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_removeAttachment_vue":1,"resources_js_components_Classwork_View_tabs_rubrics_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_deleteDialog_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_deleteDialogQuestion_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_warningDialog_vue":1,"resources_js_components_Classwork_View_tabs_viewQuestion_vue":1,"resources_js_components_Classwork_View_tabs_TeacherQuizPreview_StudentViewForTeacher_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_objectiveSubmission_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_subjectiveSubmission_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_publishDialog_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_unpublishConfirmDialog_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_UpdatePublishDialog_vue":1,"resources_js_components_course_subject_class-type_teacher-coursePage_vue":1,"resources_js_components_course_subject_class-type_student-classPage_vue":1,"resources_js_components_course-view_SelectBackgroundDialog_vue":1,"resources_js_components_course-view_tabs_dashboard-tab_recent_classwork_vue":1,"resources_js_components_course-view_tabs_dashboard-tab_latest_modules_vue":1,"resources_js_components_course-view_course-setup_grading-criteria_vue":1,"resources_js_components_course-view_course-setup_courseDetailsComponent_vue":1,"resources_js_components_course-view_course-setup_classComponent_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_teacher-classPage_vue":1,"resources_js_components_course-view_tabs_announcement-tab_announcementCreate_vue":1,"resources_js_components_course-view_tabs_announcement-tab_announcementPostList_vue":1,"resources_js_components_course-view_tabs_classwork-tab_classworkList_vue":1,"resources_js_components_course-view_tabs_classwork-tab_newClassworkModal_vue":1,"resources_js_components_course-view_tabs_modules-tab_modulesListComponent_vue":1,"resources_js_components_course-view_tabs_modules-tab_user-type_pdfview_vue":1,"resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesListComponent_vue":1,"resources_js_components_course-view_tabs_people-list_InstructorListView_vue":1,"resources_js_components_course-view_tabs_people-list_studentListView_vue":1,"resources_js_components_course-view_tabs_about-tab_gradingCateogry_vue":1,"resources_js_components_course-view_tabs_about-tab_class_description_vue":1,"resources_js_components_course-view_tabs_gradebook-tab_final-grades-teacherGradebook_vue":1,"resources_js_components_Classwork_View_StudentPage_viewSubmittedPage_vue":1,"resources_js_components_monitor-teachers_teacherProfile_coursesProgress_vue":1,"resources_js_components_monitor-teachers_monitorTeachersComponent_vue":1,"resources_js_components_layout_notification_adminNotification_vue":1,"resources_js_components_layout_notification_teacher-studentNotification_vue":1,"resources_js_components_archivesList_ArchiveType_courses-archive_vue":1,"resources_js_components_archivesList_ArchiveType_classwork-archive_vue":1,"resources_js_components_archivesList_ArchiveType_classes-archive_vue":1,"resources_js_components_archivesList_teacherArchive_vue":1,"resources_js_components_archivesList_studentArchive_vue":1,"resources_js_components_Classwork_View_tabs_submissionListTabcopy_vue":1,"resources_js_components_dashboard_myCalendar_vue":1,"resources_js_components_dashboard_notificationComponent_vue":1,"resources_js_components_dashboard_student_student-classes_vue":1,"resources_js_components_dashboard_student_ProgressChart_vue":1,"resources_js_components_dashboard_student_myTask_vue":1,"resources_js_components_dashboard_teacher_teacher-courses_vue":1,"resources_js_components_dashboard_teacher_ProgressChart_vue":1,"resources_js_components_Classwork_View_type_classworkType_ObjectiveComponent_vue":1,"resources_js_components_Classwork_View_type_classworkType_SubjectiveComponent_vue":1,"resources_js_components_Classwork_View_type_classworkType_responseLateComponent_vue":1,"resources_js_components_Classwork_View_tabs_TeacherQuizPreview_previewTimer_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_resetConfirmation_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_v-5caf840":1,"resources_js_components_Classwork_View_tabs_submissionType_resetAllSubmission_resetStudentSub-cfe23a":1,"resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-subjective_vue":1,"resources_js_components_course_subject_class-type_dialog_confirmArchiveCourse_vue":1,"resources_js_components_course_subject_class-type_dialog_confirmDeleteCourse_vue":1,"resources_js_components_course_subject_class-type_dialog_confirmUnenroll_vue":1,"resources_js_components_course-view_course-setup_class_createClass_vue":1,"resources_js_components_course-view_course-setup_class_editClass_vue":1,"resources_js_components_course-view_course-setup_class_deleteClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_createClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_editClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_archiveClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_deleteClass_vue":1,"resources_js_components_course-view_tabs_announcement-tab_PostListType_AnnouncementList_vue":1,"resources_js_components_course-view_tabs_announcement-tab_actions_commentList_vue":1,"resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListStudent_vue":1,"resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListTeacher_vue":1,"resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_student-list_vue":1,"resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_instructor-list_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_course_summary_preview_vue":1,"resources_js_components_archivesList_ArchiveType_archiveCourseType_teacherArchive_vue":1,"resources_js_components_archivesList_ArchiveType_archiveClassworkType_teacherClassworkArchive_vue":1,"resources_js_components_archivesList_ArchiveType_archiveClassType_teacherClassArchive_vue":1,"resources_js_components_archivesList_dialogs_confirmRestore_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_objectiveSubmissioncopy_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_subjectiveSubmissioncopy_vue":1,"resources_js_components_Classwork_View_type_classworkType_submissionView_viewSubmission_vue":1,"resources_js_components_Classwork_View_type_classworkType_attachLinkDialog_vue":1,"resources_js_components_course-view_tabs_classwork-tab_dialogs_previewClassworkModal_vue":1,"resources_js_components_course-view_tabs_classwork-tab_dialogs_deleteDiaglog_vue":1,"resources_js_components_course-view_tabs_classwork-tab_dialogs_archiveClassworkDialog_vue":1,"resources_js_components_course-view_tabs_people-list_dialog_removeConfirmDialog_vue":1,"resources_js_components_course-view_tabs_people-list_dialog_addStudentDialog_vue":1,"resources_js_components_course-view_tabs_people-list_dialog_moveStudentDialog_vue":1,"resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_class_join_request_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_summary_content_modules_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_summary_content_classes_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_summary_content_student_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_summary_content_classwork_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_v-5caf841":1}[chunkId]) return "js/" + chunkId + ".js";
=======
/******/ 			if ({"main-view":1,"Dashboard":1,"login":1,"register":1,"verifyEmail":1,"ResetPassword":1,"resources_js_components_verify_EmailPending_vue":1,"classworks-details-view":1,"profile":1,"user_profile":1,"course_progress":1,"my_calendar":1,"change_password":1,"Courses":1,"Course_View":1,"Course_Page":1,"Course_Setup":1,"Course_Classes":1,"Course_Announcement":1,"Course_Classwork":1,"Course_Modules":1,"Course_Module_Preview":1,"Course_Student_List":1,"Course_About":1,"Course_Setting":1,"Course_Grading_Criteria":1,"Course_Student_Progress":1,"Course_Student_My_Progress":1,"Course_GradeBook":1,"Course_Student_GradeBook":1,"Examination_Page":1,"resources_js_components_Classwork_View_StudentPage_resultPage_vue":1,"resources_js_components_campus-director_monitor-departments_monitorDepartmentComponent_vue":1,"resources_js_components_campus-director_monitor-departments_department_page_vue":1,"resources_js_components_campus-director_monitor-departments_overview_vue":1,"resources_js_components_monitor-teachers_teacherProfile_teacherProfile_vue":1,"resources_js_components_admin_manage-users_manage-programChairComponent_vue":1,"resources_js_components_admin_manage-users_manage-teachersComponent_vue":1,"resources_js_components_admin_manage-users_manage-studentsComponent_vue":1,"resources_js_components_admin_manage-users_manage-campusDirectorComponent_vue":1,"resources_js_components_admin_schoolyear-semester_schoolyear-semesterComponent_vue":1,"resources_js_components_admin_departments_department_vue":1,"resources_js_components_program-chair_dashboard_programChair-dashboard_vue":1,"resources_js_components_program-chair_announcement_programChair-announcement_vue":1,"notification":1,"resources_js_components_layout_notification_invites_vue":1,"not-found-callback-page":1,"resources_js_components_archivesList_ArchiveComponent_vue":1,"resources_js_components_Classwork_View_classworkSubmission-Overview_vue":1,"layout":1,"resources_js_components_dashboard_student_student-dashboardComponent_vue":1,"resources_js_components_dashboard_teacher_teacher-dashboardComponent_vue":1,"resources_js_components_dashboard_admin_admin-dashboardComponent_vue":1,"verify-email":1,"resources_js_components_Classwork_View_type_studentStartPage_vue":1,"resources_js_components_Classwork_View_type_teacherStartPage_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_removeAttachment_vue":1,"resources_js_components_Classwork_View_tabs_rubrics_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_deleteDialog_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_deleteDialogQuestion_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_warningDialog_vue":1,"resources_js_components_Classwork_View_tabs_viewQuestion_vue":1,"resources_js_components_Classwork_View_tabs_TeacherQuizPreview_StudentViewForTeacher_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_objectiveSubmission_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_subjectiveSubmission_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_publishDialog_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_unpublishConfirmDialog_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_UpdatePublishDialog_vue":1,"resources_js_components_course_subject_class-type_teacher-coursePage_vue":1,"resources_js_components_course_subject_class-type_student-classPage_vue":1,"resources_js_components_course-view_SelectBackgroundDialog_vue":1,"resources_js_components_course-view_tabs_dashboard-tab_recent_classwork_vue":1,"resources_js_components_course-view_tabs_dashboard-tab_latest_modules_vue":1,"resources_js_components_course-view_course-setup_grading-criteria_vue":1,"resources_js_components_course-view_course-setup_courseDetailsComponent_vue":1,"resources_js_components_course-view_course-setup_classComponent_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_teacher-classPage_vue":1,"resources_js_components_course-view_tabs_announcement-tab_announcementCreate_vue":1,"resources_js_components_course-view_tabs_announcement-tab_announcementPostList_vue":1,"resources_js_components_course-view_tabs_classwork-tab_classworkList_vue":1,"resources_js_components_course-view_tabs_classwork-tab_newClassworkModal_vue":1,"resources_js_components_course-view_tabs_modules-tab_modulesListComponent_vue":1,"resources_js_components_course-view_tabs_modules-tab_user-type_pdfview_vue":1,"resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesListComponent_vue":1,"resources_js_components_course-view_tabs_people-list_InstructorListView_vue":1,"resources_js_components_course-view_tabs_people-list_studentListView_vue":1,"resources_js_components_course-view_tabs_about-tab_gradingCateogry_vue":1,"resources_js_components_course-view_tabs_about-tab_class_description_vue":1,"resources_js_components_course-view_tabs_gradebook-tab_final-grades-teacherGradebook_vue":1,"resources_js_components_Classwork_View_StudentPage_viewSubmittedPage_vue":1,"resources_js_components_monitor-teachers_teacherProfile_coursesProgress_vue":1,"resources_js_components_monitor-teachers_monitorTeachersComponent_vue":1,"resources_js_components_layout_notification_adminNotification_vue":1,"resources_js_components_layout_notification_teacher-studentNotification_vue":1,"resources_js_components_archivesList_ArchiveType_courses-archive_vue":1,"resources_js_components_archivesList_ArchiveType_classwork-archive_vue":1,"resources_js_components_archivesList_ArchiveType_classes-archive_vue":1,"resources_js_components_archivesList_teacherArchive_vue":1,"resources_js_components_archivesList_studentArchive_vue":1,"resources_js_components_Classwork_View_tabs_submissionListTabcopy_vue":1,"resources_js_components_dashboard_myCalendar_vue":1,"resources_js_components_dashboard_notificationComponent_vue":1,"resources_js_components_dashboard_student_student-classes_vue":1,"resources_js_components_dashboard_student_ProgressChart_vue":1,"resources_js_components_dashboard_student_myTask_vue":1,"resources_js_components_dashboard_teacher_teacher-courses_vue":1,"resources_js_components_dashboard_teacher_ProgressChart_vue":1,"resources_js_components_Classwork_View_type_classworkType_ObjectiveComponent_vue":1,"resources_js_components_Classwork_View_type_classworkType_SubjectiveComponent_vue":1,"resources_js_components_Classwork_View_type_classworkType_responseLateComponent_vue":1,"resources_js_components_Classwork_View_tabs_TeacherQuizPreview_previewTimer_vue":1,"resources_js_components_Classwork_View_tabs_dialogs_resetConfirmation_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_v-5caf840":1,"resources_js_components_Classwork_View_tabs_submissionType_resetAllSubmission_resetStudentSub-cfe23a":1,"resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-subjective_vue":1,"resources_js_components_course_subject_class-type_dialog_confirmArchiveCourse_vue":1,"resources_js_components_course_subject_class-type_dialog_confirmDeleteCourse_vue":1,"resources_js_components_course_subject_class-type_dialog_confirmUnenroll_vue":1,"resources_js_components_course-view_course-setup_class_createClass_vue":1,"resources_js_components_course-view_course-setup_class_editClass_vue":1,"resources_js_components_course-view_course-setup_class_deleteClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_createClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_editClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_archiveClass_vue":1,"resources_js_components_course-view_tabs_classes-tab_class-type_deleteClass_vue":1,"resources_js_components_course-view_tabs_announcement-tab_PostListType_AnnouncementList_vue":1,"resources_js_components_course-view_tabs_announcement-tab_actions_commentList_vue":1,"resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListStudent_vue":1,"resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListTeacher_vue":1,"resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_student-list_vue":1,"resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_instructor-list_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_course_summary_preview_vue":1,"resources_js_components_archivesList_ArchiveType_archiveCourseType_teacherArchive_vue":1,"resources_js_components_archivesList_ArchiveType_archiveClassworkType_teacherClassworkArchive_vue":1,"resources_js_components_archivesList_ArchiveType_archiveClassType_teacherClassArchive_vue":1,"resources_js_components_archivesList_dialogs_confirmRestore_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_objectiveSubmissioncopy_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_subjectiveSubmissioncopy_vue":1,"resources_js_components_Classwork_View_type_classworkType_submissionView_viewSubmission_vue":1,"resources_js_components_Classwork_View_type_classworkType_attachLinkDialog_vue":1,"resources_js_components_course-view_tabs_classwork-tab_dialogs_previewClassworkModal_vue":1,"resources_js_components_course-view_tabs_classwork-tab_dialogs_deleteDiaglog_vue":1,"resources_js_components_course-view_tabs_classwork-tab_dialogs_archiveClassworkDialog_vue":1,"resources_js_components_course-view_tabs_people-list_dialog_removeConfirmDialog_vue":1,"resources_js_components_course-view_tabs_people-list_dialog_addStudentDialog_vue":1,"resources_js_components_course-view_tabs_people-list_dialog_moveStudentDialog_vue":1,"resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_class_join_request_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_summary_content_modules_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_summary_content_classes_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_summary_content_student_vue":1,"resources_js_components_monitor-teachers_teacherProfile_courses_summary_content_classwork_vue":1,"resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_v-5caf841":1}[chunkId]) return "js/" + chunkId + ".js";
>>>>>>> 736ee3a14cebaa5e4a00e494107d3e4fcd74eb13
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
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
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
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
<<<<<<< HEAD
;
=======
;
=======
(()=>{"use strict";var s,j,e,r,t={},o={};function n(s){var j=o[s];if(void 0!==j)return j.exports;var e=o[s]={id:s,loaded:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}n.m=t,s=[],n.O=(j,e,r,t)=>{if(!e){var o=1/0;for(l=0;l<s.length;l++){for(var[e,r,t]=s[l],i=!0,a=0;a<e.length;a++)(!1&t||o>=t)&&Object.keys(n.O).every((s=>n.O[s](e[a])))?e.splice(a--,1):(i=!1,t<o&&(o=t));if(i){s.splice(l--,1);var u=r();void 0!==u&&(j=u)}}return j}t=t||0;for(var l=s.length;l>0&&s[l-1][2]>t;l--)s[l]=s[l-1];s[l]=[e,r,t]},n.n=s=>{var j=s&&s.__esModule?()=>s.default:()=>s;return n.d(j,{a:j}),j},e=Object.getPrototypeOf?s=>Object.getPrototypeOf(s):s=>s.__proto__,n.t=function(s,r){if(1&r&&(s=this(s)),8&r)return s;if("object"==typeof s&&s){if(4&r&&s.__esModule)return s;if(16&r&&"function"==typeof s.then)return s}var t=Object.create(null);n.r(t);var o={};j=j||[null,e({}),e([]),e(e)];for(var i=2&r&&s;"object"==typeof i&&!~j.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach((j=>o[j]=()=>s[j]));return o.default=()=>s,n.d(t,o),t},n.d=(s,j)=>{for(var e in j)n.o(j,e)&&!n.o(s,e)&&Object.defineProperty(s,e,{enumerable:!0,get:j[e]})},n.f={},n.e=s=>Promise.all(Object.keys(n.f).reduce(((j,e)=>(n.f[e](s,j),j)),[])),n.u=s=>4814===s?"js/main-view.js":6362===s?"js/Dashboard.js":4535===s?"js/login.js":685===s?"js/register.js":6371===s?"js/verifyEmail.js":6547===s?"js/ResetPassword.js":4008===s?"js/4008.js":4279===s?"js/classworks-details-view.js":6845===s?"js/profile.js":2932===s?"js/user_profile.js":8378===s?"js/course_progress.js":9198===s?"js/my_calendar.js":9154===s?"js/change_password.js":4278===s?"js/Courses.js":463===s?"js/Course_View.js":7312===s?"js/Course_Page.js":4938===s?"js/Course_Setup.js":4306===s?"js/Course_Classes.js":8224===s?"js/Course_Announcement.js":4582===s?"js/Course_Classwork.js":6937===s?"js/Course_Modules.js":4569===s?"js/Course_Module_Preview.js":2372===s?"js/Course_Student_List.js":4214===s?"js/Course_About.js":289===s?"js/Course_Setting.js":1021===s?"js/Course_Grading_Criteria.js":9875===s?"js/Course_Student_Progress.js":906===s?"js/Course_Student_My_Progress.js":9152===s?"js/Course_GradeBook.js":9898===s?"js/Course_Student_GradeBook.js":750===s?"js/Examination_Page.js":4134===s?"js/4134.js":7209===s?"js/7209.js":5475===s?"js/5475.js":8175===s?"js/8175.js":8426===s?"js/8426.js":5947===s?"js/5947.js":5811===s?"js/5811.js":7526===s?"js/7526.js":3952===s?"js/3952.js":4784===s?"js/4784.js":3176===s?"js/3176.js":2987===s?"js/2987.js":757===s?"js/757.js":1599===s?"js/notification.js":2543===s?"js/2543.js":6369===s?"js/not-found-callback-page.js":3994===s?"js/3994.js":8036===s?"js/8036.js":7225===s?"js/layout.js":3157===s?"js/3157.js":4835===s?"js/4835.js":6621===s?"js/6621.js":1306===s?"js/verify-email.js":6908===s?"js/6908.js":2941===s?"js/2941.js":728===s?"js/728.js":1191===s?"js/1191.js":6731===s?"js/6731.js":561===s?"js/561.js":4865===s?"js/4865.js":8313===s?"js/8313.js":855===s?"js/855.js":9166===s?"js/9166.js":1958===s?"js/1958.js":5034===s?"js/5034.js":2771===s?"js/2771.js":692===s?"js/692.js":8675===s?"js/8675.js":8280===s?"js/8280.js":7844===s?"js/7844.js":9837===s?"js/9837.js":5458===s?"js/5458.js":9747===s?"js/9747.js":6945===s?"js/6945.js":5607===s?"js/5607.js":1003===s?"js/1003.js":4770===s?"js/4770.js":9373===s?"js/9373.js":5088===s?"js/5088.js":454===s?"js/454.js":4501===s?"js/4501.js":3258===s?"js/3258.js":5557===s?"js/5557.js":6864===s?"js/6864.js":956===s?"js/956.js":6720===s?"js/6720.js":6236===s?"js/6236.js":5208===s?"js/5208.js":4755===s?"js/4755.js":1499===s?"js/1499.js":9858===s?"js/9858.js":1972===s?"js/1972.js":6639===s?"js/6639.js":4699===s?"js/4699.js":395===s?"js/395.js":3514===s?"js/3514.js":9017===s?"js/9017.js":7355===s?"js/7355.js":4415===s?"js/4415.js":5892===s?"js/5892.js":7946===s?"js/7946.js":3227===s?"js/3227.js":6758===s?"js/6758.js":4800===s?"js/4800.js":3876===s?"js/3876.js":2786===s?"js/2786.js":572===s?"js/572.js":3854===s?"js/3854.js":1145===s?"js/1145.js":7499===s?"js/7499.js":969===s?"js/969.js":7255===s?"js/7255.js":1244===s?"js/1244.js":3715===s?"js/3715.js":8498===s?"js/8498.js":9786===s?"js/9786.js":8127===s?"js/8127.js":9704===s?"js/9704.js":1876===s?"js/1876.js":5711===s?"js/5711.js":9220===s?"js/9220.js":5517===s?"js/5517.js":1439===s?"js/1439.js":8991===s?"js/8991.js":9812===s?"js/9812.js":553===s?"js/553.js":2644===s?"js/2644.js":9735===s?"js/9735.js":9850===s?"js/9850.js":9694===s?"js/9694.js":9159===s?"js/9159.js":4837===s?"js/4837.js":8701===s?"js/8701.js":5922===s?"js/5922.js":1458===s?"js/1458.js":6596===s?"js/6596.js":4553===s?"js/4553.js":1912===s?"js/1912.js":6329===s?"js/6329.js":258===s?"js/258.js":1240===s?"js/1240.js":9080===s?"js/9080.js":8543===s?"js/8543.js":9182===s?"js/9182.js":4957===s?"js/4957.js":1922===s?"js/1922.js":6493===s?"js/6493.js":7756===s?"js/7756.js":2556===s?"js/2556.js":3701===s?"js/3701.js":9742===s?"js/9742.js":void 0,n.miniCssF=s=>({6170:"css/app",8625:"js/vendor~utils-0"}[s]+".css"),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"==typeof window)return window}}(),n.hmd=s=>((s=Object.create(s)).children||(s.children=[]),Object.defineProperty(s,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+s.id)}}),s),n.o=(s,j)=>Object.prototype.hasOwnProperty.call(s,j),r={},n.l=(s,j,e,t)=>{if(r[s])r[s].push(j);else{var o,i;if(void 0!==e)for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var l=a[u];if(l.getAttribute("src")==s){o=l;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=s),r[s]=[j];var d=(j,e)=>{o.onerror=o.onload=null,clearTimeout(c);var t=r[s];if(delete r[s],o.parentNode&&o.parentNode.removeChild(o),t&&t.forEach((s=>s(e))),j)return j(e)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),i&&document.head.appendChild(o)}},n.r=s=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},n.nmd=s=>(s.paths=[],s.children||(s.children=[]),s),n.p="/",(()=>{var s={8929:0,6170:0};n.f.j=(j,e)=>{var r=n.o(s,j)?s[j]:void 0;if(0!==r)if(r)e.push(r[2]);else if(/^(6170|8929)$/.test(j))s[j]=0;else{var t=new Promise(((e,t)=>r=s[j]=[e,t]));e.push(r[2]=t);var o=n.p+n.u(j),i=new Error;n.l(o,(e=>{if(n.o(s,j)&&(0!==(r=s[j])&&(s[j]=void 0),r)){var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading chunk "+j+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,r[1](i)}}),"chunk-"+j,j)}},n.O.j=j=>0===s[j];var j=(j,e)=>{var r,t,[o,i,a]=e,u=0;if(o.some((j=>0!==s[j]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(a)var l=a(n)}for(j&&j(e);u<o.length;u++)t=o[u],n.o(s,t)&&s[t]&&s[t][0](),s[o[u]]=0;return n.O(l)},e=self.webpackChunk=self.webpackChunk||[];e.forEach(j.bind(null,0)),e.push=j.bind(null,e.push.bind(e))})()})();
>>>>>>> 0e37467df69098a7b79a1b275c390fa4356ba7a9
>>>>>>> 736ee3a14cebaa5e4a00e494107d3e4fcd74eb13
