<template>
    <div>

        <v-row>
            <v-col v-for="(item, index) in ClassList" :key="index" cols="6" sm="6" md="3" lg="2" xl="2">
                <v-card elevation="1" >
                    <v-toolbar dense dark color="primary">
                        <v-toolbar-title>{{item.class_name}}</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <div>
                             <v-icon left>mdi-account-supervisor</v-icon>
                            Student: {{item.student_count}}
                        </div>
                        <div>
                            <v-icon left>mdi-book-open-variant</v-icon>
                            Classwork: {{item.classwork_count}}
                        </div>
                        <div>
                            <v-icon left>mdi-progress-check</v-icon>
                            Progress: {{item.classwork_count+'%'}}
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
        }
    },
 
    methods:{
         async getClasslist(){
             axios.get('/api/teachers/classes/'+this.course_details.course_id+'/'+this.$route.params.id)
             .then(res=>{
                 this.ClassList = res.data;
             })
        },

    },
    beforeMount(){
        this.getClasslist();
    },


}
</script>