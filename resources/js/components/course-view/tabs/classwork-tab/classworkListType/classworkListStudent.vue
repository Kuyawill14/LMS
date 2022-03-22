<template>
<div>
   

     <v-row align="center" justify="center" class="pt-10" v-if="ClassworkLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:10rem">
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
                <previewClassworkModal v-on:OpenClasswork="Previewdialog = false,$router.push({name: 'clwk',params: {id: $route.params.id},query: {clwk: Preview_id}})" v-on:isMounted="isLoading = false" 
                v-if="Previewdialog" v-on:toggleCloseDialog="Previewdialog = !Previewdialog"  :Preview_details="Preview_details"></previewClassworkModal>
            </v-dialog>
        </div>

        <v-row >
          <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="9" lg="9" class="text-left mb-0 pb-0">
                 <h2 >My Classworks</h2>
            </v-col>
            <v-col cols="12" md="3" xl="3" lg="3" class="text-right mb-0 pb-0">
                  <v-select
                    hide-details
                    @click="setFilterItems()"
                     :items="FilterItems"
                     item-text="title"
                     item-value="id"
                    dense
                    v-model="SelectedFilter"
                    outlined
                    class="ma-0 pa-0"
                    >
                     <template slot="selection" slot-scope="data">
                            {{ data.item.title }} {{ data.item.percentage == null ? '' : '- '+data.item.percentage+'%'}}
                        </template>
                        <template slot="item" slot-scope="data">
                            {{ data.item.title }} {{ data.item.percentage == null ? '' : '- '+data.item.percentage+'%'}}
                        </template>
                    </v-select>
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
            <v-row>
                <v-col v-show="classworks.length != 0 && (SelectedFilter == 'All' || SelectedFilter == item.grading_criteria)" cols="12"  md="6" lg="4" xl="4" class="pb-0 mb-0" v-for="(item, index) in classworks.ClassworksList" :key="index">
                   
                    <v-hover v-slot="{ hover }">
                        <v-card  @click="OpenClaswork(item)" 
                            link :elevation="hover ? 4 : 3" class="pt-2 pb-2">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-avatar size="45" :color="item.availability == 0 ?  item.status == 'Submitted' ?  'success' : 
                                        item.status == 'Taking' ?  'primary' :  'blue'  : 
                                        CheckFormatDue(item.to_date) > CheckFormatDue(classworks.currentDate) ? item.status == 'Submitted' ? 'success' : item.status == 'Taking' ?  'primary' :'blue'
                                        : item.status == 'Submitted' ? 'success': 'red darken-4'"  >
                                        <v-icon class="pl-2 pr-2" color="white" >
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
                                                <span>{{item.title}}<small  v-if="item.points != null">({{item.points}} points)</small></span>
                                            </v-tooltip>
                                        </v-list-item-title>
                                        
                                        <v-list-item-subtitle>
                                                <small
                                                v-if="item.status == null || item.status == 'Submitting'" :class="item.availability != 0 ? CheckFormatDue(item.to_date) > CheckFormatDue(classworks.currentDate) ? 'card-subtitle text-50': item.status == 'Submitted' ? 'card-subtitle text-50':'card-subtitle text-50 red--text':'card-subtitle text-50'">
                                                <v-icon :color="item.availability != 0 ? CheckFormatDue(item.to_date) > CheckFormatDue(classworks.currentDate) ? '': item.status == 'Submitted' ? '':'red darken-4':''" small>mdi-clock</v-icon> 
                                                {{item.availability != 0 ? CheckFormatDue(item.to_date) > CheckFormatDue(classworks.currentDate) ? '' : "Late" :''}}
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
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
    </v-container>

</div>
</template>

<script>
    const previewClassworkModal = () => import('../dialogs/previewClassworkModal');
    import moment from 'moment-timezone';
    export default {
        props: ['classworks','ClassworkLength'],
        components: {
            previewClassworkModal
        },
        data() {
            return {
                Previewdialog:false,
                Preview_id:null,
                Preview_details: [],
                DateToday:'',
                SelectedFilter: "All",
                FilterItems:[
                    {
                        title: 'All',
                        id: 'All',
                        percentage: null,
                    }
                ],
                isSearching: false,
                search: "",
                isLoading: false
            }
        },
        methods: {
            format_date(value) {
                if (value) {
                    return moment(String(value)).tz("Asia/Manila").format('MMMM DD YYYY, hh:mm A');
                }
            },
            CheckFormatDue(value){
                if (value) {
                    return moment(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
                }
            },
            continueClasswork(classwork_id){

                this.$router.push({name: 'quizstart',params: {id: this.$route.params.id},query: {clwk: classwork_id}})
         
            },
            OpenClaswork(details){
                this.isLoading = true;
                if(details.status == 'Submitted' && details.score != null){
                     this.Preview_id = details.classwork_id;
                    if(details.type == 'Objective Type'){
                     this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: details.classwork_id}})
                    }
                    else{
                        this.$router.push({name: 'clwk',params: {id: this.$route.params.id},query: {clwk: details.classwork_id}})
                    }
                }
                else if(details.status == 'Submitting' || details.status == null || details.status == '' || details.status == 'Taking'){
                    this.Previewdialog = !this.Previewdialog;
                    this.Preview_id = details.classwork_id;
                    this.Preview_details = details;
                }

            },
            setFilterItems(){
                if((this.FilterItems.length-1) != this.classworks.gradinCriteria.length){
                      this.classworks.gradinCriteria.forEach(item => {
                        this.FilterItems.push({title : item.name, id: item.id, percentage: item.percentage});
                    });

                    console.log(this.FilterItems);
                }
              
            },
        },
        mounted(){
            let newDate = new Date();
            this.DateToday =  moment(newDate).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            setTimeout(() => (this.$store.dispatch('SetDataisLoaded')), 300);
        },
       
       
       
    }
</script>
