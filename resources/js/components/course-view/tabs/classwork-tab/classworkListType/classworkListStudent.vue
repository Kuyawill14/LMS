<template>
<div>
     <v-row align="center" justify="center" class="pt-10" v-if="ClassworkLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:14rem">
                    mdi-book-open-variant
                </v-icon>
                <h1> Empty Classwork </h1>
                <p>No, Assign Classwork Yet!</p>
               
               
            </v-col>
        </v-row>


    <v-container v-if="ClassworkLength != 0" fluid>
        <!-- Modal -->
        <div v-if="Previewdialog">
               <v-dialog persistent v-model="Previewdialog"  width="650px">
            <previewClassworkModal v-on:isMounted="isLoading = false" v-if="Previewdialog" v-on:toggleCloseDialog="Previewdialog = !Previewdialog" :Preview_id="Preview_id"></previewClassworkModal>
         </v-dialog>
        </div>


        <v-row >
            <v-col class="text-left mb-0 pb-0">
                <div class="text-lg-h5 font-weight-medium text-sm-h6 mt-1">Classworks</div>
                <!--  <h2 class="mt-1">Classworks</h2> -->
            </v-col>
            <v-col cols="6" md="3" xl="3" lg="3" class="text-right mb-0 pb-0">
                  <v-select
                     :items="FilterItems"
                     item-text="title"
                    dense
                    v-model="SelectedFilter"
                    outlined
                    class="ma-0 pa-0"
                    ></v-select>
            </v-col>

             <!-- <v-col cols="12" class="mb-0 pb-0 mt-0 pt-0 d-flex justify-start">
                     <div class="d-flex justify-start ma-0"  :style="$vuetify.breakpoint.xs ? 'width: 100%' : 'width: 30%'">

                     <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon @click="isSearching = !isSearching" v-bind="attrs" v-on="on">
                                <v-icon>
                                {{!isSearching ? 'mdi-magnify' : 'mdi-close'}}
                                </v-icon>
                            </v-btn>
                        </template>
                         <span>{{!isSearching ? 'Search' : 'Close'}}</span>
                     </v-tooltip>
                     <v-text-field
                        dense
                        transition="slide-x-transition"
                        v-if="isSearching"
                        label="Search"
                        v-model="search"
                        placeholder="Name"
                        outlined
                        class="ma-0 pa-0"
                    ></v-text-field>
                    
                     </div>
                </v-col> -->
        </v-row>

    
        
    
        <!-- <v-row class=" mt-0 pt-0">
            <v-divider></v-divider>
        </v-row> -->

        <v-row class="mt-5" justify="center" align-content="center">
            <v-col cols="12" class="mt-1 ml-0  mr-0" v-for="(data, i) in classworks.ClassworkTitle" :key="i">
            <v-row v-if="classworks.ClassworksList[i].length != 0 && (SelectedFilter == 'All' || SelectedFilter == data.title)" >
                <v-col cols="12"  class="ma-0 pa-0 "><h2 class="font-weight-regular">{{data.title}} <small class="font-weight-medium">({{data.percent}}%)</small> </h2></v-col>
                <v-col cols="12" md="4" class="pb-0 mb-0" v-for="(item, index) in classworks.ClassworksList[i]" :key="index">
                    <vue-element-loading  :active="isLoading && Preview_id == item.classwork_id " text="Loading..." spinner="bar-fade-scale" />
                    <v-hover v-slot="{ hover }">
                        <v-card  @click="OpenClaswork(item.type,item.status,item.score,item.classwork_id)" 
                            link :elevation="hover ? 1 :0"  >
                            <v-container class="pl-2 pr-5 pt-5 pb-5 d-flex flex-row justify-space-between">
                                <div class="d-flex flex-row">
                                    <v-avatar size="40"
                                    :color="item.availability == 0 ?  item.status == 'Submitted' ?  'success' : 'blue'  : 
                                     CheckFormatDue(item.to_date) > DateToday ? item.status == 'Submitted' ? 'success' :'blue'
                                    : item.status == 'Submitted' ? 'success': 'red darken-4'" >
                                         <v-icon 
                                    class="pl-2 pr-2" color="white" >
                                        {{item.status == 'Submitted' ? 'mdi-check':'mdi-book-open-variant'}}
                                    </v-icon>
                                    </v-avatar>
                                    <div class="pl-2">  
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                            <div v-bind="attrs" v-on="on"  ma-0 pa-0 
                                             :style="$vuetify.breakpoint.xs ? 'width:180px;overflow: hidden;white-space: nowrap;text-overflow;text-overflow: ellipsis;' 
                                            : 'width: 220px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;'"
                                             class="h1 ml-1"> 
                                                <span class="font-weight-bold">{{item.title}} <small class="primary--text font-weight-regular" v-if="item.points != null">({{item.points}} points)</small></span> 
                                            </div> 
                                          </template>
                                             <span>{{item.title}}</span>
                                        </v-tooltip>

                                        <small
                                            v-if="item.status == null || item.status == 'Submitting'|| item.status == 'Taking'" :class="item.availability != 0 ? CheckFormatDue(item.to_date) > DateToday ? 'card-subtitle text-50': item.status == 'Submitted' ? 'card-subtitle text-50':'card-subtitle text-50 red--text':'card-subtitle text-50'">
                                            <v-icon :color="item.availability != 0 ? CheckFormatDue(item.to_date) > DateToday ? '': item.status == 'Submitted' ? '':'red darken-4':''" small>mdi-clock</v-icon> 
                                            {{item.availability != 0 ? CheckFormatDue(item.to_date) > DateToday ? '' : "Late" :''}}
                                            {{item.availability != 0 ? ' Due Date:' : 'No Due Date'}}
                                            {{item.availability != 0 ? format_date(item.to_date) : ''}} 
                                        </small>
                                            
                                        <small
                                            :style="$vuetify.breakpoint.xs ? 'width:150px;display: inline-block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;' 
                                            : ''" v-if="item.status == 'Submitted'" class="card-subtitle text-50 success--text">
                                            <v-icon color="" small>mdi-clock</v-icon> 
                                            Submitted: {{format_date(item.Sub_date)}} 
                                        </small>
                                    </div>
                                </div>

                                <v-chip color="green" class="mt-1 " outlined v-if="item.status == 'Submitted' && item.score != null">
                                    <span class="success--text" >{{item.score}}/{{item.points}}</span>
                                </v-chip>

                                 <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            v-if="item.status == 'Taking' && item.status != null"
                                            @click="continueClasswork(item.classwork_id)"
                                            class="mt-1 mr-5 pa-2 blue--text" 
                                            text
                                            v-bind="attrs"
                                            v-on="on"
                                            rounded>
                                            Continue
                                        </v-btn>
                                    </template>
                                    <span>Continue Classwork</span>
                                </v-tooltip>
                             </v-container>
                        </v-card>
                    </v-hover>
                 <v-divider></v-divider>
                </v-col>
               
            </v-row>
            </v-col>
             
        </v-row>
    </v-container>

</div>
</template>

<script>
    const previewClassworkModal = () => import('../dialogs/previewClassworkModal');
    import moment from 'moment';
    import VueElementLoading from 'vue-element-loading'
    export default {
        props: ['classworks'],
        components: {
            previewClassworkModal,
            VueElementLoading
        },
        data() {
            return {
                Previewdialog:false,
                Preview_id:null,
                DateToday:'',
                SelectedFilter: "All",
                FilterItems:[],
                ClassworkLength: null,
                isSearching: false,
                search: "",
                isLoading: false,
            }
        },
        methods: {
            format_date(value) {
                if (value) {
                    return moment(String(value)).format('MMMM DD YYYY, hh:mm A')
                }
            },
            CheckFormatDue(value){
                if (value) {
                    return moment(String(value)).format("YYYY-MM-DDTHH:mm:ss")
                }
            },
            continueClasswork(classwork_id){

                this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: classwork_id}})
         
            },
            OpenClaswork(type, status, score,classwork_id){
                this.isLoading = true;
                if(status == 'Submitted' && score != null){
                    if(type == 'Objective Type'){
                     this.$router.push({name:'result-page', params:{id: classwork_id}})
                    }
                    else{
                        this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: classwork_id}})
                    }
                }
                else if(status == 'Submitting' || status == null){
                    this.Previewdialog = !this.Previewdialog;
                    this.Preview_id = classwork_id
                }

            },
            setFilterItems(){
                for (let i = 0; i < this.classworks.ClassworkTitle.length+1; i++) {
                   
                    if(i == 0){
                        this.FilterItems.push({title : 'All'});
                    }
                    else{
                        this.FilterItems.push({title : this.classworks.ClassworkTitle[i-1].title});
                    }
                }

            },
             CheckClassworkCount(){
                this.classworks.ClassworksList.forEach(element => {
                    this.ClassworkLength += element.length;
                });
            }
        },
        mounted(){
            this.CheckClassworkCount();
            this.setFilterItems();
            let newDate = new Date();
            this.DateToday = moment(newDate).format("YYYY-MM-DDTHH:mm:ss");
            

        }
       
    }
</script>
