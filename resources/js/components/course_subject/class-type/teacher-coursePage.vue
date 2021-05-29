<template>
    <div>
        <md-empty-state md-icon="devices_other" md-label="Create your first project"
            md-description="Creating project, you'll be able to upload your design and collaborate with people."
            v-if="allCourse.length == 0 ">
            <md-button class="md-fab md-primary">Create first Course</md-button>
        </md-empty-state>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h2>My Courses</h2>
                </div>
                <div class="col text-right">
                    <md-button class="md-raised md-primary rounded">
                        <md-icon>add</md-icon> Create Course
                    </md-button>

                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="card-expansion">
                        <md-card v-for="(item, i) in allCourse" :key="'course'+i">
                            <md-card-media>
                                <img :src="'../images/'+item.course_picture" alt="People">
                            </md-card-media>

                            <md-card-header>
                                <router-link :to="{name: 'coursePage', params: {id: item.id}}" class="card-title">
                                    <div class="md-title"> {{item.course_code + ' - ' + item.course_name}}</div>
                                </router-link>

                                <div class="md-subhead">{Class Count}</div>
                            </md-card-header>

                            <md-card-expand>
                                <md-card-actions md-alignment="space-between">
                                    <div>
                                        <md-button>Edit</md-button>
                                        <md-button>Remove</md-button>
                                    </div>

                                    <md-card-expand-trigger>
                                        <md-button class="md-icon-button">
                                            <md-icon>keyboard_arrow_down</md-icon>
                                        </md-button>
                                    </md-card-expand-trigger>
                                </md-card-actions>

                                <md-card-expand-content>
                                    <md-card-content>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea,
                                        nostrum odio.
                                        Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate
                                        pariatur in
                                        deleniti minus sint. Excepturi.
                                    </md-card-content>
                                </md-card-expand-content>
                            </md-card-expand>
                        </md-card>

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
