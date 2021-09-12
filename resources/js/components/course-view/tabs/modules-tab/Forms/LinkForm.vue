<template>


    <v-card>
        <vue-element-loading :active="isAdding" spinner="bar-fade-scale" />
        <form class="" @submit.prevent="addLecture">
            <v-card-title>
                <span class="headline">Add Link</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12  py-0 my-0">
                            <v-text-field label="Title" outlined required v-model="linkForm.sub_module_name">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12  py-0 my-0">
                        
                            <v-text-field label="Link" type="url" outlined required v-model="linkForm.link">
                            </v-text-field>
                            <div style="margin-top: -25px;position: relative;z-index: 90999;">
                                <v-tooltip right="">
                                    <template v-slot:activator="{ on, attrs }">
                                        <span v-bind="attrs" v-on="on">
                                            <v-icon color="info">mdi-information-outline</v-icon>
                                            Supported Links, click here for tutorial
                                        </span>
                                    </template>
                                    <span>
                                        Supported Links:
                                        <ul>
                                            <li>https://docs.google.com/presentation/d/[document-id]</li>
                                            <li>https://docs.google.com/document/d/[document-id]</li>
                                            <li>https://www.youtube.com/watch?v=[video-id]</li>
                                        </ul>
                                    </span>
                                </v-tooltip>
                            </div>
                        </v-col>

                        <v-col cols="12  col-12  pb-0 my-0">
                            <v-textarea label="Description" counter outlined full-width single-line
                                v-model=" linkForm.description"></v-textarea>
                        </v-col>
                        <v-col cols="12  py-0 my-0">
                            <v-text-field outlined label="Required time spent for Completion (minutes)" type="number"
                                required v-model="linkForm.required_time">
                            </v-text-field>
                        </v-col>

                    </v-row>
                </v-container>

            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('CloseLecture')">
                    Close
                </v-btn>
                <v-btn color="primary" text @click="addLecture()" :loading="sending" :disabled="sending">
                    Save
                </v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['submodule', 'moduleId', 'sub_module_id', 'type_action'],
        data() {
            return {
                isAdding: false,
                sending: false,
                loading: '',
                addLink: false,
                showClasswork: false,
                linkForm: {},
                file: null,
            }
        },
        computed: mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"]),
        methods: {
            onFileChange(file) {
                //console.log('selected file', file);
                this.file = file;
            },
            toastSuccess() {
                return this.$toasted.success("Lecture Successfully Created", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            addLecture() {
                this.isAdding = true;
                this.linkForm.type = 'Link';
                this.linkForm.main_module_id = this.moduleId;
                this.linkForm.submodule_id  =this.type_action == 'edit_link' ? this.sub_module_id : '';
                this.$store.dispatch('createSubModule', this.linkForm)
                    .then((res) => {
                        this.$store.dispatch('fetchSubModule', this.$route.params.id)
                        this.linkForm.sub_module_name = '';
                        this.linkForm.link = '';
                        this.linkForm.type = '';
                        this.$emit('CloseLecture');
                        this.toastSuccess();
                        setTimeout(() => {
                            this.sending = false;
                            this.isAdding = false;
                        }, 1000);

                    })

            },


        },

        mounted() {
            if (this.type_action == 'edit_link') {
                   this.linkForm = this.submodule;
                this.linkForm['required_time'] = this.submodule['required_time'] / 60;
             
            }

        }


    }

</script>
