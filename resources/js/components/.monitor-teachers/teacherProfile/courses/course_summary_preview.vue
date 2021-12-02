<template>

    <v-card elevation="0">
       <!--  <v-toolbar flat dark color="primary">
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
            </v-container> -->
            <v-container fluid>
                <v-row align="center" justify="center" no-gutters>
                    <v-col cols="12" class="mb-3">
                        <v-card class="pa-2">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <h2>
                                                  {{course_details.course_name}}
                                            </h2>
                                          
                                        </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn @click="$emit('closeDialog')" text rounded><v-icon left>mdi-close</v-icon> close</v-btn>
                                    </v-list-item-action>
                                    
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    
                    <v-col cols="12">
                        <v-row>
                         <!--    <v-col cols="3">
                                <classes :course_details="course_details" ></classes>
                            </v-col> -->

                             <v-col cols="12">
                                 <v-card class="pa-2" elevation="2" outlined>
                                     <v-row>
                                         <v-col cols="12">
                                             <v-tabs show-arrows class="pa-0 ma-0" background-color="transparent" grow v-model="tab" >
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
                                         </v-col>
                                     </v-row>
                                 </v-card>
                            </v-col>
                            <v-col cols="12" class="mt-0 pt-0">

                                    <v-tabs-items v-model="tab">
                                    <v-tab-item >
                                        <v-card flat>
                                            <div v-if="tab == 0" class="pa-1">
                                                <classes   :course_details="course_details" ></classes>
                                            </div>
                                        </v-card>
                                    </v-tab-item>

                                    <v-tab-item >
                                        <v-card  flat>
                                            <div v-if="tab == 1"  class="pa-1">
                                                <student  :course_details="course_details"></student>
                                            </div>
                                        </v-card>
                                    </v-tab-item>

                                    <v-tab-item >
                                        <v-card flat>
                                            <div v-if="tab == 2" class="pa-1">
                                                <classwork   :course_details="course_details"></classwork>
                                            </div>
                                        </v-card>
                                    </v-tab-item>

                                    <v-tab-item  class="pa-1" >
                                        <div v-if="tab == 3"  class="pa-1">
                                            <modules  :course_details="course_details" ></modules>
                                        </div>
                                    </v-tab-item>
                                </v-tabs-items>
                                     
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>



    </v-card>
</template>

<script>
    const modules = () => import('./summary_content/modules')
    const classes = () => import('./summary_content/classes')
    const student = () => import('./summary_content/student')
    const classwork = () => import('./summary_content/classwork')
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
                tab: "",
                }
            },
       
    }

</script>
