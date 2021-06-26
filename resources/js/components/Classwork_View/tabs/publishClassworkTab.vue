
<template>
<v-app>
        <v-dialog v-model="dialog" persistent max-width="600">
            <publishDialog 
            :Details="Details"
            v-on:toggleDialog="dialog = !dialog, isPublishing = !isPublishing"
            v-on:successPublish="SuccessPublishNotify"
            v-on:UnPublish="closeDiaglog()"
            v-if="dialog"></publishDialog>
        </v-dialog>

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
            <v-col cols="12" lg="10" md="10">
                <v-card  class="elevation-5" style="border-top:5px solid #EF6C00">
                    <v-window>
                        <v-window-item >
                                <v-row>

                                    <v-col  cols="12" md="12" class="pt-2 pl-3 pr-3"> 
                                        <v-container v-for="(details, index) in classNames.allClass" :key="index">
                                            <v-list-item>
                                                <v-list-item-avatar>
                                                    <v-icon>mdi-account-multiple</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title>{{details.class_name}} </v-list-item-title>
                                                    </v-list-item-content>
                                                     <div class="">
                                                        <div v-for="(data, x) in classNames.check" :key="x">
                                                                <v-btn
                                                                :loading="isPublishing && Details.class_id == details.class_id"
                                                                @click="OpenPublishDialog($route.query.clwk, details.class_id, details.class_name, data.status)" 
                                                                v-if="data.uc_id == details.id && data.cl_id == $route.query.clwk"
                                                                color="primary" :outlined="data.uc_id == details.id && data.status == false" rounded dark>
                                                                {{$vuetify.breakpoint.xs ? '':data.uc_id == details.id && data.status == 0 ? 'Publish' :'Unpublish'}}
                                                            <v-icon>
                                                                mdi-publish
                                                            </v-icon>
                                                        </v-btn>
                                                        </div>
                                                    </div>

                                                   <!--   <div class="">
                                                    <div v-for="(data, x) in classNames.check" :key="x">
                                                        <v-checkbox ma-0 pa-0
                                                          v-if="data.uc_id == details.id && data.cl_id == $route.query.clwk"
                                                           v-model="data.status"
                                                           hide-details
                                                           class="ma-0 pa-0 float-right" 
                                                     
                                                            ></v-checkbox>
                                                    </div>
                                                </div> -->
                                                    
                                                 
                                              
                                            </v-list-item>
                                              <v-divider></v-divider> 
                                       </v-container>
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
const publishDialog = () => import('./dialogs/publishDialog')

export default {
    components:{
        publishDialog
    },
    data(){
        return{
            classNames:[],
            isloading: true,
            dialog: false,
            Details:{},
            isPublishing:false
        }
    },
    methods:{
        OpenPublishDialog(item_id, class_id,class_name,status){
            this.isPublishing = !this.isPublishing;
            this.Details.id = item_id;
            this.Details.class_id = class_id;
            this.Details.class_name = class_name;
            this.Details.status = status;
            this.dialog = !this.dialog;

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
                    console.log(e);
                })
        },
        closeDiaglog(){
            this.dialog = !this.dialog,this.isPublishing = !this.isPublishing
            this.fetchClassnames();
        },
        async fetchClassnames() {
            axios.get('/api/class/allnames/' + this.$route.params.id).then(res => {
                this.classNames = res.data;
                this.isloading = false;
            }).catch(e => {
                console.log(e)
            })
        },
          async fetchClassFornotify(data) {
            this.dialog = !this.dialog,this.isPublishing = !this.isPublishing
            axios.get('/api/class/allnames/' + this.$route.params.id).then(res => {
                this.classNames = res.data;
                this.isloading = false;
                this.NewNotification(data)
            }).catch(e => {
                console.log(e)
            })
        },
        async SuccessPublishNotify(data){
           
            this.fetchClassFornotify(data)
        },
        async NewNotification(data){
            axios.post('/api/notification/new', data)
            .then(res=>{
                
            })
        }
    },
    beforeMount(){
        this.fetchClassnames();
      
    }

}
</script>

<style scoped>
  
        
</style>