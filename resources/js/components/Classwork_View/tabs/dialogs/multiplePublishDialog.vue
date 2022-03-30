<template>
   <v-card >
        <v-form ref="publishForm" v-model="valid" lazy-validation>
            <v-card-title>
                <v-btn  large icon color="secondary" text @click="$emit('toggleCancelDialog')" :disabled="loading">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <span class="h6">Publish Classwork</span>
            </v-card-title>
           
            <v-card-text>
                <v-container mb-0 pb-0>
                    <v-row>
                        <v-col   class="pb-0 mb-0 mt-0 pt-0" cols="12">
                            <v-select
                            class="mb-0 pb-0"
                                dense
                                multiple
                                :rules="FieldRules"
                                :items="multiplePublishDetails.classes"
                                item-text="class_name"
                                v-model="classes_id"
                                item-value="class_id"
                                outlined
                                label="Class"
                                >
                                
                            </v-select>
                       </v-col>
                        <v-col   class="pb-0 mb-0 mt-0 pt-0" cols="12">
                            <v-select
                            class="mb-0 pb-0"
                                dense
                                hide-details
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

                        <v-col ma-0 pa-0 class="text-left pb-0 mb-0" cols="12">
                            <div class="subtitle-1">Availability:</div>
                        </v-col>

                        <v-col  ma-0 pa-0 class="text-left pb-0 mb-0" cols="12">
                               <!--  <v-container ma-0 pa-0 class="d-flex">
                                <v-checkbox
                                class="pa-0 ma-0"
                                v-model="EnableDue"
                                label="Always Available"
                                ></v-checkbox>
                                </v-container> -->

                                <v-radio-group :rules="rules" hide-details class="ml-2 mt-0 pt-0 mb-0 pb-0" v-model="availability">
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

                         <v-col v-if="availability == 'Set date & time'"  class="pb-0 mb-0"  cols="12">
                             <v-row class="mt-0 pt-0 mb-0 pb-0">
                                 <v-col cols="6" class="mt-0 pt-0 mb-0 pb-0">
                                      <v-datetime-picker label="From"
                                        v-model="from_date"
                                        class="mt-0 pt-0"
                                        @input="setToDateStart()"
                                        :text-field-props="textFieldProps"
                                        :date-picker-props="FromdateProps"
                                        :time-picker-props="FromtimeProps"
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
                                        :disabled="from_date == null"
                                        class="Datetimepicker"
                                        :text-field-props="textFieldProps"
                                        :date-picker-props="TodateProps"
                                        :time-picker-props="TotimeProps"
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

                                   <v-col cols="12" class="mt-0 pt-0 ">
                                    <v-checkbox
                                    hide-details
                                    class="pa-0 ma-0"
                                    v-model="response_late"
                                    label="Allow late submission"
                                    ></v-checkbox>    
                                </v-col>
                             </v-row>
                           
                            </v-col>
                             <v-col v-if="multiplePublishDetails.type == 'Objective Type'" class="text-left pb-0 mb-0 mt-0 pt-2" cols="12">
                                 <v-divider></v-divider>
                                    <v-switch
                                  
                                    hide-details
                                    v-model="ReviewAnswer"
                                    label="Review answer after submit"
                                    ></v-switch>
                                </v-col>

                            
                            <v-col v-if="ReviewAnswer"  class="text-left  pb-0 mb-0 mt-0 pt-0" cols="12">
                                <v-checkbox
                                    hide-details
                         
                                    class="pa-0 ma-0 ml-10"
                                    v-model="showAns"
                                    label="Show Correct Answer"
                                    ></v-checkbox>
                                </v-col>

                             <v-col v-if="showAns"  class="text-left pl-7 pa-0 ma-0" cols="12">
                                <v-radio-group :rules="rules" class="ml-12 mt-0 pt-0 mb-0 pb-0" v-model="showAnsType">
                                <v-radio
                                    v-for="(n, index) in InputShowAnswer"
                                    :key="index"
                                    :label="InputShowAnswer[index]"
                                    :value="InputShowAnswer[index]"
                                ></v-radio>
                                </v-radio-group>
                            </v-col>

                            <v-col v-if="showAnsType == 'Set Date'" class="pt-0 mt-0 pb-0 mb-0" cols="12">
                                <v-row>
                                    <v-col cols="6">
                                         <v-datetime-picker label="From"
                                            v-model="showAnswerDateFrom"
                                            @input="setShowAnswerToDateStart()"
                                            class="mt-0 pt-0"
                                            :text-field-props="textFieldProps"
                                            :date-picker-props="FromdateAnswerProps"
                                            :time-picker-props="FromtimeAnswerProps"
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
                                        :disabled="showAnswerDateFrom == null"
                                        :text-field-props="textFieldProps"
                                        :date-picker-props="TodateAnswerProps"
                                        :time-picker-props="TotimeAnswerProps"
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
    props:['multiplePublishDetails','datetoday'],
  
    data(){
        return{
            InputAvailability:['Always available','Set date & time','Unavailable'],
            InputShowAnswer:['After Classwork Done', 'Set Date'],
            valid: false,
            ClassDetails:{},
            loading:false,
            duedate:null,
            showAnswerDateFrom: null,
            ShowAnswerDateTo:null,
            from_date: null,
            to_date: null,
            datetimeString: '2021-01-01 12:00',
            formattedDatetime: '09-01-2021 12:00',
            textFieldProps: {
                appendIcon: 'event'
            },
            dateProps: {
                headerColor: 'primary',
                min: moment(this.datetoday).tz("Asia/Manila").format('YYYY-MM-DD')
            },
            FromdateProps: {
                headerColor: 'primary',
                min: moment(this.datetoday).tz("Asia/Manila").format('YYYY-MM-DD')
            },

            FromdateAnswerProps: {
                headerColor: 'primary',
                min: moment(this.datetoday).tz("Asia/Manila").format('YYYY-MM-DD')
            },
            TodateProps: {
                headerColor: 'primary',
                min: moment(this.datetoday).tz("Asia/Manila").format('YYYY-MM-DD')
            },
            TodateAnswerProps: {
                headerColor: 'primary',
                min: moment(this.datetoday).tz("Asia/Manila").format('YYYY-MM-DD')
            },
            FromtimeProps: {
                useSeconds: false,
                ampmInTitle: true,
                min: moment(this.datetoday).tz("Asia/Manila").format('h:mm')
            },
            FromtimeAnswerProps: {
                useSeconds: false,
                ampmInTitle: true,
                min: null
            },
            TotimeProps: {
                useSeconds: false,
                ampmInTitle: true,
                min: null
            },
            TotimeAnswerProps: {
                useSeconds: false,
                ampmInTitle: true,
                min: null
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
            disabledDates: {
                to: new Date(Date.now() - 8640000)
            },
            rules: [
                v => !!v || 'Field is required',
            ],
            classes_id:[],
            
        }
    },
    methods:{

         validate () {
            this.isPublishing = !this.isPublishing;
            if(this.$refs.publishForm.validate()){
               /*  if(this.availability == 'Set Date'){
                     if(this.from_date == null && this.to_date == null){
                     this.toastError('Please set the From date and To date value!');
                    }
                    else if(this.from_date == null && this.to_date != null){
                        this.toastError('Please set the From date value!');
                    }
                    else if(this.from_date != null && this.to_date == null){
                        this.toastError('Please set the To date value!');
                    }
                    else if(this.from_date != null && this.to_date != null){
                        this.shareClasswork();
                    }   
                }
                else if(this.availability == 'Always Available'){
                    this.shareClasswork();
                }
                else if(this.availability == 'Unavailable'){ */
                     this.shareClasswork();
                //}
            }
            else{
                setTimeout(() => {
                   this.isPublishing = !this.isPublishing;
                }, 1000);
            }
        },
        setToDateStart(){
            this.to_date = moment(this.from_date).tz("Asia/Manila").format('YYYY-MM-DD h:mm');
            this.TodateProps.min = moment(this.from_date).tz("Asia/Manila").format('YYYY-MM-DD');
            this.TotimeProps.min = moment(this.from_date).tz("Asia/Manila").format('h:mm');
        },

        setShowAnswerToDateStart(){
            this.ShowAnswerDateTo = moment(this.showAnswerDateFrom).tz("Asia/Manila").format('YYYY-MM-DD hh:mm');
            this.TodateAnswerProps.min = moment(this.showAnswerDateFrom).tz("Asia/Manila").format('YYYY-MM-DD');
            this.TotimeAnswerProps.min = moment(this.showAnswerDateFrom).tz("Asia/Manila").format('hh:mm');

        },
        shareClasswork(){
            if(this.availability == 'Set date & time'){
                let from_date = new Date(this.from_date).getTime();
                let to_date = new Date(this.to_date).getTime();
            
                if(from_date < to_date){
                    this.startSharing();
                }
                else{
                    this.isPublishing = !this.isPublishing;
                    this.toastError('Ivalid due date')
                }
            }
            else{
                this.startSharing();
            }
            
         
        },
        async startSharing() {

            
            const fd = new FormData();
            let form = {};
            form.classwork_id = this.multiplePublishDetails.id;
            form.class_id = this.classes_id;
            form.availability = this.availability;
            form.from_date = moment(this.from_date).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            form.to_date = moment(this.to_date).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            form.showAnswer = this.showAns;
            form.ReviewAnswer = this.ReviewAnswer
            form.showAnswerType = this.showAnsType;
            form.showAnswerDateFrom = moment(this.showAnswerDateFrom).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            form.showAnswerDateTo = moment(this.ShowAnswerDateTo).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            form.response_late = this.response_late;
            form.grading_id = this.GradingCriteria_id;



            axios.post('/api/classwork/multiple_share', form)
                .then(res => {
                    if(res.data != 'Unshare'){
                        res.data.forEach(item => {
                            let tmpDue = item.availability == 1 ? 'Due '+moment(this.to_date).tz("Asia/Manila").format("MMMM D, YYYY")+' at '+moment(this.to_date).format("h:mm a") : '';
                            item.to_date = tmpDue;
                        });
                        this.$emit('successMultiplePublish', res.data)
                         this.toastSuccess("Classwork Successfully publish");
                         this.isPublishing = !this.isPublishing;
                    }
                    else{
                        this.$emit('UnPublish')
                    }
                    
                }).catch(e => {
                    ////console.log(e);
                })
        },
        async getPublishDetails(){
            let newDate = new Date();
            this.duedate = moment(newDate).format('YYYY-MM-DD HH:mm:ss');
            this.ClassDetails = this.Details;
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
        this.from_date = moment(this.datetoday).tz("Asia/Manila").format('YYYY-MM-DD h:mm');
        this.TodateProps.min = moment(this.from_date).tz("Asia/Manila").format('YYYY-MM-DD');
        this.TotimeProps.min = moment(this.from_date).tz("Asia/Manila").format('h:mm');
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