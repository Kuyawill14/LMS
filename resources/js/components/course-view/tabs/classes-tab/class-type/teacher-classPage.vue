<template>
    <div >
        <md-empty-state md-icon="devices_other" md-label="Create your first class" v-if="allClass.length ==0"
            md-description="Creating class, you'll be able to upload your design and collaborate with people.">
            <md-button class="md-primary md-raised" @click="openAddmodal()">Create first class</md-button>
        </md-empty-state>



        <Modal :based-on="showModal" title="Class" @close="closeModal()">
            <!-- <createClassForm :class_name="form.class_name" :class_id="form.id" /> -->
            <createClassForm v-on:closeModal="closeModal()" v-if="modalType == 'add'" />
            <editClassForm v-on:closeModal="closeModal()" :class_name="form.class_name" :class_id="form.class_id"
                v-if="modalType == 'edit'" />
        </Modal>
        <v-row>
            <v-col>
                <h2>My Class</h2>
            </v-col>

            <v-col class="text-right">
                <v-btn color="rounded primary" @click="openAddmodal()">
                    Create Class
                </v-btn>
            </v-col>
        </v-row>

    

        <v-card v-for="(item, index) in allClass" :key="index" class="mt-3">
            <v-list-item>
                <v-list-item-avatar>
                    <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{item.class_name}} </v-list-item-title>
                    <v-list-item-subtitle>Class code: {{item.class_code}} </v-list-item-subtitle>
                    <v-list-item-subtitle>{Students #} </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-menu transition="slide-y-transition" bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon color="secondary " v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
                        </template>
                        <v-list>
                            <v-list-item link>
                                <v-list-item-title>Archive</v-list-item-title>

                            </v-list-item>
                            <v-list-item link @click="openEditmodal(item.class_name, item.class_id)">
                                <v-list-item-title>Edit</v-list-item-title>

                            </v-list-item>
                            <v-list-item link>
                                <v-list-item-title>Remove</v-list-item-title>

                            </v-list-item>
                        </v-list>
                    </v-menu>


                </v-list-item-action>
            </v-list-item>
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
