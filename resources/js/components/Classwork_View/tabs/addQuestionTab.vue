<template>
<v-container pa-0 ma-0 class="pa-0 ma-0" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" lg="10" md="10">
            <v-card  class="elevation-5">
              <v-window>
                <v-window-item >
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-row>
                            <v-col cols="12" md="12" class="primary">
                                <v-container class="d-flex flex-row justify-space-between">
                                    <div class="mt-1 text-sm-h3 text-md-h5 text-xl-h3 white--text">
                                    Add Question <v-icon color="white">mdi-book-plus</v-icon></div>
                                    <v-btn icon  @click="ShowAdd = !ShowAdd" >
                                     
                                         <v-icon color="white">mdi-{{ShowAdd ? 'window-close':'eye'}}</v-icon>
                                    </v-btn>
                                </v-container>
                            </v-col>
                            <v-col v-if="ShowAdd"  cols="12" md="12" class="pl-7 pr-9 pt-5">
                                <v-row class="pa-0 ma-0">
                                    <v-col class="pa-0 ma-0" cols="3"  md="1" lg="1">
                                        <v-text-field @click="quesForm.points == 0 ? quesForm.points = '': ''" 
                                        :rules="PointsRule" filled type="number" 
                                        v-model="quesForm.points" class="centered-input pa-0 ma-0"  
                                        label="Points">
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-container class="pa-0 ma-0" ma-0 pa-0> 
                                    <v-row class="pa-0 ma-0">
                                        <v-col class="pa-0 ma-0" cols="12" md="9" lg="9">
                                            <v-textarea
                                            rows="1"
                                            v-model="quesForm.question"
                                            filled
                                            :rules="rules"
                                            class="pa-0 ma-0"
                                            label="Question"
                                            auto-grow
                                            required
                                            ></v-textarea>
                                        </v-col>
                                        <v-col class="pa-0 ma-0 pl-md-3 pl-sm-0" cols="12" md="3" lg="3">
                                            <v-select
                                            v-model="quesForm.type"
                                            class="pa-0 ma-0"
                                            :items="['Multiple Choice', 'Identification', 'True or False', 'Matching type']"
                                            filled
                                            label="Type"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-container  v-if="quesForm.type == 'Multiple Choice'">
                                    <v-row ma-0 pa-0>
                                        <v-col class="ma-0 pa-0 ml-2" cols="10" lg="12" md="12" v-for="(item, i) in form" :key="i">
                                                <v-row>
                                                    <v-col cols="12" lg="9" md="9" class="pa-0 ma-0">
                                                        <v-container ma-0 pa-0 class="d-flex flex-row ma-0 pa-0">
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
                                                            <v-textarea
                                                    
                                                            ref="Choice"
                                                            :rules="rules"
                                                            @keyup="checker = item.answer"
                                                            filled
                                                            rows="1"
                                                            v-model="item.answer"
                                                            class="pa-0 ma-0"
                                                            :label="'Option '+(i+1)"
                                                            auto-grow
                                                            required
                                                            ></v-textarea>
                                                            <!--  Image Input -->
                                                           <!--  <v-file-input
                                                                :rules="Imagerules"
                                                                v-show="selectedImage[i] != null"
                                                                :id="'uploader'+i"
                                                                v-model="selectedImage[i]"
                                                                prepend-icon=""
                                                                accept="image/png, image/jpeg, image/bmp"
                                                                @change="onFileChange"
                                                                filled
                                                                :label="'Option'+(i+1)"
                                                            ></v-file-input>
                                                                    
                                                         
                                                             <v-btn class="mt-2 pl-2 pr-2" icon 
                                                             @click="onButtonClick(i), inputIndex = i">
                                                                <v-icon>
                                                                    mdi-camera
                                                                </v-icon>
                                                            </v-btn> -->

                                                            <v-btn
                                                            @click="item.answer == quesForm.answer ? (remove(i), quesForm.answer = '') : (remove(i),quesForm.answer = tempAnswer) "
                                                            icon class="mt-2 pl-2 pr-2">
                                                                <v-icon>mdi-window-close</v-icon>
                                                            </v-btn>
                                                        </v-container>
                                                    </v-col>
                                                </v-row>
                                        </v-col>
                                        <v-col ma-0 pa-0 class="pa-0 ma-0 text-right" cols="12" md="8" lg="8">
                                            <v-btn
                                            :disabled="checker.length == 0 && form.length >= 1"
                                            rounded
                                            class="mt-2"
                                            color="primary"
                                            @click="add(), checker = ''"
                                            >
                                            <v-icon dark large>mdi-plus</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                
                                </v-container>

                                <v-container  v-if="quesForm.type == 'Identification'">
                                    <v-row ma-0 pa-0>
                                        <v-col  ma-0 pa-0 class="ma-0 pa-0" cols="12">
                                            <v-textarea
                                            :rules="rules"
                                            v-model="quesForm.answer"
                                            filled
                                            class="pa-0 ma-0"
                                            label="Answer"
                                            auto-grow
                                            ></v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                <v-container  v-if="quesForm.type == 'True or False'">
                                    <v-row ma-0 pa-0>
                                        <v-col v-for="(x, n) in inputCheck" :key="n"  ma-0 pa-0 class="ma-0 pa-0" cols="12">
                                            <v-container ma-0 pa-0 class="d-flex flex-row ma-0 pa-0">
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
                                                    filled
                                                    class="pa-0 ma-0"
                                                    :value="inputCheck[n]"
                                                    auto-grow
                                                    required
                                                    ></v-textarea>
                                                    
                                                </v-container>
                                        </v-col>
                                    </v-row>
                                </v-container>

                                 <v-container  v-if="quesForm.type == 'Matching type'">
                                    <v-row ma-0 pa-0>
                                        <v-col  v-for="(item, i) in MatchQuestion" :key="i" ma-0 pa-0 class="ma-0 pa-0" cols="12">
                                           <v-row>
                                               <v-col class="pt-0 pb-0 mt-0 mb-0" cols="7">
                                                   <v-textarea
                                                    @keyup="checker = item.answer"
                                                    rows="1"
                                                    :rules="rules"
                                                    v-model="item.question"
                                                    filled
                                                    class="pa-0 ma-0"
                                                    :label="'Question '+(i+1)"
                                                    auto-grow
                                                    required
                                                    ></v-textarea>
                                               </v-col>
                                               <v-col class="pt-0 pb-0 mt-0 mb-0" cols="4">
                                                    <v-textarea
                                                    @keyup="checker = item.answer"
                                                    :rules="rules"
                                                    rows="1"
                                                    v-model="item.answer"
                                                    filled
                                                    class="pa-0 ma-0"
                                                    :label="'Answer '+(i+1)"
                                                    auto-grow
                                                    ></v-textarea> 
                                               </v-col>
                                                <v-col class="pt-0 pb-0 mt-0 mb-0" cols="1">
                                                    <v-btn
                                                    @click="removeMatch(i)"
                                                    icon class="mt-2 pl-2 pr-2">
                                                        <v-icon>mdi-window-close</v-icon>

                                                    </v-btn>
                                               </v-col>
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

                                <v-container class="mb-5">
                                        <v-btn
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
</template>
<script>
import {mapGetters, mapActions} from "vuex";
export default {
    data(){
        return{
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
            
        }
    },
    methods:{
        toastSuccess() {
            return this.$toasted.success("Question Successfully added", {
                theme: "toasted-primary",
                position: "top-center",
                icon: "done",
                duration: 3000
            });
        },
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
            if (this.quesForm.type == 'Multiple Choice') {
                if(this.form.length >= 2 && this.quesForm.answer != '' && this.quesForm.points != 0){
                    
                    this.finalData.ansLength = this.form.length;
                    this.finalData.clw = this.$route.query.clwk;
                   /*  this.quesForm.answer = '<div>'+'<img src="'+this.quesForm.answer+'">'+'</div>'; */
                    this.finalData.questions = this.quesForm;
                    this.finalData.answers = this.form;
                   
                    this.$store.dispatch('addQuestions', this.finalData )
                     .then( (success)  => {
                        this.toastSuccess();
                        //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);
                        this.CallReset();
                    })
                }
                else if(this.quesForm.answer != '' && this.quesForm.points == 0){
                   /*  Swal.fire({
                        icon: 'info',
                        title: 'Oops...',
                        text: 'You must atleast allocate one points to this question',
                    }) */
                }
                else if(this.quesForm.answer == ''){
                   /*  Swal.fire({
                        icon: 'info',
                        title: 'Oops...',
                        text: 'You must atleast pick one answer',
                    }) */
                }
                else{
                   /*   Swal.fire({
                        icon: 'info',
                        title: 'Oops...',
                        text: 'You must atleast enter two choices',
                    }) */
                }
            }
            else if(this.quesForm.type == 'Identification' || this.quesForm.type == 'True or False'){
                if(this.quesForm.answer != '' && this.quesForm.points != 0 || ''){
                    this.finalData.ansLength = this.form.length;
                    this.finalData.clw = this.$route.query.clwk;
                    this.finalData.questions = this.quesForm;
                    this.finalData.answers = this.form;
                    this.$store.dispatch('addQuestions', this.finalData)
                    .then( (success)  => {
                       this.toastSuccess();
                        //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);
                        this.CallReset();
                    })
                }
                else{
                    /*  Swal.fire({
                        icon: 'info',
                        title: 'Oops...',
                        text: 'You must atleast write/pick one answer',
                    }) */
                }
            }
            else if(this.quesForm.type == 'Matching type'){
                 this.quesForm.answer = 'Matching Type';
                 this.finalData.ansLength = this.MatchQuestion.length;
                 this.finalData.clw = this.$route.query.clwk;
                 this.finalData.questions = this.quesForm;
                 this.finalData.answers = this.MatchQuestion;
                 this.$store.dispatch('addQuestions', this.finalData)
                  .then( (success)  => {
                    this.toastSuccess();
                    //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);
                    this.CallReset();
                })
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
  
  
}
</script>

<style scoped>
     .centered-input >>> input {
      text-align: center
    } 
</style>