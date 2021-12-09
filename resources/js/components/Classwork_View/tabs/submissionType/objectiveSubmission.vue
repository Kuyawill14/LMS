<template>
    <div class="pa-2">

        <v-row justify="center" v-if="dialog">
            <v-overlay :value="isStarting">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
            <!--    <v-dialog v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition">
   <checkobjective v-show="!isStarting" v-if="dialog" v-on:isMounted="isStarting = false" v-on:RestSubmission="ResetSubmission()" :classworkDetails="classworkDetails" :ViewDetails="ViewDetails"  v-on:UpdateSubmission="$emit('UpdateSubmission')" v-on:closeDialog="dialog = !dialog, Viewdialog = !Viewdialog "></checkobjective>
</v-dialog> -->


        </v-row>

        <v-row v-if="dialog">
            <v-col cols="12">
                <checkobjective :currentIndex="selected_index" :SubmittedLength="studentSubmissionList.length"
                    v-show="!isStarting" v-if="dialog" v-on:isMounted="isStarting = false"
                    v-on:RestSubmission="ResetSubmission()" :classworkDetails="classworkDetails"
                    :ViewDetails="ViewDetails" v-on:UpdateSubmission="$emit('UpdateSubmission')"
                    v-on:closeDialog="isNotViewing()" v-on:nextStudent="GotoNextStudent()"
                    v-on:prevStudent="GotoPrevStudent()">
                </checkobjective>
            </v-col>
        </v-row>


        <v-row v-if="!dialog" class="pa-1">
            <v-col v-if="!isViewing" cols="12" md="12" lg="12" xl="12" class="pl-6">
                <v-row>
                    <v-col cols="12" class="mb-0 pb-0">
                        <h3>{{classworkDetails.title}}</h3>
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                            <v-col cols="6" sm="3" md="2">
                                <div class="d-flex flex-column">
                                    <h1>{{Class == $route.params.id && selectedStatus == "Submitted"  ? Submitted : Submitted_count}}
                                        / {{Class == $route.params.id ? ListData.length : Over_total}}</h1>
                                    <small>Submitted</small>
                                </div>

                            </v-col>
                            <v-col class="text-right" cols="6" sm="9" md="10">
                                <div class="pt-7">
                                    <v-btn @click="resetdialog = !resetdialog" small text rounded>
                                        <v-icon left>mdi-restart</v-icon>
                                        Reset Submission
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                    </v-col>
                    <v-col cols="6" sm="6" md="2" lg="2" xl="2" class="pt-0 mt-0 pb-0 mb-0 pt-1 pb-3">
                        <v-select outlined hide-details dense @change="FilteredClass" label="Class" v-model="Class"
                            class="mb-0 pb-0" :items="ClassList" item-text="class_name" item-value="class_id">
                        </v-select>
                    </v-col>
                    <v-col cols="6" sm="6" md="2" lg="2" xl="2" class="pt-0 mt-0 pb-0 mb-0 pt-1 pb-3">
                        <v-select outlined hide-details dense @change="ShowLoading" label="Status"
                            v-model="selectedStatus" class="mb-0 pb-0" :items="StatusType">
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="2" sm="12" lg="2" xl="2" class="pt-0 mt-0 pb-0 mb-0 pt-1 pb-3">
                        <v-select outlined hide-details dense @change="ShowLoading" label="Sort By"
                            v-model="selectedSort" class="mb-0 pb-0" :items="SortType">
                        </v-select>
                    </v-col>

                    <v-col cols="12" md="1" sm="6" lg="1" xl="1" class="pt-0 mt-0 pb-0 mb-0 pt-1 pb-3">
                        <v-select outlined hide-details dense @change="ShowLoading" label="Limit"
                            v-model="selectedShowNumber" class="mb-0 pb-0" :items="ShowNumber">
                        </v-select>
                    </v-col>

                    <v-col cols="12" sm="6" md="5" lg="5" xl="5" class="pt-0 mt-0 pb-0 mb-0 pt-1 pb-3">
                        <v-text-field class="mb-0 pb-0 mt-0 pt-0" v-model="search" hide-details
                            prepend-inner-icon="mdi-magnify" outlined dense label="Search">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" class="mt-0 pt-0">
                        <!--   <div class="d-flex justify-end mb-2">
                    <v-pagination
                    v-model="currentPage"
                    @click="setPage"
                    :length="totalPage"
                   
                    circle
                    ></v-pagination>
                </div> -->
                        <v-row>

                            <v-col v-show="!isFiltered && (Class == $route.params.id || Class == item.class_id)"
                                cols="12" md="6" lg="4" xl="3" v-for="(item,i) in studentSubmissionList" :key="i">
                                <v-alert class="ma-0 pa-0" outlined
                                    :color="item.status == 'Taking' ? 'blue': item.status == 'Submitted' ? 'success' : 'grey'">
                                    <v-list-item class="pt-1 pb-1" link>
                                        <v-list-item-avatar @click="ViewSubmision(item, i)">
                                            <v-avatar color="brown" size="40">
                                                <v-img alt="Profile"
                                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                                </v-img>
                                            </v-avatar>
                                        </v-list-item-avatar>
                                        <v-list-item-content @click="ViewSubmision(item, i)">
                                            <v-list-item-title>
                                                {{item.firstName +' '+item.lastName}}
                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                <v-icon left small color="success" v-if="item.status == 'Submitted'">
                                                    mdi-check</v-icon>
                                                <span class="success--text"
                                                    v-if="item.status == 'Submitted'">Submitted</span>
                                                <span class="blue--text" v-else-if="item.status == 'Taking'"></span>
                                                <span class="red--text" v-else>No Submission</span>
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action style="max-width:150px !important">
                                            <v-text-field v-if="item.status == 'Submitted'" hide-details
                                                class="ma-0 pa-0" label="Score" rounded :loading="isSavingScore"
                                                @keyup="SaveScore(item.id, item.points)" v-model="item.points" dense
                                                outlined type="number" :suffix="'/' +classworkDetails.points"
                                                :max="classworkDetails.points"
                                                :maxlength="classworkDetails.points.toString().length" min="0">
                                            </v-text-field>

                                            <v-chip v-if="item.status == 'Taking'" class="ma-2" color="blue"
                                                text-color="white">
                                                Taking...
                                            </v-chip>

                                            <v-chip v-if="item.status == '' || item.status == null" class="ma-2"
                                                color="transparent">
                                            </v-chip>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-alert>
                            </v-col>

                            <v-col cols="12" v-if="isFiltered">
                                <!--   <v-container class="fill-height" style="height: 500px;">
                        <v-row  align-content="center" justify="center">
                                <v-col cols="12" class="text-center">
                                    <vue-element-loading :active="isFiltered" 
                                    duration="0.7"
                                    spinner="line-scale" color="#EF6C00"  size="40" />
                                </v-col>
                            </v-row>
                        </v-container> -->
                                <v-row>
                                    <v-col v-for="i in 20" :key="i" cols="12" md="6" lg="3" xl="3">
                                        <v-card class="pl-2 pr-2 pt-3 pb-3" elevation="0" v-if="isFiltered">
                                            <v-list>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-skeleton-loader class="mx-auto"
                                                            type="list-item-avatar-two-line"></v-skeleton-loader>
                                                    </v-list-item-content>
                                                    <v-list-item-action>
                                                        <v-skeleton-loader class="mx-auto" type="chip">
                                                        </v-skeleton-loader>
                                                    </v-list-item-action>
                                                </v-list-item>
                                            </v-list>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
            <!--  <v-col v-if="isViewing" style="max-height:85vh;overflow-y:scroll;overflow-x: hidden;" cols="12" md="12" lg="8" xl="8" class="pl-6">
         
            <v-container class="fill-height" v-if="isLoadingData && !isMounted" style="height: 400px;">
                <v-row  align-content="center" justify="center">
                    <v-col class="text-subtitle-1 text-center" cols="12">
                        Loading
                    </v-col>
                    <v-col cols="6">
                        <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-container>
         <checkobjective v-if="isLoadingData" v-show="isMounted" v-on:isMounted="isMounted = true" v-on:RestSubmission="ResetSubmission()" :classworkDetails="classworkDetails" :ViewDetails="ViewDetails"  v-on:UpdateSubmission="$emit('UpdateSubmission')" v-on:closeDialog="isViewing = false"></checkobjective>
    </v-col> -->
            <v-row>
                <v-dialog v-model="resetdialog" persistent max-width="550">
                    <resetStudentSubmissionDialog scrollable v-on:toggleDialog="resetdialog = !resetdialog"
                        v-on:StartReset="MultipleResetSubmission" :ListData="ListData" :ClassList="ClassList"
                        v-if="resetdialog"></resetStudentSubmissionDialog>
                </v-dialog>
            </v-row>


        </v-row>
    </div>
</template>
<script>
    const resetConfirmation = () => import('../dialogs/resetConfirmation')
    const checkobjective = () => import('./check-submission/check-objective')
    const resetStudentSubmissionDialog = () => import('./resetAllSubmission/resetStudentSubmissionDialog')

    export default {
        props: ["ListData", "classworkDetails", "Submitted", "Graded", "ClassList"],
        components: {
            checkobjective,
            resetConfirmation,
            resetStudentSubmissionDialog
        },
        data() {
            return {
                isloading: true,
                isLoadingData: true,
                selectedTasks: [],
                isMounted: false,
                headers: [{
                        text: 'Name',
                        value: 'name'
                    },
                    {
                        text: 'Status',
                        value: 'status',
                        align: 'center',
                    },
                    {
                        text: 'Points',
                        value: 'points'
                    },
                    {
                        text: 'Actions',
                        sortable: false
                    },
                ],
                dialog: false,
                Viewdialog: false,
                ResetDialog: false,
                ViewDetails: null,
                resetId: null,
                resetName: null,
                selected_index: null,
                Details: [],
                Reload: true,
                Class: this.$route.params.id,
                StatusType: ['Submitted', 'Taking', 'No Submission'],
                selectedStatus: 'Submitted',
                SortType: ['Name', 'Highest Score', 'Lowest Score'],
                selectedShowNumber: 24,
                ShowNumber: [24, 36, 48, 'all'],
                selectedSort: 'Name',
                isSavingScore: false,
                search: "",
                isViewing: false,
                isStarting: false,
                resetdialog: false,
                selected_user_id: null,
                isFiltered: false,
                Submitted_count: 0,
                Over_total: 0,
                pageNo: 1,
                pageSize: 12,
                currentPage: 1,
                totalPage: 0,
                currentTotalData: 0,
            }
        },
        computed: {
            indexStart() {
                return (this.currentPage - 1) * this.pageSize;
            },
            indexEnd() {
                return this.indexStart + this.pageSize;
            },
            studentSubmissionList() {
                /*  if(this.selectedStatus == "All"){
                    if (this.search) {
                            let data = this.search;
                            return this.ListData.filter((element) => {
                                return data.toLowerCase().split(' ').every(v => element.firstName.toLowerCase()
                                .includes(v) || element.lastName.toLowerCase()
                                .includes(v))
                        })
                    }
                    else{
                        return this.ListData;
                    }
                } */
                if (this.search) {
                    let data = this.search;
                    return this.ListData.filter((element) => {
                        return data.toLowerCase().split(' ').every(v => element.firstName.toLowerCase()
                            .includes(v) || element.lastName.toLowerCase()
                            .includes(v))
                    })
                } else {
                    if (this.selectedStatus == "Submitted") {
                        let Filterddata = this.ListData;
                        Filterddata = Filterddata.filter((item) => {
                            if (this.Class == this.$route.params.id) {
                                return (item.status == "Submitted")
                            } else {
                                return (item.status == "Submitted" && item.class_id == this.Class)
                            }

                        })
                        this.Submitted_count = Filterddata.length;
                        if (this.selectedSort == "Name") {

                            this.totalPage = Math.round((Filterddata.length - 1) / this.pageSize);
                            if (this.selectedShowNumber != 'all') {
                                let data2 = Filterddata.sort();
                                return data2.splice(0, this.selectedShowNumber)
                            } else {
                                return Filterddata.sort();
                            }
                        } else if (this.selectedSort == "Lowest Score") {
                            let data = Filterddata.sort((a, b) => {
                                return a.points - b.points;
                            })
                            //return data;
                            if (this.selectedShowNumber != 'all') {
                                return data.splice(0, this.selectedShowNumber)
                            } else {
                                return data;
                            }
                        } else if (this.selectedSort == "Highest Score") {
                            let data = Filterddata.sort((a, b) => {
                                return a.points - b.points;
                            })
                            //return data.reverse();
                            if (this.selectedShowNumber != 'all') {
                                let data2 = data.reverse();
                                return data2.splice(0, this.selectedShowNumber)
                            } else {
                                return data.reverse();
                            }
                        }

                    } else if (this.selectedStatus == "Taking") {
                        let Filterddata = this.ListData;
                        Filterddata = Filterddata.filter((item) => {
                            if (this.Class == this.$route.params.id) {
                                return (item.status == "Taking")
                            } else {
                                return (item.status == "Taking" && item.class_id == this.Class)
                            }
                        })

                        this.Submitted_count = Filterddata.length;
                        if (this.selectedSort == "Name") {
                            //return Filterddata.sort();
                            if (this.selectedShowNumber != 'all') {
                                let data2 = Filterddata.sort();
                                return data2.splice(0, this.selectedShowNumber)
                            } else {
                                return Filterddata.sort();
                            }
                        } else if (this.selectedSort == "Lowest Score") {
                            let data = Filterddata.sort((a, b) => {
                                return a.points - b.points;
                            })
                            //return data;
                            if (this.selectedShowNumber != 'all') {
                                return data.splice(0, this.selectedShowNumber)
                            } else {
                                return data;
                            }
                        } else if (this.selectedSort == "Highest Score") {
                            let data = Filterddata.sort((a, b) => {
                                return a.points - b.points;
                            })
                            //return data.reverse();
                            if (this.selectedShowNumber != 'all') {
                                let data2 = data.reverse();
                                return data2.splice(0, this.selectedShowNumber)
                            } else {
                                return data.reverse();
                            }
                        }
                    } else if (this.selectedStatus == "No Submission") {
                        let Filterddata = this.ListData;
                        Filterddata = Filterddata.filter((item) => {
                            if (this.Class == this.$route.params.id) {
                                return (item.status == null || item.status == '')
                            } else {
                                return ((item.status == null || item.status == '') && item.class_id == this
                                    .Class)
                            }
                        })
                        this.Submitted_count = Filterddata.length;
                        if (this.selectedSort == "Name") {
                            //return Filterddata.sort();
                            if (this.selectedShowNumber != 'all') {
                                let data2 = Filterddata.sort();
                                return data2.splice(0, this.selectedShowNumber)
                            } else {
                                return Filterddata.sort();
                            }
                        } else if (this.selectedSort == "Lowest Score") {
                            let data = Filterddata.sort((a, b) => {
                                return a.points - b.points;
                            })
                            //return data;
                            if (this.selectedShowNumber != 'all') {
                                return data.splice(0, this.selectedShowNumber)
                            } else {
                                return data;
                            }
                        } else if (this.selectedSort == "Highest Score") {
                            let data = Filterddata.sort((a, b) => {
                                return a.points - b.points;
                            })
                            //return data.reverse();
                            if (this.selectedShowNumber != 'all') {
                                let data2 = data.reverse();
                                return data2.splice(0, this.selectedShowNumber)
                            } else {
                                return data.reverse();
                            }
                        }

                    }
                }

            }
        },
        methods: {
            setPage() {
                this.currentPage = this.pageNo - 1;
            },
            ViewSubmision(data, index) {
                this.ViewDetails = null;
                //this.isLoadingData = true;
                //if(data.status == 'Submitted'){
                //this.isViewing = true;
                this.dialog = !this.dialog;
                this.isStarting = true;
                this.Viewdialog = !this.Viewdialog;
                this.ViewDetails = data;
                this.selected_index = index;
                this.selected_id = data.id;
                this.$store.dispatch("isViewingSubmission");
                //}

            },
            GotoNextStudent() {
                this.ViewDetails = null;
                this.selected_index = this.selected_index + 1;
                this.ViewDetails = this.studentSubmissionList[this.selected_index];
            },
            GotoPrevStudent() {
                this.ViewDetails = null;
                this.selected_index = this.selected_index - 1;;
                this.ViewDetails = this.studentSubmissionList[this.selected_index];
            },
            isNotViewing() {
                this.ViewDetails = null;
                this.selected_index = null;
                this.dialog = false;
                this.Viewdialog = false;
                this.$store.dispatch("isNotViewingSubmission");
            },
            ResetSubmission() {

                this.studentSubmissionList.forEach(item => {
                    if (item.id == this.selected_id) {
                        item.status = null;
                        item.points = 0;
                        item.Submitted_Answers = null;
                    }
                });

                /*   this.studentSubmissionList[this.selected_index].status = null;
                    this.studentSubmissionList[this.selected_index].points = 0;
                    this.studentSubmissionList[this.selected_index].Submitted_Answers = null; */
                //this.dialog = !this.dialog;
            },
            MultipleResetSubmission(data) {
                axios.post('/api/teacher/resetStudentSubmissions', data)
                    .then(() => {
                        data.forEach(item => {
                            this.studentSubmissionList.forEach(sb => {
                                if (item.id == sb.id) {
                                    sb.status = null;
                                    sb.points = 0;
                                    sb.Submitted_Answers = null;
                                }
                            });
                        });
                        this.resetdialog = !this.resetdialog
                    })
            },
            ShowLoading() {
                this.isFiltered = true;
                setTimeout(() => (this.isFiltered = false), 400);
            },
            FilteredClass() {
                this.Over_total = 0;
                this.Submitted_count = 0;
                this.ShowLoading();
                //if(this.Class != this.$route.params.id){
                this.ListData.forEach(item => {
                    if (item.class_id == this.Class) {
                        this.Over_total++;
                        if (item.status == 'Submitted') {
                            this.Submitted_count++;
                        }
                    }
                });
                //}

            }

        },
    }

</script>
