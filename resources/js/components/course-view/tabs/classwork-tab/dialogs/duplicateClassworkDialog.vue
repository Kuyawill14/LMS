<template>
    <div>
        <v-card>
            <v-card-title class="d-flex">
                Duplicate Classwork
                <v-spacer></v-spacer>
                <v-btn @click="$emit('CloseDialog')" icon><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-select hide-details 
                        v-model="selectedCourse"
                          item-text="course_name"
                          item-value="course_id"
                         :items="allCourse" label="Course" outlined></v-select>
                    </v-col>
                     <v-col cols="12">
                        <v-btn rounded color="primary" block>
                            Confirm Duplicate
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    data(){
        return{
            selectedCourse: null
        }
    },
    computed: mapGetters(['allCourse',]),

    mounted(){
        if(this.allCourse.length == 0){
                this.$store.dispatch('fetchCourseList').then(()=>{
            })
        }        
    }
}
</script>