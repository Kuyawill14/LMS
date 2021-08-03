<template>
    <div>
        <v-row>
            <v-col :lg="isExpand == true ? 12 : 8" sm="12" md="12" cols="12" class="pa-0">
                <v-row>

                    <v-col>
                        <v-container fluid class="pa-0" @mouseover="contentHover=true"
                            @mouseleave="contentHover = false">
                            <v-btn bottom color="secondary" dark right class="exitFullscreen"
                                v-if="isExpand && contentHover" @click="isExpand =false ">
                                <v-icon>mdi-arrow-left</v-icon>
                            </v-btn>

                            <!-- <iframe title="office viewer" class="video-c" v-if="type=='Document' "
                                :src="iframeSrc + googledocsParams"
                                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                style="width: 100%;height: 100%"></iframe>
 -->

                            <LazyYoutube ref="youtubeLazyVideo" :src="subModuleData.link" v-if="type=='Link'"
                                style="width: 100% !important;height: 100%" aspect-ratio="16:9"
                                thumbnail-quality="standard" />


                            <div class="player-container">

                                <vue-core-video-player v-if="ext == 'mp4'  && type=='Video'"
                                    :src="'/storage/' + subModuleData.file_attachment"></vue-core-video-player>
                            </div>

                            <!-- <v-dialog v-model="pdfdialog" v-if="type=='Document' " fullscreen hide-overlay transition="dialog-bottom-transition"> -->
                            <pdfviewer :key="subModuleData.sub_module_name + 1"
                                v-if="type=='Document'  && isSelectedModule " :title="subModuleData.sub_module_name"
                                :pdf_file="'/storage/' + subModuleData.file_attachment"
                                v-on:closePdf="pdfdialog = false" />
                            <!-- </v-dialog> -->
                        </v-container>



                    </v-col>

                </v-row>

                <v-row v-if="isSelectedModule" class="px-5 pt-0">
                    <v-col>

                        <v-tabs color="primary" center>
                            <v-tab href="#overview">
                                Overview
                            </v-tab>
                            <v-tab href="#description">
                                Description
                            </v-tab>

                            <v-tab-item id="overview">
                                <v-card-title>
                                    <h2> {{getMainModulebyId(subModuleData.main_module_id).module_name}} -
                                        {{subModuleData.sub_module_name}} </h2>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text class="text--primary">
                                    <div v-html="getMainModulebyId(subModuleData.main_module_id).description"></div>

                                </v-card-text>
                            </v-tab-item>


                            <v-tab-item id="description">
                           
                                <v-card-text class="text--primary">
                                    <div v-html="subModuleData.description"></div>

                                    <a :href="'/storage/' + subModuleData.file_attachment" target="_blank">Download</a>

                                </v-card-text>
                            </v-tab-item>


                        </v-tabs>

                        

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

            <v-col lg="4" cols="12" sm="12" md="12" class="pa-0 border"
                v-if="isExpand == false && isChangeSize == false">
                <modulesListComponent v-on:subModule="getsubModuleData" :role="role" v-on:listClose="expandContent" :expand="removeX"
                    style="height:100vh;" />
            </v-col>

            <v-dialog v-model="listDialaog" max-width="600px" class="list_modal">
                <modulesListComponent v-on:subModule="getsubModuleData" v-on:listClose="expandContent"
                    :expand="!removeX" v-if="listDialaog" />
            </v-dialog>
        </v-row>

        <v-btn bottom color="primary" dark fab fixed right v-if="isExpand || isChangeSize" @click="listDialaog = true"
            style="z-index:999">
            <v-icon>mdi-menu</v-icon>
        </v-btn>


    </div>


</template>

<script>
    import VuePdfApp from "vue-pdf-app";
    // import this to use default icons for buttons
    import "vue-pdf-app/dist/icons/main.css";
    import pdfviewer from "./pdfview"
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
            VuePdfApp,
            pdfviewer


        },
        computed: {
            ...mapGetters(["getmain_module"])
        },
        data() {
            return {
                pdfdialog: false,
                config: {
                    toolbar: {
                        toolbarViewerLeft: {
                            findbar: false
                        }
                    }
                },
                contentHover: false,
                removeX: true,
                listDialaog: false,
                loading: false,
                subModuleData: null,
                googledocsParams: '?pid=explorer&efh=false&a=v&chrome=false&embedded=true',
                allowedExt: ['pdf', 'pptx', 'ppt', 'xls', 'xlsx', 'doc', 'docx'],
                type: '',
                ext: null,
                iframeSrc: null,
                isSelectedModule: false,
                isExpand: false,
                isChangeSize: false,
                screenWidth: window.innerWidth
            }
        },
        methods: {
            getMainModulebyId(id) {
                for (var i = 0; this.getmain_module.length; i++) {
                    if (this.getmain_module[i].id == id) {
                        return this.getmain_module[i];
                    }
                }

            },

            expandContent() {
                this.isExpand = !this.isExpand;

            },
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
                this.pdfdialog = true;





            },
            documentUrl(file) {
                var origin_url = window.location.origin;
                var base_src = 'https://drive.google.com/viewerng/viewer?url=' + origin_url;
                this.iframeSrc = base_src + '/storage/' + file;

            }
        },
        created() {
            if (this.subModuleData) {
                this.loading = true;
            }
            setInterval(() => {
                if (window.innerWidth < 1264) {
                    this.isChangeSize = true;
                } else {
                    this.isChangeSize = false;
                }

            }, 1000)
        },

    }

</script>

<style scoped>
    .exitFullscreen {
        position: absolute;
        border-radius: 0;
        right: 0;
        top: 70px;
        z-index: 99;
    }

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

<style>
    .v-dialog--active {
        overflow: hidden;
    }

</style>
