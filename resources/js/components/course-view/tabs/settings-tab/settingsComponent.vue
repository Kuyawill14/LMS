<template>
    <div>
         <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
            <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                :to="{name: item.link}"
                :disabled="item.disabled"
            >
                {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
        <v-card elevation="2" class="pa-3 mt-5">
            <!-- <v-text-field v-model="getcourseInfo.course_code" label="Course Code"></v-text-field>

            <v-text-field v-model="getcourseInfo.course_name" label="Course Name"></v-text-field>


            <label> Course Description </label><br>
            <editor placeholder="Announce something in your class!" class="border"
                v-model="getcourseInfo.course_description" theme="snow"></editor> -->
   <v-col cols="12" class="pa-0">
            <v-text-field v-model="getcourseInfo.course_code" outlined color="primary" label="Course Code">
            </v-text-field>
        </v-col>

        <v-col cols="12" class="pa-0 ">
            <v-text-field v-model="getcourseInfo.course_name" outlined color="primary" label="Course Name">
            </v-text-field>
        </v-col>

        <v-col cols="12" class="pa-0 ">
            <v-text-field v-model="getcourseInfo.v_classroom_link" outlined color="primary" label="Google Meet Link">
            </v-text-field>
        </v-col>


        <v-col cols="12" class="pa-0 ma-0">
            <v-card>
                <v-card-title class="pl-3 py-3" style="font-size: 1rem;color:grey">Course Description
                </v-card-title>
                <v-divider></v-divider>

                <editor v-model="getcourseInfo.course_description" theme="snow"></editor>
            </v-card>
        </v-col>
            <div class="text-right pt-6">
                <v-btn tile color="primary" large @click="updateClass">
                    <v-icon left>
                        mdi-pencil
                    </v-icon>
                    Save Changes
                </v-btn>
            </div>
        </v-card>


    </div>

</template>
<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {

        components: {


        },
        data: function () {
            return {
                classInfo: [],
                loading: false,
                 items: [
                {
                text: 'Course',
                disabled: false,
                link: 'courses',
                },
                {
                text: 'Setting',
                disabled: true,
                link: 'breadcrumbs_link_2',
                },
            ],

            }
        },
        computed: mapGetters(["getcourseInfo"]),
        methods: {
            ...mapActions(['fetchScourse']),
            toastSuccess() {
                return this.$toasted.success("Your changes have been saved", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            updateClass() {

                this.loading = true;
                this.$store.dispatch('updateCourse', this.getcourseInfo)
                    .then((res) => {
                        if (res.status == 200) {
                            this.toastSuccess();

                        }
                        if (res.status == 500) {

                        }
                        this.loading = false;
                    })
            },



        },
        created() {
            const course_id = this.$route.params.id;
            this.classInfo = this.fetchScourse(course_id);
        },


    }

</script>

<style>
    .border {
        border: 1px solid #d6d6d6;
    }

    .quill-editor {
        position: relative;
        background: #ffffff !important;
        ;

    }

    .ql-container.ql-snow {
        border: none !important;
    }




    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        border-radius: 5px;
    }

</style>
