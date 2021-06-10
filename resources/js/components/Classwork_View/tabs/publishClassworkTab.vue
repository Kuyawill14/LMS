
<template>
<v-app>
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
  <v-container v-if="!isloading" pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="10" md="10">
                <v-card  class="elevation-5">
                    <v-window>
                        <v-window-item >
                                <v-row>
                                    <v-col  cols="12" md="12" class="pa-7 primary">
                                 
                                    </v-col>
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
                                                                @click="shareClasswork($route.query.clwk, details.class_id, details.class_name)" id="check"
                                                                v-if="data.uc_id == details.class_id"
                                                                color="primary" :outlined="data.uc_id == details.class_id && data.status == 0" rounded dark>
                                                                {{$vuetify.breakpoint.xs ? '':data.uc_id == details.class_id && data.status == 0 ? 'Publish' :'Published'}}
                                                            <v-icon>
                                                                mdi-publish
                                                            </v-icon>
                                                        </v-btn>
                                                        </div>
                                                    </div>
                                                  <!--   <v-list-item-action v-for="(data, x) in classNames.check" :key="x">
                                                        <v-btn 
                                                        v-if="data.uc_id == details.id"
                                                        :color="data.uc_id == details.id && data.cl_id == $route.query.clwk ? 'primary' : 'red'" small :outlined="data.uc_id != details.id && data.cl_id != $route.query.clwk" rounded dark>
                                                            Publish
                                                            <v-icon right>
                                                                mdi-publish
                                                            </v-icon>
                                                        </v-btn>
                                                       
                                                       
                                                </v-list-item-action> -->
                                              
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
export default {
    data(){
        return{
            classNames:[],
            isloading: true
        }
    },
    methods:{
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
        fetchClassnames() {
            axios.get('/api/class/allnames/' + this.$route.params.id).then(res => {
                this.classNames = res.data;
                this.isloading = false;

            }).catch(e => {
                console.log(e)
            })
        },
    },
    mounted(){
        this.fetchClassnames();
    }

}
</script>

<style scoped>
  
        
</style>