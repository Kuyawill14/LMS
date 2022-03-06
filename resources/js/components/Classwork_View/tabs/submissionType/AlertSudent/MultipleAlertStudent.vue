<template>
    <v-card>
        <v-card-title class="pa-0 pl-1 pt-1 pb-1"> <v-btn  large icon color="secondary" text @click="$emit('toggleDialog')" >
                <v-icon>mdi-close</v-icon>
            </v-btn>Alert Students</v-card-title>
        <v-divider></v-divider>
            <v-card-text class="pa-0" style="height: 550px;overflow-y:scroll;overflow-x:hidden">
                 <v-list class="pt-0 mt-0">

              <v-list-item class="mb-0 pb-0">
               <!--  <v-list-item-icon class="pt-4" color="secondary">
                     <v-select
                    outlined
                    dense
                    hide-details
                    label="Class"
                    v-model="Class"
                    class="mb-0 pb-0"
                    :items="ClassList"
                    item-text="class_name"
                    item-value="class_id">
                    </v-select>
                </v-list-item-icon> -->
              
                 <v-list-item-content>
                     <v-list-item-subtitle>
                           <v-list-item-title class="font-weight-medium"></v-list-item-title>
                     </v-list-item-subtitle>
                 </v-list-item-content>
                 <v-list-item-action class="mt-3">
                   
                     <div class="d-flex " v-if="studentCount != 0">
                            
                            {{selectAll ? 'Unselect all' : 'Select all'}}
                            <v-checkbox
                            hide-details
                            @change="SelectAllStudent()"
                            v-model="selectAll"
                            color="primary">
                        </v-checkbox>
                     </div>
                   
                 </v-list-item-action>
            
             </v-list-item>

             <v-list-item class="mt-0 pt-0" v-show="Class == $route.params.id || Class == item.class_id" v-for="(item ,index) in student" :key="index">
                
                <v-list-item-avatar color="secondary">
                    <v-img alt="Profile"
                        :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                    </v-img>
                </v-list-item-avatar>
              
                 <v-list-item-content>
                     <v-list-item-subtitle>
                           <v-list-item-title class="font-weight-medium">{{item.firstName +' '+item.lastName}}</v-list-item-title>
                           <v-list-item-subtitle class="error--text"> 
                               No Submission
                        </v-list-item-subtitle>
                     </v-list-item-subtitle>
                 </v-list-item-content>
                 <v-list-item-action>
                    <v-checkbox
                    hide-details
                    v-model="item.Sumissionstatus"
                    @click="SelectData(item.Sumissionstatus, index)"
                        color="primary">
                    </v-checkbox>
                 </v-list-item-action>
             </v-list-item>
         </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
           
           <v-btn rounded block color="primary" @click="resetConfirm = true" :loading="iReseting" :disabled="resetCount == 0">
                    Alert Students
                </v-btn>
            </v-card-actions>

            <v-dialog v-model="resetConfirm" width="400">
                <v-card>
                     <v-card-title>Confirm Alert</v-card-title>
                    <v-card-text>
                        Are you sure to send alert to this students?
                    </v-card-text>

                     <v-card-actions>
                         <v-spacer></v-spacer>
                          <v-btn @click="resetConfirm = false" rounded text >
                           Cancel
                        </v-btn>
                        <v-btn rounded @click="alertStudent()" text color="primary">
                            Confirm
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
</template>
<script>
export default {
    props:['ListData', 'ClassList','classworkDetails','class_id'],
    data(){
        return{
            student:[],
            Class: this.class_id,
            selectAll: false,
            SelectedAll_submission_id:[],
            iReseting: false,
            resetConfirm: false,
            studentCount: 0,
            resetCount: 0,
        }
    },
    methods:{
        getSubmittedStudents(){
            this.ListData.forEach(item => {
                if(item.status == null || item.status == ''){
                    this.studentCount++;
                    item.Sumissionstatus =  false;
                    this.SelectedAll_submission_id.push({id: item.user_id, status : item.Sumissionstatus, firstName: item.firstName});
                    this.student.push(item);
                }
            });


        },
        SelectAllStudent(){
            if(this.selectAll){
                this.resetCount = 0;
                if(this.Class == this.$route.params.id){
                  this.ListData.forEach(item => {
                      if(item.status == null || item.status == ''){
                        this.resetCount++;
                        item.Sumissionstatus =  true;
                        this.SelectedAll_submission_id.push({id: item.user_id, status : item.Sumissionstatus, firstName: item.firstName}); 
                      }
                  });
                }else{
                    this.ListData.forEach(item => {
                      if((item.status == null || item.status == '') && item.class_id == this.Class){
                        this.resetCount++;
                        item.Sumissionstatus =  true;
                        this.SelectedAll_submission_id.push({id: item.user_id, status : item.Sumissionstatus, firstName: item.firstName}); 
                      }
                  }); 
                }
                
            }
            else{
                this.resetCount = 0;
                  this.ListData.forEach(item => {
                    item.Sumissionstatus =  false;
                }); 
            }
             
        },
        SelectData(status, index){
            //this.ListData[index].Sumissionstatus = status == 1 ? 0 : 1;
            this.SelectedAll_submission_id[index].status = this.ListData[index].Sumissionstatus;
             this.resetCount = !this.ListData[index].Sumissionstatus ? this.resetCount+1 : this.resetCount-1;
        },
        async alertStudent(){
            this.iReseting = true;
            this.resetConfirm = false;
            let alertData = {};
            alertData.course_id = this.$route.params.id;
            alertData.classwork_id = this.$route.query.clwk;
            alertData.classwork_name = this.classworkDetails.title;
            alertData.data = []
            this.SelectedAll_submission_id.forEach(item => {
                if(item.status == true){
                    alertData.data.push({id: item.id, firstName: item.firstName});
                }
            });
            axios.post('/api/teacher/alert-multiple-student', alertData )
            .then((res)=>{
                this.toastSuccess(res.data.message);
                this.iReseting = false;
                this.$emit('toggleDialog');
            })

            
            /* if(ResetData.length != 0){
                this.iReseting = false;
                this.$emit("StartReset", ResetData)
            }
            else{
                this.iReseting = false;
                this.toastError('You must select atleast one data!');
            } */
             
            
        }
    },
    created(){
        this.getSubmittedStudents();
    }
}
</script>