<template>
<div>
   
  
   
        <h3 class="pl-2 pt-2">My Tasks</h3>
        <v-divider></v-divider>
        <div :style="!$vuetify.breakpoint.mdAndUp ? 'height:64vh;overflow-y:scroll':'height:32.3vh;overflow-y:scroll'">
            <vue-element-loading :active="isGetting" 
            text="Loading"
            duration="0.7"
            :textStyle="{fontSize: '15px'}"
            spinner="line-scale" color="#EF6C00"  size="30" />
       
            <v-list class="pa-1">
                <v-list-item v-if="mytask.length == 0 && !isGetting" :style="!$vuetify.breakpoint.mdAndUp ? 'margin-top:10rem' : 'margin-top:4rem'" >
                    <v-list-item-content>
                            <v-row align="center" class="mt-3" justify="center"  >
                            <v-col cols="12" class="text-center">
                                <v-icon color="primary" style="font-size:3rem">
                                    mdi-clipboard-remove-outline
                                </v-icon>
                            <p> <span class="font-weight-medium">Yahoo!</span>, You have no task today</p>
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>

               

                  <template v-show="mytask.length != 0 && !isGetting" v-for="(item, index) in mytask">
                    <v-list-item @click="$router.push({name: 'clwk',params: {id: item.course_id},query: {clwk: item.classwork_id}})"  
                    :key="index">
                        <v-list-item-avatar >
                            <v-icon color="success" v-if="item.status == 'Submitted'" large>mdi-clipboard-check-outline</v-icon>
                            <v-icon color="red" v-if="item.status != 'Submitted'" large> mdi-clipboard-edit-outline</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title  class="font-weight-bold">
                                {{item.title}}   
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                <span class="font-weight-medium">Due: </span>
                                <small>{{item.availability == 1 ? format_date(item.to_date) : 'No due'}}</small>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                   <!--   <v-divider
                        v-if="index < mytask.length "
                        :key="index">
                        </v-divider> -->
                  </template>
            </v-list>
        </div>
      
   
    </div>
</template>


<script>
    import moment from 'moment/src/moment'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: () => ({
            fav: true,
            menu: false,
            message: false,
            hints: true,
            notificationList:[],
            mytask:[],
            isGetting: true
        }),
        computed: mapGetters(["get_notification", "get_notification_count"]),
        methods: {
            ...mapActions(['fetchNotification']),
            ...mapActions(['UnreadMessage']),
            connect() {
                let newVm = this;
                this.fetchNotification();
                window.Echo.private("notification")
                    .listen('NewNotification', e => {
                        newVm.fetchNotification();
                    })
            },
            UnreadNotification(id) {
                axios.post('/api/notification/' + id).then((res) => {
                    this.fetchNotification();
                    this.$emit('reloadnotif');
                })
            },
            DeleteNotification(id) {
                axios.delete('/api/notification/' + id).then((res) => {
                    this.fetchNotification();

                })
            },

            format_date(value) {
                if (value) {
                    return moment(String(value)).format("MMMM DD, h:mm a")
                }
            },
            async fetchTodayTask(){
                await axios.get('/api/profile/taskToday')
                    .then(res => {
                        this.mytask = res.data;
                        this.isGetting = false;
                        this.$emit('RecieveTotalClasswork',this.mytask.length)
                    })
            }
            

        },
        mounted() {
            this.fetchTodayTask();
        }
    }

</script>

<style scoped>
.centered{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>

