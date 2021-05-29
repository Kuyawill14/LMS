<template>
    <div class="container">
        <Modal :based-on="showModal" title="My first modal" @close="closeModal()" >
            <!-- <createClassForm :class_name="form.class_name" :class_id="form.id" /> -->
            <createClassForm v-on:closeModal="closeModal()" />
        </Modal>


        <div class="row">
            <!-- Your Profile Views Chart -->
            <div class="col-lg-6 ">
                <h4>My Class</h4>


            </div>
            <div class="col-lg-6  text-right">

                <md-button class="md-raised md-primary rounded" @click="showModal=true">
                    <md-icon>add</md-icon> Create Class
                </md-button>
            </div>

        </div>

        <hr>
        <classList/>


    </div>
</template>


<script>
    const VueElementLoading = () => import("vue-element-loading")
    import createClassForm from './createClass';
    import classList from './teacher-classList'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            VueElementLoading,
            createClassForm,
            classList

        },
        data() {
            return {
                showModal: false,
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
            closeModal() {this.showModal = false},
            
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


        },
        computed: mapGetters(['allClass']),
     
    }

</script>

<style scoped>
    .row {
        align-items: center;
    }

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
