<template>
<div>
    <!-- <vue-element-loading :active="isloading" spinner="bar-fade-scale" />
    <v-container ma-0 pa-0>
         <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        name="anouuncement"
        class=""
        auto-grow
        placeholder="Announce something in your class!"
        outlined>
    </v-textarea>
    <v-row class="mt-0 pt-0 mb-0 pb-0">
        <v-col cols="12" class="ma-0 pa-0">
        </v-col>
        <v-col cols="6" md="6" lg="2" xl="2" class="mt-0 pt-0">
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-avatar tile size="120">
                            <v-img class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            src="https://orangestr.sgp1.cdn.digitaloceanspaces.com/ProfilePicture/26/yM2Mw2eObNpZ5xA4vOFQdlvhz5ZII4MYv0Rpuifp.jpg"
                            >
                            <v-spacer></v-spacer>
                            <v-btn   icon dark  small>
                                <v-icon small>
                                    mdi-close
                                </v-icon>
                            </v-btn>
                            <template v-slot:placeholder>
                            <v-row class="fill-height ma-0"
                                align="center"
                                justify="center" >
                                <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                            </template>
                            </v-img>
                        </v-avatar>  
                    </v-list-item-content>
                    
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
    </v-container> -->
   
    
    
    <!-- <v-row  class="pl-3 pr-3 mt-2">
            <v-col cols="5" md="8" lg="8">
                <v-btn icon  class="mt-0 pt-0"><v-icon>mdi-link-variant-plus</v-icon></v-btn>
                <v-btn icon  class="mt-0 pt-0"><v-icon>mdi-file</v-icon></v-btn>
            </v-col>

            <v-col cols="7" md="4" lg="4" class="text-right">
                <v-container ma-0 pa-0 :class="UserDetails.role != 'Student' ? 'ma-0 pa-0 d-flex flex-row' :'ma-0 pa-0'">
                <v-select
          
                v-if="UserDetails.role != 'Student'"
                class="mr-2 ma-0 pa-0"
                @change="testing()"
                 :items="classNames"
                item-text="class_name"
                item-value="class_id"
                label="All Class"
                v-model="class_id"
                dense
                solo
                ></v-select>
                <v-btn depressed type="submit" name="create_post" color="primary"
                    @click="createPost">Post</v-btn>
                </v-container>
            </v-col>
        </v-row> -->
    

    
  
    <vue-element-loading :active="isloading" spinner="bar-fade-scale" />
     
     <editor class="AnnoumentEditor" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"  @ready="onEditorReady($event)"   placeholder="Announce something in your class!" 
      v-model="announcement.content" @change="onChange" theme="snow" :options="options"></editor>

        <v-row  class="pl-3">
            <v-col cols="5" md="8" lg="8">
              
            </v-col>

            <v-col cols="7" md="4" lg="4" class="text-right">
                <v-container ma-0 pa-0 :class="UserDetails.role != 'Student' ? 'ma-0 pa-0 d-flex flex-row' :'ma-0 pa-0'">
                <v-select
          
                v-if="UserDetails.role != 'Student'"
                class="mr-2 ma-0 pa-0"
                hide-details
 
                 :items="classNames"
                 @change="CheckClass_id(tmp_class_id)"
                 return-object=""
                item-text="class_name"
                item-value="id"
                label="Classes"
                v-model="tmp_class_id"
                dense
                solo
                ></v-select>
                <v-btn class="mb-0 pb-0 mt-1" depressed :disabled="announcement.content == '' || announcement.content == null" type="submit" name="create_post" color="primary"
                    @click="createPost">Post</v-btn>
                </v-container>
            </v-col>
        </v-row>
<!--     </v-expand-transition> -->
</div>
</template>
<script>
export default {
    props:['UserDetails','classNames'],
    data() {
        return {
            isLoadingClassNames: true,
            isLoaded:false,
            //classNames:[],
            notifyDetails: {},
            selectedFile: null,
            isSelecting: false,
            isloading: false,
            value: '',
            content: '',
            class_id: null,
            tmp_class_id: this.$route.params.id,
            isCourse_id: true,
            announcement: {
                content: "",
                file: "",
                class_id: ""
                },
            options:{
                modules: {
                        toolbar: {
                            container:[
                                ['bold', 'italic', 'underline'],
                                [{ 'header': [1, 2, 3, 4, 5, false] }],
                                [{ 'color': [] }],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                ['link', 'image', 'video'],
                            ],
                            handlers: {
                                image: this.imageHandler
                            }
                        },           
                    },
                    
                },
                pasteText: true,
                editorData:null,
            }
        },
        computed: {
            buttonText() {
                return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
            }
        },
        methods: {
            val() {
                this.value = "This's new value";
            },
            CheckClass_id(data){
              /*   this.classNames.forEach(item => {
                    if(item.id == data.tmp_class_id){
                        if(item.isCourse_id){
                            this.class_id = item.class_id;
                            this.isCourse_id = false;
                        }else{
                            this.class_id = item.class_id;
                            this.isCourse_id = true;
                        } 
                        
                        return;
                    }
                }); */

                if(data.isCourse_id){
                    this.class_id = this.$route.params.id;
                    this.isCourse_id = true;
                }else{
                    this.class_id = data.class_id;
                    this.isCourse_id = false;
                }
            },
            onChange(html, text) {
                ////console.log(html);
            },
             createPost() {
                if (this.announcement.content != '') {
                    this.isloading = true;
                    this.announcement.file = "sample"
                    if(this.isCourse_id == true){
                        this.announcement.course_id = this.$route.params.id;
                        this.announcement.class_id = null;
                    }else{
                        this.announcement.course_id = null;
                        this.announcement.class_id = this.class_id;
                    }
                    /* this.announcement.course_id = this.$route.params.id == this.class_id ? this.$route.params.id : null;
                    this.announcement.class_id = this.$route.params.id != this.class_id ? this.class_id  : null; */
                    this.announcement.content = this.announcement.content.replaceAll('p>', 'div>');
                    this.$store.dispatch('createClassPost', this.announcement)
                    .then(res=>{
                        if(res.status == 200){
                            this.isloading = false;
                            this.newNotification(res.data.announcement_id, this.announcement.content);
                            this.announcement.content = '';
                        }else{
                             this.isloading = false;
                        }
                    })
                   
                    this.$emit("SetShowComment");
                } 

            },
            onButtonClick() {
                this.isSelecting = true
                window.addEventListener('focus', () => {
                this.isSelecting = false
                }, { once: true })

                this.$refs.uploader.click()
            },
             onFileChanged(e) {
                this.selectedFile = e.target.files[0]
            },
             onEditorBlur(editor) {
                this.editorData = editor;
            },
            onEditorFocus(editor) {
                 this.editorData = editor;
            },
            onEditorReady(editor) {
                this.editorData = editor;
            },
            imageHandler() {
                const editor = this.editorData;
                const input = document.createElement('input');

                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.click();

                input.onchange = async () => {
                    const file = input.files[0];

                    if(file.size < 300000){
                    const formData = new FormData();

                    formData.append('file', file);
                    formData.append('type', 'Announcement');
                    formData.append('course_id', this.$route.params.id);
                    // Save current cursor state
                    const range = editor.getSelection(true);

                    editor.setSelection(range.index + 1);
                    await axios.post('/api/classwork/newAttachment', formData)
                        .then(async ({data}) => {
                            // Insert uploaded image
                            await editor.insertEmbed(range.index, 'image', data.link);
                        })
                        .catch(({response}) => {
                            
                        })

                     }else{
                         this.toastError('Image size is to big!')
                     }
                }
            },
            onChange(quill,html, text){
                ////console.log(this.announcement.content);
            },
           async newNotification(announcement_id, content){
                this.notifyDetails.class_id = this.$route.params.id != this.class_id ? this.class_id : null;
                this.notifyDetails.course_id = this.$route.params.id == this.class_id ?  this.$route.params.id : null;
                this.notifyDetails.course_find_id = this.$route.params.id;
                this.notifyDetails.announcement_id = announcement_id;
                 this.notifyDetails.content = content;
                this.notifyDetails.type = 'announcement';
                axios.post('/api/notification/new', this.notifyDetails);
            },
        },
}
</script>

<style>

.AnnoumentEditor > .quill-editor {
        position: relative;
        background: #d0cece;
    }

    .AnnoumentEditor >  .ql-container.ql-snow {
        border: none !important;
    }

    .AnnoumentEditor >  .ql-toolbar.ql-snow {
        background: #f2f2f2;
        border: none;

    }

    .AnnoumentEditor > 
    .ql-bold,.ql-italic,.ql-underline, .ql-strike
    ,.ql-picker-label,.ql-align,.ql-list,.ql-link
    ,.ql-image,.ql-video
    {
        outline: none !important;
        border:none !important;
    } 
        .AnnoumentEditor >  .ql-tooltip, .ql-editing{
        z-index: 1;
    }
        .AnnoumentEditor iframe{
            width: 60% !important;
            height: 20rem !important;
        }
        .AnnoumentEditor .ql-editor img{
            max-height: 25rem !important;
        }
        
    
        

</style>
