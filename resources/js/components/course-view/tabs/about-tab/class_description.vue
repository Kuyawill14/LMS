<template>
<v-card min-height="177">
    <v-card-title>
          ABOUT THIS COURSE
    </v-card-title>

    <v-card-text>
         <div v-html="getcourseInfo.course_description"> </div>
         </v-card-text>
       
</v-card>
</template>

<script>
 import { mapGetters,mapActions} from "vuex";
    export default {
        data: function () {
            return {
              
                  
            }
        },
        methods: {
            ...mapActions(['fetchScourse']),

        },
        computed: mapGetters(["getcourseInfo"]),
        created() {
            this.class_id = this.$route.params.id;
               this.$store.dispatch('fetchScourse', this.class_id);
         
        }
    }

</script>
