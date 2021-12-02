<template>
    <div>


        <v-row v-if="isGetting"  >
            <v-col v-for="n in 4" :key="n" cols="12" md="3" >
                <v-card class="pa-4">
                     <v-skeleton-loader type="article"></v-skeleton-loader>
                </v-card>
            </v-col>
        </v-row>

        <v-row style="margin-top: 7rem" align="center" justify="center" class="pt-10"
            v-if="ClassList.length == 0 && !isGetting">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:7rem">
                    mdi-book-open-variant
                </v-icon>
                <h2> Empty Classes </h2>
            </v-col>
        </v-row>


        

        <v-row v-if="ClassList.length != 0 && !isGetting">
            <v-col v-for="(item, index) in ClassList" :key="index" cols="12" md="3">
                <v-card class="pa-4" outlined elevation="3" >
                
                    <v-list >
                        <v-list-item>
                             <v-list-item-content>
                                <v-list-item-title class="font-weight-bold">
                                    {{item.class_name}}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                          <v-list-item class="pt-0 mt-0">
                             <v-list-item-content>
                                <div class="text-body-2">
                                    <v-icon left>mdi-account-supervisor</v-icon>
                                    <span  class="font-weight-medium">Student: </span>
                                    {{item.student_count}}
                                </div>
                                <div class="text-body-2">
                                    <v-icon left>mdi-book-open-variant</v-icon>
                                     <span  class="font-weight-medium">Publish Classwork: </span>
                                     {{item.classwork_count}}
                                </div>
                                <div class="text-body-2">
                                    <v-icon left>mdi-calendar</v-icon>
                                    <span class="font-weight-medium">Date Created: </span>
                                    {{format_date(item.created_at)}}
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                 
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>
<script>
 import moment from 'moment/src/moment';
    import {
        mapGetters
    } from "vuex";
    export default {

        props: ['course_details'],
        data() {
            return {
                ClassList: [],
                isGetting: true,
                teacher_id: '',
            }
        },
        computed: mapGetters(["get_UserRole"]),
        methods: {
            format_date(value) {
                if (value) {
                    return moment(String(value)).format('MMMM Do YYYY, hh:mm A')
                }
            },
            async getClasslist() {
                axios.get('/api/admin/teachers/classes/' + this.course_details.course_id + '/' + this.teacher_id)
                    .then(res => {
                        this.ClassList = res.data;
                        setTimeout(() => (this.isGetting = false), 700);
                    })
            },

        },
        mounted() {
            this.teacher_id = this.get_UserRole == "ProgramChair" ? this.$route.params.id : this.$route.query.id
            // console.log(this.$route)

            this.getClasslist();
        },


    }

</script>
