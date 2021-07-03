<template>
    <div class="container pt-4">
        <!-- Modal -->
        <v-dialog v-model="Previewdialog"  persistent max-width="600">
            <previewClassworkModal v-if="Previewdialog" v-on:toggleCloseDialog="Previewdialog = !Previewdialog" :Preview_id="Preview_id"></previewClassworkModal>
         </v-dialog>

         <v-row class="pl-5 pr-5">
            <v-divider></v-divider>
        </v-row>

     
            <v-row class="pl-1 pr-1" ma-0 pa-0>
                <v-col cols="12" lg="6"  xl="3" md="6" v-for="(item, index) in classworks" :key="index">
                        <v-card :style="item.availability != 0 ?
                        CheckFormatDue(item.to_date) > DateToday ? '' : item.status == 'Submitted' ? '':'border:1px  solid #B71C1C' : ''">
                            <v-container class="pl-3 pr-3 pt-5 pb-5 d-flex flex-row justify-space-between">
                                <div class="d-flex flex-row">
                                    <v-icon 
                                    class="pl-2 pr-3 " 
                                    :color="item.availability == 0 ? '' : 
                                     CheckFormatDue(item.to_date) > DateToday ? 
                                    item.status == 'Submitted' ? 'success' :''
                                    : item.status == 'Submitted' ? 'success': 'red darken-4'" large>
                                        {{item.status == 'Submitted' ? 'mdi-check':'mdi-book-open-variant'}}
                                    </v-icon>


                                    <div>  
                                        <div ma-0 pa-0 class="h1 ml-1"> <span class="font-weight-bold">{{item.title}}</span> <small class="primary--text" v-if="item.type == 'Subjective Type'">({{item.points}} points)</small></div> 
                                        <small v-if="item.status == null || item.status == 'Submitting'" :class="item.availability != 0 ? CheckFormatDue(item.to_date) > DateToday ? 'card-subtitle text-50': item.status == 'Submitted' ? 'card-subtitle text-50':'card-subtitle text-50 red--text':'card-subtitle text-50'">
                                            <v-icon :color="item.availability != 0 ? CheckFormatDue(item.to_date) > DateToday ? '': item.status == 'Submitted' ? '':'red darken-4':''" small>mdi-clock</v-icon> 
                                            
                                            {{item.availability != 0 ? CheckFormatDue(item.to_date) > DateToday ? '' : "Late" :''}}
                                          
                                            {{item.availability != 0 ? ' Due Date:' : 'No Due Date'}}
                                            {{format_date(item.to_date)}} 
                                        </small>
                                            
                                        <small v-if="item.status == 'Submitted'" class="card-subtitle text-50 success--text">
                                            <v-icon color="" small>mdi-clock</v-icon> 
                                            Submitted: {{format_date(item.Sub_date)}} 
                                        </small>
                                    </div>
                                </div>
                            
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            v-if="item.status == null || (item.status == 'Submitting'|| item.status == 'Taking')"
                                            @click="Previewdialog = !Previewdialog, Preview_id = item.classwork_id"
                                            class="mt-1 mr-5 pa-2 mx-1" 
                                            icon
                                            v-bind="attrs"
                                            v-on="on"
                                            fab
                                            >
                                            <v-icon
                                            size="30"
                                            >
                                            mdi-book-open-page-variant
                                            </v-icon>
                                        </v-btn>

                                        <v-btn
                                        large
                                         v-if="item.status != null || item.status == 'Taking' || item.status == 'Submitted' && item.score != null"
                                        @click="item.type == 'Objective Type' ? $router.push({name:'result-page', params:{id: item.classwork_id}}) : $router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: item.classwork_id}})"
                                        class="mt-1 mr-5 pa-2 mx-1 success--text" 
                                        text
                                        :icon="!item.graded && item.type == 'Subjective Type'" 
                                        rounded
                                         v-bind="attrs"
                                        v-on="on"
                                        >
                                           <span v-if="item.graded || item.type == 'Objective Type'">{{item.score}}/{{item.points}}</span>
                                           <v-icon size="32" v-if="!item.graded && item.type == 'Subjective Type'">mdi-book-open-page-variant</v-icon>
                                        </v-btn>
                                    </template>
                                
                                    <span>{{item.status == null ? 'View Classwork' : 'View Submission'}}</span>
                                </v-tooltip>
                                
                             </v-container>
                        </v-card >
                </v-col>
            </v-row>
    </div>
</template>

<script>
    const previewClassworkModal = () => import('../dialogs/previewClassworkModal');
    import moment from 'moment';
    export default {
        props: ['classworks'],
        components: {
            previewClassworkModal,
        },
        data() {
            return {
                Previewdialog:false,
                Preview_id:null,
                DateToday:''
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
        },
        mounted(){
            let newDate = new Date();
            this.DateToday = moment(newDate).format("YYYY-MM-DDTHH:mm:ss");

        }
       
    }
</script>
