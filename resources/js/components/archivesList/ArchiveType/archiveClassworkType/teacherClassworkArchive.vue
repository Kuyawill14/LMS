<template>
    <div class="pa-1">
        <v-row>
            <v-col v-for="(item, index) in ArchiveClasswork" :key="index" cols="12" md="12" lg="4" xl="4">
               <!--  <v-card>

                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-avatar size="45"
                                    color="red">
                                        <v-icon  color="white" >
                                        mdi-book-open-variant
                                    </v-icon>
                                </v-avatar>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>
                                    This is Classwork Title
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    Created: date
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                 <v-menu  bottom offset-y>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        icon
                                        v-bind="attrs"
                                        v-on="on" >
                                        <v-icon >mdi-dots-vertical</v-icon>
                                    </v-btn>
                                
                                    </template>
                                
                                    <v-list rounded >
                                       
                                        <v-list-item link ma-0 pa-0>
                                            <v-list-item-title><v-icon left>mdi-archive</v-icon>Restore</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item  link ma-0 pa-0>
                                            <v-list-item-title><v-icon left>mdi-delete</v-icon>Delete</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>

                </v-card> -->

                  <v-expansion-panels focusable>
                            <v-expansion-panel  class="ma-0 pa-0">
                                <v-expansion-panel-header  class="ma-0 pa-0 pa-2" disable-icon-rotate hide-actions>
                                     <v-list>
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-avatar size="45"
                                                    color="red">
                                                        <v-icon  color="white" >
                                                        mdi-book-open-variant
                                                    </v-icon>
                                                </v-avatar>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    {{item.title}}
                                                </v-list-item-title>
                                                <v-list-item-subtitle>
                                                    Created: {{format_date(item.created_at)}}
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-menu  bottom offset-y>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn
                                                        icon
                                                        v-bind="attrs"
                                                        v-on="on" >
                                                        <v-icon >mdi-dots-vertical</v-icon>
                                                    </v-btn>
                                                
                                                    </template>
                                                
                                                    <v-list rounded >
                                                    
                                                        <v-list-item link ma-0 pa-0>
                                                            <v-list-item-title @click="RestoreClasswork(item.id, index)"><v-icon left>mdi-archive</v-icon>Restore</v-list-item-title>
                                                        </v-list-item>
                                                        <v-list-item  link ma-0 pa-0>
                                                            <v-list-item-title><v-icon left>mdi-delete</v-icon>Delete</v-list-item-title>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                        


                                       
                                </v-expansion-panel-header>
                            <!--  </v-hover> -->
                            <v-expansion-panel-content id="extend" class=" expand ma-0 pa-0 mt-3">
                                <v-row no-gutters>
                                    <v-col cols="8" class="pr-2">
                                        <div  class="mb-5 text-caption">{{item.instruction}}</div>
                                    </v-col>
                                       <v-col cols="4">
                                           <div class="flex-column">
                                               <h1 class="mb-0 pb-0">{{item.submittion_count ? item.submittion_count : 0}}</h1>
                                               <small class="mt-0 pt-0">Submitted</small>
                                           </div>
                                    </v-col>
                                </v-row>
                               
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
            </v-col>
        </v-row>
    </div>
</template>
<script>
 import moment from 'moment/src/moment';
        
export default {
    props:['ArchiveClasswork'],
    data(){
        return{
        
            isGetting: false,
        }
    },
    methods:{
        format_date(value) {
            if (value) {
                return moment(String(value)).format('MMMM Do YYYY, hh:mm A')
            }
        },

        async RestoreClasswork(id, index){
            axios.put('/api/archive/restore-classwork/'+id)
            .then(res=>{
                if(res.data.success == true){
                    this.toastSuccess(res.data.message);

                    this.ArchiveClasswork.splice(index, 1);
                }
            })
        }
    },
   
}
</script>