<template>
    <div>

       
        <v-row v-if="isGetting" align-content="center" style="margin-top: 10rem" justify="center">
            <v-col class="text-subtitle-1 text-center" cols="12">
                Loading student list
            </v-col>
            <v-col cols="6">
                <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
            </v-col>
        </v-row>
        
        <v-row style="margin-top: 7rem" align="center" justify="center" class="pt-10" v-if="StudentList.length == 0 && !isGetting">
            <v-col cols="12" sm="8" md="4" class="text-center">
                <v-icon style="font-size:7rem">
                    mdi-account-group-outline
                </v-icon>
                <h2> Empty Students </h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" class="pa-2">

                <v-list>
                    <v-list-item v-for="(item, index) in StudentList" :key="index">
                        <v-list-item-avatar>
                             <v-img alt="Profile"
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                </v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{item.firstName +' '+item.lastName }} <small>({{item.class_name}})</small>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

            </v-col>
        </v-row>

        
        
    </div>
</template>
<script>
export default {
    props: ['course_details'],
    data(){
        return{
            StudentList:[],
            isGetting: true,
        }
    },
 
    methods:{
        async getStudentList(){
            axios.get('/api/admin/teachers/studentList/'+this.course_details.course_id)
            .then((res)=>{
                this.StudentList = res.data;
                this.isGetting = false;
            })
        }

    },
    
    beforeMount(){
        this.getStudentList();
    },


}
</script>