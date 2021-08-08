<template>
<div class="pa-1">



<v-container class="fill-height" v-if="isloading" style="height: 500px;">
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
            Loading
        </v-col>
        <v-col cols="6">
            <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
    </v-row>
</v-container>

<v-container v-if="!isloading" pa-0 ma-0 class="pa-0 ma-0" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" lg="9" xl="9">
            <v-card  class="pa-3" elevation="1" outlined>
              <v-window>
                <v-window-item >
                    <vue-element-loading :active="isAdding" spinner="bar-fade-scale" />
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-row>
                           <!--  <v-col cols="12" md="12" class="primary">
                                <v-container class="d-flex flex-row justify-space-between">
                                    <div class="mt-1 text-sm-h3 text-md-h5 text-xl-h3 white--text">
                                    Add Question <v-icon color="white">mdi-book-plus</v-icon></div>
                                    <v-btn icon  @click="ShowAdd = !ShowAdd" >
                                         <v-icon color="white">mdi-{{ShowAdd ? 'window-close':'eye'}}</v-icon>
                                    </v-btn>
                                </v-container>
                            </v-col> -->
                            <v-col v-if="ShowAdd"  cols="12" md="12" class="pl-7 pr-9 pt-10">
                                <v-row mb-0 pb-0 class="pa-0 ma-0">
                                    <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                        <v-text-field 
                                        min="0"
                                        :rules="PointsRule" outlined type="number" 
                                        v-model="quesForm.points" class="centered-input pa-0 ma-0"  
                                        label="Points"
                                      
                                        >
                                        
                                        </v-text-field>
                                    </v-col>
                                    <v-col class="pa-0 ma-0 pl-2 pl-sm-0 text-right" cols="9" md="11" lg="11">
                                         <v-select
                                            v-model="quesForm.type"
                                            class="pa-0 ma-0 float-right"
                                            :items="['Multiple Choice', 'Identification', 'True or False', 'Matching type']"
                                            outlined
                                            label="Question Type"
                                            ></v-select> 
                                    </v-col>
                                </v-row>

                                <v-container class="pa-0 ma-0" ma-0 pa-0> 
                                    <div class="font-weight-medium">Question</div>
                                    <v-row class="pa-0 ma-0">
                                        
                                        <v-col class="pa-0 ma-0 mt-2 mb-2" cols="12">
                                            <!-- <v-container  class="d-flex flex-row ma-0 pa-0">
                                            <v-textarea
                                            rows="1"
                                            v-model="quesForm.question"
                                            outlined
                                            :rules="rules"
                                            class="pa-0 ma-0"
                                            label="Question"
                                            auto-grow
                                            required
                                   
                                            ></v-textarea> -->
                                            <div style="width:100%" class="mb-3">

                                           
                                                <editor class="outlined" required :rules="rules"
                                         
                                                    v-model="quesForm.question"
                                                     id="editor-container"  placeholder="Question" 
                                                    theme="snow" :options="options"></editor>
                                         
                                            <small v-if="!valid && quesForm.question == ''" class="error--text">*This field is required</small>
                                            </div>
                                            

                                          <!--   <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                            <v-btn icon  v-bind="attrs"
                                                v-on="on" 
                                                text class="mt-2 pl-2 pr-2"> <v-icon>mdi-image</v-icon> </v-btn>
                                            </template>
                                            <span>Add Image</span>
                                            </v-tooltip>
                                            
                                            </v-container> -->
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-container  v-if="quesForm.type == 'Multiple Choice'">
                                    
                                    <v-row>
                                    <div class="font-weight-medium">Options</div>
                                        <v-col class="ma-0 pa-0 ml-2 mt-1" cols="12" lg="12" md="12" v-for="(item, i) in form" :key="i">
                                                <v-row>
                                                    <v-col cols="12" lg="12" md="12" >
                                                        <v-container  class="d-flex flex-row ma-0 pa-0">
                                                        <v-radio-group :rules="rules" v-model="quesForm.answer">
                                                            <v-radio
                                                                @click="tempAnswer = item.answer, test()"
                                                                color="primary"
                                                                class="pa-0 ma-0"
                                                                :disabled="item.answer.length == 0"
                                                                :key="i"
                                                                name="Answer" 
                                                                :value="item.answer"
                                                            ></v-radio>
                                                        </v-radio-group>


                                                        <!--   Text iNput -->
                                                           <!--  <v-textarea
                                                    
                                                            ref="Choice"
                                                            :rules="rules"
                                                            @keyup="checker = item.answer"
                                                            outlined
                                                            rows="1"
                                                            v-model="item.answer"
                                                            class="pa-0 ma-0"
                                                            :label="'Option '+(i+1)"
                                                            auto-grow
                                                            required
                                                            ></v-textarea> -->

                                                              <div style="width:100%" class="mb-3">
                                                                <editor :rules="rules"
                                                               
                                                                 @change="checker = item.answer"
                                                                 v-model="item.answer" 
                                                                id="editor-container"  :placeholder="'Option '+(i+1)" 
                                                                 theme="snow" :options="options"></editor>
                                                            </div>
                                                    
                                                            <v-btn
                                                            @click="item.answer == quesForm.answer ? (remove(i), quesForm.answer = '') : (remove(i),quesForm.answer = tempAnswer) "
                                                            icon class="mt-2 pl-2 pr-2">
                                                                <v-icon>mdi-delete</v-icon>
                                                            </v-btn>
                                                        </v-container>
                                                    </v-col>
                                                </v-row>
                                        </v-col>
                                        <v-col  class="pa-0 ma-0 text-right" cols="12" md="12" lg="12">
                                            <v-btn
                                            :disabled="checker.length == 0 && form.length >= 1"
                                            rounded
                                            class="mt-2 mb-0 pb-0"
                                            color="primary"
                                            @click="add(), checker = ''"
                                            >
                                            <v-icon dark left large>mdi-plus</v-icon>
                                            Add Choice
                                            </v-btn>
                                        </v-col>
                                          
                                    </v-row>
                                
                                </v-container>

                                <v-container  v-if="quesForm.type == 'Identification'">
                                    <v-row ma-0 pa-0>
                                        <div class="font-weight-medium">Answer</div>
                                        <v-col  ma-0 pa-0 class="ma-0 pa-0 mt-2" cols="12">
                                            <!-- <v-textarea
                                            :rules="rules"
                                            v-model="quesForm.answer"
                                            filled
                                            class="pa-0 ma-0"
                                            label="Answer"
                                            auto-grow
                                            ></v-textarea> -->
                                              <div style="width:100%" class="mb-3">
                                                <editor :rules="rules"
                                                    v-model="quesForm.answer" 
                                                    id="editor-container" placeholder="Answer" 
                                                    theme="snow" :options="options">
                                                </editor>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-container class="ma-0 pa-0 mt-2 pl-3 pr-4"  v-if="quesForm.type == 'True or False'">
                                    <v-row >
                                        <v-col cols="12" class="pl-0 ml-0">
                                             <div class="font-weight-medium">Options</div>
                                        </v-col>
                                       
                                        <v-col v-for="(x, n) in inputCheck" :key="n" class="ma-0 pa-0" cols="11">
                                            <v-container class="d-flex flex-row ma-0 pa-0">
                                                <v-radio-group :rules="rules" v-model="quesForm.answer">
                                                    <v-radio
                                                    
                                                    color="primary"
                                                    :key="n"
                                                    name="Answer" 
                                                    :value="inputCheck[n]"
                                                    ></v-radio>
                                                    </v-radio-group>

                                                    <v-textarea
                                                    readonly
                                                    rows="1"
                                                    outlined
                                                    class="pa-0 ma-0"
                                                    :value="inputCheck[n]"
                                                    auto-grow
                                                    required
                                                    ></v-textarea>
                                                    
                                                </v-container>
                                        </v-col>
                                         
                                    </v-row>
                                </v-container>

                                 <v-container mb-0 pb-0 v-if="quesForm.type == 'Matching type'">
                                    <v-row ma-0 pa-0>
                                        <v-col  v-for="(item, i) in MatchQuestion" :key="i" ma-0 pa-0 class="ma-0 pa-0" cols="12">
                                           <v-row>
                                               <v-col  cols="12">
                                                    <div class="font-weight-medium">{{'Pair '}}{{i+1}}</div>
                                                   <v-container  class="d-flex flex-row ma-0 pa-0">
                                                   <!-- <v-textarea
                                                    @keyup="checker = item.answer"
                                                    rows="1"
                                                    :rules="rules"
                                                    v-model="item.question"
                                                    outlined
                                                    class="pa-0 ma-0"
                                                    :label="'Question '+(i+1)"
                                                    auto-grow
                                                    required
                                                    ></v-textarea> -->
                                                    
                                                
                                                         
                                                    <div style="width:100%"  class=" pr-2 mb-3">
                                                        <editor :rules="rules"
                                                            @change="checker = item.answer"
                                                            v-model="item.question" 
                                                            id="editor-container"  :placeholder="'Question '+(i+1)" 
                                                            theme="snow" :options="options">
                                                        </editor>
                                                    </div>
                                                     <div style="width:100%" class="mb-3" >
                                                            <editor :rules="rules"
                                                                @change="checker = item.answer"
                                                                v-model="item.answer" 
                                                                id="editor-container"  :placeholder="'Answer '+(i+1)" 
                                                                theme="snow" :options="options">
                                                            </editor>
                                                      </div>

                                                     <v-btn
                                                        @click="removeMatch(i)"
                                                        icon class="mt-12 pl-2 pr-2">
                                                        <v-icon>mdi-delete</v-icon>
                                                    </v-btn>
                                                    </v-container>
                                               </v-col>
                                            <!--    <v-col class="pt-0 pb-0 mt-0 mb-0" cols="4">
                                                    <v-textarea
                                                    @keyup="checker = item.answer"
                                                    :rules="rules"
                                                    rows="1"
                                                    v-model="item.answer"
                                                    outlined
                                                    class="pa-0 ma-0"
                                                    :label="'Answer '+(i+1)"
                                                    auto-grow
                                                    ></v-textarea> 
                                               </v-col> -->
                                              <!--   <v-col class="pt-0 pb-0 mt-0 mb-0" cols="1">
                                                    <v-btn
                                                    @click="removeMatch(i)"
                                                    icon class="mt-2 pl-2 pr-2">
                                                        <v-icon>mdi-window-close</v-icon>

                                                    </v-btn>
                                               </v-col> -->
                                           </v-row>
                                        </v-col>
                                        <v-col class="ma-0 pa-0 text-right">
                                            <v-btn    
                                            rounded
                                            class="mt-2"
                                            color="primary"
                                            @click="addNewMatch()"
                                            >
                                            <v-icon dark large>mdi-plus</v-icon>
                                            </v-btn>
                                        </v-col>
                                        

                                    </v-row>
                                </v-container>
                                <v-container class="pt-0 mt-0">
                                     <v-switch
                                     v-if="quesForm.type == 'Identification'"
                                        v-model="quesForm.Sensitive"
                                        class="float-right"
                                        label="Case Sensitive">
                                    </v-switch>
                                  <!--   <v-switch
                                    v-model="quesForm.Required"
                                    class="float-right mr-2"
                                    label="Required">
                                    </v-switch> -->
                                </v-container>
                                <v-container class="mb-5">
                                        <v-btn
                                        :loading="isAdding"
                                        rounded
                                        class="mt-2"
                                        color="primary"
                                        dark
                                        @click="validate"
                                        >
                                        Add Question<v-icon right dark>mdi-note-plus-outline</v-icon>
                                    </v-btn>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-window-item>
              </v-window>
             
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</div>
</template>
<script>
import VueElementLoading from 'vue-element-loading'
import {mapGetters, mapActions} from "vuex";
export default {
    components:{
        VueElementLoading
    },
    data(){
        return{
            isloading: true,
            isAdding: false,
            inputIndex:'',
            checker:'',
            testDetails:'',
            selectedImage:[],
            valid: false,
            tempAnswer:null,
            inputCheck:['True','False'],
            temp_id:'',
            checked:false,
            ShowAdd: true,
            check: true,
            finalData:{},
            
                quesForm:{
                question:'',
                answer:'',
                points: 0,
                Required: false,
                Sensitive:false,
                type:'Multiple Choice'
            },
            form:[
                {
                    answer:'',
                },
            ],
             MatchQuestion:[
                {
                    question: '',
                    answer:''
                }
            ],

            rules: [
                    v => !!v || 'required'
                ],
             PointsRule: [
                    v => !!v || 'required',
                    v => (v && v != 0) || 'Must assign atleast 1 points',
                ],
            Imagerules: [
                value => !value || value.size < 5000000 || 'Avatar size should be less than 5 MB!',
            ],
            options:{
            modules: {
                    'toolbar': [
                        ['bold', 'italic', 'underline', 'strike'],
                
                        [{ 'list': 'bullet' }],
                        ['image'],
                    ],
                }
            }
            
        }
    },
    methods:{
        onFileChange(element){
        if (this.selectedImage[this.inputIndex] != '' || null) {
                
            console.log(this.inputIndex)
            const file = element;
            console.log(file);
            let reader = new FileReader();
            let baseData;
            reader.onloadend = (res)=>{
                this.form[this.inputIndex].answer = '<div>'+'<img src="'+reader.result+'">'+'</div>';
                //console.log('Result', reader.result);
            }
            reader.readAsDataURL(file);
            this.checker = "Success";
            }
        },
        onButtonClick(i) {
            /* this.isSelecting = true
            window.addEventListener('focus', () => {
            this.isSelecting = false
            }, { once: true })

            this.$refs.form.$refs.input.click(); */
            $("#uploader"+i).click();
        },
        validateChoice(){
            this.$refs.Choice.validate()
            this.add();
        },
        validate () {
            this.$refs.form.validate()
            this.AddQuestion();
        },
        test(){
            console.log(this.tempAnswer)
        },
        add() {
            if(this.form.length == 0){
                this.check = true;
                this.form.push({ answer: '' });
                 //this.form.push({ answer: '' , image : null});
            }
            else{
                 if(this.form[this.form.length-1].answer != '' /* || this.form[this.form.length-1].image != null */){
                     this.check = true;
                    this.form.push({ answer: '' });
                 }
                 else{
                      this.check = false;
                 }
            }
                
        },
        remove(index){
             this.form.splice(index, 1);
        },
        addNewMatch(){
            this.quesForm.points++;
            this.MatchQuestion.push({ question: '', answer: '' });
        },
        removeMatch(index){
            this.MatchQuestion.splice(index, 1);
        },
        AddQuestion(){
            this.isAdding = true;
            if (this.quesForm.type == 'Multiple Choice') {
                if(this.form.length >= 2 && this.quesForm.answer != '' && this.quesForm.points != 0){
                    
                    this.finalData.ansLength = this.form.length;
                    this.finalData.clw = this.$route.query.clwk;
                   /*  this.quesForm.answer = '<div>'+'<img src="'+this.quesForm.answer+'">'+'</div>'; */
                    this.finalData.questions = this.quesForm;
                    this.finalData.answers = this.form;
                   
                    this.$store.dispatch('addQuestions', this.finalData )
                     .then( (success)  => {
                        this.toastSuccess("Question Successfully added");
                        //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);
                        this.CallReset();
                    })
                }
                else if(this.quesForm.question == ""){
                    this.toastError('Question is required!');
                }
                else if(this.quesForm.answer != '' && this.quesForm.points == 0){
                    this.toastError('You must atleast allocate one points to this question!');
                }
                else if(this.quesForm.answer == ''){
                    this.toastError('You must atleast write/pick one answer');
                }
                else{
                    this.toastError('You must atleast enter two choices');
                }
                 setTimeout(() => (this.isAdding = false), 1000);
                //this.isAdding = false;
            }
            else if(this.quesForm.type == 'Identification' || this.quesForm.type == 'True or False'){
                if(this.quesForm.answer != '' && this.quesForm.points != 0 || ''){
                    this.finalData.ansLength = this.form.length;
                    this.finalData.clw = this.$route.query.clwk;
                    this.finalData.questions = this.quesForm;
                    this.finalData.answers = this.form;
                    this.$store.dispatch('addQuestions', this.finalData)
                    .then( (success)  => {
                       this.toastSuccess("Question Successfully added");
                        //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);
                        this.CallReset();
                    })
                }
                else{
                    this.toastError('You must atleast write/pick one answer');
                }
                setTimeout(() => (this.isAdding = false), 1000);
               //this.isAdding = false;
            }
            else if(this.quesForm.type == 'Matching type'){
                 this.quesForm.answer = 'Matching Type';
                 this.finalData.ansLength = this.MatchQuestion.length;
                 this.finalData.clw = this.$route.query.clwk;
                 this.finalData.questions = this.quesForm;
                 this.finalData.answers = this.MatchQuestion;
                 this.$store.dispatch('addQuestions', this.finalData)
                  .then( (success)  => {
                    this.toastSuccess("Question Successfully added");
                    //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);
                    this.CallReset();
                })
                 setTimeout(() => (this.isAdding = false), 1000);
                //this.isAdding = false;
            }

        },
        CallReset(){
            this.$refs.form.resetValidation()
            this.quesForm.question = '';
            this.quesForm.answer = '';
            this.quesForm.points = 0;
            
            if(this.quesForm.type == 'Multiple Choice')
            {
               
                for (let i = 0; i < this.form.length; i++) {
                    this.form[i].answer = '';
                    this.selectedImage[i]='';
                }
            }
            if(this.quesForm.type == 'Matching type')
            {
                for (let i = 0; i < this.MatchQuestion.length; i++) {
                    this.MatchQuestion[i].question = '';
                    this.MatchQuestion[i].answer = '';
                }
            }
           
        },
          
    },

    beforeMount(){
        this.isloading = !this.isloading;
        
    }
  
  
}
</script>

<style >
 /* .ql-toolbar.ql-snow {
        background: #f2f2f2;
        border: none;
 }
 .ql-bold,.ql-italic,.ql-underline, .ql-strike
    ,.ql-picker-label,.ql-align,.ql-list,.ql-link
    ,.ql-image,.ql-video
    {
        outline: none !important;
        border:none !important;
    }  */
    .centered-input >>> input {
    text-align: center
}
 .ql-editor img{

    max-height: 15rem !important;
}
.ql-container{
    max-height: 50rem;
}
</style>

