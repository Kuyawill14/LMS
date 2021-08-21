<template>
    <div class="pa-1">
        <v-row >
            <v-col lg="3" md="6" v-for="(item, i) in ArchiveClasses" :key="'class' + i">
                <div class="card-expansion">
                    <v-card class="mx-auto">
                        <v-img :src="'../images/'+item.course_picture" height="200px"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="white--text align-end">
                            <v-card-subtitle>
                                <v-progress-linear :value="item.progress" height="6" class="rounded-sm">
                                </v-progress-linear>
                                <span class="text-caption float-right white--text"> {{ parseFloat(item.progress.toFixed(2))}}%
                                </span>
                                <span class="text-caption white--text"> Completed </span>
                            </v-card-subtitle>
                        </v-img>
                        <v-card-subtitle>
                            <router-link :to="{name: 'coursePage', params: {id: item.course_id}, query:{class: item.class_id}}" style="text-decoration: none">
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
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        props:['ArchiveClasses'],
        data() {
            return {
                restoreDetails:{}
            }
        },
        methods: {
             async restoreClass(id, index){
                 this.restoreDetails.id = id;
                 this.restoreDetails.index = index;
                 this.$emit('RestoreConfirm', this.restoreDetails)
            },
        },
    }

</script>