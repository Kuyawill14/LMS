<template>

   <v-card  >

       <v-container class="fill-height" v-if="isLoading" style="height: 400px;">
        <v-row  align-content="center" justify="center">
            <v-col class="text-subtitle-1 text-center" cols="12">
                Loading
            </v-col>
            <v-col cols="6">
                <v-progress-linear color="primary" indeterminate rounded height="5"></v-progress-linear>
            </v-col>
        </v-row>
        </v-container>

  
         <v-form v-if="!isLoading" ref="publishForm" v-model="valid" lazy-validation>
            <v-card-title>
                  <v-btn icon large color="secondary" @click="$emit('toggleDialog')" :disabled="loading">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <span class="h6">Publish to <span class="primary--text">"{{Details.class_name}}"</span></span>
            </v-card-title>
            <v-card-text>
                <v-container mb-0 pb-0 >
                    <v-row>
                        <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12">
                            <v-select
                                dense
                                hide-details
                                :rules="FieldRules"
                                :items="GradingItems"
                                item-text="value"
                                v-model="PublishDetails.grading_criteria"
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

                        <v-col  ma-0 pa-0 class="text-left mb-0 pb-0 " cols="12">
                               <div class="subtitle-1 mb-1">Availability:</div>
                        </v-col>

                        <v-col  ma-0 pa-0 class="text-left mb-0 pb-0" cols="12">
                                <v-radio-group :rules="rules" hide-details class="ml-2 mt-0 pt-0 mb-0 pb-0" v-model="availability">
                                <v-radio
                                    v-for="(n, index) in InputAvailability"
                                    :key="index"
                                    :label="InputAvailability[index]"
                                    :value="InputAvailability[index]"
                                ></v-radio>
                                </v-radio-group>
                        </v-col>

                         <v-col v-if="availability == 'Set date & time'"  class="mb-0 pb-0 "  cols="12">
                             <v-row class="mt-0 pt-0 mb-0 pb-0">
                                 <v-col cols="6" class="mt-0 pt-0 mb-0 pb-0">
                                      <v-datetime-picker label="From"
                                 
                                        v-model="PublishDetails.from_date"
                                        class="mt-0 pt-0"
                                        @input="setToDateStart()"
                                        :text-field-props="textFieldProps"
                                        :date-picker-props="FromdateProps"
                                        :time-picker-props="FromtimeProps"
                                        time-format="HH:mm"
                                        color="primary"
                                        > 
                                    </v-datetime-picker>
                                
                                 </v-col>
                                 <v-col cols="6" class="mt-0 pt-0 mb-0 pb-0">
                                     <v-datetime-picker label="To"
                                        v-model="PublishDetails.to_date"
                                        class="Datetimepicker"
                                        :text-field-props="textFieldProps"
                                        :date-picker-props="TodateProps"
                                        :time-picker-props="TotimeProps"
                                        color="primary"
                                        > 
                                    </v-datetime-picker>
                                 </v-col>
                                <v-col class="text-left pb-0 mb-0 mt-0 pt-0" cols="12">
                                    <v-checkbox
                                    class="pa-0 ma-0"
                                    v-model="PublishDetails.response_late"
                                    label="Allow late submission"
                                    ></v-checkbox>    
                                </v-col>
                             </v-row>
                           
                            </v-col>

                             <v-col class="text-left pb-0 mb-0 pt-2 mt-0" cols="12">
                                 <v-divider></v-divider>
                                <!-- <v-checkbox
                                    class="pa-0 ma-0"
                                    v-model="PublishDetails.reviewAnswer"
                                    label="Enable Review Answer After Submit"
                                    ></v-checkbox> -->
                                     <v-switch
                                    hide-details
                                    v-model="PublishDetails.reviewAnswer"
                                    label="Review answer after submit"
                                    ></v-switch>
                            </v-col>
                            <v-col v-if="PublishDetails.reviewAnswer" ma-0 pa-0 class="text-left mb-0 pb-0 mt-0 pt-0 mt-2" cols="12">
                                <v-checkbox
                                     hide-details
                                    class="pa-0 ma-0 ml-11"
                                    v-model="PublishDetails.showAnswer"
                                    label="Show Correct Answer"
                                    ></v-checkbox>
                                </v-col>

                             <v-col v-if="PublishDetails.showAnswer"  ma-0 pa-0 class="text-left pl-8 mb-0 pb-0 mt-0 pt-0 " cols="12">
                               

                                <v-radio-group :rules="rules" hide-details class="ml-12 mt-1 pt-0 mb-0 pb-0" v-model="showAnsType">
                                <v-radio
                                    v-for="(n, index) in InputShowAnswer"
                                    :key="index"
                                    :label="InputShowAnswer[index]"
                                    :value="InputShowAnswer[index]"
                                ></v-radio>
                                </v-radio-group>
                            </v-col>

                            <v-col v-if="showAnsType == 'Set Date'"  class="pt-0 mt-0 pb-0 mb-0" cols="12">
                                <v-row class="mt-0 pt-0">
                                    <v-col cols="6" class="mt-0 pt-0">
                                         <v-datetime-picker label="From"
                                            v-model="PublishDetails.showDateFrom"
                                            class="mt-0 pt-0"
                                            @input="setShowAnswerToDateStart()"
                                            :text-field-props="textFieldProps"
                                            :date-picker-props="FromdateAnswerProps"
                                            :time-picker-props="FromtimeAnswerProps"
                                            time-format="HH:mm"
                                            color="primary"
                                            > 
                                        </v-datetime-picker>
                                    </v-col>

                                     <v-col cols="6" class="mt-0 pt-0">
                                          <v-datetime-picker label="To"
                                        v-model="PublishDetails.showDateTo"
                                        class="mt-0 pt-0"
                                        :disabled="PublishDetails.showDateFrom == null"
                                        :text-field-props="textFieldProps"
                                        :date-picker-props="TodateAnswerProps"
                                        :time-picker-props="TotimeAnswerProps"
                                        time-format="HH:mm"
                                        color="primary"
                                        > 
                                        </v-datetime-picker>
                                    </v-col>
                                </v-row>
                            
                            </v-col>
                            

                           
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions class="pb-5 pl-5 pr-5">
                  <v-btn rounded block color="primary" :loading="isPublishing"  @click="validate()" :disabled="loading">
                    Update
                </v-btn>
               
            </v-card-actions>
        </v-form> 

    </v-card>

</template>
<script>
import moment from 'moment-timezone';
export default {
    props:['Details'],
    data(){
        return{
            InputAvailability:['Always available','Set date & time','Unavailable'],
            InputShowAnswer:['After Classwork Done', 'Set Date'],
            valid: false,
            ClassDetails:{},
            PublishDetails: [],
            loading:false,
            duedate:null,
            ShowAnswerDate: null,
            datetime: new Date(),
            datetimeString: '2021-01-01 12:00',
            formattedDatetime: '09-01-2021 12:00',
            textFieldProps: {
                appendIcon: 'event'
            },
            dateProps: {
                headerColor: 'primary',
                min: moment(Date.now()).format('YYYY-MM-DD')
            },
            FromdateProps: {
                headerColor: 'primary',
                min: moment(Date.now()).format('YYYY-MM-DD')
            },
            FromdateAnswerProps: {
                headerColor: 'primary',
                min: moment(Date.now()).format('YYYY-MM-DD')
            },
            TodateProps: {
                headerColor: 'primary',
                min: moment(Date.now()).format('YYYY-MM-DD')
            },
            TodateAnswerProps: {
                headerColor: 'primary',
                min: moment(Date.now()).format('YYYY-MM-DD')
            },

            timeProps: {
                useSeconds: false,
                ampmInTitle: true
            },
            FromtimeProps: {
                useSeconds: false,
                ampmInTitle: true,
                min: null
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
            ReviewAns: false,
            EnableDue: false,
            response_late:false,
            availability: null,
            availability_date: null,
            showAnsType: null,
            GradingCriteria_id:'',
            GradingItems:[],
            FieldRules: [
                v => !!v || 'Field is required',
            ],
            isPublishing: false,
            isLoading: true,
            rules: [
                v => !!v || 'Field is required',
            ],
        }
    },
    methods:{
         validate () {
            this.isPublishing = !this.isPublishing;
            if(this.$refs.publishForm.validate()){
                this.UpdateShareClassworkDetails();
            }
            else{
                setTimeout(() => {
                   this.isPublishing = !this.isPublishing;
                }, 1000);
            }
        },

        setToDateStart(){
            this.PublishDetails.to_date = moment(this.PublishDetails.from_date).format('YYYY-MM-DD hh:mm');
            this.TodateProps.min = moment(this.PublishDetails.from_date).format('YYYY-MM-DD');
            this.TotimeProps.min = moment(this.PublishDetails.from_date).format('hh:mm');
        },

        setShowAnswerToDateStart(){
            this.PublishDetails.showDateTo = moment(this.PublishDetails.showDateFrom).format('YYYY-MM-DD hh:mm');
            this.TodateAnswerProps.min = moment(this.PublishDetails.showDateFrom).format('YYYY-MM-DD');
            this.TotimeAnswerProps.min = moment(this.PublishDetails.showDateFrom).format('hh:mm');
        },
      
        async UpdateShareClassworkDetails(){
            
            this.PublishDetails.from_date =  moment(this.PublishDetails.from_date).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            this.PublishDetails.to_date = moment(this.PublishDetails.to_date).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
             this.PublishDetails.showDateFrom =  moment(this.PublishDetails.showDateFrom).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            this.PublishDetails.showDateTo = moment(this.PublishDetails.showDateTo).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
            this.PublishDetails.availability = this.availability;
            this.PublishDetails.showAnswerType = this.showAnsType;
            axios.put('/api/classwork/UpdatePublish/'+this.PublishDetails.id, this.PublishDetails)
            .then(res=>{
                if(res.status == 200){
                    this.$emit('successPublish')
                    this.isPublishing = !this.isPublishing;
                }
            })
        },
        async getGradingCriteria(){
            axios.get('/api/grading-criteria/all/'+this.$route.params.id)
            .then(res=>{
                this.GradingItems = res.data;
            })
            
        },
        async getPublishDetails(){
            axios.get('/api/classwork/publishClassworkDetails/'+this.Details.classwork_id)
            .then(res=>{

                this.PublishDetails = res.data;
                this.availability = this.PublishDetails.availability == 1 ? 'Set date & time' : this.PublishDetails.availability == 2 ? 'Unavailable' : 'Always available';
                this.showAnsType = this.PublishDetails.showAnswerType != null ? 
                this.showAnsType = this.PublishDetails.showAnswerType ? 'Set Date' : 'After Classwork Done' : 
                this.showAnsType = '';
                this.PublishDetails.from_date =  moment(this.PublishDetails.from_date).tz("Asia/Manila").format('YYYY-MM-DD HH:mm');
                this.PublishDetails.to_date = moment(this.PublishDetails.to_date).tz("Asia/Manila").format('YYYY-MM-DD HH:mm');

                this.PublishDetails.showDateFrom =  moment(this.PublishDetails.showDateFrom).tz("Asia/Manila").format('YYYY-MM-DD HH:mm');
                this.PublishDetails.showDateTo = moment(this.PublishDetails.showDateTo).tz("Asia/Manila").format('YYYY-MM-DD HH:mm');
                this.isLoading = !this.isLoading;
            })
        }
    },
    mounted(){
        this.getGradingCriteria();
        this.getPublishDetails();
       
        
    }
}
</script>