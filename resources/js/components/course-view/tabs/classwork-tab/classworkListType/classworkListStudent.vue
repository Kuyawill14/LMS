<template>
<div>
   

     <v-row align="center" justify="center" class="pt-10" v-if="classworks.totalClasswork == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:10rem">
                    mdi-book-open-variant
                </v-icon>
                <h1> Empty Classwork </h1>
                <p>No, Assign Classwork Yet!</p>
            </v-col>
        </v-row>


    <v-container v-if="classworks.totalClasswork != 0" fluid>
        <!-- Modal -->
        <div v-if="Previewdialog">
               <v-dialog persistent v-model="Previewdialog"  width="650px">
            <previewClassworkModal v-on:OpenClasswork="Previewdialog = false,$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: Preview_id}})" v-on:isMounted="isLoading = false" v-if="Previewdialog" v-on:toggleCloseDialog="Previewdialog = !Previewdialog" :Preview_id="Preview_id"></previewClassworkModal>
         </v-dialog>
        </div>
<!-- , $router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: Preview_id}}) -->

        <v-row >
          <v-col cols="12" md="9" lg="9" class="text-left mb-0 pb-0">
                 <h2 class="mt-1">My Classworks</h2>
            </v-col>
            <v-col cols="12" md="3" xl="3" lg="3" class="text-right mb-0 pb-0">
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

        <v-row  justify="center" align-content="center">
            <v-col cols="12" v-show="classworks.ClassworksList[i].length != 0 && (SelectedFilter == 'All' || SelectedFilter == data.title)" class="mt-1 ml-0  mr-0" v-for="(data, i) in classworks.ClassworkTitle" :key="i">
              
            <v-row v-if="classworks.ClassworksList[i].length != 0 && (SelectedFilter == 'All' || SelectedFilter == data.title)" >
                <v-col v-if="classworks.ClassworksList[i].length != 0" cols="12"  class="ma-0 pa-0 "><h2 class="font-weight-regular text-body-1">{{data.title}} <small class="font-weight-medium">({{data.percent}}%)</small> </h2></v-col>
                <v-col cols="12"  md="6" lg="4" xl="4" class="pb-0 mb-0" v-for="(item, index) in classworks.ClassworksList[i]" :key="index">
                   
                    <v-hover v-slot="{ hover }">
                        <v-card   @click="OpenClaswork(item.type,item.status,item.score,item.classwork_id)" 
                            link :elevation="hover ? 4 : 3" class="pt-2 pb-2">
                           <!--   <vue-element-loading  :active="isLoading && Preview_id == item.classwork_id " text="Loading..." spinner="bar-fade-scale" /> -->
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-avatar size="45" :color="item.availability == 0 ?  item.status == 'Submitted' ?  'success' : 
                                        item.status == 'Taking' ?  'primary' :  'blue'  : 
                                                CheckFormatDue(item.to_date) > DateToday ? item.status == 'Submitted' ? 'success' : item.status == 'Taking' ?  'primary' :'blue'
                                                : item.status == 'Submitted' ? 'success': 'red darken-4'"  >
                                                <v-icon 
                                               
                                                class="pl-2 pr-2" color="white" >
                                                    {{item.status == 'Submitted' ? 'mdi-check': item.status == 'Taking' ? 'mdi-clock' : 'mdi-book-open-variant'}}
                                                </v-icon>
                                       
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title >
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                    <div v-bind="attrs" v-on="on"  ma-0 pa-0 class="h1 ml-1"> 
                                                        <span class="font-weight-bold">{{item.title}} <small class="primary--text font-weight-regular" v-if="item.points != null">({{item.points}} points)</small></span> 
                                                    </div> 
                                                </template>
                                                    <span>{{item.title}}</span>
                                                </v-tooltip>

                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                 <small
                                                    v-if="item.status == null || item.status == 'Submitting'" :class="item.availability != 0 ? CheckFormatDue(item.to_date) > DateToday ? 'card-subtitle text-50': item.status == 'Submitted' ? 'card-subtitle text-50':'card-subtitle text-50 red--text':'card-subtitle text-50'">
                                                    <v-icon :color="item.availability != 0 ? CheckFormatDue(item.to_date) > DateToday ? '': item.status == 'Submitted' ? '':'red darken-4':''" small>mdi-clock</v-icon> 
                                                    {{item.availability != 0 ? CheckFormatDue(item.to_date) > DateToday ? '' : "Late" :''}}
                                                    {{item.availability != 0 ? ' Due Date:' : 'No Due Date'}}
                                                    {{item.availability != 0 ? format_date(item.to_date) : ''}} 
                                                </small>
                                                    
                                                <small v-if="item.status == 'Submitted'" class="card-subtitle text-50 success--text">
                                                    <v-icon color="" small>mdi-clock</v-icon> 
                                                    Submitted: {{format_date(item.Sub_date)}} 
                                                </small>

                                                 <small v-if="item.status == 'Taking'" class="card-subtitle text-50 primary--text">
                                                    <v-icon color="primary" small>mdi-clock</v-icon> 
                                                    Taking
                                                </small>
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                             <v-chip color="green" class="mt-1 " outlined v-if="item.status == 'Submitted' && item.score != null">
                                                
                                                <span class="success--text" >{{ item.type == "Subjective Type" ? item.graded ? item.score : '?' : item.score}} <span class="black--text">/ </span>{{item.points}}</span>
                                                </v-chip>
                                              <!--   <v-tooltip top>
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
                                                </v-tooltip> -->
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>



                            <!-- <v-container class="pl-4 pr-5 pt-5 pb-5 d-flex flex-row justify-space-between">
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
                             </v-container> -->
                        </v-card>
                    </v-hover>
               
                </v-col>
               
            </v-row>
            </v-col>
             
        </v-row>
    </v-container>

</div>
</template>

<script>
    const previewClassworkModal = () => import('../dialogs/previewClassworkModal');
    import moment from 'moment-timezone';
    export default {
        props: ['classworks'],
        components: {
            previewClassworkModal
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
                isLoading: false
            }
        },
       /*  watch: { 
            classworks: function(newVal, oldVal) { // watch it
                this.setFilterItems();
            }
        }, */
        methods: {
            format_date(value) {
                if (value) {
                    //return moment(String(value)).format('MMMM DD YYYY, hh:mm A')
                    return moment(String(value)).tz("Asia/Manila").format('MMMM DD YYYY, hh:mm A');
                }
            },
            CheckFormatDue(value){
                if (value) {
                    //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
                    return moment(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
                }
            },
            continueClasswork(classwork_id){

                this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: classwork_id}})
         
            },
            OpenClaswork(type, status, score,classwork_id){
                this.isLoading = true;
                if(status == 'Submitted' && score != null){
                     this.Preview_id = classwork_id;
                    if(type == 'Objective Type'){
                    // this.$router.push({name:'result-page', params:{id: classwork_id}})
                     this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: classwork_id}})
                    }
                    else{
                        this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: classwork_id}})
                    }
                }
                else if(status == 'Submitting' || status == null || status == 'Taking'){
                    this.Previewdialog = !this.Previewdialog;
                    this.Preview_id = classwork_id
                }

            },
            setFilterItems(){
                
                let datalength = this.classworks.ClassworkTitle.length+1;
                for (let i = 0; i < datalength; i++) {
                    if(i == 0){
                        this.FilterItems.push({title : 'All'});
                    }
                    else{
                        this.FilterItems.push({title : this.classworks.ClassworkTitle[i-1].title});
                    }
                }

            },
          /*    CheckClassworkCount(){
                let data = this.classworks.ClassworksList;
                data.forEach(item => {
                    this.ClassworkLength += item.length;
                });
            } */
        },
        mounted(){
            this.setFilterItems();
            let newDate = new Date();
            this.DateToday =  moment(newDate).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
          
        },
        created(){
             this.$emit('ismounted');
        }
       
       
    }
</script>
