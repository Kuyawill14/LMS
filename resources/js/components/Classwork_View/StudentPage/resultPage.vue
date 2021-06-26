<template>
<v-app>
    <v-container class="fill-height"  fluid>
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
            <v-card style="border-top:3px solid #EF6C00"  class="elevation-2 pa-3" >
                <v-window>
                    <v-window-item >
                        <v-row>
                            
                            <v-col cols="12" md="12" class="pl-7 pr-9 pt-5">
                                <v-btn @click="$router.push({name:'classwork', params:{id: details.class_id}})" icon rounded>
                                    <v-icon>mdi-arrow-left</v-icon>
                                </v-btn>
                                <v-row style="height:8vh"></v-row>
                                <v-row>
                                <v-container ma-0 pa-0 class="d-flex flex-row justify-space-between mb-3">
                                    <v-btn
                                    class="mx-2"
                                    fab
                                    dark
                                    color="primary"
                                    >
                                    <v-icon x-large>
                                    mdi-book-open-variant
                                    </v-icon>
                                    </v-btn>
                               
                                </v-container>
                                    <v-col cols="12" class="ml-3">
                                        <div class="display-2 primary--text">
                                            Score:
                                        </div>
                                    </v-col>
                                      <v-col cols="12" class="text-left">
                                        <div class="ml-10">
                                            <span :class="details.score >= details.totalPoints ? 'display-2': 'display-1'">
                                                {{details.score }}
                                            </span>
                                            <span class="font-weight-bold display-2">/</span>

                                              <span :class="details.score >= details.totalPoints ? 'display-1': 'display-2'">
                                                {{details.totalPoints}}
                                            </span>
                                        </div>
                                    </v-col>

                                     <v-col cols="12" class="text-right mt-4">
                                      
                                            <v-btn rounded color="primary" outlined>
                                                View Submission
                                            </v-btn>
                                      
                                    </v-col>
                                </v-row>
                                <v-row style="height:7vh"></v-row> 
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
export default {
    data(){
        return{
            details:[],
            isloading: true,
            testUnser: []
        }
    },
    methods:{
        async GetScoreDetails(){
            axios.get('/api/student/check-status/'+this.$route.params.id)
            .then(res=>{
                this.details = res.data[0];
            
              
               this.isloading = false;
            })
        }
    },
    created(){
        this.GetScoreDetails();
    }
}
</script>