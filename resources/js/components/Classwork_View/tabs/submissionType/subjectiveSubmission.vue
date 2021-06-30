<template>
<div>

<v-row justify="center" v-if="dialog">
    <v-dialog v-model="dialog"
    fullscreen
    hide-overlay
    
    transition="dialog-bottom-transition">
    <checksubjective :classworkDetails="classworkDetails" v-on:UpdateSubmission="$emit('UpdateSubmission')" :CheckData="CheckData" v-on:closeDialog="dialog = !dialog"></checksubjective>
    </v-dialog>
 </v-row> 

<v-card   class="elevation-5" style="border-top:4px solid #EF6C00">
    <v-window>
        <v-window-item >
                <v-row ma-0 pa-0>
                <v-col cols="12" class="pt-8 pl-5 pr-5 mb-0 pb-0">
                    <v-row>
                        <v-col cols="6">
                             <v-text-field
                                class="ma-0 pa-0"
                                label="Search"
                                prepend-inner-icon="mdi-magnify"
                                outlined
                             
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select
                            outlined
                          
                            label="Class"
                            v-model="Class"
                            :items="['All','Class 1', 'Class 2']">

                            </v-select>
                        </v-col>
                    </v-row>
                    
                </v-col>
                <v-col class="mt-0 pt-0" cols="12" md="12" >
                    <v-container  class="pb-2 pl-2 pr-2 pt-0 mt-0 transparent">
                         <v-expansion-panels>
                            <v-expansion-panel
                            v-for="(item,i) in ListData"
                            :key="i"
                            >
                            <v-expansion-panel-header>
                                <div class=" d-flex justify-start">
                                    <v-avatar color="brown" size="40">
                                        <v-img alt="Profile"
                                            :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + item.name : item.profile_pic">
                                        </v-img>
                                    </v-avatar>
                                    <div class="mt-2 ml-2">
                                        <div class="font-weight-medium">
                                        {{item.name}}
                                        <br>
                                        
                                        </div>
                                        <div class="caption ">
                                             <v-icon v-if="item.graded" color="success">mdi-check</v-icon>
                                            {{item.graded ? 'Graded': 'Not Graded'}}<span v-if="item.graded">({{item.points + '/'+classworkDetails.points}})</span>
                                        </div>
                                    </div>
                                </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              
                                <div class="d-flex justify-space-between">
                                    <div class="flex-sm-column">
                                       
                                         <div class="font-weight-bold h1 mt-0 pt-0">{{item.status == 'Submitted' ? 'Submitted!':'Submitting...'}}</div>
                                        <div v-if="item.status == 'Submitted'" >Date: {{format_date(item.updated_at)}}</div>
                                         <div class="d-flex">
                                              <v-icon   left v-if="item.graded && item.status == 'Submitted'" color="success">mdi-check</v-icon>
                                              <div v-if="item.status == 'Submitted'"  :class="item.graded ? 'success--text' : 'red--text'">  {{item.graded ? item.points +' points': 'Not yet graded!'}}</div>
                                           
                                        </div>
                                    </div>
                                    <div>
                                        <v-btn color="primary" @click="CheckData = item ,dialog = !dialog" v-if="item.status == 'Submitted'" rounded>View Submission</v-btn>
                                    </div>
                                </div>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-container>
                </v-col>
            </v-row>
     </v-window-item>
    </v-window>
</v-card>
</div>
</template>
<script>
import moment from 'moment';
const checksubjective = () => import('./check-submission/check-subjective')
export default {
    props:["ListData","classworkDetails"],
    components:{
        checksubjective,
    },
    data(){
        return{
            isloading:true,
             selectedTasks: [],
             CheckData: null,
             search: '',
             Class: 'All',
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
            
        }
    },
    methods:{
        format_date(value) {
            if (value) {
                return moment(String(value)).format('MM/d/YYYY, hh:mm A')
            }
        },
    },
    mounted(){
        
    }
}
</script>