<template>
    <div>
        <v-card v-if="Type != 'view'" class="pa-1">
            <v-text-field v-model="Answer.title" class="mb-2 mt-1" label="Title" hide-details  outlined>

            </v-text-field>

            <editor
            class="editor"
            theme="snow"
            v-model="Answer.text"
            placeholder="Typed answer"
            ref="myTextEditor"
            :options="editorOption"/>

             <div class="d-flex pt-1">
                <v-btn @click="$emit('CloseDialog')" text color="secondary">  Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn :loading="isAdding" @click="SaveAnswer()" color="primary"> Save</v-btn>  
            </div>
        </v-card>

         <v-card v-else >
                <v-card-title class="mb-0 pb-0"><span class="text-h4">{{Answer.title}}</span></v-card-title>
                 <v-divider></v-divider>
                 <v-card-text style="max-height: 600px;overflow-y:scroll">
                     <span  v-html="Answer.text"></span>
                 </v-card-text>
            
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn block @click="$emit('CloseDialog')"  color="secondary">  Close</v-btn>
            </v-card-actions>
        </v-card>
       
    </div>
</template>

<script>
export default {
    props:['Type', 'answerData'],
    data(){
        return{
            editorOption: {
                placeholder: 'type here ...',
                theme:'snow',
                blur: true,
                editorData:null,
                modules: {
                     toolbar: {
                            container:[
                               ['bold', 'italic', 'underline'],
                               [{ 'color': [] }],
                               [{ 'list': 'bullet' }]
                               
                            ],
                            /* handlers: {
                                image: this.imageHandler
                            } */
                        },
                    syntax: {
                        highlight: text => hljs.highlightAuto(text).value
                    },
                    
                }
            },
            Answer:{
                title: '',
                text: ''
            },
            isAdding: false
        }
    },
    watch: {
      'Type': function(arMsg) {
         if(arMsg == 'edit' || arMsg == 'view'){
            this.Answer.title = this.answerData.title;
            this.Answer.text = this.answerData.text;
         }else{
            this.Answer.title = '';
            this.Answer.text = '' 
         }
      }
   },
    methods:{
        SaveAnswer(){
            if(this.Type == 'add'){
                this.isAdding = true;
                this.$emit('SaveAnswer', this.Answer);
                setTimeout(() => {
                    this.isAdding = false;
                }, 600);
            }else if(this.Type == 'edit'){
                this.isAdding = true;
                this.$emit('UpdateAnswer', this.Answer);
                 setTimeout(() => {
                    this.isAdding = false;
                }, 600);
            }  
        },
    },

    mounted(){
          if(this.Type == 'edit' || this.Type == 'view'){
            this.Answer = this.answerData;
        }
    }
}
</script>

<style >
.fade-in-enter-active {
  transition: all 0.5s ease;
}

.fade-in-leave-active {
  transition: all 0.5s ease;
}

.fade-in-enter, .fade-in-leave-to {
  position: absolute; /* add for smooth transition between elements */
  opacity: 0;
}

.centered{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


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
.editor .ql-editor img{
   
    max-height: 10rem !important;
}
.editor .ql-container{
    max-height: 50rem;
}
.editor .ql-editor{
    min-height: 400px !important;
    max-height: 600px !important;
     
}

/* .editor .ql-editor input{
    color: black !important;
} */


 

</style>