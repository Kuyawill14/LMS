
<template>
<div class="pa-1">
     <v-overlay :value="isLeaving">
        <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular>
    </v-overlay>
    
        <v-dialog v-model="dialog" persistent max-width="600">
            <publishDialog 
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
    
        

        

<v-container class="fill-height" v-if="isloading" style="height: 500px;">
  <v-row  align-content="center" justify="center">
        <v-col cols="12" class="text-center">
            <v-progress-circular
            :size="40"
            color="primary"
            indeterminate
            ></v-progress-circular>
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
            <v-col cols="12" lg="9" xl="9" md="8">
                <v-card elevation="1" outlined class="pa-5" >
                    <v-row>

                        <v-col  cols="12" md="12" class="pt-2 pl-3 pr-3"> 
                            <v-container v-for="(details, index) in classNames" :key="index">
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-icon>mdi-account-multiple</v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>{{details.class_name}} </v-list-item-title>
                                        </v-list-item-content>
                                            <div class="">
                                    
                                                <v-btn
                                                    :loading="isPublishing && isPublishing_id == details.class_id"
                                                    @click="OpenPublishDialog($route.query.clwk, details.class_id, details.class_name, details.status)" 
                                                    v-if="details.status == 0"
                                                    color="primary" :outlined="details.status == 0" rounded dark>
                                                    {{$vuetify.breakpoint.xs ? '': 'Publish'}}
                                                <v-icon>
                                                    mdi-share
                                                </v-icon>
                                            </v-btn>
                                            <v-menu  v-if="details.status == 1"  offset-y>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn
                                                    v-if="details.status == 1"
                                                    color="primary"
                                                    dark
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    icon
                                                    text
                                                    >
                                                    <v-icon>mdi-dots-vertical</v-icon>
                                                    </v-btn>
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

export default {
    components:{
        publishDialog,
        unpublishConfirmDialog,
        updatePublishDialog
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
            datetoday: new Date()
        }
    },
    methods:{
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
                    //console.log(e);
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
                //console.log(e)
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
                //console.log(e)
            })
        },
        async SuccessPublishNotify(data){

            this.fetchClassFornotify(data)
        },
        async NewNotification(data){
            //console.log(data);
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