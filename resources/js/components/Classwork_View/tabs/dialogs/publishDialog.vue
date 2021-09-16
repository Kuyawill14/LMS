<template>
   <v-card >
        <v-form ref="publishForm" v-model="valid" lazy-validation>
            <v-card-title>
                <v-btn  large icon color="secondary" text @click="$emit('toggleDialog')" :disabled="loading">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <span class="h6">Publish to <span class="primary--text">"{{ClassDetails.class_name}}"</span></span>
            </v-card-title>
            <v-card-text>
                <v-container >
                    <v-row>
                        <v-col   class="pb-0 mb-0 mt-0 pt-0" cols="12">
                            <v-select
                            class="mb-0 pb-0"
                                dense
                                :rules="FieldRules"
                                :items="GradingItems"
                                item-text="value"
                                v-model="GradingCriteria_id"
                                item-value="id"
                                outlined
                                label="Grading Criteria"
                                >
                                <template slot="selection" slot-scope="data">
                                    {{ data.item.name }} - {{ data.item.percentage+'%'}}
                                </template>
                                <template slot="item" slot-scope="data">
                                    {{ data.item.name }} - {{ data.item.percentage+'%' }}
                                </template>
                            </v-select>
                       </v-col>

                        <v-col ma-0 pa-0 class="text-left pb-0 mb-" cols="12">
                            <div class="subtitle-1 mb-1">Availability:</div>
                        </v-col>

                        <v-col  ma-0 pa-0 class="text-left pb-0 mb-" cols="12">
                               <!--  <v-container ma-0 pa-0 class="d-flex">
                                <v-checkbox
                                class="pa-0 ma-0"
                                v-model="EnableDue"
                                label="Always Available"
                                ></v-checkbox>
                                </v-container> -->

                                <v-radio-group class="ml-3 mt-0 pt-0 mb-0 pb-0" v-model="availability">
                                <v-radio
                                    v-for="(n, index) in InputAvailability"
                                    :key="index"
                                    :label="InputAvailability[index]"
                                    :value="InputAvailability[index]"
                                ></v-radio>
                                </v-radio-group>
                        </v-col>
                   
                       <!--  <v-col  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                <v-container ma-0 pa-0 class="d-flex">
                                <v-checkbox
                                class="pa-0 ma-0"
                                v-model="EnableDue"
                                label="Set Date"
                                ></v-checkbox>
                                </v-container>
                        </v-col> -->

                         <v-col v-if="availability == 'Set Date'"  class="pb-0 mb-"  cols="12">
                             <v-row class="mt-0 pt-0">
                                 <v-col cols="6" class="mt-0 pt-0 mb-0 pb-0">
                                      <v-datetime-picker label="From"
                                        v-model="from_date"
                                        class="mt-0 pt-0"
                                        date-format="MM/dd/yyyy"
                                        time-format="HH:mm"
                                        color="primary"
                                        > 

                                        <template slot="dateIcon">
                                            <v-icon>mdi-calendar</v-icon>
                                        </template>
                                        <template slot="timeIcon">
                                            <v-icon>mdi-clock</v-icon>
                                        </template>
                                    </v-datetime-picker>
                                   

                                     <!-- <v-text-field
                                    ref="FromDate"
                                    :rules="FieldRules"
                                    class="pa-0 ma-0"
                                    v-model="from_date"
                                    outlined
                                    label="From" type="datetime-local" >
                                    </v-text-field> -->
                                 </v-col>
                                 <v-col cols="6" class="mt-0 pt-0 mb-0 pb-0">
                                     <v-datetime-picker label="To"
                                        v-model="to_date"
                                        class="Datetimepicker"
                                        date-format="MM/dd/yyyy"
                                     
                                        time-format="HH:mm"
                                        color="primary"
                                        >
                                        <template slot="dateIcon">
                                            <v-icon>mdi-calendar</v-icon>
                                        </template>
                                        <template slot="timeIcon">
                                            <v-icon>mdi-clock</v-icon>
                                        </template>
                                    </v-datetime-picker>
                                   <!--  <v-text-field
                                    :rules="FieldRules"
                                    class="DateTime "
                                    v-model="to_date"
                                    outlined
                          dense
                                    label="To" type="datetime-local" >
                                    </v-text-field> -->
                                 </v-col>

                                   <v-col cols="12" class="mt-0 pt-0">
                                    <v-checkbox
                                    class="pa-0 ma-0"
                                    v-model="response_late"
                                    label="Accept late response"
                                    ></v-checkbox>    
                                </v-col>
                             </v-row>
                           
                            </v-col>
                             <v-col class="text-left pb-0 mb-0" cols="12">
                                <v-checkbox
                                    class="pa-0 ma-0"
                                    v-model="ReviewAnswer"
                                    label="Enable Review Answer After Submit"
                                    ></v-checkbox>
                                </v-col>
                            
                            <v-col v-if="ReviewAnswer"  ma-0 pa-0 class="text-left pb-0 mb-0 mt-0 pt-0" cols="12">
                                <v-checkbox
                                    class="pa-0 ma-0"
                                    v-model="showAns"
                                    label="Show Correct Answer"
                                    ></v-checkbox>
                                </v-col>

                             <v-col v-if="showAns"  class="text-left pa-0 ma-0" cols="12">
                                <v-radio-group class="ml-3 mt-0 pt-0 mb-0 pb-0" v-model="showAnsType">
                                <v-radio
                                    v-for="(n, index) in InputShowAnswer"
                                    :key="index"
                                    :label="InputShowAnswer[index]"
                                    :value="InputShowAnswer[index]"
                                ></v-radio>
                                </v-radio-group>
                            </v-col>

                            <v-col v-if="showAnsType == 'Set Date'"  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                <v-row>
                                    <v-col cols="6">
                                         <v-datetime-picker label="From"
                                            
                                            v-model="ShowAnswerDateFrom"
                                            class="mt-0 pt-0"
                                            date-format="MM/dd/yyyy"
                                            time-format="HH:mm"
                                            color="primary"
                                            > 
                                             <template slot="dateIcon">
                                            <v-icon>mdi-calendar</v-icon>
                                            </template>
                                            <template slot="timeIcon">
                                                <v-icon>mdi-clock</v-icon>
                                            </template>
                                        </v-datetime-picker>
                                    </v-col>

                                     <v-col cols="6">
                                        <v-datetime-picker label="To"
                                        v-model="ShowAnswerDateTo"
                                        class="mt-0 pt-0"
                                        date-format="MM/dd/yyyy"
                                        time-format="HH:mm"
                                        color="primary"
                                        > 
                                         <template slot="dateIcon">
                                            <v-icon>mdi-calendar</v-icon>
                                        </template>
                                        <template slot="timeIcon">
                                            <v-icon>mdi-clock</v-icon>
                                        </template>
                                        </v-datetime-picker>
                                    </v-col>
                                </v-row>
                               
                            </v-col>
                            

                           
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions class="pb-2 pl-5 pr-5">
               
               
                <v-btn rounded block color="primary" :loading="isPublishing"  @click="validate()" :disabled="loading">
                    Publish
                </v-btn>
               <!--   <v-btn  rounded color="secondary" text @click="$emit('toggleDialog')" :disabled="loading">
                    Cancel
                </v-btn> -->
            </v-card-actions>
        </v-form>
    </v-card>
</template>
<script>
import moment from 'moment-timezone';
export default {
    props:['Details', 'datetoday'],
  
    data(){
        return{
            InputAvailability:['Always Available', 'Set Date','Unavailable'],
            InputShowAnswer:['After Classwork Done', 'Set Date'],
            valid: false,
            ClassDetails:{},
            loading:false,
            duedate:null,
            ShowAnswerDateFrom: this.datetoday,
            ShowAnswerDateTo:this.datetoday,
            from_date: this.datetoday,
            to_date: this.datetoday,
            datetimeString: '2021-08-31 12:00',
            formattedDatetime: '08/31/2021 12:00',
            textFieldProps: {
                appendIcon: 'event'
            },
            dateProps: {
                headerColor: 'primary'
            },
            timeProps: {
                useSeconds: true,
                ampmInTitle: true
            },
            showAns: false,
            ReviewAnswer: false,
            EnableDue: false,
            response_late:false,
            availability: null,
            availability_date: null,
            showAnsType:'After Classwork Done',
            GradingCriteria_id:'',
            GradingItems:[],
            FieldRules: [
                v => !!v || 'Field is required',
            ],
            isPublishing: false,
            test: '',
            
        }
    },
    methods:{

         validate () {
            this.isPublishing = !this.isPublishing;
            if(this.$refs.publishForm.validate()){
                this.shareClasswork();
            }
            else{
                setTimeout(() => {
                   this.isPublishing = !this.isPublishing;
                }, 1000);
            }
        },
        async shareClasswork() {
            const fd = new FormData();
            let form = {};
            form.classwork_id = this.ClassDetails.id;
            form.class_id = this.ClassDetails.class_id;
            form.availability = this.availability;
            form.from_date = moment(this.PublishDetails.from_date).tz("Asia/Manila").format('YYYY-MM-DD HH:MM:SS');
            form.to_date = moment(this.PublishDetails.to_date).tz("Asia/Manila").format('YYYY-MM-DD HH:MM:SS');
            form.showAnswer = this.showAns;
            form.ReviewAnswer = this.ReviewAnswer
            form.showAnswerType = this.showAnsType;
            form.showAnswerDateFrom = moment(this.PublishDetails.ShowAnswerDateFrom).tz("Asia/Manila").format('YYYY-MM-DD HH:MM:SS');
            form.showAnswerDateTo = moment(this.PublishDetails.ShowAnswerDateTo).tz("Asia/Manila").format('YYYY-MM-DD HH:MM:SS');
            form.response_late = this.response_late;
            form.grading_id = this.GradingCriteria_id;

            /* fd.append("classwork_id", this.ClassDetails.id);
            fd.append("class_id", this.ClassDetails.class_id);
            fd.append("availability", this.availability);
            fd.append("from_date", moment(this.from_date).format("YYYY-MM-DD HH:MM:SS"));
            fd.append("to_date", moment(this.to_date).format("YYYY-MM-DD HH:MM:SS"));
            fd.append("showAnswer", this.showAns);
            fd.append("showAnswerType", this.showAnsType);
            fd.append("showAnswerDateFrom", moment(this.ShowAnswerDateFrom).format("YYYY-MM-DD HH:MM:SS"));
            fd.append("showAnswerDateTo", moment(this.ShowAnswerDateTo).format("YYYY-MM-DD HH:MM:SS"));
            fd.append("response_late", this.response_late);
            fd.append("grading_id", this.GradingCriteria_id); */
            axios.post('/api/classwork/share', form)
                .then(res => {
                    if(res.dat != 'Unshare'){
                        let tmpDue = res.data.availability == 1 ? 'Due '+moment(this.to_date).format("MMMM D")+' at '+moment(this.to_date).format("h:mm a") : '';
                        res.data.to_date = tmpDue;
                        this.$emit('successPublish', res.data)
                         this.toastSuccess("Classwork Successfully publish");
                         this.isPublishing = !this.isPublishing;
                    }
                    else{
                        this.$emit('UnPublish')
                    }
                    
                }).catch(e => {
                    //console.log(e);
                })
        },
        async getPublishDetails(){
            let newDate = new Date();
            this.duedate = moment(newDate).format("YYYY-MM-DDTHH:mm:ss");
            this.ClassDetails = this.Details;
           /*  this.ShowAnswerDate =  this.duedate;
            this.from_date =  this.duedate;
            this.to_date =  this.duedate; */
        },
        async getGradingCriteria(){
            axios.get('/api/grading-criteria/all/'+this.$route.params.id)
            .then(res=>{
                this.GradingItems = res.data;
            })
            
        },
        
    },
    mounted(){
        this.getGradingCriteria();
        this.getPublishDetails();
    }
}
</script>
<style>
   v-text-field[type="date"]::-webkit-inner-spin-button,
    v-text-field[type="date"]::-webkit-calendar-picker-indicator {
        display: none !important;
        -webkit-appearance: none !important;
    }
    
</style>