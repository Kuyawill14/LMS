<template>
<v-app>
    <v-container class="fill-height"  fluid>
    
    <v-dialog v-model="Viewdialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition">
        <submittedView  :details="details"  v-on:UpdateSubmission="$emit('UpdateSubmission')" v-on:closeDialog="Viewdialog = !Viewdialog "></submittedView>
    </v-dialog>



    <v-row   class="fill-height" align-content="center"
            justify="center" v-if="isloading" style="height:30vh">
                <v-col cols="6">
                <v-progress-linear
                    w
                    color="primary"
                    indeterminate
                    rounded
                    height="6"
                ></v-progress-linear>
                </v-col>
                
            </v-row>
    <v-row v-if="!isloading" align="center" justify="center">
    <v-col cols="12" md="6">
            <v-card   class="pa-3" elevation="1" outlined>
                <v-window>
                    <v-window-item >
                        <v-row>
                            
                            <v-col cols="12" md="12" class="pl-5 pr-9 pt-5">
                               

                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                         <v-btn 
                                          v-bind="attrs"
                                            v-on="on"
                                             @click="$router.push({name:'classwork', params:{id: details.course_id}})" icon rounded>
                                            <v-icon>mdi-arrow-left</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Back to classworks</span>
                                </v-tooltip>
                                <v-row style="height:8vh"></v-row>
                                <v-row>
                                    <v-col cols="12">
                                      
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-avatar size="58" color="primary">
                                                     <v-icon color="white" large>
                                                         mdi-book-open-variant
                                                    </v-icon>
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                         <h3>{{details.title}}</h3>
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-col>
                               
                                    <v-col cols="12" class="ml-3 d-flex">
                                        <div class="display-2 primary--text">
                                            Score:
                                        </div>
                                        <div class="ml-5">
                                            <span :class="details.score >= details.totalPoints ? 'display-2': 'display-1'">
                                                {{details.score }}
                                            </span>
                                            <span class="font-weight-bold display-2">/</span>

                                              <span :class="details.score >= details.totalPoints ? 'display-1': 'display-2'">
                                                {{details.totalPoints}}
                                            </span>
                                        </div>
                                    </v-col>
                                   <v-col cols="12">
                                        <v-row style="height:5vh"></v-row> 
                                   </v-col>

                                     <v-col cols="12" class="text-right mt-4 mb-2">
                                        <v-btn v-if="details.reviewAnswer == 1" @click="Viewdialog = !Viewdialog" rounded text color="primary" >
                                            View Submission
                                        </v-btn>
                                    </v-col>
                                </v-row>
                               
                            </v-col>
                        </v-row>
                </v-window-item>
                </v-window>
            </v-card>
        </v-col>
    </v-row>  
    </v-container> 
</v-app>
</template>
<script>
const submittedView = () => import('./viewSubmittedPage');
export default {
    components:{
        submittedView
    },
    data(){
        return{
            details:[],
            isloading: true,
            testUnser: [],
            Viewdialog: false,
            ViewDetails: null
        }
    },
    methods:{
        async GetScoreDetails(){
            axios.get('/api/student/fetch-score/'+this.$route.params.id)
            .then(res=>{
                this.details = res.data;
                this.isloading = false;
            })
        }
    },
    created(){
        this.GetScoreDetails();
    }
}
</script>