<template>
    <div class="container">
        <md-empty-state md-icon="devices_other" md-label="Create your first class" v-if="allClass.length ==0"
            md-description="Creating class, you'll be able to upload your design and collaborate with people.">
            <md-button class="md-primary md-raised" @click="openAddmodal()">Create first class</md-button>
        </md-empty-state>



        <Modal :based-on="showModal" title="Class" @close="closeModal()" >
            <!-- <createClassForm :class_name="form.class_name" :class_id="form.id" /> -->
            <createClassForm v-on:closeModal="closeModal()" v-if="modalType == 'add'" />
            <editClassForm v-on:closeModal="closeModal()" :class_name="form.class_name" :class_id="form.class_id"
                v-if="modalType == 'edit'" />
        </Modal>


        <div class="row" v-if="allClass.length !=0">
            <!-- Your Profile Views Chart -->
            <div class="col-lg-6 ">
                <h4>My Class</h4>


            </div>
            <div class="col-lg-6  text-right">
                <md-button class="md-raised md-primary rounded" @click="openAddmodal()">
                    <md-icon>add</md-icon> Create Class
                </md-button>
            </div>

        </div>

        <hr>
        <md-list class="md-triple-line" v-for="(item, i) in allClass" :key="'class'+i">
            <md-list-item>
                <md-icon style="font-size: 4rem !important;">class</md-icon>

                <div class="md-list-item-text">
                    <span>{{item.class_name}}</span>
                    <span> <strong>Class code: </strong> {{item.class_code}}</span>
                    <p>{Students Count}</p>
                </div>

                <md-menu md-direction="bottom-start">
                    <md-button md-menu-trigger class="md-icon-button md-list-action">
                        <md-icon>more_vert</md-icon>
                    </md-button>
                    <md-menu-content>
                        <md-menu-item class="pointer  menu-hover">
                            Archive</md-menu-item>
                        <md-menu-item class="pointer menu-hover" @click="openEditmodal(item.class_name,item.class_id)">
                            Edit</md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-list-item>
            <md-divider class="md-inset"></md-divider>
        </md-list>


    </div>
</template>


<script>
    const VueElementLoading = () => import("vue-element-loading")
    import createClassForm from './createClass';

    import editClassForm from './editClass'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            VueElementLoading,
            createClassForm,
            editClassForm

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
            closeModal() {
                this.showModal = false
            },

            openAddmodal() {
                this.form.class_name = "";
                this.modalType = "add";
                this.showModal = true;

                console.log(this.modalType);
            },
            openEditmodal(class_name, class_id) {
                this.showModal = true;
                this.modalType = "edit";
                this.form.class_id = class_id;
                this.form.class_name = class_name;
                console.log(this.modalType);

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
