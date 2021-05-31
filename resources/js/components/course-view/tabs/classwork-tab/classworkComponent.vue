<template>
    <div class="container pt-4">
        <!-- Modal -->
        <newClassworkModal v-on:realodClassworks="fetchAll()"></newClassworkModal>

        <div class="row">
            <div class="col">
                <h4 class=" ">{{ role == 'Teacher' ? 'Manage Classworks' : 'Classworks'}}</h4>
            </div>
            <div class="col text-right">
                <button @click="AddNewClasswork()" v-if="role == 'Teacher'" class="btn btn-primary" dropdown-toggle=""
                    type="button " data-toggle="dropdown " aria-haspopup="true " aria-expanded="false "><i
                        class="fa fa-plus " aria-hidden="true " style="padding-right:10px "></i>Classwork</button>
            </div>
        </div>
        <hr>

        <div class="row">
            <vue-element-loading :active="isLoading" spinner="bar-fade-scale" />
            <div class="col-lg-6 mb-3" v-for="(item, index) in classworks" :key="index">
                <div class="card">
                    <div class="dropdown">
                        <button class="btn btn-link dropdown-toggle text-dark" type="button" id="gedf-drop1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            style="position:absolute;right:0;    background: transparent;">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1"
                            x-placement="bottom-end"
                            style="position: absolute; transform: translate3d(144px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a @click="showShareClass(item.id)" v-show="role == 'Teacher'" class="dropdown-item">Share
                                Classwork</a>
                            <!-- <a v-if="showClass == true" @click="showClass = false && temp_id == ''" class="dropdown-item">Close</a> -->
                            <a class="dropdown-item" v-show="role == 'Teacher'" @click="RevieQuiz(item.id)">Review
                                Quiz</a>
                            <a class="dropdown-item" v-show="role == 'Teacher'">Edit Quiz </a>
                            <a class="dropdown-item" v-show="role == 'Teacher'">Delete Quiz</a>
                            <a class="dropdown-item" v-show="role == 'Student'" @click="$router.push({name: 'quiz',params: {id: $route.params.id},query: {clwk: item.classwork_id}})">View
                            Quiz</a>
                        </div>
                    </div>
                    <div class="card-header" style="background: transparent;">

                        <a class=" text-dark font-weight-bold"> {{item.title}}</a>
                        <br>
                        <small class="card-subtitle text-50">{{role == 'Teacher' ? 'Created: ' + format_date(item.created_at) + ' | Due Date: '+format_date(item.due_date): 'Due Date: '+format_date(item.due_date)}}</small>

                        <div class="progress wc-progress">
                            <div class="progress-bar progress-bar widget-bg1" role="progressbar" style="width: 25%;"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <form v-if="showClass && item.id == temp_id">
                            <hr>
                            <div class="row">
                                <div class="col text-right">
                                    <a @click="showClass = false && temp_id == ''" class="close_btn"
                                        style="cursor:pointer">
                                        <i class="fa fa-close " aria-hidden="true"> </i>
                                    </a>
                                </div>
                            </div>


                            <div class="form-row mt-2">
                                <div class="col text-left ">
                                    <span>Class names</span>
                                </div>
                                <div class="col text-right">
                                    <span>Status</span>
                                </div>
                            </div>
                            <hr>
                            <div class="form-row mt-2" v-for="(details, i) in classNames.allClass" :key="i">
                                <div class="col">
                                    <a class=" text-dark font-weight-bold"> {{details.class_name}} - </a>
                                    <span>{{details.subject_name}}</span>
                                </div>
                                <div class="col text-right ">
                                    <div class="form-check">
                                        <div v-for="(data, x) in classNames.check" :key="x">

                                            <input
                                                v-if="data.uc_id == details.id && data.cl_id == item.id && data.status == true"
                                                checked class="form-check-input position-static" type="checkbox"
                                                @change="shareClasswork(item.id, details.class_id)" id="check"
                                                value="option1" aria-label="...">
                                            <input
                                                v-if="data.uc_id == details.id && data.cl_id == item.id && data.status == false"
                                                class="form-check-input position-static" type="checkbox"
                                                @change="shareClasswork(item.id, details.class_id)" id="check"
                                                value="option1" aria-label="...">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import VueElementLoading from 'vue-element-loading';
    import newClassworkModal from './newClassworkModal';
    import moment from 'moment';
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            VueElementLoading,
            newClassworkModal
        },
        data() {
            return {
                isLoading: true,
                counter: 0,
                classNames: [],
                temp_id: "",
                showClass: false,
                classworks: [],
                form: {
                    title: "",
                    type: "",
                    description: "",
                    due_date: ""
                },
            }
        },
        computed: mapGetters(['allClass']),
        methods: {
            ...mapActions(['fetchClassList']),
            OpenModal() {
                $('#Classworkmodal').modal('show');
            },
            SaveClasswork() {
                axios.post('/api/classwork/insert', this.form)
                    .then(res => {
                        if (res.status == 201) {
                            this.getGeneralClassworks();
                            this.fetchClassnames();
                        }
                    }).catch(e => {
                        console.log(e);
                    })
                this.isLoading = false;
            },
            getGeneralClassworks() {
                    axios.get('/api/classwork/all/' + this.$route.params.id).then(res => {
                        this.classworks = res.data;
                    }).catch(e => {
                        console.log(e);
                    })
                this.isLoading = false;
            },
            showShareClass(id) {
                this.temp_id = id;
                this.showClass = true
            },
            shareClasswork(item_id, class_id) {
                const fd = new FormData();
                fd.append("classwork_id", item_id);
                fd.append("class_id", class_id);
                axios.post('/api/classwork/share', fd)
                    .then(res => {
                        this.fetchClassnames();
                    }).catch(e => {
                        console.log(e);
                    })
            },
            fetchClassnames() {
                axios.get('/api/class/allnames/' + this.$route.params.id).then(res => {
                    this.classNames = res.data;
                }).catch(e => {
                    console.log(e)
                })
            },
            RevieQuiz(id) {
                this.$router.push({
                    name: 'clwk',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        clwk: id
                    }
                })
            },
            AddNewClasswork() {
                $('#Classworkmodal').modal('show');
            },
            format_date(value) {
                if (value) {
                    return moment(String(value)).format("MMMM DD, YYYY")
                }
            },
            fetchAll() {
                this.fetchClassnames();
                this.getGeneralClassworks();
                this.fetchClassList();
            }

        },
        mounted() {
            this.fetchAll()
        }
    }

</script>

<style scoped>
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

</style>
