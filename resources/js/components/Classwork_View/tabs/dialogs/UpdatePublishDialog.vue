<template>

   <v-card  style="border-top:3px solid #EF6C00">

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
                <span class="headline">Publish to <span class="primary--text">"{{Details.class_name}}"</span></span>
            </v-card-title>
            <v-card-text>
                <v-container >
                    <v-row>
                        <v-col  ma-0 pa-0 class="pa-0 ma-0" cols="12">
                            <v-select
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

                        <v-col  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                <v-container ma-0 pa-0 class="d-flex">
                                <v-checkbox
                                class="pa-0 ma-0"
                                v-model="PublishDetails.availability"
                                label="Availability"
                                ></v-checkbox>
                                </v-container>
                        </v-col>

                        <v-col  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                <v-container ma-0 pa-0 class="d-flex">
                                <v-checkbox
                                class="pa-0 ma-0"
                                v-model="PublishDetails.enable_due"
                                label="Enable Due Date"
                                ></v-checkbox>
                                </v-container>
                        </v-col>

                         <v-col v-if="PublishDetails.enable_due" ma-0 pa-0 class="pa-0 ma-0"  cols="12">
                         <!--    <v-datetime-picker label="Due Date"
                                class="outlined"
                                v-model="datetime"
                                :text-field-props="textFieldProps"
                                :date-picker-props="dateProps"
                                :time-picker-props="timeProps"
                                time-format="HH:mm:ss"
                                color="primary"
                                > 
                            </v-datetime-picker> -->
                            <v-text-field
                                :rules="FieldRules"
                                class="pa-0 ma-0"
                                :value="format_date(PublishDetails.due_date)"
                                ref="due_date"
                                outlined
                                label="Due Date" type="datetime-local"  required>
                                </v-text-field>
                            </v-col>

                            
                            <v-col  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                <v-checkbox
                                    class="pa-0 ma-0"
                                    v-model="PublishDetails.showAnswer"
                                    label="Show correct answer"
                                    ></v-checkbox>
                            </v-col>

                             <v-col v-if="showAns"  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                <v-select
                                style="width:100%"
                                v-model="showAnsType"
                                class="pa-0 ma-0"
                                :items="['After Classwork Done', 'Set Date']"
                                outlined
                                ></v-select> 
                            </v-col>

                            <v-col v-if="showAnsType == 'Set Date'"  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                 <v-text-field
                                :rules="FieldRules"
                                v-if="showAnsType == 'Set Date'"
                                class="pa-0 ma-0"
                                v-model="ShowAnswerDate"
                                outlined
                                label="Date" type="datetime-local"  required>
                                </v-text-field>       
                            </v-col>
                             <v-col  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                
                            
                                <v-checkbox
                                class="pa-0 ma-0"
                                v-model="PublishDetails.response_late"
                                label="Accept late response"
                                ></v-checkbox>    
                          
                        </v-col>

                           
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions class="pb-5">
                <v-spacer></v-spacer>
               
                <v-btn rounded  color="primary" :loading="isPublishing" text  @click="validate()" :disabled="loading">
                    Update
                </v-btn>
                 <v-btn  rounded color="secondary" text @click="$emit('toggleDialog')" :disabled="loading">
                    Cancel
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card>

</template>
<script>
import moment from 'moment';
export default {
    props:['Details'],
    data(){
        return{
            valid: false,
            ClassDetails:{},
            PublishDetails: [],
            loading:false,
            duedate:null,
            ShowAnswerDate: null,
            datetime: new Date(),
            datetimeString: '2019-01-01 12:00',
            formattedDatetime: '09/01/2019 12:00',
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
            EnableDue: false,
            response_late:false,
            availability: false,
            availability_date: null,
            showAnsType:'After Classwork Done',
            GradingCriteria_id:'',
            GradingItems:[],
            FieldRules: [
                v => !!v || 'Field is required',
            ],
            isPublishing: false,
            isLoading: true,
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
            fd.append("classwork_id", this.ClassDetails.id);
            fd.append("class_id", this.ClassDetails.class_id);
            fd.append("EnableDue", this.EnableDue);
            fd.append("due_date", this.duedate);
            fd.append("showAnswer", this.showAns);
            fd.append("showAnswerType", this.showAnsType);
            fd.append("showAnswerDate", this.ShowAnswerDate);
            fd.append("response_late", this.response_late);
            fd.append("grading_id", this.GradingCriteria_id);
            axios.post('/api/classwork/share', fd)
                .then(res => {
                    if(res.dat != 'Unshare'){
                        this.$emit('successPublish', res.data)
                         this.isPublishing = !this.isPublishing;
                    }
                    else{
                        this.$emit('UnPublish')
                    }
                    
                }).catch(e => {
                    console.log(e);
                })
        },
       /*  async getPublishDetails(){
            let newDate = new Date();
            this.duedate = moment(newDate).format("YYYY-MM-DDTHH:mm:ss");
            this.ClassDetails = this.Details;
            this.ShowAnswerDate =  this.duedate;
        }, */
        async getGradingCriteria(){
            axios.get('/api/grading-criteria/all/'+this.$route.params.id)
            .then(res=>{
                
                this.GradingItems = res.data;
            })
            
        },
        async getPublishDetails(){
            axios.get('/api/classwork/publishClassworkDetails/'+this.Details.classwork_id)
            .then(res=>{
                console.log(res.data);
                this.PublishDetails = res.data;
                this.isLoading = !this.isLoading;
            })
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format("YYYY-MM-DDTHH:mm:ss")
            }
        },
        
    },
    created(){
        this.getGradingCriteria();
        this.getPublishDetails();
    }
}
</script>