<template>
    <div>
        <v-dialog v-model="dialog" width="800px">
            <v-card>
                <v-card-title class="grey darken-2">
                    Create contact
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col class="align-center justify-space-between" cols="12">
                            <v-row align="center" class="mr-0">
                                <v-avatar size="40px" class="mx-3">
                                    <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt="">
                                </v-avatar>
                                <v-text-field placeholder="Name"></v-text-field>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field prepend-icon="mdi-account-card-details-outline" placeholder="Company">
                            </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field placeholder="Job title"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field prepend-icon="mdi-mail" placeholder="Email"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field type="tel" prepend-icon="mdi-phone" placeholder="(000) 000 - 0000">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field prepend-icon="mdi-text" placeholder="Notes"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-btn text color="primary">More</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
                    <v-btn text @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h2>My Courses</h2>
                </div>
                <div class="col text-right">
                    <v-btn bottom color="primary" dark fab fixed right @click="dialog = !dialog">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-3" v-for="(item, i) in allCourse" :key="'course'+i">
                    <div class="card-expansion">
                        <v-card class="mx-auto" max-width="344">
                            <v-img :src="'../images/'+item.course_picture" height="200px"></v-img>

                            <v-card-title>
                                <router-link :to="{name: 'coursePage', params: {id: item.id}}">
                                    {{item.course_code + ' - ' + item.course_name}}
                                </router-link>
                            </v-card-title>

                            <v-card-subtitle>
                                {students}
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn text>Share</v-btn>

                                <v-btn color="purple" text>
                                    Explore
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn icon @click="show = !show">
                                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text>
                                        I'm a thing. But, like most politicians, he promised more than he could deliver.
                                        You
                                        won't have time for sleeping, soldier, not with all the bed making you'll be
                                        doing.
                                        Then we'll go with that data file! Hey, you add a one and two zeros to that or
                                        we
                                        walk! You're going to do his laundry? I've got to find a way to escape.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>

                    </div>

                </div>
            </div>
        </div>



    </div>


</template>



<script>
    // const VueElementLoading = () => import("vue-element-loading")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            //    VueElementLoading,
        },
        data() {
            return {
                dialog: false,
                isloading: true,
                modalType: '',
                isPageLoading: false,
                class_code: null,
                form: {
                    id: '',
                    course_name: '',
                    course_id: '',
                    class_description: '',
                    course_picture: '',
                    course_code: '',
                }
            }
        },

        methods: {
            ...mapActions(['fetchCourseList']),
            openAddmodal() {
                this.form.course_name = "";
                this.form.course_code = "";
                this.modalType = "add";
            },
            openEditmodal(course_id) {
                this.modalType = "update";
                var selectedCourse = this.allCourse.find(x => x.id === course_id);
                this.form.id = course_id;
                this.form.course_name = selectedCourse.course_name;
                this.form.course_code = selectedCourse.course_code;
                this.form.course_id = selectedCourse.course_id;
            },
            updateCourse() {
                if (this.form.course_name != "" && this.form.course_id != "") {
                    this.isloading = true;
                    this.$store.dispatch('updateCourse', this.form);
                    this.fetchCourseList();
                    setTimeout(() => this.isloading = false, 1000);
                    $('.modal').modal('hide');
                    Toast.fire({
                        icon: "success",
                        title: "Your class has been updated",
                        timer: 2000
                    });
                } else {
                    Toast.fire({
                        icon: "info",
                        title: "Please fill up the field",
                        timer: 1500
                    });
                }
            },
            createCourse() {
                if (this.form.course_name != "" && this.form.course_code != "") {
                    this.isloading = true;
                    this.$store.dispatch('createCourse', this.form);
                    this.fetchCourseList();
                    setTimeout(() => this.isloading = false, 1000);
                    $('.modal').modal('hide');
                    Toast.fire({
                        icon: "success",
                        title: "Your class has been Added",
                        timer: 2000
                    });

                } else {
                    Toast.fire({
                        icon: "info",
                        title: "Please fill up the field",
                        timer: 1500
                    });
                }
            }

        },
        computed: mapGetters(['allCourse']),
        created() {
            this.isloading = true;
            this.fetchCourseList();
            setTimeout(() => this.isloading = false, 1000);


        },
        mounted() {
            setTimeout(() => {
                this.isPageLoading = true
            }, 1000);
        },
    }

</script>

<style scoped>
    .card-group-row__col .fullbleed {
        transition: all ease-in-out 0.4s !important;
    }

    .card-group-row__col:hover .fullbleed {
        opacity: 0.4 !important;
        transition: all ease-in-out 0.4s;
    }

    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

</style>
