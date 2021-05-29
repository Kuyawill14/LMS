<template>
    <div class="container">


        <!-- Modal -->
        <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="">Class</h5>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <input type="text" class="form-control" v-model="form.id" hidden placeholder="BSIT 4-2">
                            <div class="form-group">
                                <label for="className">Class Name</label>
                                <input type="text" class="form-control" v-model="form.class_name"
                                    placeholder="BSIT 4-2">
                            </div>



                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary"
                            @click="modalType == 'add' ? createClass() : updateClass()">{{modalType == 'add' ? 'Save' : 'Update'}}</button>

                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <!-- Your Profile Views Chart -->
            <div class="col-lg-12 m-b30">

                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary float-right mt-2" data-toggle="modal" data-target="#modal"
                    @click="openAddmodal">
                    Create Class
                </button>

            </div>
            <div class="wc-title">
                <h4>My Class</h4>

            </div>
            <div class="widget-inner">
                <vue-element-loading :active="isloading" spinner="bar-fade-scale" />
                <div class="list-group" v-if="!isloading">
                    <div class="list-group-item list-group-item-action " v-for="(item, i) in allClass" :key="'class'+i">
                        <div class="row">
                            <div class="col-lg-1 col-3 pr-0"> <span class="material-icons clas_icon pr-3">class</span>
                            </div>
                            <div class="col-6 pl-0 pb-0">
                                <a href="#">
                                    <h4 class="mb-0"> {{item.class_name}} </h4>
                                </a>
                                <strong>Class code: </strong> {{item.class_code}} <br>
                                {number of students}
                            </div>
                            <div class="col">
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle text-white" type="button"
                                        id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false"
                                        style="position:absolute;right:0;    background: transparent">
                                        <i class="fa fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1"
                                        x-placement="bottom-end"
                                        style="position: absolute; transform: translate3d(144px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item pointer" data-toggle="modal" data-target="#modal"
                                            @click="openEditmodal(item.class_name,item.class_id)">Edit</a>
                                        <a class="dropdown-item pointer">Archive</a>
                                        <a class="dropdown-item pointer">Unenroll</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>




            </div>
        </div>

    </div>
</template>


<script>
    const VueElementLoading = () => import("vue-element-loading")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            VueElementLoading,
        },
        data() {
            return {
                isloading: true,
                modalType: '',
                class_code: null,
                form: {
                    id: '',
                    class_name: '',
                    course_id: null,
                }
            }
        },

        methods: {
            ...mapActions(['fetchSubjectCourseClassList']),
            openAddmodal() {
                this.form.class_name = "";
                this.modalType = "add";

                //console.log(this.modalType);
            },
            openEditmodal(class_name, class_id) {
                this.modalType = "update";
                this.form.id = class_id;
                this.form.class_name = class_name;
                console.log(this.form);

            },
            updateClass() {
                if (this.form.class_name != "") {
                    this.isloading = true;
                    this.form.course_id = this.$route.params.id;
                    this.$store.dispatch('updateClass', this.form);
                    this.fetchSubjectCourseClassList(this.$route.params.id);
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
            createClass() {
                if (this.form.class_name != "") {
                    this.isloading = true;
                    this.form.course_id = this.$route.params.id;
                    console.log(this.form);
                    this.$store.dispatch('createClass', this.form);
                    this.fetchSubjectCourseClassList(this.$route.params.id);
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
        computed: mapGetters(['allClass']),
        created() {
            this.isloading = true;
            this.fetchSubjectCourseClassList(this.$route.params.id);
            setTimeout(() => this.isloading = false, 1000);

        }
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

    #gedf-drop1:hover {
        color: #EFBB20 !important;
    }

    #gedf-drop1 {
        color: #000;
    }

    .clas_icon {
        font-size: 80px;
    }

</style>
