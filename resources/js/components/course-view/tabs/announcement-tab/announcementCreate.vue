<template>
<div>
    <vue-element-loading :active="isloading" spinner="bar-fade-scale" />
    <!--  <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        name="anouuncement"
        outlined
        class="ma-0 pa-0"
        auto-grow
        
        
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        >
    </v-textarea>
    <v-btn depressed color="primary" class="mt-0">Post</v-btn> -->
    
   <!--  <div contentEditable="true">Type here. You can insert images too
        <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQCze-mfukcuvzKk7Ilj2zQ0CS6PbOkq7ZhRInnNd1Yz3TQzU4e&t=1" />
    </div> -->
    
     <editor style="outline:none;"  placeholder="Announce something in your class!" 
      v-model="announcement.content" @change="isEditing = true, fetchClassnames" theme="snow" :options="options"></editor>
  <!--   <v-expand-transition> -->
        <v-row  class="pl-3 pr-3">
            <v-col cols="6" md="8" lg="8">
               <v-container ma-0 pa-0 class="ma-0 pa-0 d-flex flex-row">
                    <v-btn 
                        class="text-none"
                        depressed
                        :loading="isSelecting"
                        @click="onButtonClick"
                    >
                        <v-icon left>
                        cloud_upload
                        </v-icon>
                        {{$vuetify.breakpoint.xs ? '': 'Upload file'}}
                    </v-btn>
                    <input
                        ref="uploader"
                        class="d-none"
                        name="file"
                        type="file"
                        accept="image/*"
                        @change="onFileChanged"
                    >
                </v-container>
            </v-col>

            <v-col cols="6" md="4" lg="4" class="text-rigth mb-0 pb-0">
                <v-container ma-0 pa-0 :class="UserDetails.role != 'Student' ? 'ma-0 pa-0 d-flex flex-row' :'ma-0 pa-0'">
                <v-select
          
                v-if="UserDetails.role != 'Student'"
                class="mr-2"
                @change="testing()"
                 :items="classNames"
                item-text="class_name"
                item-value="class_id"
                label="All Class"
                v-model="class_id"
                dense
                solo
                ></v-select>

                <!--  <v-select
                    v-if="UserDetails.role != 'Student'"
    
                     class="mr-2"
                    :items="classNames"
                    :loading="isLoadingClassNames"
                    :disabled="isLoadingClassNames"
                    item-text="class_name"
                    v-model="class_id"
                    item-value="class_id"
                    dense
                    solo
                     label="All Class"
                    >
                    <template slot="selection" slot-scope="data">
                        {{ data.item.class_name }}
                    </template>
                    <template slot="item" slot-scope="data">
                        {{ data.item.class_name }}
                    </template>
                </v-select> -->
                <v-btn depressed type="submit" name="create_post" color="primary"
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
            isEditing: false,
            isloading: false,
            value: '',
            content: '',
            class_id: this.$route.params.id,
            announcement: {
                content: "",
                file: "",
                class_id: ""
                },
            options:{
                modules: {
                        'toolbar': [
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ 'header': [1, 2, 3, 4, 5, false] }],
                            [{ 'align': [] }],
                            [{ 'color': [] }],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['link', 'image', 'video'],
                        ],
                    }
                }
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

            onChange(html, text) {
                //console.log(html.length, text.length);
            },
             createPost() {
                if (this.announcement.content != '') {
                    this.isloading = true;
                    this.announcement.file = "sample"
                    this.announcement.course_id = this.$route.params.id;
                    this.announcement.class_id = this.class_id;
                    this.announcement.content = this.announcement.content.replaceAll('p>', 'div>');
                    this.$store.dispatch('createClassPost', this.announcement)
                    .then(res=>{
                        if(res.status == 200){
               
                            this.isloading = false;
                            this.newNotification(res.data.announcement_id);
                        }else{
                             this.isloading = false;
                        }
                    })
                    this.announcement.content = '';
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
                
                // do something
            },
             fetchClassnames() {
                if(this.UserDetails.role == 'Teacher'){
                    axios.get('/api/class/allnames/' + this.$route.params.id+'/'+0).then(res => {
                        this.classNames = res.data;
                        this.isLoadingClassNames = false
                        this.isLoaded = true;
                        this.classNames.push({ class_id: this.$route.params.id, class_name: 'All Class', id: this.$route.params.id});
                    })
                }
            },
            testing(){
                //console.log(this.class_id);
            },
           async newNotification(announcement_id){
                this.notifyDetails.class_id = this.class_id;
                this.notifyDetails.course_id = this.$route.params.id;
                 this.notifyDetails.announcement_id = announcement_id;
                this.notifyDetails.type = 'announcement';
                axios.post('/api/notification/new', this.notifyDetails);
            }
        },
}
</script>

<style lang="scss">
  
        .ql-bold,.ql-italic,.ql-underline, .ql-strike
        ,.ql-picker-label,.ql-align,.ql-list,.ql-link
        ,.ql-image,.ql-video
        {
            outline: none !important;
            border:none !important;
        } 
        .ql-tooltip, .ql-editing{
            z-index: 1;
        }
         iframe{
             width: 100% !important;
            height: 20rem !important;
         }
         .ql-editor img{
  
             max-height: 25rem !important;
         }
         .ql-container{
             max-height: 70rem;
         }
        

</style>
