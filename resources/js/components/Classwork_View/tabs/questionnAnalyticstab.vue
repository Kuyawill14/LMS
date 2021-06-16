
<template>
<v-app>

  <v-container pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="10" md="10">
                <v-card  class="elevation-5" style="border-top:5px solid #EF6C00">
                    <v-window>
                        <v-window-item >
                                <v-row>
                              
                                    <v-col  cols="12" md="12" class="pt-1">
                                         <v-simple-table class="mt-3" fixed-header max-height="500px">
                                            <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-center">#</th>
                                                    <th>Question</th>
                                                    <th class="text-center">
                                                        <v-icon>mdi-account-multiple-check</v-icon>
                                                        {{$vuetify.breakpoint.xs ? '':'Correct'}}
                                                    </th>
                                                    <th class="text-center">
                                                        <v-icon>mdi-account-multiple-remove</v-icon>
                                                        {{$vuetify.breakpoint.xs ? '':'Wrong'}}
                                                    </th>
                                                    <th class="text-center">
                                                        <v-icon>mdi-timer</v-icon>
                                                         {{$vuetify.breakpoint.xs ? '':'Average Time Consume'}}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in List" :key="item.id">
                                                    <td class="text-center">{{item.id}}</td>
                                                    <td class="text-left ">
                                                         <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1': 'line-height:1.5'" class="caption">
                                                             <span v-html="item.question" class="post-content"></span>
                                                        </div>
                                                    </td>
                                                    
                                                  
                                                    <td class="text-center">{{item.correct_count == null ? 0 : item.correct_count}}</td>
                                                    <td class="text-center">{{item.wrong_count == null ? 0 : item.wrong_count}}</td>
                                                    <td class="text-center">{{item.average_time/(item.correct_count+item.wrong_count)}}{{item.average_time == null ? '' : 's' }}</td>
                                                
                                                </tr>
                                            </tbody>
                                            </template>
                                        </v-simple-table>
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
            List:[]
        }
    },
    methods:{
       async GetList(){
            axios.get('/api/QAnalytics/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data;
            })
        }
    },
    mounted(){
        this.GetList();
    }
}
</script>

<style scoped>
  
        
</style>