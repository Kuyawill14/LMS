<template>
    <div class="pa-1">
    <div transition="slide-y-reverse-transition">
        <v-app-bar elevation="5" 
        v-if="!$vuetify.breakpoint.mdAndUp"
            app :dense="$vuetify.breakpoint.mdAndUp"  color="primary"  >
            <v-btn dark rounded icon text 
                v-if="!$vuetify.breakpoint.mdAndUp"
                @click="$router.push({name: 'classwork'})" >
                <v-icon >mdi-arrow-left-thick</v-icon>
            </v-btn>
            <v-divider   vertical></v-divider>
        </v-app-bar>
    </div>
        <!-- <v-container class="fill-height" v-if="isloading" style="height: 500px;">
  <v-row  align-content="center" justify="center">
            <v-col cols="12" class="text-center">
                <v-progress-circular
                :size="40"
                color="primary"
                indeterminate
                ></v-progress-circular>
            </v-col>
        </v-row>
</v-container> -->

        <v-overlay :value="isLeaving">
      <!--       <v-progress-circular indeterminate size="64"></v-progress-circular>
             <v-container v-if="isloading" style="height: 670px;z-index:2"> -->
                <vue-element-loading :active="isLeaving" 
                text="Loading"
                duration="0.7"
                :textStyle="{fontSize: '20px'}"
                spinner="line-scale" color="#EF6C00"  size="60" />
<!--         </v-container> -->
        </v-overlay>


        <v-dialog v-model="removeDialog" persistent max-width="370">
            <removeAttachment v-on:toggleCancelDialog="removeDialog = false, isRemoving = false"
                v-on:toggleconfirm="RemoveFile(removeIndex)"></removeAttachment>
        </v-dialog>

         <v-dialog v-model="rubricsDialog" persistent max-width="400">
            <v-card>
                <v-container fluid class="pt-0 mt-0">
                    
                    <v-card-title class="mb-0">
                        <span class="h6">{{modalType == 'add' ? 'New Rubrics' : 'Update Rubrics'}}</span>
                        <v-spacer></v-spacer>
                        <v-btn  large icon color="secondary" text @click="rubricsDialog = false" >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                        
                 </v-card-title>
                <v-form ref="Rubricsform" v-model="rubrics_valid" lazy-validation>
                    <v-row  no-gutters >
                        <v-col class="mb-0 mt-0 pt-0" cols="12" >
                            <v-text-field outlined label="Criteria name *" v-model="criteria_form.criteria_name"
                                :rules="nameRules" type="text" class="text-field" required>
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" class="mb-0">
                            <v-text-field outlined label="Percentage *" class="text-field" v-model="criteria_form.points"
                                type="number" :rules="RubricsPointsRules" required>
                            </v-text-field>
                        </v-col>

                          <v-col cols="12" class="mb-0">
                                <v-textarea label="Description" class="text-field" v-model="criteria_form.description"
                                    outlined auto-grow>
                                </v-textarea>
                        </v-col>

                        <v-btn color="primary" block rounded  @click="validateRubricsForm()" >
                           <!--  <v-icon>
                                mdi-plus
                            </v-icon> -->
                            
                            {{modalType == 'add' ? 'Add' : 'Update'}}
                        </v-btn>
                    </v-row>
                </v-form>
            </v-container>
            </v-card>
        </v-dialog>




        <v-container v-if="!isLeaving" pa-0 ma-0 class="pa-0 pa-0" fluid>

            <v-row align="center" justify="center">
                <v-col cols="12" md="8" lg="9" xl="9">
                    <vue-element-loading :active="isUpdating" spinner="bar-fade-scale" />
                    <v-card elevation="1" outlined class="pa-5">
                        <v-form ref="UpdateClassworkForm" v-model="valid" lazy-validation>
                            <v-row>

                                <v-col cols="12" class="mt-2">
                                   <!--  <small>*Note you cannot change type</small> -->
                                     <v-text-field outlined :rules="rules" v-model="Details.type" label="Type"
                                        type="text" readonly>
                                    </v-text-field>
                                    
                                  <!--   <v-select outlined :rules="FieldRules" v-model="Details.type"
                                        :items="['Objective Type', 'Subjective Type']" label="Type"></v-select> -->
                                </v-col>
                                <v-col class="mb-0 pb-0 pt-0 mt-0" cols="12">
                                    <v-text-field @change="isNewChanges = true" outlined :rules="rules" v-model="Details.title" label="Title"
                                        type="text" required>
                                    </v-text-field>
                                </v-col>
                                <v-col class="mb-8 pb-0 pt-0 mt-0" cols="12">
                                 <!--    <v-textarea :rules="FieldRules" outlined v-model="Details.instruction"
                                        label="Instruction" auto-grow>
                                    </v-textarea> -->

                                    <editor @change="isNewChanges = true" class="classwork_editor" v-model="Details.instruction" placeholder="Instruction" theme="snow"></editor>
                                </v-col>
                                <v-col v-if="Details.type == 'Objective Type'" class="mb-0 pb-0 pt-0 mt-0" cols="12">

                                    <v-text-field @change="isNewChanges = true" v-if="Details.type == 'Objective Type'" :rules="durationrules"
                                      outlined  v-model="Details.duration" hint="mins" label="Time Limit(min)" type="number">
                                    </v-text-field>
                                </v-col>

                                <v-col v-if="Details.type == 'Subjective Type'" class="mb-0  pt-0 mt-0" cols="12">
                                    <v-text-field @change="isNewChanges = true" :rules="pointsrules" v-if="Details.type == 'Subjective Type'"
                                        outlined min="0" v-model="Details.points" label="Points" type="number">
                                    </v-text-field>
                                </v-col>

                                <v-col v-if="Details.type == 'Objective Type'" class="mb-0  pt-0 mt-0" cols="12">
                                    <v-text-field readonly @change="isNewChanges = true" :rules="pointsrules" v-if="Details.type == 'Objective Type'"
                                        outlined min="0"  v-model="Details.points" label="Total Points" type="number">
                                    </v-text-field>
                                </v-col>
                                
                                <v-col v-if="Details.type == 'Subjective Type'" class="mb-0  pt-0 mt-0" cols="12">

                                    <v-row>
                                        <v-col cols="6" class="text-left">
                                              <div class="text-h5">Rubrics</div>
                                        </v-col>
                                        <v-col cols="6" class="text-right">
                                            
                                        <v-btn v-if="Details.submitted_count  == 0" color="primary" rounded dark @click="OpenRubricsDialog()">
                                            <v-icon > mdi-plus </v-icon>
                                            Add
                                        </v-btn>
                                        </v-col>

                                         <v-col cols="12">
                                            
                                               <v-list>
                                        <v-list-item v-for="(item, index) in Details.rubrics" :key="index">
                                            <v-list-item-content >
                                                <div class="d-flex justify-start">
                                                <div class="mr-5">
                                                     <div class="font-weight-bold text-h6">
                                                    {{item.points}}%
                                                    </div>
                                                </div>
                                                <div>
                                                    <v-list-item-title class="font-weight-medium">{{item.criteria_name}}</v-list-item-title>
                                                    <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
                                                </div>
                                                 </div>
                                                
                                            </v-list-item-content>
                                            <v-list-item-action >
                                                <div class="d-flex">
                                                     <v-btn @click="criteria_form.id = item.id,
                                                        criteria_form.criteria_name = item.criteria_name,
                                                        criteria_form.points = item.points, 
                                                        criteria_form.description = item.description, 
                                                        modalType = 'update',
                                                        updateIndex = index
                                                        rubricsDialog = true" icon>
                                                    <v-icon>
                                                        mdi-pencil
                                                    </v-icon>
                                                </v-btn>
                                                 <v-btn @click="deleteDialog = true, deleteRubrics_id = item.id, deleteIndex = index" color="red" icon>
                                                    <v-icon>
                                                        mdi-delete
                                                    </v-icon>
                                                </v-btn>
                                                </div>
                                               
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                        </v-col>

                                        
                                    </v-row>
                                
                                  

                                    
                                  <!--   <v-row justify="center" align="center">
                                        <v-col cols="11">

                                            <v-text-field :rules="FieldRules" v-if="Details.type == 'Subjective Type'"
                                                outlined min="0" v-model="Details.points" label="Points" type="number">
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="1" clss="pl-0" style="margin-top: -30px;text-align:right">

                                            <v-btn color="primary" x-large dark @click="rubricsDialog = true">
                                                <v-icon > mdi-plus </v-icon>
                                              
                                            </v-btn>
                                        </v-col>
                                    </v-row> -->
                                </v-col>


                                <v-col v-if="Details.type == 'Subjective Type'" :class="isUploading ? 'b-0 pb-0 pt-0 mt-0': 'b-0 pb-0 pt-0 mt-0 '" cols="12">
                                    <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="primary" v-bind="attrs" v-on="on" class="mb-2" @click="$refs.inputFile.$refs.input.click()" text rounded>
                                            <v-icon left>
                                                mdi-attachment
                                            </v-icon>
                                            Attach file
                                        </v-btn>
                                    </template>
                                    <span>Attach File</span>
                                    </v-tooltip>
                                    <v-file-input multiple @change="onFileChange" accept=".xlsx,.xls,image/*,.doc,.docx,.ppt, .pptx,.txt,.pdf,text/plain" ref="inputFile" class="d-none">
                                    </v-file-input>

                                    <v-list  class="ma-0 pa-0">
                                        <v-list-item v-for="(item, i) in Details.attachment" :key="i" class="ma-0 pa-0">
                                            <v-list-item-avatar>
                                                <v-icon large :color="CheckFileIconColor(item.extension)">
                                                     {{CheckFileIcon(item.extension)}}
                                                </v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-hover v-slot="{ hover }">
                                                    <v-list-item-title :class="hover ? 'blue--text' : ''"
                                                        style="cursor:pointer" @click="DownLoadFile(item.attachment)">
                                                        {{item.name}}</v-list-item-title>
                                                </v-hover>
                                                <v-list-item-subtitle>
                                                   <!--  <v-progress-linear
                                                        v-if="uploadIndex == i && uploadPercentage != 100" rounded
                                                        :value="uploadPercentage"></v-progress-linear> -->
                                                         <v-progress-linear
                                                            v-if="uploadIndex == i"
                                                              color="primary"
                                                              indeterminate
                                                              rounded
                                                              height="5">
                                                      </v-progress-linear>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                
                                                <v-menu offset-y>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn
                                                        icon
                                                
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        >
                                                        <v-icon>mdi-dots-vertical</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list nav>
                                                        <v-list-item @click="removeDialog = true, removeIndex = i,isRemoving = true">
                                                            <v-list-item-title>
                                                               <!--  <v-btn text 
                                                                    :loading="removeIndex == i && isRemoving"
                                                                    @click="removeDialog = true, removeIndex = i,isRemoving = true"> -->
                                                                    <v-icon>
                                                                        mdi-close
                                                                    </v-icon>
                                                                    Delete
                                                           <!--      </v-btn> -->
                                                            </v-list-item-title>
                                                        </v-list-item>
<!--                                                          <v-list-item  @click="EditDocument(item.attachment)">
                                                            <v-list-item-title>
                                                                <v-btn text 
                                                                    :loading="removeIndex == i && isRemoving"
                                                                    @click="removeDialog = true, removeIndex = i,isRemoving = true">
                                                                    <v-icon>
                                                                        mdi-pencil-outline
                                                                    </v-icon>
                                                                    Edit
                                                                </v-btn>
                                                            </v-list-item-title>
                                                        </v-list-item> -->
                                                    </v-list>
                                                    </v-menu>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-col>

                                <v-col cols="12 text-left">

                                    <v-btn rounded :disabled="!isNewChanges && !valid" :loading="isUpdating" color="primary" class="ma-2 white--text"
                                        @click="validate()">
                                        Update
                                        <v-icon right dark>
                                            mdi-update
                                        </v-icon>
                                    </v-btn>
                                </v-col>


                            </v-row>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
          <!--   <v-row justify="center">
                <v-dialog v-model="rubricsDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <rubrics :rubricsDetails="rubricsDetails"
                    v-on:CloseAndSave="SaveRubrics"
                    v-on:deleteRubrics="RemoveRubrics"
                     v-on:CLoseRubricModal="rubricsDialog = false" v-on:CriteriaSave="rubricsDialog = false" 
                    :total_points="Details.points" :title="Details.title"/>
                </v-dialog>
            </v-row> -->

            <v-dialog v-model="deleteDialog" persistent max-width="400">
                <v-card>
                    <v-card-title>
                        <span class="headline">Confirmation</span>
                    </v-card-title>
                    <v-card-text>
                        Are you sure you want to delete this Item?
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="deleteDialog =false">
                            Cancel
                        </v-btn>
                        <v-btn color="red" text @click="deleteRubrics()" :loading="loading">
                            Delete
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </div>
</template>
<script>
    const removeAttachment = () => import('./dialogs/removeAttachment')
    const rubrics = () => import('./rubrics')
    export default {
        props: ['classworkDetails'],
        components: {
            removeAttachment,
            rubrics
        },
        data() {
            return {
                loading: false,
                valid: false,
                Details: {},
                isUpdating: false,
                isUpdatingSnackBar: false,
                isloading: true,
                file: [],
                FieldRules: [
                    v => !!v || 'Field is required',
                ],
                isCheckingFile: false,
                isUploading: false,
                isLeaving: false,
                file_name: [],
                counter: 0,
                removeDialog: null,
                removeIndex: null,
                uploadPercentage: 0,
                uploadIndex: null,
                rubricsDialog: false,
                rubricsDetails: [],
                isRemoving: false,
                isNewChanges: false,
                rules: [
                    v => !!v || 'Field is required',

                ],
                pointsrules: [
                    v => !!v || 'Points is required',
                    v => ( v && v >= 0 ) || "Points should be above or 0",
                ],
                durationrules: [
                    v => !!v || 'Duration is required',
                    v => ( v && v >= 1 ) || "Duration should be above or eqaul to 1min",
                ],
                rubrics_valid: true,
                criteria_form: {
                    id: '',
                    points: '',
                    criteria_name: '',
                    description: '',
                },
                nameRules: [
                    v => !!v || 'Field is required',

                ],
                RubricsPointsRules: [
                    v => ( v && v >= 1 ) || "Points should be above or equal to 1",
                    v => ( v && v <= 100 ) || "Points should not be above 100",
                    v => !!v || 'Points is required'
                ],
                modalType: '',
                deleteRubrics_id: null,
                deleteDialog: false,
                deleteIndex: null,
                updateIndex: null
            }
        },
        computed: {
            extension() {
                return (this.file[this.counter]) ? this.file[this.counter].name.split('.').pop() : '';
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
            OpenRubricsDialog(){
                this.clearInputs();
                this.rubricsDialog = true;
                this.modalType = 'add';
                this.$refs.Rubricsform.resetValidation();
                this.rubricsDetails = this.Details.rubrics;
            },
            clearInputs(){
                this.criteria_form.id = '';
                this.criteria_form.points = '';
                this.criteria_form.criteria_name = '';
                this.criteria_form.description = '';
                 
            },
            validate () {
                if(this.$refs.UpdateClassworkForm.validate()){
                    this.UpdateClasswork();
                }
                
            },

            validateRubricsForm () {
                if(this.$refs.Rubricsform.validate()){
                    if(this.modalType == 'add'){
                        this.AddNewRubrics();
                    }else{
                        this.UpdateRubrics();
                    }
                }
                
            },
            async AddNewRubrics(){
                 axios.post(`/api/classwork/rubrics-save/${this.$route.query.clwk}`,this.criteria_form)
                 .then((res)=>{
                     if(res){
                         this.Details.rubrics.push(res.data);
                         this.rubricsDialog = false;
                     }
                 })
            },
            async UpdateRubrics(){
                  axios.post(`/api/classwork/rubrics-update/${this.$route.query.clwk}`,this.criteria_form)
                 .then((res)=>{
                     if(res){
                         this.Details.rubrics[this.updateIndex] = res.data;
                         this.rubricsDialog = false;
                     }
                 })
            },
            async deleteRubrics(rubrics_id) {
                axios.delete(`/api/classwork/rubric/delete/${this.$route.query.clwk}/${this.deleteRubrics_id}`)
                    .then((res) => {
                        this.deleteDialog = false;
                        this.Details.rubrics.splice(this.deleteIndex, 1);
                    }).catch((err) => {
                        this.toastError('Something went wrong');
                    })
            },

            
            SaveRubrics(data){
                console.log(data);
                console.log(this.Details.rubrics);
                this.rubricsDialog = false;
                if(this.Details.rubrics.length == 0){
                    this.Details.rubrics = [];
                    data.forEach(item => {
                        this.Details.rubrics.push(item)
                    });
                }
                else{
                    data.forEach(item => {
                        let check = false;
                         this.Details.rubrics.forEach(element => {
                            if(element.id == item.id){
                                element.points = item.points;
                                element.criteria_name = item.criteria_name;
                                element.description = item.description;
                                check = true;
                            }
                           
                        });
                        if(!check){
                            this.Details.rubrics.push(item)
                        }
                    });
                }
            },
            async RemoveRubrics(id){
                let count = 0
                this.Details.rubrics.forEach(item => {
                    if(id == item.id){
                        this.Details.rubrics.splice(count, 1);
                    }
                    count++;
                });
            },
            async UpdateClasswork() {
                this.isUpdatingSnackBar = true;
                this.isUpdating = true;
                ////console.log(this.Details);
                let fd = new FormData;
                fd.append('course_id', this.Details.course_id);
                fd.append('duration', this.Details.duration);
                fd.append('instruction', this.Details.instruction);
                fd.append('id', this.Details.id);
                fd.append('module_id', this.Details.module_id);
                fd.append('points', this.Details.points);
                fd.append('title', this.Details.title);
                fd.append('type', this.Details.type);
                await axios.post('/api/classwork/update', fd)
                    .then(res => {
                        this.isUpdating = false,
                        this.toastSuccess("Classwork successfully updated")
                    })
                    .catch(e => {

                    })
            },
            TestUpload() {
                this.$refs.fileInput.$refs.input.click();
                this.isUploading = true;
            },
            onFileChange(element) {
                this.file[this.counter] = element[0];
                let size;
                if (element[0].size > 1000000) {
                    let kbsize = element[0].size * 0.001;
                    let mbsize = kbsize * 0.001;
                    let finalSize = parseInt(mbsize);
                    size = finalSize + 'mb';
                    //this.classworkDetails.attachment_size = finalSize+'mb';
                } else {
                    let sizeFile = element[0].size * 0.001;
                    let finalSize = parseInt(sizeFile);
                    size = finalSize + 'kb';
                    //this.classworkDetails.attachment_size = finalSize+'kb';
                }

                let fileName = element[0].name;
                fileName = fileName.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');

                this.file_name.push({
                    name: fileName,
                    size: size,
                    extension: this.extension
                });
                
                if(this.Details.attachment == null)this.Details.attachment = [];
                    
            
                this.Details.attachment.push({
                    name: fileName,
                    size: size,
                    attachment: null,
                    extension: this.extension,
                })



                
                this.addFile();

            },
            DownLoadFile(file) {
                let path = file.replace('.cdn','');
                window.open(path, '_blank');
            },
            EditDocument(link){
                let tmp = link.replace('.cdn','');
                let path = "https://docs.google.com/gview?url="+tmp+"&embedded=true"
          
                 window.open(path, '_blank');
            },
            addFile() {
                //console.log(this.Details.attachment.length);
                this.uploadIndex = this.Details.attachment.length - 1;
                let fd = new FormData;
                fd.append('file', this.file[this.counter]);
                fd.append('id', this.Details.id);
                fd.append('name', this.file_name[this.counter].name);
                fd.append('size', this.file_name[this.counter].size);
                fd.append('extension', this.file_name[this.counter].extension);
                axios.post('/api/classwork/addAttachment', fd, {
                        onUploadProgress: (progressEvent) => {
                            const total = progressEvent.total;
                            const totalLength = progressEvent.lengthComputable ? total : null;
                            if (totalLength != null) {
                                this.uploadPercentage = Math.round((progressEvent.loaded * 100) / totalLength);
                            }
                        }
                    })
                    .then((res) => {
                        this.counter++;
                        this.uploadIndex = null;
                        this.Details.attachment[this.Details.attachment.length-1].attachment = res.data;
                    })
            },
            RemoveFile(index) {
                if (this.Details.attachment[index].attachment != null) {
                    axios.put('/api/classwork/deleteAttachment/' + this.Details.id, {
                            attachment: this.Details.attachment[index].attachment
                        })
                        .then((res) => {
                            if (res.data.success == true) {
                                this.Details.attachment.splice(index, 1);
                            }
                        })
                } else {
                    this.Details.attachment.splice(index, 1);
                }
                this.removeDialog = false;
                 this.isRemoving = false;
            }
        },
        beforeMount() {
            this.Details = this.classworkDetails;
            this.Details.points = this.Details.points == 0 ? '0' : this.Details.points;
            
        },
        beforeRouteLeave(to, from, next) {
            this.isLeaving = true;
            next();
        },

    }

</script>

<style >
    .classwork_editor iframe{
        width: 100% !important;
        height: 20rem !important;
    }
    .classwork_editor .ql-editor img{

        max-height: 25rem !important;
        max-width: 100% !important;
    }
    .classwork_editor .ql-container{
        max-height: 70rem;
    }

</style>
