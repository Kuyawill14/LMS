<template>
    <div>

       
       <!--  <v-row v-if="isGetting" align-content="center" style="margin-top: 10rem" justify="center">
            <v-col class="text-subtitle-1 text-center" cols="12">
                Loading student list
            </v-col>
            <v-col cols="6">
                <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
            </v-col>
        </v-row> -->

        <v-row style="margin-bottom: -50px;">
            <v-col class="text-right" cols="12" md="2">
                <v-select class="mr-2 my-1" dense label="Class"
                @change="showLoading()"
                :items="class_name" item-text="class_name" item-value="id"
                 v-model="class_id" outlined small></v-select>
            </v-col>
        </v-row>

        <v-row v-if="isGetting || isloading" >
            <v-col v-for="n in 16" :key="n" cols="12" md="3" class="pa-1" >
                <v-skeleton-loader max-width="380" type="list-item-avatar-two-line"></v-skeleton-loader>
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

       

        <v-row  v-if="StudentList.length != 0 && !isGetting && !isloading">
            <v-col cols="12" md="3" class="pb-0 pt-0"  v-for="(item, index) in filteredStudentList" :key="index">
                <v-list>
                    <v-list-item  >
                        <v-list-item-avatar>
                             <v-img alt="Profile"
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=random&color=fff&name=' + item.firstName +' '+item.lastName : item.profile_pic">
                                </v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{item.firstName +' '+item.lastName }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                 <small>({{item.class_name}})</small>
                            </v-list-item-subtitle>
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
            class_id: null,
            class_name:[],
            isloading: false
        }
    },
    computed:{
        filteredStudentList(){
            let Filterddata = this.StudentList;
            Filterddata = Filterddata.filter((item) => {
                return this.class_id == item.class_id
            })
            return Filterddata;
        }
    },
 
    methods:{
        async getStudentList(){
            axios.get('/api/admin/teachers/studentList/'+this.course_details.course_id)
            .then((res)=>{
                this.StudentList = res.data.student_list;
                this.class_name = res.data.class_name;

                if(this.class_name.length != 0){
                    this.class_id = this.class_name[0].id
                }
                setTimeout(() => (this.isGetting = false), 700);
            })
        },
        showLoading(){
            this.isloading = true;
            setTimeout(() => (this.isloading = false), 500);

        }

    },
    
    mounted(){
        this.getStudentList();
    },


}
</script>