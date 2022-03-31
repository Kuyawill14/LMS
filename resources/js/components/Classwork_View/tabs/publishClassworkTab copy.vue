
<template>
<div >

    


<div transition="slide-y-reverse-transition">
    <v-app-bar elevation="5" 
     v-if="!$vuetify.breakpoint.mdAndUp"
        app :dense="$vuetify.breakpoint.mdAndUp"  color="primary"  >
         <v-btn dark rounded icon text 
            v-if="!$vuetify.breakpoint.mdAndUp"
            @click="$router.push({name: 'classwork'})" >
            <v-icon >mdi-arrow-left-thick</v-icon>
        </v-btn>
        <v-divider   vertical></v-divider>
    </v-app-bar>
</div>
     <v-overlay :value="isLeaving">
        <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular>
    </v-overlay>
    
    <v-dialog v-model="dialog" persistent max-width="600">
        <publishDialog 
        :classworkDetails="classworkDetails"
        :Details="Details"
        :datetoday="datetoday"
        v-on:toggleDialog="dialog = !dialog, isPublishing = !isPublishing, isAdding= !isAdding"
        v-on:successPublish="SuccessPublishNotify"
        v-on:UnPublish="closeDiaglog()"
        v-if="isAdding"></publishDialog>

            <updatePublishDialog 
        :Details="Details"
        v-on:toggleDialog="dialog = !dialog, isUpdate = !isUpdate"
        v-on:successPublish="dialog = !dialog, isUpdate = !isUpdate"
        v-if="isUpdate"></updatePublishDialog>
    </v-dialog>

    <v-dialog  v-model="UnpublishDiaglog" persistent max-width="450">
        <unpublishConfirmDialog v-if="UnpublishDiaglog" :UnpublishDetails="UnpublishDetails"
        v-on:toggleCancelDialog="UnpublishDiaglog = !UnpublishDiaglog"
        v-on:UnpublishSuccess="UnpublishDiaglog = !UnpublishDiaglog,fetchClassnames()"
        ></unpublishConfirmDialog>
    </v-dialog>

        <v-dialog  v-model="multiplePublish" persistent max-width="600">
        <multiplePublishDialog v-if="multiplePublish" :datetoday="datetoday" :multiplePublishDetails="multiplePublishDetails"
        v-on:toggleCancelDialog="multiplePublish = !multiplePublish"
        v-on:successMultiplePublish="successMultiplePublishNotify"
        v-on:UnpublishSuccess="multiplePublish = !multiplePublish,fetchClassnames()"
        ></multiplePublishDialog>
    </v-dialog>

    <v-row justify="center" v-if="classworkDetails.type == 'Objective Type'">
        <v-dialog fullscreen transition="dialog-bottom-transition" v-model="isReviewPublish">
            <v-card>
                <reviewAndPublish v-on:closeDialog="isReviewPublish = false" 
                v-on:continuePublish="isReviewPublish = false,OpenMultiplePublishDialog(classNames, $route.query.clwk)"
                :classworkDetails="classworkDetails">
                </reviewAndPublish>
            </v-card>
        </v-dialog>
    </v-row>

        <v-dialog v-if="classworkDetails.type == 'Objective Type'" v-model="checkPublishType"  max-width="350">
        <v-card>
            <v-card-title class="text-center">
                Publish Classwork
            </v-card-title>

            <v-card-text>
                  <v-row>
                    <v-col cols="12">
                        <v-btn @click="isReviewPublish = true, checkPublishType = false" dark block color="green" large>Review Questions And Publish</v-btn>
                    </v-col>
                     <v-col class="text-center pt-0 pb-0" cols="12">
                        <div class="font-weight-bold">Or</div>
                    </v-col>
                    <v-col cols="12">
                        <v-btn @click="checkPublishType = false,OpenMultiplePublishDialog(classNames, $route.query.clwk)" block color="primary" large>Continue Publish</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
          
        </v-card>
    </v-dialog>
    
    

    <v-container class="fill-height" v-if="isloading" style="height: 570px;">
        <v-row  align-content="center" justify="center">
            <v-col cols="12" class="text-center">
                <!--  <v-progress-circular
                :size="40"
                color="primary"
                indeterminate
                ></v-progress-circular> -->

                <vue-element-loading :active="isloading" 
                text="Loading"
                duration="0.7"
                :textStyle="{fontSize: '20px'}"
                spinner="line-scale" color="#EF6C00"  size="60" />
            </v-col>
        </v-row>
    </v-container>

<!--  <v-row align="center" justify="center" class="pt-10" v-if="Qlength == 0">
    <v-col cols="12" sm="8" md="4" class="text-center">
        <v-icon style="font-size:14rem">
            mdi-book-open-variant
        </v-icon>
        <h1> Empty Question </h1>
        <p> Start adding question for this classwork.</p>
        <v-btn color="primary" @click="$router.push({name: 'clwk',query: {clwk: $route.query.clwk} })"> Add Question </v-btn>
    </v-col>
</v-row> -->

  <v-container v-if="!isloading" pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12"  md="8">
                <v-card elevation="1" outlined class="pa-5" >
                    <v-row>
                        <v-col cols="12" class="text-right">
                         <!--    @click="OpenMultiplePublishDialog(classNames, $route.query.clwk)" -->
                            <v-btn v-if="classworkDetails.type == 'Objective Type'" @click="checkPublishType = true"
                             rounded color="primary">Publish Classwork <v-icon right>mdi-share</v-icon></v-btn>
                             <v-btn v-else-if="classworkDetails.type == 'Subjective Type'" 
                             @click="OpenMultiplePublishDialog(classNames, $route.query.clwk)"
                             rounded color="primary">Publish Classwork <v-icon right>mdi-share</v-icon></v-btn>
                        </v-col>
                        <v-col  cols="12" md="12" class="pt-2 pl-3 pr-3"> 
                            <v-container v-for="(details, index) in classNames" :key="index">
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-icon>mdi-account-multiple</v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>{{details.class_name}} </v-list-item-title>
                                        </v-list-item-content>
                                            <div >
                                            
                                            <v-btn v-if="details.status == 0" rounded disabled>
                                                Not publish
                                            </v-btn>
                                              <!--   <v-btn
                                                    :loading="isPublishing && isPublishing_id == details.class_id"
                                                    @click="OpenPublishDialog($route.query.clwk, details.class_id, details.class_name, details.status)" 
                                                    
                                                    color="primary" :outlined="details.status == 0" rounded dark>
                                                    {{$vuetify.breakpoint.xs ? '': 'Publish'}}
                                                <v-icon right>
                                                    mdi-share
                                                </v-icon>
                                            </v-btn> -->
                                            <v-menu  v-if="details.status == 1"  offset-y>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <!-- <v-btn
                                                    v-if="details.status == 1"
                                                    color="primary"
                                                    dark
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    icon
                                                    text
                                                    >
                                                    <v-icon>mdi-dots-vertical</v-icon>
                                                    </v-btn> -->
                                                    <v-btn rounded color="success" v-if="details.status == 1" v-bind="attrs" v-on="on"><v-icon left>mdi-check</v-icon> published</v-btn>
                                                </template>
                                                <v-list rounded class="pa-1">
                                                    <v-list-item class="rounded" link 
                                                    @click="OpenEditPublish($route.query.clwk, details.class_id, details.class_name, details.Class_classwork_id)" >
                                                        <v-list-item-title> 
                                                            <v-icon left>mdi-pencil</v-icon> Edit Publication
                                                        </v-list-item-title>
                                                            
                                                    </v-list-item>
                                                    <v-list-item class="rounded" link @click="OpenUnpublishDiaglog($route.query.clwk, details.class_id, details.class_name)">
                                                        <v-list-item-title > 
                                                                <v-icon left>mdi-share-off</v-icon> Unpublish
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                </v-list>
                                                </v-menu>
                                        
                                        </div>
                                </v-list-item>
                                    <v-divider></v-divider> 
                            </v-container>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>
<script>
const publishDialog = () => import('./dialogs/publishDialog')
const unpublishConfirmDialog = () => import('./dialogs/unpublishConfirmDialog')
const updatePublishDialog = () => import('./dialogs/UpdatePublishDialog')
//const multiplePublishDialog = () => import('./dialogs/multiplePublishDialog')
const reviewAndPublish = () => import('./dialogs/reviewAndPublishDialog')
import multiplePublishDialog from './dialogs/multiplePublishDialog';
export default {
    props:['classworkDetails','datetoday'],
    components:{
        publishDialog,
        unpublishConfirmDialog,
        updatePublishDialog,
        multiplePublishDialog,
        reviewAndPublish
    },
    data(){
        return{
            classNames:[],
            isloading: true,
            dialog: false,
            Details:{},
            UnpublishDetails:{},
            isPublishing:false,
            isPublishing_id: null,
            UnpublishDiaglog:false,
            isAdding: false,
            isUpdate: false,
            notifyDetails:{},
            isLeaving: false,
            multiplePublish: false,
            multiplePublishDetails:{},
            checkPublishType: false,
            isReviewPublish: false
        }
    },
    methods:{
        OpenMultiplePublishDialog(classes, id){

            let tmpClass = []
            classes.forEach(item => {
                if(item.status != 1){
                    tmpClass.push(item);
                }
            });

            this.multiplePublishDetails.classes = tmpClass;
            this.multiplePublishDetails.id = id;
             this.multiplePublishDetails.type = this.classworkDetails.type;
            this.multiplePublish = true;
            

        },
        OpenPublishDialog(item_id, class_id,class_name){
            this.isPublishing = !this.isPublishing;
            this.isPublishing_id = class_id;
            this.Details.id = item_id;
            this.Details.class_id = class_id;
            this.Details.class_name = class_name;
            this.dialog = !this.dialog;
            this.isAdding = !this.isAdding;

        },
        OpenEditPublish(item_id, class_id,class_name,classwork_id){
           
            this.Details.id = item_id;
            this.Details.class_id = class_id;
            this.Details.class_name = class_name;
            this.Details.classwork_id = classwork_id;
             this.dialog = !this.dialog;
            this.isUpdate = !this.isUpdate;
        },
        OpenUnpublishDiaglog(classwork_id, class_id,class_name){
            this.UnpublishDetails.id = classwork_id;
            this.UnpublishDetails.class_id = class_id;
            this.UnpublishDetails.class_name = class_name;
            this.UnpublishDiaglog = !this.UnpublishDiaglog;
        },
         toastSuccess(class_name) {
            
            return this.$toasted.success("Classwork Successfully published to "+class_name, {
                theme: "toasted-primary",
                position: "top-center",
                icon: "done",
                duration: 3000
            });
        },
        shareClasswork(item_id, class_id,class_name) {
            const fd = new FormData();
            fd.append("classwork_id", item_id);
            fd.append("class_id", class_id);
            axios.post('/api/classwork/share', fd)
                .then(res => {
                    
                    this.toastSuccess(class_name)
                    this.fetchClassnames();
                }).catch(e => {
                    ////console.log(e);
                })
        },
        closeDiaglog(){
            this.dialog = !this.dialog,this.isPublishing = !this.isPublishing
            this.fetchClassnames();
        },
        async fetchClassnames() {
            axios.get('/api/class/allnames/' + this.$route.params.id+'/'+ this.$route.query.clwk).then(res => {
                this.classNames = res.data;
                this.isloading = false;
            }).catch(e => {
                ////console.log(e)
            })
        },
          async fetchClassFornotify(data) {
            this.dialog = !this.dialog;
            this.isPublishing = !this.isPublishing;
            this.isAdding = !this.isAdding;
            axios.get('/api/class/allnames/' + this.$route.params.id+'/'+ this.$route.query.clwk).then(res => {
                this.classNames = res.data;
                this.isloading = false;
                this.NewNotification(data)
            }).catch(e => {
                ////console.log(e)
            })
        },

        async SuccessPublishNotify(data){
            this.fetchClassFornotify(data)
        },
        async successMultiplePublishNotify(data){
             this.multiplePublish = false;
             axios.get('/api/class/allnames/' + this.$route.params.id+'/'+ this.$route.query.clwk).then(res => {
                this.classNames = res.data;
                this.isloading = false;
                this.NewMultipleNotification(data)
            }).catch(e => {
                ////console.log(e)
            })
        },

        async NewMultipleNotification(data){
            this.notifyDetails.data = data;
            this.notifyDetails.course_id = this.$route.params.id;
            this.notifyDetails.type = 'classwork';
            axios.post('/api/notification/new', this.notifyDetails)
            .then(res=>{
               
            })
        },
        async NewNotification(data){
            this.notifyDetails.from_date = data.from_date;
            this.notifyDetails.classwork_id = data.classwork_id;
            this.notifyDetails.class_id = data.class_id;
            this.notifyDetails.course_id = this.$route.params.id;
            this.notifyDetails.due = data.to_date;
            this.notifyDetails.type = 'classwork';
            axios.post('/api/notification/new', this.notifyDetails)
            .then(res=>{
               
            })
        }
    },
    mounted(){
        this.fetchClassnames();
    },
    beforeRouteLeave(to, from, next) {
        this.isLeaving = true;
        next();
    },

}
</script>

<style scoped>
  
        
</style>