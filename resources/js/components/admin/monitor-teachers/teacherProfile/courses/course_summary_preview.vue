<template>

    <v-card>
        <v-toolbar flat dark color="primary">
            <v-btn icon dark @click="$emit('closeDialog')">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        <v-toolbar-title>{{course_details.course_name}}</v-toolbar-title>

         <template v-slot:extension>
        <v-tabs class="pa-0 ma-0" background-color="transparent" grow v-model="tab" >
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab>
            <v-icon left>mdi-google-classroom</v-icon> Classes 
          </v-tab>
            <v-tab>
            <v-icon left>mdi-account-group-outline</v-icon> Student 
          </v-tab>

          <v-tab>
            <v-icon left>mdi-book-open-variant</v-icon> Classwork 
          </v-tab>
          

           <v-tab >
            <v-icon left>mdi-folder</v-icon>Modules 
          </v-tab>
        </v-tabs>
      </template>
        </v-toolbar>
        
            <vue-element-loading :active="isDrag" spinner="bar-fade-scale" color="#FF6700" />

    <v-container fluid>
            <v-tabs-items v-model="tab">
                <v-tab-item >
                    <v-card color="basil" flat>
                        <div class="pa-1">
                           <classes :course_details="course_details" ></classes>
                        </div>
                    </v-card>
                </v-tab-item>

                 <v-tab-item >
                    <v-card color="basil" flat>
                        <div class="pa-1">
                          <student :course_details="course_details"></student>
                        </div>
                    </v-card>
                </v-tab-item>

                 <v-tab-item >
                    <v-card color="basil" flat>
                        <div class="pa-1">
                         <classwork :course_details="course_details"></classwork>
                        </div>
                    </v-card>
                </v-tab-item>

                <v-tab-item class="pa-1" >
                    <div class="pl-1 pr-1">
                         <modules :course_details="course_details" ></modules>
                    </div>
                </v-tab-item>
            </v-tabs-items>
    </v-container>
    </v-card>
</template>

<script>
    const modules = () => import('./summary_content/modules')
    const classes = () => import('./summary_content/classes')
    const student = () => import('./summary_content/student')
    const classwork = () => import('./summary_content/classwork')
    import draggable from "vuedraggable";
    import {
        mapGetters,
        mapActions
    } from "vuex";

    export default {
        props: ['course_details'],
        components: {
            modules,
            classes,
            student,
            classwork
        },
        data() {
            return {
                    moduleName: '',
                    isEdit: false,
                    itemType: '',
                    isDrag: false,
                    itemDialog: false,
                    temp_id: null,
                    showLecture: false,
                    addLink: false,
                    showClasswork: false,
                    subModuleForm: {},
                    mainModule_id: '',
                    mainModule: [],
                    propModule: [],
                    studentSubModuleProgress: [],
                    studentSubModuleProgressForm: {},
                    tab: null,
                    }
                },
        computed: {
           
          

        },
        methods: {
           
            
        },
        async mounted() {
       
         
        },
       
    }

</script>
<style scoped>

</style>
<style>
    .flip-list-move {
        transition: transform 0.5s !important;
    }

    .no-move {
        transition: transform 0s !important;
    }

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
        border-left: 10px solid #FF5400 !important;
        ;
    }

</style>
