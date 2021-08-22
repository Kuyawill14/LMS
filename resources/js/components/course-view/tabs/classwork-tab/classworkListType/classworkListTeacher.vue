<template>
<div>
  
       
         <v-row align="center" justify="center" class="pt-10" v-if="ClassworkLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:14rem">
                    mdi-book-open-variant
                </v-icon>
                <h1> Empty Classwork </h1>
                <!-- <p> {{role == 'Teacher' ? "'Creating Classwork, you'll be able to publish classwork to your class.": 'No, Assign Classwork Yet!'}} </p> -->
                <p>Creating Classwork, you'll be able to publish classwork to your class.</p>
                <v-btn  color="primary" @click="dialog = !dialog"> CREATE CLASSWORK </v-btn>
            </v-col>
        </v-row>



        <v-btn  v-if="ClassworkLength != 0" bottom color="primary" dark fab fixed right @click="dialog = !dialog">
            <v-icon>mdi-plus</v-icon>
        </v-btn>


    <v-container v-if="ClassworkLength != 0" fluid>
        <!-- Modal -->

        <v-row >
            <v-col cols="12" md="9" lg="9" class="text-left mb-0 pb-0">
                 <h2 class="mt-1">Manage Classworks</h2>
            </v-col>
            <v-col cols="12" md="3" lg="3" class="text-right mb-0 pb-0">
                  <v-select
                     :items="FilterItems"
               
                    dense
                    v-model="SelectedFilter"
                    outlined
                    class="ma-0 pa-0"
                    ></v-select>
            </v-col>
        </v-row>

        <v-dialog v-model="Removedialog" persistent max-width="400">
            <deleteDialog 
            :DeleteDetails="DeleteDetails"
            v-on:toggleDialog="Removedialog = !Removedialog"
            v-on:ToggleRefresh="$emit('ToggleRefresh'), Removedialog = !Removedialog"
            v-if="Removedialog"></deleteDialog>
        </v-dialog>
       <!--   <v-row >
            <v-divider></v-divider>
        </v-row> -->

            <v-row >
                <v-col v-show=" SelectedFilter == 'All' || SelectedFilter == ClassworkType[i]" cols="12" class="ml-0  mr-0" v-for="(item, i) in classworks" :key="i">
                 <v-col v-if="classworks[i].length != 0 || SelectedFilter == ClassworkType[i]" cols="12" class="ma-0 pa-0 mb-2"><h3 class="font-weight-regular">{{ClassworkType[i]}}</h3></v-col>
                <v-row v-if="classworks[i].length != 0" class="pl-1 pr-1 mt-1" ma-0 pa-0>
                   
                    <v-col class="ma-0 pa-0 pb-2 pl-2 pr-2 mb-1" cols="12"  md="4" v-for="(item, index) in classworks[i]" :key="index">
                        <v-expansion-panels focusable>
                            <v-expansion-panel  class="ma-0 pa-0">
                            <!--  <v-hover v-slot="{ hover }"> -->
                                <v-expansion-panel-header  class="pa-5" disable-icon-rotate hide-actions>
                                        <div class="d-flex flex-row justify-space-between">
                                        <div class="d-flex flex-row">
                                            <v-avatar size="45"
                                                color="blue" class="mr-2">
                                                    <v-icon  color="white" >
                                                    mdi-book-open-variant
                                                </v-icon>
                                            </v-avatar>
                                            <div>
                                                <div ma-0 pa-0 class="h1 ml-1 mt-2"> 
                                                    <span 
                                                        style="width: 250px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
                                                        class="font-weight-bold">
                                                        {{item.title}}
                                                        <small class="primary--text font-weight-regular" v-if="item.type == 'Subjective Type'">({{item.points}} points)</small>
                                                    </span>
                                                </div> 
                                                <div>
                                                    <small class="card-subtitle text-50 mb-0 pb-0">Created: {{format_date(item.created_at)}}<br></small>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        
                                        <v-menu  bottom offset-y>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                icon
                                                v-bind="attrs"
                                                v-on="on"
                                        
                                                >
                                                <v-icon >mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        
                                            </template>
                                        
                                            <v-list  >
                                                <v-list-item link :to="{name: 'clwk',params: {id: $route.params.id},query: {clwk: item.id}}" ma-0 pa-0>
                                                    <v-list-item-title> <v-icon left>mdi-notebook-edit-outline</v-icon>Edit Classwork</v-list-item-title>
                                                </v-list-item>
                                               
                                                <v-list-item link @click="RemoveCLasswork(item)" ma-0 pa-0>
                                                    <v-list-item-title><v-icon left>mdi-archive</v-icon>Archive</v-list-item-title>
                                                </v-list-item>

                                                   <v-list-item v-if="item.submittion_count == 0" link @click="RemoveCLasswork(item)" ma-0 pa-0>
                                                    <v-list-item-title><v-icon left>mdi-delete</v-icon>Delete</v-list-item-title>
                                                </v-list-item>
                                              
                                            </v-list>
                                        </v-menu>
                                    </div>
                                </v-expansion-panel-header>
                            <!--  </v-hover> -->
                            <v-expansion-panel-content id="extend" class=" expand ma-0 pa-0 mt-3">
                                <v-row no-gutters>
                                    <v-col cols="8" class="pr-2">
                                        <div  class="mb-5 text-caption"> {{item.instruction}}</div>
                                    </v-col>
                                       <v-col cols="4">
                                           <div class="flex-column">
                                               <h1 class="mb-0 pb-0">{{item.submittion_count}}</h1>
                                               <small class="mt-0 pt-0">Submitted</small>
                                           </div>
                                    </v-col>
                                </v-row>
                                <v-btn class="ma-0" @click="$router.push({name: 'submission-list',params: {id: $route.params.id},query: {clwk: item.id}})"
                                rounded color="primary" small text>View Submission</v-btn>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
              
                </v-col>
                </v-row>
               </v-col>
            </v-row>
    </v-container>
</div>
</template>

<script>
    const deleteDialog = () => import('../dialogs/deleteDiaglog');
    const newClassworkModal = () => import('../newClassworkModal')
    import moment from 'moment';
    export default {
        props: ['classworks'],
        components: {
            deleteDialog,
            newClassworkModal
        },
        data() {
            return {
                Removedialog: false,
                dialog: false,
                DeleteDetails:[],
                DateToday:'',
                ClassworkType: ['Objective Type', 'Subjective Type'],
                focus: false,
                focusId: null,
                clicked: false,
                ClassworkLength: null,
                FilterItems:['All', 'Objective Type','Subjective Type'],
                SelectedFilter: 'All',
            }
        },
        methods: {
            format_date(value) {
                if (value) {
                    return moment(String(value)).format('MMMM Do YYYY, hh:mm A')
                }
            },
            CheckFormatDue(value){
                if (value) {
                    return moment(String(value)).format("YYYY-MM-DDTHH:mm:ss")
                }
            },
            async RemoveCLasswork(details){
                this.DeleteDetails = details;
                this.Removedialog = !this.Removedialog;
            },
            CheckClassworkCount(){
                this.classworks.forEach(element => {
                    this.ClassworkLength += element.length;
                });
            }
        },
        mounted(){
            this.CheckClassworkCount();
            let newDate = new Date();
            this.DateToday = moment(newDate).format("YYYY-MM-DDTHH:mm:ss");

        }
       
    }
</script>
<style lang="scss" >

     .v-expansion-panel-content__wrap {
        padding: 0 !important;
    }

     #extend{
        padding: 0 24px 16px !important;
    }
</style>

