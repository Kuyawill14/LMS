<template>
<div id="create">

         <v-row align="center" justify="center" class="pt-10" v-if="ClassworkLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:10rem">
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

    <v-dialog v-model="dialog"  persistent max-width="650">
            <newClassworkModal  v-on:CloseDialog="dialog = !dialog" v-if="dialog"></newClassworkModal>
    </v-dialog>


     <v-dialog v-model="duplicateDialog"  persistent max-width="400">
            <duplicateClassworkDialog :duplicateId="duplicateId" 
            v-on:ToggleRefresh="CheckDuplicateId"
            v-on:CloseDialog="duplicateDialog = false"
            v-if="duplicateDialog"></duplicateClassworkDialog>
    </v-dialog>


    


    
    
    <v-container v-if="ClassworkLength != 0" fluid>
        <!-- Modal -->
       
        

        <v-row class="mb-2" >
            <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="9" lg="9" class="text-left mb-0 pb-0">
                 <h2 class="mt-1">Manage Classworks</h2>
            </v-col>
            <v-col cols="12" md="3" lg="3" class="text-right mb-0 pb-0">
                  <v-select
                  hide-details
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
            v-on:ToggleRefresh="$emit('ToggleRefreshClasswork'), Removedialog = !Removedialog"
            v-if="Removedialog"></deleteDialog>
        </v-dialog>

        <v-dialog v-model="archiveDialog" persistent max-width="400">
                <archiveClassworkDialog 
                v-on:SuccessArchive="SliceClasswork"
                :ArchiveDetails="ArchiveDetails"
                 v-on:toggleDialog="archiveDialog = !archiveDialog" v-if="archiveDialog"></archiveClassworkDialog>
        </v-dialog>
       <!--   <v-row >
            <v-divider></v-divider>
        </v-row> -->

            <v-row >
                <v-col v-show=" SelectedFilter == 'All' || SelectedFilter == ClassworkType[i]" cols="12" class="ml-0  mr-0" v-for="(item, i) in classworks" :key="i">
                 <v-col v-if="classworks[i].length != 0 || SelectedFilter == ClassworkType[i]" cols="12" class="ma-0 pa-0 mb-2"><h3 class="font-weight-regular">{{ClassworkType[i]}}</h3></v-col>
                <v-row v-if="classworks[i].length != 0" class="pl-1 pr-1 mt-1" ma-0 pa-0>
                   
                    <v-col class="ma-0 pa-0 pb-2 pl-2 pr-2 mb-1" cols="12"  md="4" v-for="(item, index) in classworks[i]" :key="index">
                        <v-expansion-panels  focusable>
                            <v-expansion-panel  class="ma-0 pa-0">
                            <!--  <v-hover v-slot="{ hover }"> -->
                            
                                <v-expansion-panel-header  class="pa-5" disable-icon-rotate hide-actions>
                                        <v-list class="ma-0 pa-0">
                                            <v-list-item class="ma-0 pa-0">
                                                <v-list-item-avatar size="48" color="blue">                                    
                                                        <v-icon  color="white" >
                                                            mdi-book-open-variant
                                                        </v-icon>
                                                </v-list-item-avatar>
                                     
                                                <v-list-item-content style="width:10px">
                                                    <v-list-item-title >
                                                          {{item.title}}
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle >
                                                        <span class="primary--text">({{item.points}} points)</span>
                                                        <br>
                                                         <span>Created: {{format_date(item.created_at)}}</span>                                                         
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                                <v-list-item-action>

                                                      <v-menu  offset-y >
                                                        <template v-slot:activator="{ on : menu, attrs }">
                                                        <v-tooltip top>
                                                            <template v-slot:activator="{ on: tooltip }">
                                                                <v-btn icon v-bind="attrs" v-on="{...tooltip, ...menu}" class="mb-2">
                                                                    <v-icon >mdi-dots-vertical</v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <span>Menu</span>
                                                        </v-tooltip>
                                                        </template>
                                                        <v-list dense rounded >
                                                             <v-list-item link :to="{name: 'clwk',params: {id: $route.params.id},query: {clwk: item.id}}" ma-0 pa-0>
                                                                <v-list-item-title> <v-icon left>mdi-notebook-edit-outline</v-icon>Edit classwork</v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item link @click="ArchiveClasswork(item, i, index)" ma-0 pa-0>
                                                                <v-list-item-title><v-icon left>mdi-archive</v-icon>Archive</v-list-item-title>
                                                            </v-list-item>
                                                             <v-list-item v-if="item.submittion_count == 0" link @click="RemoveCLasswork(item)" ma-0 pa-0>
                                                                <v-list-item-title><v-icon left>mdi-delete</v-icon>Delete</v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item link @click="OpenDuplicateDiaglog(item.id)"  ma-0 pa-0>
                                                                <v-list-item-title><v-icon left>mdi-content-copy</v-icon>Duplicate classwork</v-list-item-title>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-menu>
                                                 
                                                </v-list-item-action>
                                            </v-list-item>
                                        </v-list>
                                        
                                        
                                       <!--  <v-menu  bottom offset-y>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                icon
                                                v-bind="attrs"
                                                v-on="on"
                                        
                                                >
                                                <v-icon >mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        
                                            </template>
                                        
                                            <v-list rounded >
                                                <v-list-item link :to="{name: 'clwk',params: {id: $route.params.id},query: {clwk: item.id}}" ma-0 pa-0>
                                                    <v-list-item-title> <v-icon left>mdi-notebook-edit-outline</v-icon>Edit classwork</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item link @click="ArchiveClasswork(item, i, index)" ma-0 pa-0>
                                                    <v-list-item-title><v-icon left>mdi-archive</v-icon>Archive</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item v-if="item.submittion_count == 0" link @click="RemoveCLasswork(item)" ma-0 pa-0>
                                                    <v-list-item-title><v-icon left>mdi-delete</v-icon>Delete</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu> -->
                                   <!--  </div> -->
                                </v-expansion-panel-header>
                            <!--  </v-hover> -->
                            <v-expansion-panel-content id="extend" class=" expand ma-0 pa-0 mt-3">
                                <v-row no-gutters>
                                    <v-col cols="9" class="pr-2">
                                        <!--  <span class="text-caption" v-html="item.instruction"></span> -->
                                        
                                    <v-row no-gutters class="pt-2" v-if="item.publish_in.length != 0" >
                                        <v-col class="ml-0 pl-0" cols="12"  >
                                            <div  class=" font-weight-bold ">Publish to class:</div>
                                        </v-col>

                                        <v-col class="ml-0 pl-0" cols="12"  >

                                        <v-list class="pt-0 pb-0">
                                            <v-list-item v-for="(item, i) in item.publish_in" :key="i">
                                                <v-list-item-avatar >
                                                    <v-icon>mdi-account-multiple</v-icon>
                                                </v-list-item-avatar>
                                                <v-list-item-content class="pl-0">
                                                    <v-list-item-title class="font-weight-medium">
                                                        {{item.class_name}} <span class="primary--text text-caption">(Submitted:{{' '+item.submission}})</span>
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        <span class="font-weight-medium">Due:</span>
                                                        {{item.availability == 1 ? format_date(item.to_date) : 'Always available'}}
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                        </v-col>
                                            
                                    </v-row>
                                    </v-col>
                                       <v-col cols="3">
                                           <div class="flex-column">
                                               <h1 class="mb-0 pb-0">{{item.submittion_count}}</h1>
                                               <small class="mt-0 pt-0">Submitted</small>
                                           </div>
                                    </v-col>
                                    <v-col class="pt-3" cols="12">
                                        <v-btn v-if="item.publish_in.length == 0" class="ma-0" @click="$router.push({name: 'publish-to',params: {id: $route.params.id},query: {clwk: item.id}})"
                                            rounded dark color="blue" small >Publish Classwork
                                        </v-btn>

                                        <v-btn v-else dark class="ma-0" @click="$router.push({name: 'submission-list',params: {id: $route.params.id},query: {clwk: item.id}})"
                                            rounded color="blue" small >View Submission
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                


                          
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
              
                </v-col>
                </v-row>
               </v-col>
            </v-row>
    </v-container>

    <!--  <v-speed-dial
      v-model="fab"
      :bottom="bottom"
      :right="right"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="primary" dark fab>
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      <v-btn class="pl-8 pr-8 mb-2" dark x-large rounded color="red">
          <v-icon left>mdi-format-list-numbered</v-icon>
            Objective Type
      </v-btn>

      <v-btn class="pl-7 pr-7" dark x-large rounded color="indigo">
              <v-icon left>mdi-text</v-icon>
        Subjective Type
    
      </v-btn>
     
    </v-speed-dial> -->
   <!--  <v-dialog max-width="600" v-model="isNewClasswork_created">
        <newCLassworkCreatedDialog></newCLassworkCreatedDialog>
    </v-dialog> -->
</div>
</template>

<script>
    const deleteDialog = () => import('../dialogs/deleteDiaglog');
    const archiveClassworkDialog = () => import('../dialogs/archiveClassworkDialog');
    const newClassworkModal = () => import('../newClassworkModal')
    const duplicateClassworkDialog = () => import('../dialogs/duplicateClassworkDialog')
     const newCLassworkCreatedDialog = () => import('../dialogs/newCLassworkCreatedDialog')
    import moment from 'moment-timezone';

    export default {
        props: ['classworks','ClassworkLength','role'],
        components: {
            deleteDialog,
            newClassworkModal,
            archiveClassworkDialog,
            duplicateClassworkDialog,
            newCLassworkCreatedDialog
        },
        data() {
            return {
                Removedialog: false,
                dialog: false,
                duplicateDialog: false,
                DeleteDetails:[],
                DateToday:'',
                ClassworkType: ['Objective Type', 'Subjective Type'],
                focus: false,
                focusId: null,
                clicked: false,
                FilterItems:['All', 'Objective Type','Subjective Type'],
                SelectedFilter: 'All',
                archiveDialog: false,
                ArchiveDetails: [],
                ArchiveIndex: null,
                classworkIndex: null,
                 direction: 'top',
                fab: false,
                fling: false,
                hover: false,
                tabs: null,
                top: false,
                right: true,
                bottom: true,
                transition: 'slide-y-reverse-transition',
                duplicateId: null,
                isNewClasswork_created: true,
            }
        },
         watch: {
            top (val) {
                this.bottom = !val
            },
            right (val) {
                this.left = !val
            },
            bottom (val) {
                this.top = !val
            },
            left (val) {
                this.right = !val
            },
        },
        methods: {
            
            format_date(value) {
                if (value) {
                   // return moment(String(value)).format('MMMM Do YYYY, hh:mm A')
                    return moment(String(value)).tz("Asia/Manila").format('MMMM Do YYYY, hh:mm A');
                }
            },
            CheckFormatDue(value){
                if (value) {
                    //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
                    return moment(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
                }
            },
            async RemoveCLasswork(details){
                this.DeleteDetails = details;
                this.Removedialog = !this.Removedialog;
            },
            async ArchiveClasswork(details,mainIndex ,index){
                this.ArchiveIndex = index;
                this.classworkIndex = mainIndex;
                this.ArchiveDetails = details;
                this.archiveDialog = !this.archiveDialog;
            },
            /* CheckClassworkCount(){
                this.classworks.forEach(element => {
                    this.ClassworkLength += element.length;
                });
            }, */
            SliceClasswork(){
                this.classworks[this.classworkIndex].splice(this.ArchiveIndex, 1);
                this.archiveDialog = !this.archiveDialog;
            },
            OpenDuplicateDiaglog(classwork_id){
                this.duplicateDialog = true;
                this.duplicateId = classwork_id;
            },
            CheckDuplicateId(id){
                if(this.$route.params.id == id){
                    this.$emit('ToggleRefreshClasswork');
                }
                this.duplicateDialog = false;
            }
        },
        mounted(){
            //this.CheckClassworkCount();
            let newDate = new Date();
            //this.DateToday = moment(newDate).format('YYYY-MM-DD HH:mm:ss');
            this.DateToday =  moment(newDate).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            setTimeout(() => (this.$store.dispatch('SetDataisLoaded')), 300);
        },
    }
</script>
<style >
      span img{
        max-width: 100% !important;
        max-height: 15rem !important;
    }
     .v-expansion-panel-content__wrap {
        padding: 0 !important;
    }

     #extend{
        padding: 0 24px 16px !important;
    }

      /* This is for documentation purposes and will not be needed in your application */

#create .v-speed-dial__list {
    align-items: flex-end;
}
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>


