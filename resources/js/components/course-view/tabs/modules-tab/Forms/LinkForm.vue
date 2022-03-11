<template>


    <v-card>
        <vue-element-loading :active="isAdding" spinner="bar-fade-scale" />
        <form class="" @submit.prevent="addLecture">
            <v-card-title>
                <span class="headline">Add Link</span>
            </v-card-title>
            <v-card-text>

                <v-form ref="linkForm" v-model="valid">
                    <v-container>
                        <v-row>
                            <v-col cols="12  pt-0 my-0">
                                <v-text-field label="Title" :rules="rules.title" outlined required v-model="linkForm.sub_module_name">
                                </v-text-field>
                            </v-col>

                            <v-col cols="12  py-0 my-0">
                                <div class="pb-1" style="margin-top: -20px;position: relative;z-index: 90999;">
                                    <v-tooltip right="">
                                        <template v-slot:activator="{ on, attrs }">
                                            <span v-bind="attrs" v-on="on">
                                                <v-icon color="info">mdi-information-outline</v-icon>
                                                Supported Links
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
                                <v-text-field label="Link" type="url" :rules="rules.links" outlined required
                                    v-model="linkForm.link">
                                </v-text-field>

                            </v-col>

                            <v-col cols="12  col-12  pb-0 my-0">
                                <v-textarea label="Description" counter outlined full-width single-line
                                    v-model=" linkForm.description" :rules="rules.description"></v-textarea>
                            </v-col>
                            <v-col cols="12  py-0 my-0">
                                Required time spent for Completion
                            </v-col>

                            <v-col cols="6  py-0 my-0">
                                <v-text-field outlined label="Hours" :rules="rules.hours" type="number" 
                                    v-model="linkForm.required_time_hours">
                                </v-text-field>
                            </v-col>

                            <v-col cols="6  py-0 my-0">
                                <v-text-field outlined  label="Minutes" :rules="rules.minutes" min="0" max="60" type="number" 
                                    v-model="linkForm.required_time_minutes">
                                </v-text-field>
                            </v-col>

                        </v-row>
                    </v-container>

                </v-form>

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
                valid: true,
                isAdding: false,
                sending: false,
                loading: '',
                addLink: false,
                showClasswork: false,
                linkForm: {
                    sub_module_name: '',
                    description: '',
                    required_time: '',
                    required_time_minutes: '',
                    required_time_hours: '',
                    link: ''
                },
                file: null,
                rules: {
                    title: [
                        v => !!v || 'Title is required',
                        v => (v && v.length <= 255) || 'Title characters cannot be greater than 255'
                    ],
                    description: [
                        v => !!v || 'Description is required',
                        v => (v && v.length <= 255) || 'Description characters cannot be greater than 1024'
                    ],
                    minutes: [
                        v => !!v || 'Minutes is required',
                        v => (v && v <= 60) || 'minutes cannot be greater than 60',
                        v => (v && v >= 0) || 'minutes cannot be less than 0',
                    ],
                    hours: [
                        v => !!v || 'hours is required',
                        v => (v && v <= 99999) || 'minutes cannot be greater than 99999',
                        v => (v && v >= 0) || 'minutes cannot be less than 0',
                    ],
                    links: [
                        v => !!v || 'URL is required',
                        v => (v && v.length <= 256) ||
                        'URL must be less than 256 characters', /* eslint-disable-next-line no-useless-escape*/
                        v => /https?:[0-9]*\/\/[\w!?/\+\-_~=;\.,*&@#$%\(\)\'\[\]]+/.test(v) || 'URL must be valid',
                    ],
                }
            }
        },
        computed: mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"]),
        methods: {
            onFileChange(file) {
                ////console.log('selected file', file);
                this.file = file;
            },
            toastSuccess() {
                return this.$toasted.success("Lecture Successfully saved", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            addLecture() {
                console.log(this.linkForm, 'this link form');


                if(this.$refs.linkForm.validate()) {
  if (this.linkForm.sub_module_name == '' || this.linkForm.description == '' || this
                    .linkForm.required_time_hours == '' || this
                    .linkForm.required_time_minutes == '' || this.linkForm.link == '') {
                    this.toastError('Please Complete all the fields');


                } else {
                    this.isAdding = true;

                    this.linkForm.required_time = parseFloat((this.linkForm.required_time_hours * 60)) + parseFloat(this
                        .linkForm.required_time_minutes);
                    // console.log(this.linkForm.required_time, 'this is a frinking required time');
                    this.linkForm.type = 'Link';
                    this.linkForm.main_module_id = this.moduleId;
                    this.linkForm.submodule_id = this.type_action == 'edit_link' ? this.sub_module_id : '';
                    this.$store.dispatch('createSubModule', this.linkForm)
                        .then((res) => {
                            this.$store.dispatch('fetchMainModule', this.$route.params.id)
                            this.linkForm.sub_module_name = '';
                            this.linkForm.link = '';
                            this.linkForm.type = '';
                            this.$emit('CloseLecture');
                            this.toastSuccess();

                            this.sending = false;
                            this.isAdding = false;


                        })
                }
                }
              


            },


        },

        mounted() {
            this.$refs.linkForm.resetValidation()
            if (this.type_action == 'edit_link') {
                this.linkForm = this.submodule;
                console.log(this.linkForm, ' from omounted');

                this.linkForm.required_time_hours = Math.trunc(this.linkForm.required_time / 60);
                this.linkForm.required_time_minutes = (this.linkForm.required_time % 60).toString();
                // this.linkForm['required_time'] = this.submodule['required_time'] / 60;

            } else {
                this.linkForm = {
                    sub_module_name: '',
                    description: '',
                    required_time: '',
                    required_time_minutes: "",
                    required_time_hours: "",
                    link: ''
                };
            }

        }


    }

</script>
