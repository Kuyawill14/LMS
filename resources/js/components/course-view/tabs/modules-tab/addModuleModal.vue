<template>

    <v-col>
         <h2 class="pb-2">Manage Modules</h2>
        <v-dialog v-model="dialog" persistent max-width="600px">

            <template v-slot:activator="{ on, attrs }">
           
                    <v-btn bottom color="primary" dark fab fixed right @click="dialog = !dialog"  v-bind="attrs" v-on="on">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
            </template>
            <v-card>
                <v-form ref="registerForm" v-model="valid" lazy-validation>
                    <v-card-title>
                        <span class="headline">Add Module</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Module Name*" v-model="moduleForm.module_name" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea clearable clear-icon="mdi-close-circle" label="Description"
                                        v-model="moduleForm.description"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false" :disabled="loading">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click=" createModule()" :disabled="loading">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-col>

</template>

<script>
    import Form from 'vform'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {

        data() {
            return {
                loading: false,
                dialog: false,
                moduleForm: new Form({
                    module_name: '',
                    description: '',
                    course_id: ''
                }),
                class_details: '',
            }
        },
        methods: {
            toastSuccess() {
                return this.$toasted.success("Module Successfully Created", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            createModule() {
                this.loading = true;
                this.moduleForm.course_id = this.$route.params.id;
                this.$store.dispatch('createMainModule', this.moduleForm)
                    .then((res) => {
                        console.log(res);
                        if (res.status == 201) {
                            this.moduleForm.reset()
                            this.toastSuccess();

                            this.dialog = false;
                            setTimeout(() => {
                                this.loading = false;
                            }, 1000);
                        }


                    })
            },

        },
        created() {
            this.class_details = localStorage.getItem('class_details')

        }
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
        bottom: 10px;
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
