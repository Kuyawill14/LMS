<template>
<div>
    <adminNotification v-if="get_UserRole == 'Admin'"></adminNotification>
    <teacherstudentNotification v-if="get_UserRole == 'Teacher' || get_UserRole == 'Student'"></teacherstudentNotification>
</div>
 
</template>

<script>
const adminNotification = () => import("./adminNotification")
const teacherstudentNotification = () => import("./teacher-studentNotification")
import moment from 'moment'
import { mapGetters,mapActions } from "vuex";
export default {
  components:{
    adminNotification,
    teacherstudentNotification
  },
  computed: mapGetters(["get_UserRole"]),
}
</script>