<template>
  
<v-card>
    <v-form class="text-center" ref="InviteForm" v-model="valid" lazy-validation>
        <v-card-title >
            <span class="text-h5 mb-2">Add Student</span>
        </v-card-title>
        <v-card-text>
            <v-container ma-0 pa-0>
            <v-row>
                <v-col
                cols="12" class="mb-0 pb-0">
                    <v-select
                        id="selectClass"
                        ref="selectClass"
                        v-model="cl_id"
                        :items="classList"
                        item-text="class_name"
                        item-value="class_id"
                        label="Class"
                        outlined
                    ></v-select>
                </v-col>

                <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
                <v-text-field
                    :rules="emailRules"
                    v-model="email"
                    type="email"
                    outlined
                    label="Email"
                    hint="Please use a working valid email"
                ></v-text-field>
                </v-col>
            </v-row>
            </v-container>
            <small>For registered student, type email account above to send invite through there notification.</small>
        </v-card-text>
        <v-card-actions class="pb-3">
            <v-spacer></v-spacer>
            <v-btn
            color="primary"
            outlined
            rounded
            class="pl-8 pr-8"
            @click="$emit('toggleCancelDialog')"
            >
            Cancel
            </v-btn>
            <v-btn
            color="primary"
            class="pl-12 pr-12"
            rounded
            :loading="isAdding"
            :disabled="!valid" 
            @click="validate()"
            >
            Add
            </v-btn>
        </v-card-actions>
    </v-form>
</v-card>
 
</template>
<script>
export default {

    data(){
        return{
            isAdding: false,
            valid: true,
            cl_id: null,
            classList:[],
            email: null,
            InviteDetails:{},
            emailRules: [
                v => !!v || "Required",
                v => /.+@.+\..+/.test(v) || "Email must be valid"
            ],
        }
    },
    methods:{
         async fetchClassnames() {
                axios.get('/api/class/allnames/' + this.$route.params.id+'/'+0).then(res => {
                    this.classList = res.data;
                    this.cl_id = this.classList[0].class_id;
                })
            },
        async InviteStudent(){
            this.isAdding = true;
            this.InviteDetails.class_id = this.cl_id;
            this.InviteDetails.email = this.email;
            for (let i = 0; i < this.classList.length; i++) {
                if(this.cl_id == this.classList[i].class_id){
                    this.InviteDetails.class_name = this.classList[i].class_name;
                    this.InviteDetails.class_code = this.classList[i].class_code;
                }
            }
            axios.post('/api/teacher/invite-student', this.InviteDetails)
            .then(res=>{
                if(res.status == 200){
                    this.$emit('toggleconfirm');
                    this.toastSuccess("Invite successfully send");
                    this.isAdding = false;
                }
                
            }).catch(e=>{
                this.toastError('Something went wrong while sending invite!');
                this.isAdding = false;
            })
        },
        validate() {
            if (this.$refs.InviteForm.validate()) {
                this.InviteStudent();
            }
        },
    },
    mounted(){
        this.fetchClassnames();
        
    }
}
</script>