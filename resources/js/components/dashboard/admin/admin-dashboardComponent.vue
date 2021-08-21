<template>
    <div>

        <v-row>

            <v-col lg="6" class="pt-0">
                <v-card>
                    <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                       {{getTeachers.length}}
                    </div>
                    <div class="text-center">
                        Total Teachers
                    </div>
                </v-card>
            </v-col>


            <v-col lg="6" class="pt-0">
                <v-card>
                    <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                        0
                    </div>
                    <div class="text-center">
                        Total Students
                    </div>
                </v-card>
            </v-col>




        </v-row>

    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";


    import axios from 'axios';


    export default {
        props: ['role'],
        components: {


        },
        provide: {

        },

        data() {
            return {
                class_count: 0,
                unfinishCount: 0,


            };
        },
         computed: {
            ...mapGetters(["getTeachers"])
        },
            mounted() {

            this.$store.dispatch('fetchAllTeachers');



        }

    };

</script>

<style scoped>
    .chart {
        height: 400px;
    }

</style>
