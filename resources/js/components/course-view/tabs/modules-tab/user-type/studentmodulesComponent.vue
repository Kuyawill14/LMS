<template>
    <div>
        <v-row>
            <v-col lg="8" sm="12" md="12" class="pa-1">
                <v-row>

                    <v-col>
                        <v-card>
                            <iframe title="office viewer" class="video-c" id="pdf-iframe"
                                :src="'https://view.officeapps.live.com/op/view.aspx?src=https://edu.stacktrek.com/uploads/courses/2304/files/research.GRgPROnP.pptx'"
                                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                style="width: 100%;height: 100%"></iframe>
                        </v-card>
                    </v-col>

                </v-row>

                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-title>
                                {{subModuleData.sub_module_name}}
                            </v-card-title>

                            <v-card-text class="text--primary">
                                <div> {{subModuleData.description}}</div>
                                 <div> {{subModuleData}}</div>
                                <a :href="'/storage/' + subModuleData.file_attachment">Donwload</a>

                            </v-card-text>

                        </v-card>
                    </v-col>


                </v-row>


            </v-col>

            <v-col lg="4" sm="12" md="12" class="pa-0 border">
                <modulesListComponent v-on:subModule="getSubModuleData" />
            </v-col>

        </v-row>




    </div>


</template>

<script>
    import VueElementLoading from 'vue-element-loading'
    //import modulesListComponent from './modulesListComponent'

    const modulesListComponent = () => import("./studentmodulesListComponent")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            VueElementLoading,
            modulesListComponent,


        },
        data() {
            return {
                loading: false,
                subModuleData: {

                    sub_module_name: "123",

                    file_attachment: null,


                },
                iframeSrc: null
            }
        },
        methods: {
            getSubModuleData(value) {
                this.subModuleData = value;
                var origin_url = window.location.origin;
                var base_src = 'https://view.officeapps.live.com/op/view.aspx?src=';
                this.iframeSrc =
                    'https://view.officeapps.live.com/op/view.aspx?src=https://edu.stacktrek.com/uploads/courses/2304/files/research.GRgPROnP.pptx';

            }
        },

    }

</script>

<style scoped>
    .bottom-content {

        padding-left: 30px;

    }

    .video-c {
        min-height: 470px;

    }

    .border {
        border-left: 1px solid #e0e0e0;
    }

</style>
