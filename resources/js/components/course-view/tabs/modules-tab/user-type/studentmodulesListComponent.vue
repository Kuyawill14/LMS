<template>
    <div>



        <div class="row">
            <div class="col p-0">
                <div class="card">


                    <div class="card-header" style="background: transparent;">
                        <h5 class="mb-0">
                            Course Modules
                        </h5>
                    </div>
                </div>
                <div id="accordion">
                    <div class="card" v-for="(itemModule, i) in getmain_module" :key="'module'+i">


                        <div class="card-header">
                            <h5 class="mb-0">
                                <a style="cursor:pointer" class="btn-link" data-toggle="collapse"
                                    :data-target="'#mod' + itemModule.id" aria-expanded="true">

                                    {{itemModule.module_name}} -
                                    <span v-if="role=='Student' && getSub_module(itemModule.id).length != 0">
                                        ({{((getCount(studentSubModuleProgress, itemModule.id) / getSub_module(itemModule.id).length) * 100).toFixed(2).toString()}}%)
                                    </span>
                                </a>
                            </h5>
                            <span v-if="role=='Teacher'">
                              
                                {{ getSub_module(itemModule.id).length}}

                            </span>
                            <span v-if="role=='Student'">
                                {{ getCount(studentSubModuleProgress, itemModule.id) + ' / '+ getSub_module(itemModule.id).length}}

                            </span>


                        </div>

                        <div :id="'mod'+itemModule.id" class="collapse" data-parent="#accordion">

                            <ul class="list-group list-group-flush"
                                v-for="(itemSubModule, i) in getSub_module(itemModule.id)" :key="'Submodule'+i">

                                <a style="font-size: 1rem;cursor:pointer"
                                    @click="addSubStudentProgress(itemModule.id,itemSubModule.id,itemSubModule.type,studentSubModuleProgress); passToMainComponent(getSub_module(itemModule.id),itemSubModule.id);">

                                    <li class="list-group-item">
                                        <i class="fa fa-fw fa-check text-success"
                                            v-if="checkSubModule(studentSubModuleProgress,itemSubModule.id)"></i> <i
                                            class="fa fa-fw fa-file-text"></i>
                                        {{itemSubModule.sub_module_name}}
                                    </li>
                                </a>

                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import VueElementLoading from 'vue-element-loading'

    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            VueElementLoading,

        },
        data() {
            return {
                temp_id: null,
                showLecture: false,
                addLink: false,
                showClasswork: false,
                subModuleForm: {},
                mainModule_id: '',
                mainModule: [],
                studentSubModuleProgress: [],
                studentSubModuleProgressForm: {},
            }
        },
        computed: {
            ...mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"])
        },
        methods: {
            passToMainComponent(sub_module,id) {
          
            var _sub_module = sub_module.find(item => item.id === id);

                this.$emit('subModule', _sub_module);
            },
            addLecture() {
                this.loading = true;

                this.subModuleForm.file_attachment = 'test';
                this.subModuleForm.type = 'lecture';
                //console.log(this.subModuleForm)
                this.$store.dispatch('createSubModule', this.subModuleForm)
                    .then((res) => {
                        console.log(res);
                        if (res.status == 201) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Lecture Successfully Created',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            $('#itemTypeModal').modal('hide');
                            this.showLecture = false;
                        }
                        if (res.status == 500) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Class name, Subject Name and Class Description cannot be blank',
                            })
                        }
                        this.loading = false;
                    })


            },

            lectureBtn() {
                this.hasSelectedType == true;
                this.showLecture = true;
            },

            classworkBtn() {
                $('#itemTypeModal').modal('hide');
                $('#Classworkmodal').modal('show');
            },
            student_sub_module_progress(id) {
                var data;

            },
            getCount(module_id) {
                var count = 0;
                for (var i = 0; i < this.studentSubModuleProgress.length; i++) {
                    if (this.studentSubModuleProgress.main_module_id == module_id) {
                        count++;
                    }
                }
                return count;
            },
            getCount(arr, mainModule_id) {
                var count = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].main_module_id == mainModule_id) {
                        count++;
                    }
                }
                return count;
            },
            addSubStudentProgress(mainModule_id, subModule_id, type) {
                this.tempSubId = subModule_id;
                this.studentSubModuleProgressForm.main_module_id = mainModule_id;
                this.studentSubModuleProgressForm.sub_module_id = subModule_id;
                this.studentSubModuleProgressForm.type = type;
                this.studentSubModuleProgressForm.course_id = this.$route.params.id;
                axios.post(`/api/student_sub_module/insert`, {
                        studentProgress: this.studentSubModuleProgressForm
                    })
                    .then((res) => {
                        this.studentSubModuleProgress.push(res.data);
                    });
            },
            checkSubModule(arr, sub_module_id) {
                var check = false;
                //console.log(arr);
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].sub_module_id == sub_module_id) {
                        check = true;
                    }
                }
                return check;
            }


        },
        async mounted() {
            axios.get(
                `/api/student_sub_module/all/${this.$route.params.id}`
            ).then((res) => {
                this.studentSubModuleProgress = res.data;

                this.getCount(this.studentSubModuleProgress, 23);
                this.$store.dispatch('fetchMainModule', this.$route.params.id);
                this.$store.dispatch('fetchSubModule', this.$route.params.id);
            }).catch((error) => {
                console.log(error)
            })






        },
        created() {

        }

    }

</script>

<style scoped>
    .card {
        border-top: none !important;
        border-radius: 0%;
    }

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
