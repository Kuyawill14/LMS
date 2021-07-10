<template>
<div>

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

<v-card   class="elevation-5" style="border-top:4px solid #EF6C00">
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
                        v-if="Reload" 
                        v-model="selectedTasks" 
                        :headers="headers"
                        :items-per-page="10"
                        :search="search"
                        :items="Details" item-key="id" show-select>

                        
                        <template v-slot:body="{ items }">
                        <tbody>
                            <tr v-for="(item, index) in items" :key="item.id">
                                <td>
                                    <v-checkbox v-model="selectedTasks" :value="item" style="margin:0px;padding:0px"
                                        hide-details />
                                </td>
                                <td>{{item.name}}</td>
                                <td class="text-center"> <v-chip v-if="item.status != null && item.status != ''" :color="item.status == 'Submitted' ? 'success':  'info'" dark>{{item.status}}</v-chip> </td>
                                <td><span class="font-weight-bold">{{item.points== null ? 'N/A' : item.points}}</span><span v-if="item.points != null ">{{' / '+classworkDetails.points }}</span></td>
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
                                            @click="ViewSubmision(item)"
                                            v-bind="attrs"
                                            v-on="on"
                                            text icon
                                            >
                                        <v-icon color="primary">mdi-file-eye-outline</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>View Submission</span>
                                    </v-tooltip>

                                     <v-tooltip v-if="item.status == 'Submitted' || item.status == 'Taking'" top>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                            @click="resetIndex = index, resetName = item.name, resetId = item.id, dialog = !dialog, ResetDialog = !ResetDialog"
                                            v-bind="attrs"
                                            v-on="on"
                                            text icon
                                            >
                                        <v-icon color="primary">mdi-restart</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Reset Submission</span>
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
</div>
</template>
<script>
const resetConfirmation = () => import('../dialogs/resetConfirmation')
const checkobjective = () => import('./check-submission/check-objective')
export default {
    props:["ListData","classworkDetails"],
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
            Reload: true
            
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