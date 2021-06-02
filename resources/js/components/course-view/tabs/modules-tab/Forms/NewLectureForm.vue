<template>


    <v-card>

        <form class="" @submit.prevent="addLecture">
            <v-card-title>
                <span class="headline">New Lecture</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12 pb-0">
                            <v-text-field label="Lecture Name" required v-model="subModuleForm.sub_module_name">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12 pb-0">
                            <label> Description </label>
                            <v-textarea label="Description" counter full-width single-line
                                v-model=" subModuleForm.description"></v-textarea>
                        </v-col>
                        <v-file-input show-size label="Attach File" @change="onFileChange" ref="inputFile">
                        </v-file-input>
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
                subModuleForm: {},
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
                let fd = new FormData;

                fd.append('file', this.file);
                fd.append('main_module_id', this.moduleId);
                fd.append('description', this.subModuleForm.description);
                fd.append('type', 'lecture');
                fd.append('sub_module_name', this.subModuleForm.sub_module_name);
                this.sending = true;

                this.$store.dispatch('createSubModule', fd)
                    .then((res) => {

                        this.subModuleForm.sub_module_name = '';
                        this.subModuleForm.description = '';
                        this.$refs.inputFile.reset();

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
<style scoped>
    .button-text-image {
        white-space: inherit;
    }

    .class-banner {
        /* background-image: url(https://gstatic.com/classroom/themes/Honors.jpg); */
        color: #fff;
        height: 200px;
        background-color: #1E1E1C;
    }

    .top-container {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .ttr-wrapper {
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 59px;
    }

    .transparent {
        background: transparent;
        border: none;
    }

    .card-top {
        color: #fff !important;
    }

    .files input {
        outline: 2px dashed #92b0b3;
        outline-offset: -10px;
        -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
        transition: outline-offset .15s ease-in-out, background-color .15s linear;
        padding: 120px 0px 85px 35%;
        text-align: center !important;
        margin: 0;
        width: 100% !important;
    }

    .files input:focus {
        outline: 2px dashed #92b0b3;
        outline-offset: -10px;
        -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
        transition: outline-offset .15s ease-in-out, background-color .15s linear;
        border: 1px solid #92b0b3;
    }

    .files {
        position: relative
    }

    .files:after {
        pointer-events: none;
        position: absolute;
        top: 60px;
        left: 0;
        width: 50px;
        right: 0;
        height: 56px;
        content: "";
        background-image: url(https://image.flaticon.com/icons/png/128/109/109612.png);
        display: block;
        margin: 0 auto;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .color input {
        background-color: #f1f1f1;
    }

    .files:before {
        position: absolute;
        bottom: 5px;
        left: 0;
        pointer-events: none;
        width: 100%;
        right: 0;
        height: 57px;
        content: " or drag it here. ";
        display: block;
        margin: 0 auto;
        color: #2ea591;
        font-weight: 600;
        text-transform: capitalize;
        text-align: center;
    }

    .upload input[type='file'] {
        text-indent: -999em;
        outline: none;
        width: 100%;
        height: 100%;
        position: absolute;
    }

</style>
