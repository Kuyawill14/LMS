<template>
    <!--  <v-card class="pa-2" >
          <div>
            <v-btn  large icon color="secondary" text @click="$emit('toggleDialog')" >
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <span class="text-h6 mt-2">Reset Submissions</span>
        </div>
        <v-card-text style="height: 200px;">

    
         <v-list class="pt-0 mt-0">

              <v-list-item class="mb-0 pb-0">
                
                <v-list-item-icon class="pt-4" color="secondary">
                     <v-select
                    outlined
                    dense
                    label="Class"
                    v-model="Class"
                    class="mb-0 pb-0"
                    :items="ClassList"
                    item-text="class_name"
                    item-value="class_id">
                    </v-select>
                </v-list-item-icon>
              
                 <v-list-item-content>
                     <v-list-item-subtitle>
                           <v-list-item-title class="font-weight-medium"></v-list-item-title>
                     </v-list-item-subtitle>
                 </v-list-item-content>
                 <v-list-item-action>
                   
                     <div class="d-flex">
                            
                            {{selectAll ? 'Unselect all' : 'Select all'}}
                            <v-checkbox
                            @change="SelectAllStudent()"
                            v-model="selectAll"
                            color="primary">
                        </v-checkbox>
                     </div>
                   
                 </v-list-item-action>
            
             </v-list-item>
    <v-divider ></v-divider>
             <v-list-item v-show="Class == $route.params.id || Class == item.class_id" v-for="(item ,index) in student" :key="index">
                
                <v-list-item-avatar color="secondary">
                    <v-img alt="Profile"
                        :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                    </v-img>
                </v-list-item-avatar>
              
                 <v-list-item-content>
                     <v-list-item-subtitle>
                           <v-list-item-title class="font-weight-medium">{{item.firstName +' '+item.lastName}}</v-list-item-title>
                     </v-list-item-subtitle>
                 </v-list-item-content>
                 <v-list-item-action>
                    <v-checkbox
                    v-model=" item.Sumissionstatus"
                        color="primary">
                    </v-checkbox>
                 </v-list-item-action>
             </v-list-item>
         </v-list>
            </v-card-text>
          <v-card-actions class="pb-2 pl-5 pr-5">
               
               
                <v-btn rounded block color="primary" :loading="iReseting" :disabled="iReseting">
                    Reset Submissions
                </v-btn>
             
            </v-card-actions> -->


             <v-card>
        <v-card-title> <v-btn  large icon color="secondary" text @click="$emit('toggleDialog')" >
                <v-icon>mdi-close</v-icon>
            </v-btn>Reset Submissions</v-card-title>
        <v-divider></v-divider>
            <v-card-text style="height: 550px;overflow-y:scroll;overflow-x:hidden">
                 <v-list class="pt-0 mt-0">

              <v-list-item class="mb-0 pb-0">
                
                <v-list-item-icon class="pt-4" color="secondary">
                     <v-select
                    outlined
                    dense
                    label="Class"
                    v-model="Class"
                    class="mb-0 pb-0"
                    :items="ClassList"
                    item-text="class_name"
                    item-value="class_id">
                    </v-select>
                </v-list-item-icon>
              
                 <v-list-item-content>
                     <v-list-item-subtitle>
                           <v-list-item-title class="font-weight-medium"></v-list-item-title>
                     </v-list-item-subtitle>
                 </v-list-item-content>
                 <v-list-item-action>
                   
                     <div class="d-flex">
                            
                            {{selectAll ? 'Unselect all' : 'Select all'}}
                            <v-checkbox
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
                           <v-list-item-subtitle v-if="item.status == 'Submitted'"> <v-icon small color="success">mdi-check</v-icon> Submitted</v-list-item-subtitle>
                     </v-list-item-subtitle>
                 </v-list-item-content>
                 <v-list-item-action>
                    <v-checkbox
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
           
           <v-btn rounded block color="primary" @click="ResetSubmission()" :loading="iReseting" :disabled="iReseting">
                    Reset Submissions
                </v-btn>
            </v-card-actions>
        </v-card>
   <!--    </v-card> -->
</template>
<script>
export default {
    props:['ListData', 'ClassList'],
    data(){
        return{
            student:[],
            Class: this.$route.params.id,
            selectAll: null,
            SelectedAll_submission_id:[],
            iReseting: false
        }
    },
    methods:{
        getSubmittedStudents(){
            let count = 0;
            this.ListData.forEach(item => {
                if(item.status == 'Submitted'){
                    count++;
                }
                item.Sumissionstatus =  item.status == 'Submitted' ? true : false;
                this.SelectedAll_submission_id.push({id: item.id, status : item.Sumissionstatus});
                this.student.push(item);
            });

            if(count == this.student.length){
                this.selectAll = 1;
            }
            else{
                this.selectAll = 0;
            }
        },
        SelectAllStudent(){
            if(this.selectAll){
                 this.ListData.forEach(item => {
                    item.Sumissionstatus =  true;
                    this.SelectedAll_submission_id.push({id: item.id, status : item.Sumissionstatus});
                });
            }
            else{
                  this.ListData.forEach(item => {
                    item.Sumissionstatus =  false;
                }); 
            }
             
        },
        SelectData(status, index){
            //this.ListData[index].Sumissionstatus = status == 1 ? 0 : 1;
            this.SelectedAll_submission_id[index].status = this.ListData[index].Sumissionstatus;
        },
        async ResetSubmission(){
            this.iReseting = true;
            let ResetData = [];
            this.SelectedAll_submission_id.forEach(item => {
                if(item.status == true){
                  
                    ResetData.push({id: item.id, status: 1});
                }
            });
            if(ResetData.length != 0){
                this.iReseting = false;
                this.$emit("StartReset", ResetData)
            }
            else{
                this.iReseting = false;
                this.toastError('You must select atleast one data!');
            }
             
          /*   axios.post('/api/teacher/resetStudentSubmissions',ResetData)
            .then((res)=>{
                 this.iReseting = false;

                 for (let i = 0; i < this.ListData.length; i++) {
                     for (let j = 0; j < ResetData.length; j++) {
                          if(this.ListData[i].id == ResetData[j].id){
                             this.ListData[i].status = null;
                             this.ListData[i].Sumissionstatus =  0;
                         }
                         
                     }
                 }
                
            }) */
            
        }
    },
    created(){
        this.getSubmittedStudents();
    }
}
</script>