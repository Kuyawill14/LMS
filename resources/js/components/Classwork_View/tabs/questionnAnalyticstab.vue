
<template>
<v-app>
<v-container class="fill-height" v-if="isloading" style="height: 500px;">
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
            Loading
        </v-col>
        <v-col cols="6">
            <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
    </v-row>
</v-container>

  <v-container v-if="!isloading" pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="10" xl="6" md="10">
                <v-card  class="elevation-5" style="border-top:4px solid #EF6C00">
                    <v-window>
                        <v-window-item >
                                <v-row>
                              
                                    <v-col  cols="12" md="12" class="pt-3">

                                        <v-card-title>
                                            <v-text-field
                                                v-model="search"
                                                append-icon="mdi-magnify"
                                                label="Search"
                                                single-line
                                                outlined
                                                hide-details
                                            ></v-text-field>
                                        </v-card-title>


                                           <v-data-table 
                                           v-model="selectedTasks" 
                                           :headers="headers"
                                           hide-default-header
                                           :items="List"
                                           :search="search"
                                           item-key="id" 
                                           show-select>

                                          

                                            <template v-slot:header="{ props: { headers  } }">
                                                <thead>
                                                <tr>
                                                     <th
                                                        v-for="header in headers"
                                                        :key="header.value"
                                                        class="text-uppercase"
                                                       
                                                        >
                                                        <v-icon>{{header.icon}}</v-icon> 
                                                         {{$vuetify.breakpoint.xs ? '': header.text }}
                                                    </th>
                                                
                                                </tr>
                                                </thead>
                                            </template>


                                            <template v-slot:body="{ items }">
                                            <tbody>
                                                <tr v-for="item in items" :key="item.id">
                                                    <td>
                                                        <v-checkbox v-model="selectedTasks" :value="item" style="margin:0px;padding:0px"
                                                            hide-details />
                                                    </td>
                                                    <td class="text-center">{{item.id}}</td>
                                                    <td class="text-left ">
                                                         <div :style="$vuetify.breakpoint.xs ? 'line-height:1.1': 'line-height:1.5'" class="caption">
                                                             <span v-html="item.question" class="post-content"></span>
                                                        </div>
                                                    </td>
                                                    
                                                  
                                                    <td class="text-center">{{item.correct_count == null ? 0 : item.correct_count}}</td>
                                                    <td class="text-center">{{item.wrong_count == null ? 0 : item.wrong_count}}</td>
                                                    <td class="text-center">{{item.average_time != null? (item.average_time/(item.correct_count+item.wrong_count)).toFixed(2):''}}{{item.average_time == null ? '' : 's' }}</td>
                                                    <td>  
                                                        <v-tooltip top>
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-btn
                                                                v-bind="attrs"
                                                                v-on="on"
                                                                text icon
                                                                >
                                                                    <v-icon color="primary">mdi-pencil-box-multiple-outline</v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <span>Edit</span>
                                                        </v-tooltip>
                                                        <v-tooltip top>
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-btn
                                                                v-bind="attrs"
                                                                v-on="on"
                                                                text icon
                                                                >
                                                                    <v-icon color="primary">mdi-delete</v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <span>Delete</span>
                                                        </v-tooltip>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            </template>
                                        </v-data-table>
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
            List:[],
            search:'',
            selectedTasks: [],
            isloading: true,
             headers: [
                {
                    text: 'id',
                    align: 'start',
                    value: 'id',
                    icon:''
                },
                { text: 'Question', value: 'question',icon:'' },
                { text: '# of Correct', value: 'status',align: 'center',icon:'mdi-account-multiple-check'},
                { text: '# of Wrong', value: 'points' ,icon:'mdi-account-multiple-remove'},
                { text: 'Average Time Consume', value:'time',icon:'mdi-timer'},
                { text: 'Actions',sortable: false,icon:'mdi-cog'},
                
            ],
           
        }
    },
    methods:{
       async GetList(){
            axios.get('/api/QAnalytics/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data;
                this.isloading = !this.isloading;
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