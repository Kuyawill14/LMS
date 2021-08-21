<template>
    <div>
         <div class="pa-4">
            <v-row >
                <v-col cols="12" class="ma-0 pa-0" v-for="(item, index) in ArchiveClasses" :key="index">
                <v-card  class="mt-3" elevation="2">
                        <v-list-item>
                                <v-list-item-avatar>
                                    <v-icon>mdi-account-multiple</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>{{item.class_name+ ' - '+item.course_name}} </v-list-item-title>
                                    <v-list-item-subtitle>Class code: {{item.class_code}} </v-list-item-subtitle>
                                    <v-list-item-subtitle>Students: {{item.student_count}}</v-list-item-subtitle>
                                </v-list-item-content>
                            <v-list-item-action>
                                <v-menu transition="slide-y-transition" bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon color="secondary " v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
                                    </template>
                                    <v-list>
                                        <v-list-item link @click="restoreClass(item.class_id,index)">
                                            <v-list-item-title>Restore</v-list-item-title>
                                        </v-list-item>
                                    
                                        <v-list-item link>
                                            <v-list-item-title>Delete</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item-action>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>  
        </div>
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


