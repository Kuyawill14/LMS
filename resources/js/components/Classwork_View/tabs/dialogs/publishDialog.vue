<template>
   <v-card style="border-top:3px solid #EF6C00">
        <v-form ref="publishForm" v-model="valid" lazy-validation>
            <v-card-title>
                <span class="headline">Publish to <span class="primary--text">"{{ClassDetails.class_name}}"</span></span>
            </v-card-title>
            <v-card-text>
                <v-container >
                    <v-row>
                        <v-col  ma-0 pa-0 class="pa-0 ma-0" cols="12">
                            <v-select
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

                        <v-col  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                <v-container ma-0 pa-0 class="d-flex">
                                <v-checkbox
                                class="pa-0 ma-0"
                                v-model="EnableDue"
                                label="Enable Due Date"
                                ></v-checkbox>
                                </v-container>
                        </v-col>

                         <v-col v-if="EnableDue" ma-0 pa-0 class="pa-0 ma-0"  cols="12">
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
                                v-model="duedate"
                                outlined
                                label="Due Date" type="datetime-local"  required>
                                </v-text-field>
                            </v-col>

                            
                            <v-col  ma-0 pa-0 class="text-left pa-0 ma-0" cols="12">
                                <v-checkbox
                                    class="pa-0 ma-0"
                                    v-model="showAns"
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
                                v-model="response_late"
                                label="Accept late response"
                                ></v-checkbox>    
                          
                        </v-col>

                           
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions class="pb-5">
                <v-spacer></v-spacer>
               
                <v-btn rounded  color="primary" text  @click="validate()" :disabled="loading">
                    {{!ClassDetails.status ? 'Publish': 'Unpublish'}}
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
            showAnsType:'After Classwork Done',
            GradingCriteria_id:'',
            GradingItems:[],
            FieldRules: [
                v => !!v || 'Field is required',
            ],
        }
    },
    methods:{
         validate () {
            if(this.$refs.publishForm.validate()){
                this.shareClasswork();
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
                    this.$emit('successPublish', res.data)
                }).catch(e => {
                    console.log(e);
                })
        },
        async getPublishDetails(){
            let newDate = new Date();
            this.duedate = moment(newDate).format("YYYY-MM-DDTHH:mm:ss");
            this.ClassDetails = this.Details;
            this.ShowAnswerDate =  this.duedate;
        },
        async getGradingCriteria(){
            axios.get('/api/grading-criteria/all/'+this.$route.params.id)
            .then(res=>{
                this.GradingItems = res.data;
            })
            
        },
        
    },
    created(){
        this.getGradingCriteria();
       this.getPublishDetails();
    }
}
</script>