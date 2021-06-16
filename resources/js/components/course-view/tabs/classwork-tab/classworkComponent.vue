<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="600">
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
        <v-container v-if="(!isGetting && ClassworkLength != 0)">
            <v-row>
                <v-col>
                    <h2>{{ role == 'Teacher' ? 'Manage Classworks' : 'Classworks'}}</h2>
                </v-col>
            </v-row>
        </v-container>


        <classworkList v-if="!isGetting && ClassworkLength != 0" :classworks="get_Classworks" :role="role"></classworkList>
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
                ClassworkLength:null,
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
                            this.ClassworkLength = this.get_Classworks.length;
                           
                             //setTimeout(() => {
                            this.isGetting = false;
                        //}, 1000);
                        }
                    })
            },
        },
        mounted() {
            this.getGeneralClassworks();
        }

    }

</script>
