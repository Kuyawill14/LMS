<template>
    <div>
        <!-- <v-dialog v-model="dialog" persistent max-width="600">
            <newClassworkModal
            v-on:CloseDialog="dialog =!dialog"
            v-on:realodClassworks="getGeneralClassworks(), dialog = !dialog" 
            v-if="dialog && role == 'Teacher'">
            </newClassworkModal>
         </v-dialog> -->
       
         

<!-- 
        <v-btn  v-if="(!isGetting && role == 'Teacher') && ClassworkLength != 0" bottom color="primary" dark fab fixed right @click="dialog = !dialog">
            <v-icon>mdi-plus</v-icon>
        </v-btn> -->
       

    <v-overlay :value="isLeaving">
        <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular>
    </v-overlay>

        <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
            <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                :to="{name: item.link}"
                :disabled="item.disabled"
            >
                {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>


        <div class="ml-0 mr-0" v-show="get_isDataLoaded" >
            <classworkList 
            :ClassworkLength="ClassworkLength"
            v-on:reloadClassworks="reloadClassworks()"
            :classworks="get_Classworks" :role="role"></classworkList>
        </div>
      
        
        <!-- <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                 <v-icon style="font-size:10rem">
                    mdi-book-open-variant
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h2> Getting your Classworks </h2>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container> -->
    <v-container v-if="!get_isDataLoaded" fluid>
         <v-row class="mb-5">
             <v-col cols="12" md="9" lg="9" class="text-left mb-0 pb-0">
                  <v-skeleton-loader  type="heading"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="3" lg="3" class="text-right mb-0 pb-0">
                 <v-skeleton-loader min-width="400" type="button"></v-skeleton-loader>
            </v-col>
        </v-row>
        <v-row v-for="i in (role == 'Teacher' ? 2 : 3)" :key="i" >
              <v-col  cols="12" class="">
                <v-row>
                    <v-col cols="5" >
                        <v-skeleton-loader max-width="350" class="mx-atuo" type="heading"></v-skeleton-loader>
                    </v-col>
                </v-row>
              </v-col>
                <v-col class="mt-0 pt-0" cols="12" v-for="i in 3" :key="i"  md="6" lg="4" xl="4">
                <v-card class="pa-4">
                    <v-skeleton-loader class="mx-atuo" type="list-item-avatar-two-line"></v-skeleton-loader>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
        

    

    </div>

</template>
<script>
    const classworkList = () => import('./classworkList')
    const newClassworkModal = () => import('./newClassworkModal')
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            classworkList,
            newClassworkModal
        },
        data() {
            return {
                classworks: [],
                isLeaving: false,
                isGetting: true,
                dialog: false,
                ClassworkLength: null,
                items: [
                    {
                    text: 'Course',
                    disabled: false,
                    link: 'courses',
                    },
                    {
                    text: 'Classwork',
                    disabled: true,
                    link: 'classwork',
                    },
                ],
            }
        },
        computed: mapGetters(['get_Classworks','get_isDataLoaded']),
        methods: {
            ...mapActions(['fetchClassworks']),
            getGeneralClassworks() {
                this.$store.dispatch('SetDataisNotLoaded');
                this.$store.dispatch('fetchClassworks', this.$route.params.id)
                .then(()=>{

                    if(this.role == 'Teacher'){
                        this.get_Classworks.forEach(element => {
                            this.ClassworkLength+= element.length;
                        });
                    }else if(this.role == 'Student'){
                         this.get_Classworks.ClassworksList.forEach(element => {
                            this.ClassworkLength+= element.length;
                        });
                    }
                    
                   
                });
            },
            reloadClassworks(){
                this.$store.dispatch('SetDataisNotLoaded');
                 this.$store.dispatch('fetchClassworks', this.$route.params.id)
                .then(()=>{
                    this.$store.dispatch('SetDataisLoaded');
                    if(this.role == 'Teacher'){
                        this.get_Classworks.forEach(element => {
                            this.ClassworkLength+= element.length;
                        });
                    }else if(this.role == 'Student'){
                         this.get_Classworks.ClassworksList.forEach(element => {
                            this.ClassworkLength+= element.length;
                        });
                    }
                    
                   
                });
            }
        },
        beforeRouteLeave(to, from, next) {
            this.isLeaving = true;
            next();
        },
        async beforeRouteEnter(to, from, next) {
        next(vm => {
                vm.getGeneralClassworks();
            });
        },
        beforeDestroy(){
            this.$store.dispatch("ClearClasswork");
        },
        mounted() {
             $('head > title').text('Classworks');
        }

    }

</script>


