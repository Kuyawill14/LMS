<template>
    <div>

       
        <v-row v-if="isGetting" align-content="center" style="margin-top: 10rem" justify="center">
            <v-col class="text-subtitle-1 text-center" cols="12">
                Loading Classes
            </v-col>
            <v-col cols="6">
                <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
            </v-col>
        </v-row>
        
        <v-row style="margin-top: 7rem" align="center" justify="center" class="pt-10" v-if="ClassList.length == 0 && !isGetting">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:7rem">
                    mdi-book-open-variant
                </v-icon>
                <h2> Empty Classes </h2>
            </v-col>
        </v-row>

        <v-row v-if="ClassList.length != 0 && !isGetting">
            <v-col v-for="(item, index) in ClassList" :key="index" cols="6" sm="6" md="3" lg="2" xl="2">
                <v-card outlined>
                    <v-toolbar dense dark color="primary">
                        <v-toolbar-title>{{item.class_name}}</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <div class="text-body-2">
                             <v-icon left>mdi-account-supervisor</v-icon>
                            Student: {{item.student_count}}
                        </div>
                        <div class="text-body-2">
                            <v-icon left>mdi-book-open-variant</v-icon>
                            Publish Classwork: {{item.classwork_count}}
                        </div>
                       
                    </div>
                </v-card>
            </v-col>
        </v-row>
        
    </div>
</template>
<script>
export default {
    props: ['course_details'],
    data(){
        return{
            ClassList: [],
            isGetting: true,
        }
    },
 
    methods:{
         async getClasslist(){
             axios.get('/api/admin/teachers/classes/'+this.course_details.course_id+'/'+this.$route.params.id)
             .then(res=>{
                 this.ClassList = res.data.data;
                 //this.isGetting = false;
                setTimeout(() => (this.isGetting = false), 1000);
             })
        },

    },
    beforeMount(){
        this.getClasslist();
    },


}
</script>