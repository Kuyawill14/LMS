<template>
    <div>
        <v-card>
            <v-card-title class="d-flex">
                Duplicate Classwork
                <v-spacer></v-spacer>
                <v-btn @click="$emit('CloseDialog')" icon><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
                {{duplicateDetails}}
                <v-row>
                    <v-col cols="12">
                        <v-select hide-details 
                        v-model="selectedCourse"
                          item-text="course_name"
                          item-value="course_id"
                         :items="allCourse" label="To Course" outlined></v-select>
                    </v-col>
                     <v-col cols="12">
                        <v-btn @click="DuplicateClasswork()" rounded color="primary" block>
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
    props:['duplicateId'],
    data(){
        return{
            selectedCourse: null
        }
    },
    computed: mapGetters(['allCourse',]),
    methods:{
        async DuplicateClasswork(){
            let Details = {};
            Details.course_id = this.selectedCourse;
            Details.classwork_id = this.duplicateId;
            axios.post('/api/classwork/duplicate', Details).then((res)=>{
                this.$emit("ToggleRefresh", this.selectedCourse);
                this.toastSuccess('Classwork Successfully Duplicated');
            })
        }
    },
    mounted(){
        if(this.allCourse.length == 0){
                this.$store.dispatch('fetchCourseList').then(()=>{
            })
        }        
    }
}
</script>