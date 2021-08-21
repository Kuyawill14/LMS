<template>
    <div>
       <!--  <v-dialog v-model="dialog" persistent max-width="600">
            <newClassworkModal
            v-on:CloseDialog="dialog =!dialog"
            v-on:realodClassworks="getGeneralClassworks(), dialog = !dialog" 
            v-if="dialog && role == 'Teacher'">
            </newClassworkModal>
         </v-dialog>
       
         <v-row align="center" justify="center" class="pt-10" v-if="!isGetting && ClassworkLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:14rem">
                    mdi-book-open-variant
                </v-icon>
                <h1> Empty Classwork </h1>
                <p> {{role == 'Teacher' ? "'Creating Classwork, you'll be able to publish classwork to your class.": 'No, Assign Classwork Yet!'}} </p>
                <v-btn v-if="role == 'Teacher'" color="primary" @click="role == 'Teacher' ? dialog = !dialog:''"> CREATE CLASSWORK </v-btn>
            </v-col>
        </v-row>



        <v-btn  v-if="(!isGetting && role == 'Teacher') && ClassworkLength != 0" bottom color="primary" dark fab fixed right @click="dialog = !dialog">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        -->

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

        <div class="ml-0 mr-0">
            <classworkList v-on:ToggleRefresh="getGeneralClassworks()" 
            v-if="!isGetting && ClassworkLength != 0" 
            v-on:reloadClassworks="getGeneralClassworks()"
            :classworks="get_Classworks" :role="role"></classworkList>
        </div>
      
        
        <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                 <v-icon style="font-size:14rem">
                    mdi-book-open-variant
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h2> Getting your Classworks </h2>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
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
                isGetting: false,
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
        computed: mapGetters(['get_Classworks']),
        methods: {
            ...mapActions(['fetchClassworks']),
            getGeneralClassworks() {
                this.isGetting = true;
                this.$store.dispatch('fetchClassworks', this.$route.params.id)
                .then(res => {
                    if (res == 200) {
                        
                       
                      
                      
                        this.isGetting = false;
                    }
                   
                })
            },
        },
        mounted() {
            this.getGeneralClassworks();
        }

    }

</script>
