
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
            <v-col cols="12" lg="12" md="12">
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
                                            :items-per-page="10"
                                            :search="search"
                                            :items="List" item-key="id" show-select>

                                            
                                            <template v-slot:body="{ items }">
                                            <tbody>
                                                <tr v-for="item in items" :key="item.id">
                                                    <td>
                                                        <v-checkbox v-model="selectedTasks" :value="item" style="margin:0px;padding:0px"
                                                            hide-details />
                                                    </td>
                                                    <td>{{ item.id }}</td>
                                                    <td>{{item.name}}</td>
                                                    <td class="text-center"> <v-chip :color="item.status == 'Submitted' ? 'success': 'info'" dark>{{item.status}}</v-chip> </td>
                                                    <td><span class="font-weight-bold">{{item.points}}</span><small>points</small></td>
                                                    <td >
                                                   
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
                                                            <v-icon color="primary">mdi-file-eye-outline</v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <span>View Submission</span>
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
            isloading: true,
             selectedTasks: [],
             search: '',
             headers: [
                {
                    text: 'id',
                    align: 'start',
                    value: 'id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Status', value: 'status',align: 'center',},
                { text: 'Points', value: 'points' },
                { text: 'Actions',sortable: false},
                
            ],
            
        }
    },
    methods:{
       async GetList(){
            axios.get('/api/submission/all/'+this.$route.query.clwk)
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