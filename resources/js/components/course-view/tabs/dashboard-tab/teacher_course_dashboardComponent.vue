<template>
    <div>
        <v-row class="pt-4">
            <v-col v-for="(item, index) in cardheaders" :key="index" cols="12" lg="3" md="6" sm="12" xs="12">
                <v-card>
                    <v-card-title class="pb-0 py-1 cardTitle">{{item.title}}</v-card-title>

                    <v-card-text class="pb-0">
                        <v-row align="center">
                            <v-col class="text-h3 primary--text" cols="6">
                                {{item.count}}
                            </v-col>
                            <v-col cols="6" class="text-right">
                                <v-icon class="text-h2" style="font-size:2 rem">{{item.icon}}</v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                </v-card>
            </v-col>

        </v-row>



        <v-row>
            <v-col>
              <recentClasswork :classwork_list="classwork_list"  />
            </v-col>
            <v-col>
             <latestModules :modules_list="modules_list"  />
            </v-col>
        </v-row>
    </div>

</template>

<style scoped>
    .cardTitle {
        font-size: 1.2rem
    }

</style>

<script>

    const recentClasswork = () => import('./recent_classwork');
    const latestModules = () => import('./latest_modules');


    export default {
        data() {
            return {
        
                classwork_list: [],
                course_sumarry: [],
                modules_list: [],
                cardheaders: [{
                        title: "Total Students",
                        icon: 'mdi-account-group',
                        count: 0,
                        routName: ''
                    },
                    {
                        title: "Total Classes",
                        icon: 'mdi-google-classroom',
                        count: 0,
                        routName: ''
                    },
                    {
                        title: "Total Classwork",
                        icon: 'mdi-book-open-variant',
                        count: 0,
                        routName: ''
                    },
                    {
                        title: "Total Modules",
                        icon: 'mdi-book-variant-multiple',
                        count: 0,
                        routName: ''
                    },

                ],
            
            


            }
        },
        components: {
            recentClasswork,
            latestModules
        },
        methods: {
         
            getGeneralClassworks() {
                //this.isGetting = true;
                axios.get(`/api/course/overview/all/${this.$route.params.id}`)
                    .then((res) => {
                        console.log(res.data);
                        this.classwork_list = res.data.classworks_list;
                        this.courseSummaryheader(res.data.course_summary);
                        this.modules_list = res.data.modules_list;

                    })
            },

            courseSummaryheader(course_summary) {

                this.cardheaders[0].count = course_summary.total_students;
                this.cardheaders[1].count = course_summary.total_classes;
                this.cardheaders[2].count = course_summary.total_classworks;
                this.cardheaders[3].count = course_summary.sub_modules_count;
            },
        },
        mounted() {
            this.getGeneralClassworks();
       
        }




    }

</script>
