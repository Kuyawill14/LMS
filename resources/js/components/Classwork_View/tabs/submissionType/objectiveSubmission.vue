<template>
<div class="pa-2">

<v-row justify="center" v-if="dialog">
    <v-dialog v-model="Viewdialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition">
    <checkobjective :classworkDetails="classworkDetails" :ViewDetails="ViewDetails"  v-on:UpdateSubmission="$emit('UpdateSubmission')" v-on:closeDialog="dialog = !dialog, Viewdialog = !Viewdialog "></checkobjective>
    </v-dialog>

    <v-dialog v-model="ResetDialog" persistent max-width="400">
        <resetConfirmation
        v-on:toggleCancelDialog="dialog = !dialog, ResetDialog = !ResetDialog"
        v-on:toggleconfirm="ResetSubmission()"
        :Name="resetName"
        v-if="ResetDialog"></resetConfirmation>
    </v-dialog>
 </v-row> 


<v-row class="pa-1">
    
    <v-col cols="12" :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'pl-5 d-none' : 'pl-5'" md="12" lg="4" xl="4" >
        <v-row>
            <v-col cols="12" class="mb-0 pb-0">
                <h3>Students</h3>
            </v-col>
            <v-col cols="12" class="mb-0 pb-0">
                <v-select
                outlined
                dense
                label="Class"
                v-model="Class"
                class="mb-0 pb-0"
                :items="ClassList"
                item-text="class_name"
                item-value="class_id"
                >
                </v-select>
            </v-col>
            <v-col v-show="Class == $route.params.id || Class == item.class_id" cols="12" v-for="(item,i) in ListData" :key="i">
                 <v-hover v-slot="{ hover }">
                <v-row style="cursor:pointer" :class="hover ? 'grey lighten-4' : ''">
                    <v-col cols="9" class="pa-5">
                         <div class=" d-flex justify-start">
                            <v-avatar color="brown" size="40">
                                <v-img alt="Profile"
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.name : item.profile_pic">
                                </v-img>
                            </v-avatar>
                            <div class="mt-2 ml-2">
                            <div class="font-weight-medium">
                                {{item.name}}
                                <br>
                            </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col v-if="item.status == 'Submitted'" cols="3" class="text-left">
                        <v-text-field 
                        class="mb-0 pb-0"
                        :append-icon="item.graded && item.status == 'Submitted' ? 'mdi-check' : ''"
                         :loading="isSavingScore" :style="$vuetify.breakpoint.xs ? 'width:100%' :'width:80%'" 
                                 @keyup="SaveScore(item.id, item.points)"  v-model="item.points" 
                                dense outlined  type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" min="0">
                        </v-text-field>
                       
                    </v-col>
                </v-row>
                 </v-hover>
                 <v-divider ></v-divider>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="12" md="12" lg="8" xl="8" class="pl-6">
        <v-row>
            <v-col cols="12" class="mb-0 pb-0" >
                <h3>{{classworkDetails.title}}</h3>
            </v-col>
            <v-col cols="12">
                <v-row>
                    <v-col cols="2" sm="2"  md="1">
                         <div class="d-flex flex-column">
                            <h1>{{Submitted}}</h1>
                            <small>Submitted</small>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="12" lg="3" xl="3" class="pt-0 mt-0 pb-0 mb-0">
                 <v-select
                    outlined
                    dense
                    label="Class"
                    v-model="selectedStatus"
                    class="mb-0 pb-0"
                    :items="StatusType"
                    >
                </v-select>
            </v-col>

            <v-col cols="12" >
                <v-row>
                    <v-col v-show="selectedStatus == 'All' || selectedStatus == item.status || (selectedStatus == 'No Submission' && item.status == null)" class="text-center ma-0 pa-0 pl-2 pr-3 pb-3" cols="6" md="3" lg="3" v-for="(item,i) in ListData" :key="i">
                        <v-card 
                        outlined
                        class="mx-auto">
                        <v-alert class="ma-0 pa-0"  :outlined="item.status == 'Taking'" :color="item.status == 'Taking' ? 'blue': ''">
                            <v-list-item link @click="ViewSubmision(item)" >
                                    <v-list-item-content>
                                    
                                        <div class=" d-flex justify-start">
                                            <v-avatar color="brown" :size="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '25' :'40'">
                                                <v-img alt="Profile"
                                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.name : item.profile_pic">
                                                </v-img>
                                            </v-avatar>
                                            <div class="">
                                                <div :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'mt-0 ml-1 caption' : 'mt-2 ml-3'">
                                                    {{item.name}}
                                                </div>
                                                <div class="ma-0 pa-0">
                                                    <small v-if="item.status == 'Submitted'">Graded
                                                        <v-icon left small  color="success">mdi-check</v-icon>
                                                    </small>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </v-list-item-content>
                            </v-list-item>
                          </v-alert>
                      </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</v-row>
</div>
</template>
<script>
const resetConfirmation = () => import('../dialogs/resetConfirmation')
const checkobjective = () => import('./check-submission/check-objective')
export default {
    props:["ListData","classworkDetails","Submitted", "Graded","ClassList"],
    components:{
        checkobjective,
        resetConfirmation
    },
    data(){
        return{
            isloading:true,
             selectedTasks: [],
             search: '',
             headers: [

                { text: 'Name', value: 'name' },
                { text: 'Status', value: 'status',align: 'center',},
                { text: 'Points', value: 'points' },
                { text: 'Actions',sortable: false},
                
            ],
            dialog: false,
            Viewdialog:false,
            ResetDialog: false,
            ViewDetails: null,
            resetId: null,
            resetName: null,
            resetIndex:null,
            Details:[],
            Reload: true,
            Class: this.$route.params.id,
            StatusType: ['All', 'Submitted', 'Taking', 'No Submission'],
            selectedStatus:'All',
            isSavingScore: false
            
        }
    },
    methods:{
        ViewSubmision(data){
            if(data.status == 'Submitted'){
                this.dialog = !this.dialog;
                this.Viewdialog = !this.Viewdialog;
                this.ViewDetails = data;
            }
        },
        async ResetSubmission(){
            //console.log(this.ListData[this.resetIndex].points)
            axios.put('/api/teacher/reset-obj/'+this.resetId)
            .then(res=>{
                if(res.status == 200){
                 
                    this.dialog = !this.dialog;
                    this.ResetDialog = !this.ResetDialog;
                    this.Details[this.resetIndex].status == '';
                    this.Details[this.resetIndex].points == 0;
                    console.log(this.Details[this.resetIndex].status);
                    
                }
               

            })
        }
       
    },
    created(){
        this.Details = this.ListData;
    }
}
</script>