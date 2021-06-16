<template>


    <v-card>

        <form class="" @submit.prevent="addLecture">
            <v-card-title>
                <span class="headline">Add Link</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12 pb-0">
                            <v-text-field label="Title" required v-model="linkForm.sub_module_name">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12 pb-0">
                            <v-text-field label="Link" type="url" required v-model="linkForm.link">
                            </v-text-field>
                        </v-col>

                        <v-col cols="12 pb-0">
                            <label> Description </label>
                            <v-textarea label="Description" counter full-width single-line
                                v-model=" linkForm.description"></v-textarea>
                        </v-col>
                        <v-col cols="12 pb-0">
                            <v-text-field label="Required time spent for Completion (minutes)" type="number" required
                                v-model="linkForm.required_time">
                            </v-text-field>
                        </v-col>

                    </v-row>
                </v-container>

            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('CloseLecture')" :disabled="sending">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="addLecture()" :disabled="sending">
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
        props: ['moduleId'],
        data() {
            return {
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
                console.log('selected file', file);
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

                this.linkForm.type = 'Link';
                this.linkForm.main_module_id = this.moduleId;
            
                this.$store.dispatch('createSubModule', this.linkForm)
                    .then((res) => {

                        this.linkForm.sub_module_name = '';
                        this.linkForm.link = '';
                        this.linkForm.type = '';

                        this.$emit('CloseLecture');
                        this.toastSuccess();
                        setTimeout(() => {
                            this.sending = false;
                        }, 1000);

                    })

            },


        },


    }

</script>
