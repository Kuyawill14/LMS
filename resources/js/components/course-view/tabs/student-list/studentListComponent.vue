<template>
    <v-app>
            <v-container fluid>
            <v-container v-if="isGetting" style="height: 400px;">
                <v-row class="fill-height" align-content="center" justify="center">
                        <v-icon style="font-size:14rem">
                        mdi-account-group
                    </v-icon>
                    <v-col class="text-subtitle-1 text-center" cols="12">
                        <h2> Getting Student List </h2>
                    </v-col>
                    <v-col cols="6">
                        <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-container>

            <v-container v-if="!isGetting">
            <v-row>
                <v-col cols="12">
                    <v-row>
                        <v-col class="mb-0 pb-0" cols="7"  md="10" lg="10">
                            <h2>Student List</h2>
                        </v-col>
                        <v-col class="mb-0 pb-0" cols="5"  md="2" lg="2">
                             <v-select
                             :items="classNames"
                             :loading="isloading"
                             :disabled="isloading"
                             item-text="class_name"
                             item-value="class_id"
                            
                             
                            class="float-right"
                            label="All Class"
                            dense
                            solo
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

             <v-row>
                <v-col class="pl-0 ml-0 pb-0 mb-0 pt-0 mt-0" cols="12" v-for="(item, index) in getAllStudents" v-bind:key="index">
                    <v-hover  v-slot="{ hover }">
                    <v-container style="cursor:pointer" :class="hover ? 'grey lighten-3 rounded-lg' : ''" >
    
                        <v-container class="pb-0 mb-0 pt-0 mt-0 d-flex flex-sm-row">
                            <v-avatar  size="48">
                                <v-img class="img-fluid rounded border"
                                    :src="item.profile_pic == null || item.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (item.firstName+' '+item.lastName) : item.profile_pic">
                                </v-img>
                            </v-avatar>
                            <v-container  class="pb-0 mb-0 pt-0 mt-0 d-flex flex-column ml-5" ma-0 pa-0>
                                <h3 class="text-left font-weight-light">{{item.firstName}} {{item.lastName}}</h3>
                                <div>{{item.email}}</div>
                            </v-container>
                        </v-container>
                    </v-container>
                    </v-hover>
                </v-col>
            </v-row>

            
        </v-container>

        </v-container>
    </v-app>
</template>
<script>
    export default {
        data: function () {
            return {
                isloading:true,
                isGetting: true,
                search: "",
                isClassNameLoaded:false,
                classNames:[],
                 defaultSelected: {
                    class_id: "",
                    class_name: "All Class",
                    id: ""
                    },
            }

        },
        computed: {
            getAllStudents() {
                if (this.search) {
                    return this.students.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                        .includes(v) || item.lastName.toLowerCase()
                        .includes(v))
                    })
                } else {
                    return this.students;
                }
            }
        },
        methods:{
            getStudentList(){
                axios.get('/api/student/all/'+this.$route.params.id)
                .then((res)=>{
                    this.students = res.data
                     setTimeout(() => {
                        this.isGetting = false;
                    }, 1000);

                }).catch((error)=>{
                    console.log(error)
                })
            },
              fetchClassnames() {
                axios.get('/api/class/allnames/' + this.$route.params.id).then(res => {
                    this.classNames = res.data.allClass;
                    this.isClassNameLoaded = true
                     setTimeout(() => {
                        this.isClassNameLoaded = false;
                    }, 5000);
         
                    this.isloading = false;
                    this.classNames= this.classNames|| [];

                    this.classNames.push({ class_id: this.$route.params.id, class_name: 'All Class', id: this.$route.params.id});
                })
            },
        },
        
        mounted() {
          this.getStudentList();
            setTimeout(() => {
                this.isloading = false;
                this.fetchClassnames();
         }, 5000);
        }
    }

</script>
