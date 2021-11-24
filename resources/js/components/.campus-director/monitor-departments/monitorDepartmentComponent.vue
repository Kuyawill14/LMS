<template>

    <div>
        <v-row>

            <v-col>
                Departments
            </v-col>

        </v-row>


        <v-row>
            <v-col lg="3" v-for="(department, index) in departments" :key="index">
                <v-card class="mx-auto" max-width="400"  >
                
                    <v-img id="department_logo" class="white--text align-end" height="200px" :src="department.logo"
                        contain link @click="$router.push({name: 'campus_director-monitor_deparments-id', params: {id: department.id}})">
                        <v-overlay absolute style="opacity: 0.26 !important;">
                            <!-- <v-card-title>{{department.name}}</v-card-title> -->
                        </v-overlay>
                    </v-img>


                    <v-tooltip bottom>

                        <template v-slot:activator="{ on, attrs }">
                            <v-card-subtitle class="pb-0" v-bind="attrs" v-on="on">
                                {{limitChar(department.name)}}
                            </v-card-subtitle>
                        </template>
                        <span>{{department.name}}</span>

                    </v-tooltip>

                    

                    
                    <v-card-text class="text--primary">
                        <div>Total Students: {{department.total_students}}</div>
                        <div>Total Instructors: {{department.total_teachers}}</div>

                    </v-card-text>


                </v-card>
            </v-col>


        </v-row>
    </div>



</template>

<script>
    export default {
        data() {
            return {
                departments: []
            }
        },

        methods: {
            limitChar(title) {
                if (title.length > 40) {
                    return title.substring(0, 40) + '...';
                } else {
                    return title;
                }
            },
            getDeparmentsData() {
                axios.get('/api/department/data/all')
                .then((res)=> {
                    if(res.status == 200) {
                        this.departments = res.data;
                    }
                })
            }
        },
        mounted() {
            this.getDeparmentsData();
        }
    }

</script>


<style scoped>
    #department_logo>div.v-image.v-responsive.white--text.align-end.theme--light>div.v-image__image.v-image__image--cover {
        background-size: contain !important;
    }

</style>
