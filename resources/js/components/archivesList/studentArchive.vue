<template>
    <div>

      <!--   <v-container v-if="isloading" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                 <v-icon style="font-size:10rem">
                    mdi-account
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h3> Loading Profile </h3>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container> -->

   
      
  


        <h2 >Archive Courses</h2>
        <v-row v-if="isloading"  >
            <v-col :height="$vuetify.breakpoint.lgAndUp ? 200 : 140" v-for="n in 4" :key="n" cols="12" xl="3" lg="3" md="6">
                <v-skeleton-loader  type="image, article"></v-skeleton-loader>
            </v-col>
        </v-row>
        <v-row v-else class="mt-1">
           <v-col lg="3" md="6" v-for="(item, i) in ArchiveClasses" :key="'class' + i">
                <div class="card-expansion">
                    <v-card class="mx-auto">
                        <v-img :src="'../images/'+item.course_picture" height="200px"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="white--text align-end">
                            <v-card-subtitle>
                                <v-progress-linear :value="item.progress" height="6" class="rounded-sm">
                                </v-progress-linear>
                                <span class="text-caption float-right white--text"> {{ parseFloat(item.progress.toFixed(2))}}%
                                </span>
                                <span class="text-caption white--text"> Completed </span>
                            </v-card-subtitle>
                        </v-img>
                        <v-card-subtitle>
                            <div class="primary--text" style="text-decoration: none">
                                <p style="font-size: 16px;">{{item.course_code }} 
                                <br> {{ item.course_name}}
                                </p>
                            </div>
                            <hr>
                                {{ item.class_name}} <br>
                            Class code:{{ item.class_code}} 
                        </v-card-subtitle>

                        <v-card-subtitle class="mt-0 pt-0">
                            <div>
                                <v-btn @click="restoreDetails.id = item.useClass_id, restoreDetails.index = i, restoreDialog = true" color="secondary">
                                    Restore
                                </v-btn>
                            </div>
                        </v-card-subtitle>
                    </v-card>
                </div>
            </v-col>
        </v-row>

         <v-dialog v-model="restoreDialog" persistent max-width="400">
            <confirmRestore v-on:toggleCancelDialog="restoreDialog = false"
                v-on:toggleconfirm="restoreClass()"  v-if="restoreDialog">
            </confirmRestore>
        </v-dialog>
    </div>
</template>

<script>
    const confirmRestore = () => import("./dialogs/confirmRestore")
    export default {
        
        props:['role','UserDetails'],
        components:{
            confirmRestore
        },
        data () {
            return {
                tab: null,
                imageFile:'',
                Details:null,
                loading: false,
                isloading: true,
                message:null,
                type:null,
                ArchiveClasses:[],
                restoreDialog: false,
                restoreDetails: {}
            }
        },
        methods: {
             async restoreClass(){
                await axios.put('/api/archive/student-restore-class/'+this.restoreDetails.id)
                .then(()=>{
                    this.ArchiveClasses.splice(this.restoreDetails.index, 1)
                    this.restoreDialog = false;
                })
            },
            async fetchClass() {
                this.isGetting = true;
                await axios.get('/api/archive/classes')
                .then(res=>{
                    this.ArchiveClasses = res.data;
                    this.classLength = res.data.length;
                   
                    this.isloading = false;
                })
                
            },

        },
        mounted(){
            this.fetchClass();
         
        }
    }
</script>