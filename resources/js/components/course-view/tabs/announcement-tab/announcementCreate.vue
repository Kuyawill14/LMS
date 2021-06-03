<template>
<div>

    

     <editor style="outline:none;"  placeholder="Announce something in your class!" 
      v-model="announcement.content" @change="isEditing = true" theme="snow" :options="options"></editor>
   <!--  <v-expand-transition> -->
        <v-row v-if="announcement.content.length != 0" class="pl-3 pr-3 pb-1"><!-- v-if="announcement.content.length != 0" -->
            <v-col sm="8" >
               <div>
                    <v-btn 
                        class="text-none"
                        depressed
                        :loading="isSelecting"
                        @click="onButtonClick"
                    >
                        <v-icon left>
                        cloud_upload
                        </v-icon>
                            Upload file
                    </v-btn>
                    <input
                        ref="uploader"
                        class="d-none"
                        name="file"
                        type="file"
                        accept="image/*"
                        @change="onFileChanged"
                    >
                </div>
            </v-col>

            <v-col sm="4" class="text-right">
                 <select class="mr-4">
                    <option>All Class</option>
                    <option>Class 1</option>
                </select>
                <v-btn depressed type="submit" name="create_post" color="primary"
                    @click="createPost">Post</v-btn>

            </v-col>

        </v-row>
    <!-- </v-expand-transition> -->
</div>
</template>
<script>
export default {
    data() {
        return {
                selectedFile: null,
            isSelecting: false,
            isEditing: false,
            value: '',
            content: '',
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
                console.log(html.length, text.length);
            },
             createPost() {

                if (this.announcement.content != '') {
                    this.isloading = true;
                    setTimeout(() => this.isloading = false, 1500);

                    this.announcement.file = "sample"
                    this.announcement.class_id = this.$route.params.id;
                    this.announcement.content = this.announcement.content.replaceAll('p>', 'div>');
                    this.$store.dispatch('createClassPost', this.announcement);
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
