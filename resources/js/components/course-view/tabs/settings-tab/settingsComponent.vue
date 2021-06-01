<template>
    <div class="pt-5">
        <v-card elevation="2" class="pa-3">
            <v-text-field v-model="getcourseInfo.course_code" label="Course Code"></v-text-field>

            <v-text-field v-model="getcourseInfo.course_name" label="Course Name"></v-text-field>


            <label> Course Description </label><br>
            <editor placeholder="Announce something in your class!" class="border"
                v-model="getcourseInfo.course_description" theme="snow"></editor>

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
