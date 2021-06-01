<template>
    <div>
        <v-dialog v-model="dialog" width="400px">
            <v-card>
                <v-card-title class="">
                    Join Class
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">

                        <v-col cols="12" class="pa-0 ma-0">
                            <v-text-field v-model="form.class_code" filled color="primary" label="Class Code">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text color="secondary" @click="dialog = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="joinClass">Join</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <div>
            <v-row>
                <v-col>
                    <h2>My Classes</h2>
                </v-col>
                <v-col class="text-right">
                    <v-btn bottom color="primary" dark fab fixed right @click="dialog = !dialog">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row class="mt-3">
                <v-col lg="3" md="6" v-for="(item, i) in allClass" :key="'class' + i">
                    <div class="card-expansion">
                        <v-card class="mx-auto">
                            <v-img :src="'../images/'+item.course_picture" height="200px">
                           
                            </v-img>
                            
                          

                            <v-card-title>
                                <router-link :to="{name: 'coursePage', params: {id: item.course_id}}">
                                    {{item.course_code + ' - ' + item.course_name}}
                                </router-link>
                            </v-card-title>
                            <v-card-subtitle>
                                {{ item.class_name}} <br>
                                Class code:{{ item.class_code}}
                            </v-card-subtitle>

                            

                          
                        <div> <v-progress-linear :value="item.progress" height="15">   {{ item.progress.toFixed(2).toString()}}%</v-progress-linear></div>
  
                        </v-card>

                    </div>

                </v-col>
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
                dialog: false,
                isloading: true,
                isStudent: false,
                modalType: "",
                form: new Form({
                    class_code: ""
                })
            };
        },

        methods: {
            ...mapActions(["fetchClassList"]),
            openAddmodal() {
                this.form.reset();
                this.modalType = "add";
                $("#modalJoin").modal("show");
                //console.log(this.modalType);
            },
            joinClass() {

                this.isloading = true;
                this.dialog = false;
                this.$store.dispatch("joinClass", this.form);
                this.fetchClassList();
                setTimeout(() => (this.isloading = false), 1000);

            },
            Unenroll(id) {
                this.isloading = true;
                this.$store.dispatch("Unenroll", id);
                this.fetchClassList();

                setTimeout(() => (this.isloading = false), 1000);
            }
        },
        computed: mapGetters(["allClass"]),
        mounted() {
            this.isloading = true;
            this.fetchClassList();
            setTimeout(() => (this.isloading = false), 500);
        }
    };

</script>

<style scoped>

</style>
