<template>
    <div>
        <v-row>
            <v-col cols="12 d-flex" class="mt-2">
                Join Request
                <v-spacer></v-spacer>
                 <v-btn :disabled="selectedCount == 0" @click="RejectAllSelectedJoinRequest()" color="secondary">Reject Selected</v-btn>
                <v-btn class="ml-2" @click="AcceptAllSelectedRequest()" :disabled="selectedCount == 0" color="primary">Accept Selected</v-btn>
                <v-btn outlined class="ml-2" @click="selectAllStudent" color="primary">
                   
                    {{isSelectedAll ? 'Unselect All' : 'Select All'}}
                     <v-icon right>{{isSelectedAll ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'}} </v-icon>
                    </v-btn>
                    
            </v-col>
            <v-col v-if="isLoading"  class="mb-0 pb-0 mt-0 pt-0" cols="12" >
                <v-row >
                    <v-col class="mb-0 pb-0 mt-0 pt-0" v-for="n in 7" :key="n" cols="12">
                        <v-skeleton-loader
                        max-width="300"
                        type="list-item-avatar-two-line"
                        ></v-skeleton-loader>
                    </v-col>
                </v-row>
            </v-col>
             <v-col v-if="!isLoading"  class="mb-0 pb-0 mt-0 pt-0" cols="12" >
                        <v-list class="mb-0 pb-0">
                        <v-list-item class="mb-0 pb-0" v-show="item.class_id == Class_id || Class_id == $route.params.id" v-for="(item, index) in JoinRequestList" v-bind:key="item.user_id">
                            <v-list-item-avatar color="secondary" >
                                <v-img 
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (item.firstName+' '+item.lastName) : item.profile_pic">
                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{item.firstName}} {{item.lastName}} ({{item.student_id}})</v-list-item-title>
                                <v-list-item-subtitle>{{item.email}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action class="pa-0 ma-0">
                                <div class="d-flex">
                                        <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                             <v-btn @click="AcceptJoinRequest(item.id, index)" v-bind="attrs"  v-on="on" class="mr-2"  icon>
                                            <v-icon  color="blue">mdi-check</v-icon>
                                        </v-btn>
                                        </template>
                                        <span>Accept Request</span>
                                        </v-tooltip>

                                        <v-tooltip nudge-top top>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn @click="RejectJoinRequest(item.id, index)" v-bind="attrs"  v-on="on" class="mr-2"  icon>
                                            <v-icon  color="red">mdi-close</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Reject Request</span>
                                        </v-tooltip>


                                        <div  class="pl-5 mt-1">
                                            <v-checkbox @click="markSelect(selectedStudent[index].isSelected)" v-model="selectedStudent[index].isSelected" hide-details></v-checkbox>
                                        </div>
                                        
                                </div>
                                
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-col>

        </v-row>
    </div>
</template>
<script>
export default {
    props:['Class_id'],
    data(){
        return{
            JoinRequestList:[],
            isLoading: true,
            selectedStudent: [],
            isSelectedAll: false,
            selectedCount: 0,
        }
    },
    methods:{
        async fetchJoinRequest(){
            await axios.get('/api/teacher/fetch_student_join_request/'+this.$route.params.id)
            .then((res)=>{
                this.JoinRequestList = res.data;
                res.data.forEach(item => {
                    this.selectedStudent.push({
                        isSelected: false,
                        id: item.id
                    })
                });
                
                this.isLoading = false
            })
            .catch((err)=>{

            })
        },
        async AcceptJoinRequest(id, index){
            await axios.put('/api/teacher/accept_student_join_request/'+id)
            .then((res)=>{
                if(res.status == 200 && res.data.status == 1){  
                    this.JoinRequestList.splice(index, 1);
                    this.toastSuccess(res.data.message)
                    this.$store.dispatch('UpdateJoinCount');
                    this.$store.dispatch('fetchAllStudents',this.$route.params.id)
                }
                else if(res.status == 200 && res.data.status == 2){
                    this.JoinRequestList.splice(index, 1);
                    this.toastInfo(res.data.message)
                    this.$store.dispatch('UpdateJoinCount');
                }
                else{
                    this.toastError(res.data.message)
                }
                
                this.isLoading = false
            })
            .catch((err)=>{
                this.toastError('Something went wrong!')
            })
        },

        async AcceptAllSelectedRequest(){
            let data = [];
            this.selectedStudent.forEach(item => {
                if(item.isSelected == true){
                    data.push({
                        id: item.id
                    })
                }
            });

            await axios.put('/api/teacher/multiple_accept_student_join_request', {request_id : data})
            .then((res)=>{
                if(res.status == 200 && res.data.status == 1){  
                        for (let i = 0; i < this.selectedStudent.length; i++) {
                            if(this.selectedStudent[i].isSelected == true){
                                 this.JoinRequestList.splice(i, 1);
                                 this.selectedStudent.splice(i, 1);
                                 this.selectedCount--;
                                 this.isSelectedAll = false;
                                 this.$store.dispatch('UpdateJoinCount');
                            }                        
                        }
                    this.$store.dispatch('fetchAllStudents',this.$route.params.id)
                }
                this.isLoading = false
            })
            .catch((err)=>{
                //this.toastError('Something went wrong!')
            })
        },



        async RejectJoinRequest(id, index){

            


            await axios.delete('/api/teacher/reject_student_join_request/'+id)
            .then(()=>{
                this.JoinRequestList.splice(index, 1);
                this.$store.dispatch('UpdateJoinCount');
            })
            .catch((err)=>{
                this.toastError('Something went wrong!')
            })
        },

        async RejectAllSelectedJoinRequest(){
            let data = [];
            this.selectedStudent.forEach(item => {
                if(item.isSelected == true){
                    data.push({
                        id: item.id
                    })
                }
            });
            await axios.put('/api/teacher/multiple_reject_student_join_request',{request_id : data})
            .then(()=>{
                for (let i = 0; i < this.selectedStudent.length; i++) {
                    if(this.selectedStudent[i].isSelected == true){
                        this.JoinRequestList.splice(i, 1);
                        this.selectedStudent.splice(i, 1);
                        this.selectedCount--;
                        this.isSelectedAll = false;
                        this.$store.dispatch('UpdateJoinCount');
                    }                        
                }
            })
            .catch((err)=>{
                this.toastError('Something went wrong!')
            })
        },
        async selectAllStudent(){
            if(this.isSelectedAll){
                 this.selectedStudent.forEach(item => {
                    item.isSelected = false;
                    this.selectedCount--;
                });
                this.isSelectedAll = false;
            }else{
                 this.selectedStudent.forEach(item => {
                    item.isSelected = true;
                    this.selectedCount++;
                });
                this.isSelectedAll = true;
            }
        },
        async markSelect(check){
            if(check == true)this.selectedCount++;
            else this.selectedCount--;
        }

    },
    mounted(){
        this.fetchJoinRequest();
    }
}
</script>