<template>

    <draggable v-model="lectureList" style="width: 100%" @change="changeLec" ghost-class="ghost">
        <v-list-item v-for="(itemSubModule, i) in lectureList" :key="'Submodule'+i" link class="pl-8">
            <v-list-item-avatar>
                <v-icon class="grey lighten-1" dark>
                    mdi-folder
                </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title> {{itemSubModule.sub_module_name}}</v-list-item-title>

                <v-list-item-subtitle> {{itemSubModule.type}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
                <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>
    </draggable>

</template>

<script>
    import draggable from "vuedraggable";
    import newLectureForm from './Forms/NewLectureForm'
    import newClassworkForm from './Forms/NewClassworkForm'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    import axios from 'axios';
    export default {
        props: ['role', 'itemSubModules'],
        components: {
            draggable
        },
        data() {
            return {
                lectureList: null,
                isDrag: false,

            }
        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"])
        },
        methods: {
           
            changeLec() {
         
               console.log(this.lectureList)
                // axios.post(`/api/main_module/arrange`, {
                //         lectureList: this.lectureList
                //     })
                //     .then((res) => {
                //         //  this.isDrag = false;
                //     })
            },
            getdata() {
            this.lectureList = this.itemSubModules;
            },


            lectureBtn(module_id) {
                this.lectureDialog = !this.lectureDialog;
                this.mainModule_id = module_id;

            },

          

        },
         mounted() {
          
this. getdata();



        },
       
    }

</script>

<style>
    .pannel-btn {
        position: absolute;
        top: 15px;
        right: 47px;
        z-index: 100;
    }

    .v-expansion-panel-content__wrap {
        padding: 0 !important;
    }

    .ghost {
        color: red;
        background: red;
        ;
    }

</style>
