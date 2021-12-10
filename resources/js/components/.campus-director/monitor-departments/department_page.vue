<template>

    <div>
        <v-row class="mt-4">

            <v-col cols="12" lg="3" md="3" sm="12" xs="12" class="py-0">
                <v-row>
                    <v-col>
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

                </v-row>

                <v-row>
                    <v-col v-for="(item, index) in cardheaders" :key="index" cols="12" lg="6" md="6" sm="6" xs="6">

                        <v-card>
                            <v-skeleton-loader v-if="summarryLoading" :loading="summarryLoading"
                                type="list-item-avatar-two-line"></v-skeleton-loader>
                            <v-row class="pa-3" v-if="!summarryLoading">

                                <v-col>
                                    <v-row>
                                        <v-col class="py-0 text-center">
                                            <span class="cardTitle">{{item.title}}</span>
                                        </v-col>

                                    </v-row>
                                    <v-row>
                                        <v-col class="text-h3 py-0 primary--text text-center">{{item.count}}</v-col>
                                    </v-row>

                                </v-col>

                            </v-row>

                        </v-card>
                    </v-col>

                </v-row>

            </v-col>

            <v-col cols="12" lg="9" md="9" :class="windowSize == 'Small' ? 'pt-6' : 'pt-0'">
                <!-- <v-card elevation="1" outlined class="pt-5"> -->
      <!-- {{$route.name}} -->
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
                summarryLoading: true,
                cardheaders: [{
                        title: 'Total Teacher',
                        count: 0,
                        icon: ''
                    },
                    {
                        title: 'Total student',
                        count: 0,
                        icon: ''
                    },

                ],
                windowSize: '',
                sizeTimer: false,
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
                            this.cardheaders[0].count = this.department.total_teachers;
                            this.cardheaders[1].count = this.department.total_students;
                            this.summarryLoading = false;
                        }
                    })
            },
            checkWindowsSize() {
                if (window.innerWidth < 960) {
                    this.windowSize = 'Small';
                } else {
                    this.windowSize = '';
                }
                // console.log(this.windowSize);
            }

        },
        mounted() {
            this.getDeparmentsData();

           this.sizeTimer = setInterval(() => {
                window.addEventListener(
                    'resize',
                    this.checkWindowsSize()
                );
            }, 1000)



        },
        beforeDestroy() {
             clearInterval( this.sizeTimer);
        },

    }

</script>


<style scoped>
    #department_logo>div.v-image.v-responsive.white--text.align-end.theme--light>div.v-image__image.v-image__image--cover {
        background-size: contain !important;
    }

</style>

<style>
    #loader-avatar>div {
        height: 150px !important;
        margin: auto !important;
        ;
        width: 150px !important;
        ;
    }

</style>
