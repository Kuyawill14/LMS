<template>
    <div>
        <v-row align="center" justify="center" class="pt-10" v-if="moduleLength == 0">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:14rem">
                    mdi-book-variant-multiple
                </v-icon>

                <h1> Empty Course Module </h1>
                <p> Creating Module, you'll be able to upload and share it with your class. </p>
                <v-btn color="primary" @click=" openModal()"> CREATE MODULE </v-btn>
            </v-col>

            <v-dialog v-model="moduleDialog" persistent max-width="600px">

                <ModuleForm v-on:closeModal="moduleDialog = false" v-on:createdModule="moduleLength++" />
            </v-dialog>
        </v-row>


        <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-icon style="font-size:14rem">
                    mdi-google-classroom
                </v-icon>
                <v-col class="text-subtitle-1 text-center" cols="12">
                    <h2> Loading your Modules </h2>
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>




        <div v-if="moduleLength > 0">
            <v-row class="pt-3">
                <v-col>
                    <h2 class="pb-0"> Materials</h2>
                </v-col>
                  <v-col class="text-right">
                     <v-btn bottom color="secondary" @click="preview()">
                    <v-icon left>mdi-eye</v-icon>
                    Preview
                </v-btn>

                </v-col>

                <v-btn bottom color="primary" dark fab fixed right @click="openModal()">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>


                <v-dialog v-model="moduleDialog" persistent max-width="600px">
                    <ModuleForm v-on:closeModal="moduleDialog = false" />
                </v-dialog>
            </v-row>

            <v-row>

                <modulesListComponent :role="role" />

            </v-row>

        </div>


    </div>


</template>

<script>
    import VueElementLoading from 'vue-element-loading'
    //import modulesListComponent from './modulesListComponent'
    import ModuleForm from './Forms/ModuleForm'
    const modulesListComponent = () => import("./modulesListComponent")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            VueElementLoading,
            modulesListComponent,

            ModuleForm,

        },
        data() {
            return {
                moduleDialog: false,
                loading: false,
                isGetting: false,
                moduleLength: null,
            }
        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"])
        },
        methods: {
            openModal() {
                this.moduleDialog = !this.moduleDialog;
            },
            preview() {
                var id = this.$route.params.id;
            this.$router.push({ name: 'modules-preview', params: {id:id}});
            },
            fetchAllModule() {
                this.isGetting = true;
                axios.get(
                    `/api/student_sub_module/all/${this.$route.params.id}`
                ).then((res) => {
                    this.studentSubModuleProgress = res.data;
                    this.$store.dispatch('fetchMainModule', this.$route.params.id).then(() => {
                        setTimeout(() => {
                            this.isGetting = false;
                            this.moduleLength = this.getmain_module.length;
                        }, 1000);
                    });
                    this.$store.dispatch('fetchSubModule', this.$route.params.id);


                }).catch((error) => {
                    console.log(error)
                })
            },
            UpdateAllModule() {

                axios.get(
                    `/api/student_sub_module/all/${this.$route.params.id}`
                ).then((res) => {

                    this.$store.dispatch('fetchMainModule', this.$route.params.id).then(() => {


                        this.moduleLength = this.getmain_module.length;

                    });



                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted() {
            this.fetchAllModule();
            console.log(this.isGetting);
            console.log(this.moduleLength);







        },

    }

</script>

<style scoped>
    .button-text-image {
        white-space: inherit;
    }

    .class-banner {
        /* background-image: url(https://gstatic.com/classroom/themes/Honors.jpg); */
        color: #fff;
        height: 200px;
        background-color: #1E1E1C;
    }

    .top-container {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .ttr-wrapper {
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 59px;
    }

    .transparent {
        background: transparent;
        border: none;
    }

    .card-top {
        color: #fff !important;
    }

</style>
