<template>
<div>
    <adminNotification v-if="get_UserRole == 'Administrator'"></adminNotification>
    <teacherstudentNotification :role="get_UserRole" v-if="get_UserRole == 'Teacher' || get_UserRole == 'Student'"></teacherstudentNotification>
</div>
 
</template>

<script>
const adminNotification = () => import("./adminNotification")
const teacherstudentNotification = () => import("./teacher-studentNotification")
import moment from 'moment/src/moment'
import { mapGetters,mapActions } from "vuex";
export default {
  title: 'Notifications',
  components:{
    adminNotification,
    teacherstudentNotification
  },
  computed: mapGetters(["get_UserRole"]),
}
</script>