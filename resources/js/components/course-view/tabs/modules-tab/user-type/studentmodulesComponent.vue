<template>
    <div>
        <v-row>
            <v-col lg="8" sm="12" md="12" class="pa-1">
                <v-row>

                    <v-col>
                        <v-card>
                            <iframe title="office viewer" class="video-c" v-if="type=='Document' "
                                :src="iframeSrc + googledocsParams"
                                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                style="width: 100%;height: 100%"></iframe>


                            <LazyYoutube ref="youtubeLazyVideo" :src="subModuleData.link" v-if="type=='Link'"
                                style="width: 100% !important;height: 100%" aspect-ratio="16:9"
                                thumbnail-quality="standard" />


                            <div class="player-container">

                                <vue-core-video-player v-if="ext == 'mp4'  && type=='Video'"
                                    :src="'/storage/' + subModuleData.file_attachment"></vue-core-video-player>
                            </div>

                        </v-card>
                    </v-col>

                </v-row>

                <v-row  v-if="isSelectedModule">
                    <v-col>
                        <v-card>
                            <v-card-title>
                                {{subModuleData.sub_module_name}}
                            </v-card-title>

                            <v-card-text class="text--primary">
                                <div> {{subModuleData.description}}</div>

                                <a :href="'/storage/' + subModuleData.file_attachment" target="_blank">Download</a>

                            </v-card-text>

                        </v-card>
                    </v-col>


                </v-row>

                 <v-row align="center" justify="center" class="pt-10" v-if="!isSelectedModule">
                    <v-col cols="12" sm="8" md="6" class="text-center">
                        <v-icon style="font-size:14rem">
                            mdi-book-variant-multiple
                        </v-icon>

                        <h1> Select Module </h1>
                        <p> Selecting Module, you'll be able to view and download course content. </p>
                     
                    </v-col>
                  

                </v-row>


            </v-col>

            <v-col lg="4" sm="12" md="12" class="pa-0 border">
                <modulesListComponent v-on:subModule="getsubModuleData" />
            </v-col>

        </v-row>




    </div>


</template>

<script>
    import {
        LazyYoutube
    } from 'vue-lazytube'

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
            LazyYoutube,



        },
        data() {
            return {
                loading: false,
                subModuleData: null,
                googledocsParams: '?pid=explorer&efh=false&a=v&chrome=false&embedded=true',
                allowedExt: ['pdf', 'pptx', 'ppt', 'xls', 'xlsx', 'doc', 'docx'],
                type: '',
                ext: null,
                iframeSrc: null,
                isSelectedModule: false,
            }
        },
        methods: {
            getFileExt(filename) {
                if (this.subModuleData.file_attachment) {
                    var split = filename.split('.');
                    return split[split.length - 1];
                }


            },
            getsubModuleData(value) {
                this.isSelectedModule = true;
                this.subModuleData = value;
                this.ext = this.getFileExt(value.file_attachment);

                this.type = this.subModuleData.type;
                this.documentUrl(value.file_attachment)






            },
            documentUrl(file) {
                var origin_url = window.location.origin;
                var base_src = 'https://drive.google.com/viewerng/viewer?url=' + origin_url;
                this.iframeSrc = base_src + '/storage/' + file;

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

    .ipOhDr {
        max-width: 100%;
    }

</style>
