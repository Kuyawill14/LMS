<template>
  
<v-card>
    <v-form class="text-center" ref="InviteForm" v-model="valid" lazy-validation>
        <v-card-title >
            <v-btn  @click="$emit('toggleCancelDialog')" icon>
                <v-icon>mdi-close</v-icon>
            </v-btn>
            Move Student
        </v-card-title>
        <v-card-text>
            <v-container ma-0 pa-0>
            <v-row>
                <v-col
                cols="12" class="mb-0 pb-0">
                 <!--    <v-select
                        id="selectClass"
                        ref="selectClass"
                        v-model="cl_id"
                        :items="classList"
                        item-text="class_name"
                        item-value="class_id"
                        label="Class"
                        outlined
                    ></v-select> -->

                      <v-select
                          dense
                          :items="allCourse"
                          :rules="dataRules"
                          @change="fetchClassList()"
                          v-model="selectedCourse_id"
                          item-text="course_code"
                          item-value="course_id"
                          label="Course"
                          class="pr-1"
                          outlined
                        ></v-select>
                </v-col>

                <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
             <!--    <v-text-field
                    :rules="emailRules"
                    v-model="email"
                    type="email"
                    outlined
                    label="Email"
                    hint="Please use a working valid email"
                ></v-text-field> -->

                   <v-select
                          dense
                          v-if="selectedCourse_id != null"
                          :items="allClass"
                          :rules="dataRules"
                          @change="setChartData()"
                          v-model="selected_classid"
                          item-text="class_name"
                          item-value="class_id"
                          label="Class"
                          outlined
                        ></v-select>
                </v-col>
            </v-row>
            </v-container>
            <small>Click the confirm buttom, if you wish to move this student.</small>
        </v-card-text>
        <v-card-actions class="pb-3">
           <!--  <v-spacer></v-spacer>
            <v-btn
            color="primary"
            outlined
            rounded
            class="pl-8 pr-8"
            @click="$emit('toggleCancelDialog')"
            >
            Cancel
            </v-btn> -->
            <v-btn
            color="primary"
            class="pl-12 pr-12"
            rounded
            block
    
            :disabled="!valid || isMoving" 
            @click="validate()"
            >
            {{isMoving ? 'Moving...':'Confirm'}}
            </v-btn>
        </v-card-actions>
    </v-form>
</v-card>
 
</template>
<script>
  import {
        mapGetters,
        mapActions
    } from "vuex";
export default {
    props:['MoveDetails'],
    data(){
        return{
            isAdding: false,
            valid: true,
            cl_id: null,
            classList:[],
            email: null,
            InviteDetails:{},
            dataRules: [
                v => !!v || "Required"
            ],
            selectedCourse_id:null,
            selected_classid: null,
            isMoving: false,
        }
    },
    computed: mapGetters(['allCourse','allClass']),
    methods:{
         ...mapActions(['fetchCourseList']),
          async fetchClassList(){
             this.$store.dispatch('fetchSubjectCourseClassList', this.selectedCourse_id)
        },
        async MoveStudent(){
            this.isMoving = true;
            let form = {};
            form.new_course_id = this.selectedCourse_id;
            form.new_class_id = this.selected_classid;
            form.user_id = this.MoveDetails.user_id;
            form.old_class_id = this.MoveDetails.class_id;
            form.old_course_id = this.$route.params.id;
           axios.post('/api/teacher/move-student', form)
           .then(res=>{
               if(res.data.success == true){
                   this.isMoving = false;
                    this.toastSuccess(res.data.message);
                    this.$emit('toggleconfirm');

               }
               else{
                    this.isMoving = false;
                    this.toastError(res.data.message);
               }
           })
           .catch(e=>{
                this.isMoving = false;
               this.toastError('Something wen wrong while moving student!');
           })
        },
        validate() {
            if (this.$refs.InviteForm.validate()) {
                this.MoveStudent();
            }
        },
    },
    mounted(){
        this.fetchCourseList();
        //this.fetchClassnames();
        console.log(this.MoveDetails);
        
    }
}
</script>