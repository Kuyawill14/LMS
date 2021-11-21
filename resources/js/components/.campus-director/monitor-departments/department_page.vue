<template>

    <div>
        <v-row class="mt-4">





            <v-col cols="12" md="3" class="py-0">
                <v-card v-if="department.length == 0">
                    <v-skeleton-loader class="py-4" id="loader-avatar" type="avatar"></v-skeleton-loader>
                  
                    <v-skeleton-loader type="text" style="margin: auto;width:50%"></v-skeleton-loader>
                    <v-skeleton-loader type="text" style="margin: auto;width:30%"></v-skeleton-loader>
                </v-card>

                <v-card elevation="1" outlined class="py-4" v-if="department.length != 0">
                    <v-row>

                        <v-col cols="12" class="mb-0 d-flex justify-center">
                            <v-avatar style="height: 150px;min-width: 150px;width: 150px;">
                                <img :src="department.logo">
                            </v-avatar>
                        </v-col>
                        <v-col cols="12" class=" d-flex justify-center pt-0">
                            <h4 class="font-weight-bold text-center">{{department.name}}
                                <br>
                                ({{department.short_name}})
                            </h4>

                        </v-col>
                        <br>
                    </v-row>

                </v-card>



            </v-col>

            <v-col cols="12" lg="9">
                <!-- <v-card elevation="1" outlined class="pt-5"> -->

                <router-view></router-view>



            </v-col>


        </v-row>



    </div>



</template>

<script>
    export default {
        data() {
            return {
                summarryLoading: true,
                department: [],
            }
        },
        computed: {




        },

        methods: {

            getDeparmentsData() {
                axios.get('/api/department/data/' + this.$route.params.id)
                    .then((res) => {
                        if (res.status == 200) {
                            this.department = res.data;
                        }
                    })
            },

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

<style>
  #loader-avatar > div {
        height: 150px !important;
        margin: auto !important;;
        width: 150px !important;;
    }

</style>