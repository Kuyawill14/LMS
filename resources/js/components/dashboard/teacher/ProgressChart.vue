<template>
  <div>
    <h3>Classes Progress</h3>
    <bar-chart v-if="isLoaded" :courseList="courseList"></bar-chart>
  </div>
</template>

<script>
import BarChart from './Charts'
import {mapGetters,mapActions } from "vuex"; 
export default {
  components: {
    BarChart
  },
  data(){
      return{
          courseList: [],
          isLoaded: false
      }
  },
    computed: mapGetters(['allCourse']),
    methods:{
            fetchCourseNames() {
            this.$store.dispatch('fetchCourseList').then(()=>{
                for (let i = 0; i < this.allCourse.length; i++) {
                    this.courseList[i] = this.allCourse[i].course_name
                }
                this.isLoaded = true;
            })
        },

    },
    mounted(){
        this.fetchCourseNames();
    }
}
</script>