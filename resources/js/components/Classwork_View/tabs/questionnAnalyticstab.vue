
<template>
<div class="pa-1">
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
    <v-row  v-if="isloading" align="center" justify="center" >
        <v-col cols="8">
            <v-card elevation="1" outlined class="pa-5">
                <v-row  align-content="center" justify="center">
                        <v-col cols="12" >
                            <v-skeleton-loader  type="table"></v-skeleton-loader>
                        </v-col>
                    </v-row>
            </v-card>
        </v-col>
    </v-row>


    <div v-if="!isloading">
        <v-row align="center" justify="center">
            <v-col cols="12" md="8">
                <v-card elevation="1" outlined class="pa-5">
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            placeholder="Search question"
                            label="Search"
                            single-line
                            hide-details>
                        </v-text-field>
                    </v-card-title>
                    <v-data-table
                    :loading="isloading"
                    loading-text="Loading data..."
                    :headers="headers"
                    :items="List"
                    :search="search">
                        <template v-slot:body="{ items }">
                            <tbody>
                            <tr v-for="item in items" :key="item.id">
                                <td><span class="post-content" v-html="item.question"></span></td>
                                <td class="text-center">{{ item.correct_count != null && item.correct_count != '' ? item.correct_count : 0 }}</td>
                                <td class="text-center">{{ item.wrong_count != null && item.wrong_count != '' ? item.wrong_count : 0  }}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</div>
</template>
<script>
export default {

    data(){
        return{
           isLeaving: false,
           List:[],
           search:'',
           selectedTasks: [],
           isloading: true,
           isSettingData: false,
           isSelected: null,
           submissionLength: 0,
           isMaintenance: false,
           headers: [
                { text: 'Question', align: 'start',value: 'question'},
                { text: 'Correct Student',   filterable: false, align: 'center', value: 'correct_count'},
                { text: 'Incorrect Student',   filterable: false, align: 'center', value: 'wrong_count' },
            ],
        }
    },
    methods:{
          async GetList(){
           await axios.get('/api/QAnalytics/all/'+this.$route.query.clwk)
            .then(res=>{
                this.List = res.data.analytics;
                this.isloading = false;
            })
        },
    },

    mounted(){
        this.GetList();

    },
    beforeRouteLeave(to, from, next) {
        this.isLeaving = true;
        next();
    },
}
</script>

<style scoped>

.Essayeditor{
    height: 10rem !important;
    
}

.Image_centered {
   display: block;
    margin-left: auto;
    margin-right: auto
}
.centered{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
   border-radius: 3px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
<style >
      .post-content  img{
      max-height: 10rem !important;
}
</style>

