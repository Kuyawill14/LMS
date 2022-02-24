<template>
    <div>
        <vue-element-loading :active="isGetting" 
        text="Loading"
        duration="0.7"
        :textStyle="{fontSize: '15px'}"
        spinner="line-scale" color="#EF6C00"  size="30" />

        <div v-if="coursesLength != 0 && isGetting == false">
            <v-row class="mt-0">
                <v-col>
                    <v-card class="mx-auto pa-2">
                        <h3>My Classes</h3>
                         <v-divider></v-divider>
                         <div v-if="allClass.length != 0">
                            <v-slide-group v-model="model" class="px-1" active-class="success" show-arrows
                                mobile-breakpoint="1000" center-active>
                                <v-slide-item v-for="(item, i) in allClass" :key="'class' + i" v-slot:default="{ active }">
                                    <router-link
                                        :to="{name: 'coursePage', params: {id: item.course_id}, query:{class: item.class_id}}"
                                        style="text-decoration: none">
                                        <v-card :color="active ? undefined : 'grey lighten-1'" class="my-4 mx-3"
                                            :height="$vuetify.breakpoint.mdAndUp ? 170 : 130" :width="$vuetify.breakpoint.mdAndUp ? 250 : 230">
                                            <v-card class="mx-auto">
                                                <v-img :src="CheckBackgroundPath(item.course_picture)" :height="$vuetify.breakpoint.mdAndUp ? 170 : 130"
                                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                                    class="white--text align-end">
                                                    <div class="px-2">
                                                        <!-- <v-progress-circular :value="item.progress" :width="4" :size="80"
                                                            align="center" justify="center" color="green">
                                                            <span style="color:#fff">{{item.progress}}% </span>
                                                        </v-progress-circular> -->

                                                        <v-progress-linear :value="item.progress" height="6"
                                                            class="rounded-sm">
                                                        </v-progress-linear>
                                                        <span class="text-caption float-right">
                                                            {{ parseFloat(item.progress.toFixed(2))}}%
                                                        </span>
                                                    </div>
                                                
                                                    <v-card-subtitle class="ml-0 pl-0">
                                                        <v-list color="transparent">
                                                            <v-list-item>
                                                                <v-list-item-content>
                                                                    <v-list-item-title class="white--text">
                                                                        <p  class="mb-0 pb-0 mb-2" :style="$vuetify.breakpoint.mdAndUp ? 'font-size: 16px;text-overflow: ellipsis;overflow: hidden; ' : 'font-size: 14px;text-overflow: ellipsis;overflow: hidden; '">{{item.course_code }}
                                                                        <br> 
                                                                        <span style="text-overflow: ellipsis;overflow: hidden; ">{{ item.course_name}}</span>
                                                                    </p>
                                                                    </v-list-item-title>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list>
                                                    <!--  
                                                        {{item.course_code }}
                                                        <br> {{ item.course_name}} -->
                                                        
                                                    <!--   <v-list class="ml-0 pl-0">
                                                        <v-list-item >
                                                            <v-list-item-content  >
                                                                <v-list-item-title >
                                                                
                                                                </v-list-item-title>
                                                        
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list> -->
                                                    </v-card-subtitle>

                                                </v-img>


                                            </v-card>

                                        </v-card>
                                    </router-link>
                                </v-slide-item>
                            </v-slide-group>
                        </div>
                        <div v-else class="pb-2 pt-2">
                            <v-row align="center" justify="center" class="pt-10" >
                                <v-col cols="12" sm="8" md="4" class="text-center">
                                    <v-icon style="font-size:6rem">
                                        mdi-book-variant-multiple
                                    </v-icon>

                                    <h2> Empty Class </h2>
                                    <p> Join class, to be able to view modules and activities.</p>
                                
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                    
                </v-col>
                <!-- <v-col lg="3" md="6" v-for="(item, i) in allClass" :key="'class' + i">
                    <div class="card-expansion">
                        <v-card class="mx-auto">
                            <v-img :src="'../images/'+item.course_picture" height="200px"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="white--text align-end">
                                <v-card-subtitle>
                                    <v-progress-linear :value="item.progress" height="6" class="rounded-sm">
                                    </v-progress-linear>
                                    <span class="text-caption float-right"> {{ parseFloat(item.progress.toFixed(2))}}%
                                    </span>
                                    <span class="text-caption "> Completed </span>
                                </v-card-subtitle>
                            </v-img>
                            <v-card-subtitle>
                                <router-link
                                    :to="{name: 'coursePage', params: {id: item.course_id}, query:{class: item.class_id}}"
                                    style="text-decoration: none">
                                    <p style="font-size: 16px;">{{item.course_code }}
                                        <br> {{ item.course_name}}
                                    </p>
                                </router-link>
                                <hr>
                                {{ item.class_name}} <br>
                                Class code:{{ item.class_code}}
                            </v-card-subtitle>


                        </v-card>

                    </div>

                </v-col> -->
            </v-row>
        </div>
    </div>
</template>




<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {

        },
        data() {
            return {
                model: null,
                coursesLength: null,
                isGetting: false,
                dialog: false,
                isloading: true,
                isStudent: false,
                modalType: "",
                form: new Form({
                    class_code: ""
                })
            };
        },
        computed: mapGetters(["allClass"]),
        methods: {
            openJoinmodal() {
                this.dialog = !this.dialogl;
            },
            joinClass() {
                this.isloading = true;
                this.dialog = false;
                this.$store.dispatch("joinClass", this.form).then(() => {
                    this.fetchClasses();
                    form.class_code = '';
                });
            },
            Unenroll(id) {
                this.isloading = true;
                this.$store.dispatch("Unenroll", id);
                this.fetchClasses();
                setTimeout(() => (this.isloading = false), 1000);
            },
            fetchClasses() {
                this.isGetting = true;
                this.$store.dispatch('fetchClassList').then(() => {
                    this.coursesLength = this.allClass.length;
                    this.isGetting = false;
                });
            },
            goToclass(course_id, class_id) {
                this.$router.to({
                    name: 'coursePage',
                    params: {
                        id: course_id
                    },
                    query: {
                        class: class_id
                    }
                });
            },
             CheckBackgroundPath(path){
                if(path != null){
                    if(path.includes('https://orangestr.sgp1.cdn.digitaloceanspaces.com')){
                    return path;
                    }
                    else{
                        return '../images/' + path;
                    }
                }
            }
        },
        mounted() {
            //this.fetchClasses();
        }
    };

</script>

<style scoped>
    .text-caption {
        color: #fff !important;
    }

    .text-white {
        color: #fff !important;
    }

</style>
