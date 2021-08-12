<template>
<div class="pa-2">

<v-row justify="center" v-if="dialog">
    <v-dialog v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition">
    <checksubjective :classworkDetails="classworkDetails" v-on:UpdateSubmission="$emit('UpdateSubmission')" :CheckData="CheckData" v-on:closeDialog="dialog = !dialog"></checksubjective>
    </v-dialog>
 </v-row> 

<!-- <v-card elevation="2" class="pa-3"> -->


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
                  
                <v-row>
                    <v-col cols="9" class="pa-5">
                         <div class=" d-flex justify-start">
                            <v-avatar color="brown" size="40">
                                <v-img alt="Profile"
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstname +' '+item.lastName : item.profile_pic">
                                </v-img>
                            </v-avatar>
                            <div class="mt-2 ml-2">
                            <div class="font-weight-medium">
                                {{item.firstname +' '+item.lastName}}
                                <br>

                            </div>
                               
                            </div>
                        </div>
                    </v-col>
                    <v-col v-if="item.status == 'Submitted'" cols="3" class="text-left">
                       

                         <v-text-field 
                         class="mb-0 pb-0"
                         :loading="isSavingScore" :style="$vuetify.breakpoint.xs ? 'width:100%' :'width:80%'" 
                                 @keyup="SaveScore(item.id, item.points)"  v-model="item.points" 
                                dense outlined  type="number" :suffix="'/' +classworkDetails.points" :max="classworkDetails.points" :maxlength="classworkDetails.points.toString().length" min="0">
                        </v-text-field>
                       
                    </v-col>
                </v-row>
                 <v-divider ></v-divider>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="12" md="12" lg="8" xl="8" class="pa-3 pl-6">
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
                     <v-col cols="2" sm="2" md="1">
                         <div class="d-flex flex-column">
                            <h1>{{Graded}}</h1>
                            <small>Graded</small>
                        </div>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-col>
             <v-col cols="12" md="12" lg="3" xl="3" class="pt-0 mt-0 pb-0 mb-0 pt-1">
                 <v-select
                    outlined
                    dense
                    label="Status"
                    v-model="selectedStatus"
                    class="mb-0 pb-0"
                    :items="StatusType"
                    >
                </v-select>
         
            </v-col>

            <v-col cols="12" md="12" lg="9" xl="9" class="pt-0 mt-0 pb-0 mb-0 pt-1">
                
                <v-text-field 
                 class="mb-0 pb-0"
                 v-model="search"
                prepend-inner-icon="mdi-magnify"
                outlined dense label="Search">
                
                </v-text-field>
            </v-col>

            <v-col cols="12">
                <v-row>
                    <v-col v-show="item.Submitted_Answers != null" link class="text-center" cols="6" md="3" lg="3" v-for="(item,i) in ListData" :key="i">
                          <v-card style="cursor:pointer" 
                        class="mx-auto"
                      
                        outlined>
                        <v-list-item link @click="CheckData = item ,dialog = !dialog" v-if="item.status == 'Submitted'">
                                <v-list-item-content>
                                    <div class="d-flex flex-column align-self-center">
                                        <div class="mb-2" style="max-height:30px;overflow:hidden">{{item.name}}</div>
                                        <v-divider></v-divider>
                                        <v-icon color="red" x-large>mdi-file-pdf</v-icon>
                                        <small style="max-height:15px;overflow:hidden;"> {{ item.Submitted_Answers != null ? item.Submitted_Answers[0].name : ''}}</small>
                                    </div>
                                </v-list-item-content>
                        </v-list-item>
                      </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-col>
</v-row>
<!-- </v-card> -->
</div>
</template>
<script>
import moment from 'moment';
const checksubjective = () => import('./check-submission/check-subjective')
export default {
    props:["ListData","classworkDetails","Submitted", "Graded","ClassList"],
    components:{
        checksubjective,
    },
    data(){
        return{
            isloading:true,
             selectedTasks: [],
             CheckData: null,
             search: '',
             Class: this.$route.params.id,
              dialog: false,
             headers: [
                {
                    text: 'id',
                    align: 'start',
                    value: 'id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Status', value: 'status',align: 'center',},
                { text: 'Graded', value: 'graded',align: 'center',},
                { text: 'Points', value: 'points' },
                { text: 'Actions',sortable: false},
                
            ],
           isSavingScore: false,
            score: null,
            StatusType: ['All', 'Submitted', 'Graded', 'No Submission'],
            selectedStatus:'All',
        }
    },
    methods:{
        format_date(value) {
            if (value) {
                return moment(String(value)).format('MM/d/YYYY, hh:mm A')
            }
        },
         SaveScore(id, points){
            clearTimeout(this.timeout);
            var self = this;
            this.timeout = setTimeout(function () {
                self.score = points;
                self.isSavingScore = !self.isSavingScore;
                self.UpdateScore(id);
            }, 1000);
        },
        async UpdateScore(id){
            if(this.score <= this.classworkDetails.points){
                axios.put('/api/submission/update-score/'+id,{score: this.score})
                .then(res=>{
                    if(res.status == 200){
                        this.toastSuccess("Score Updated");
                        this.isSavingScore = !this.isSavingScore;
                        this.$emit('UpdateSubmission')

                        this.ListData.forEach(data => {
                            if(data.id == id){
                                data.graded = 1;
                            }
                        });
                    }
                })
            }
            else{
                this.isSavingScore = !this.isSavingScore;
                this.toastError('Score is higher than the set points!');
            }
            
        },
       
       
    },
    mounted(){
        
    }
}
</script>