<template>
    <div class="container">
        <md-empty-state md-icon="devices_other" md-label="Create your first class" v-if="allClass.length ==12"
            md-description="Creating class, you'll be able to upload your design and collaborate with people.">
            <md-button class="md-primary md-raised" @click="openAddmodal()">Create first class</md-button>
        </md-empty-state>



        <Modal :based-on="showModal" title="Class" @close="closeModal()">
            <!-- <createClassForm :class_name="form.class_name" :class_id="form.id" /> -->
            <createClassForm v-on:closeModal="closeModal()" v-if="modalType == 'add'" />
            <editClassForm v-on:closeModal="closeModal()" :class_name="form.class_name" :class_id="form.class_id"
                v-if="modalType == 'edit'" />
        </Modal>


        <div class="row">
            <!-- Your Profile Views Chart -->
            <div class="col-lg-6 ">
                <h4>My Class</h4>


            </div>
            <div class="col-lg-6  text-right">
                <v-btn color="rounded primary" @click="openAddmodal()">
                    Create Class
                </v-btn>

            </div>

        </div>

        <hr>
        <v-card>
            <v-list three-line class="p-0">


                <v-list-item v-for="(item, index) in allClass" :key="index" class="border-bottom">
                    <v-list-item-icon class="pr-0">
                        <v-icon style="font-size: 4rem;">mdi-book-variant</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.class_name"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.class_code"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-list-item-action v-bind="attrs" v-on="on">
                                <v-icon color="grey lighten-1">mdi-dots-vertical</v-icon>
                            </v-list-item-action>
                        </template>
                        <v-list class="p-0">
                            <v-list-item-title class="p-2 pointer dp-menu">Archive </v-list-item-title>
                            <v-list-item-title class="p-2 pointer dp-menu" @click="openEditmodal(item.class_name, item.class_id)">Edit</v-list-item-title>
                            <v-list-item-title class="p-2 pointer dp-menu">Remove </v-list-item-title>
                        </v-list>
                    </v-menu>
                </v-list-item>



            </v-list>

        </v-card>


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
        data: () => ({
            items: [{
                    icon: 'mdi-inbox',
                    text: 'Inbox',
                },
                {
                    icon: 'mdi-star',
                    text: 'Star',
                },
                {
                    icon: 'mdi-send',
                    text: 'Send',
                },
                {
                    icon: 'mdi-email-open',
                    text: 'Drafts',
                },
            ],
            model: 1,

            showModal: false,
            isloading: true,
            modalType: '',
            class_code: null,
            form: {
                id: '',
                class_name: '',
                course_id: null,
            }
        }),


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
    .dp-menu:hover {
        background: #F6F6F6;
    }

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
