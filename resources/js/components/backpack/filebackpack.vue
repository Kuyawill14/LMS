<template>
    <div>
        <h2>File Backpack <v-icon right large>mdi-bag-personal</v-icon></h2>
        <v-row v-if="isloading"  >
            <v-col :height="$vuetify.breakpoint.lgAndUp ? 200 : 140" v-for="n in 4" :key="n" cols="12" xl="3" lg="3" md="6">
                <v-skeleton-loader  type="image, article"></v-skeleton-loader>
            </v-col>
        </v-row>
        <v-row v-else class="mt-1">
           <!--  <v-col cols="12">
            
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" disabled color="info">
                                download all
                            <v-icon right>mdi-download</v-icon>
                        </v-btn>
                    </template>
                    <span>Download all files</span>
                </v-tooltip>
            </v-col> -->
            <v-col cols="12">
                <v-row>
                    <v-col cols="4" lg="2" md="2" v-for="(item, i) in filesList" :key="'class' + i">
                        <div class="card-expansion">
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-list  rounded >
                                        <v-list-item v-bind="attrs" v-on="on"  @click="DownLoadFile(item.attachment)" link class="text-center">
                                            <v-list-item-content>
                                                <div>
                                                    <v-icon :color="CheckFileIconColor(item.extension)" :style="$vuetify.breakpoint.lgAndUp ? 'font-size:6rem' : 'font-size:3.5rem'">
                                                    {{CheckFileIcon(item.extension)}}
                                                </v-icon>
                                                </div>
                                                <v-list-item-title>
                                                    {{item.name}}
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </template>
                                <span>{{item.name}}</span>
                            </v-tooltip>
                           
                        </div>
                    </v-col>
               </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        title: 'File-Backpack',
        props:['UserDetails'],
        data () {
            return {
                tab: null,
                imageFile:'',
                Details:null,
                loading: false,
                isloading: true,
                message:null,
                type:null,
                ArchiveClasses:[],
                restoreDialog: false,
                restoreDetails: {},
                icons:[
                    'mdi-file-link',
                    'mdi-file-excel',
                    'mdi-file-image',
                    'mdi-file-word',
                    'mdi-file-pdf-box'

                ],
                filesList:[]
            }
        },
        methods: {
             CheckFileIcon(ext){
                if(ext == 'jpg' ||  ext == 'jpeg' || ext == 'gif' ||  ext == 'svg' || ext == 'png' ||  ext == 'bmp') return 'mdi-image';
                else if(ext == 'pdf') return 'mdi-file-pdf';
                else if(ext == 'txt' ) return 'mdi-note-text-outline';
                else if(ext == 'docx' || ext == 'doc') return 'mdi-file-word';
                else if(ext == 'link' ) return 'mdi-file-link';
                else if(ext == 'xlsx' || ext == 'xlsm' || ext == 'xls') return 'mdi-microsoft-excel';
                else if(ext == 'ppt' || ext == 'pptx') return 'mdi-microsoft-powerpoint';
                else return 'mdi-circle-off-outline';
            },
            CheckFileIconColor(ext){
                if(ext == 'jpg' ||  ext == 'jpeg' || ext == 'gif' ||  ext == 'svg' || ext == 'png' ||  ext == 'bmp') return 'info';
                else if(ext == 'pdf') return 'red';
                else if(ext == 'txt' ) return 'primary';
                else if(ext == 'docx' || ext == 'doc') return 'blue';
                else if(ext == 'link' ) return 'green';
                else if(ext == 'xlsx' || ext == 'xlsm' || ext == 'xls') return 'green';
                else if(ext == 'ppt' || ext == 'pptx') return 'red';
                else return 'primary';
            },
            async fetchFiles() {
                this.isGetting = true;
                await axios.get('/api/profile/backpack')
                .then(res=>{
                   if(this.UserDetails.role == 'Teacher'){
                        res.data.forEach(item => {
                            item.attachment.forEach(element => {
                                this.filesList.push(element);
                            });
                        });
                   }else if(this.UserDetails.role == 'Student'){
                       res.data.forEach(item => {
                           
                           item.attachment.forEach(element => {
                               if(element.fileExte != 'type_answer')this.filesList.push(
                                {
                                    name: element.name,
                                    extension: element.fileExte,
                                    size: element.fileSize,
                                    attachment: element.link,
                                });
                            });
                          
                        });

                        console.log(this.filesList);
                   }
                    this.isloading = false;
                })
            },
            DownLoadFile(file) {
                let path = file.replace('.cdn','');
                window.open(path, '_blank');
            },

        },
        mounted(){
            this.fetchFiles();
         
        }
    }
</script>