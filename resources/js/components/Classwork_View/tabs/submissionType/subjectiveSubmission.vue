<template>
<div>
    <v-container class="fill-height" v-if="isloading" style="height: 400px;">
    <v-row  align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
            Loading
        </v-col>
        <v-col cols="6">
            <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
    </v-row>
</v-container>

<v-card v-if="!isloading"  class="elevation-5" style="border-top:4px solid #EF6C00">
    <v-window>
        <v-window-item >
                <v-row>
                <v-col  cols="12" md="12" class="pt-3">
                        

                     
                </v-col>
            </v-row>
     </v-window-item>
    </v-window>
</v-card>
</div>
</template>
<script>
export default {
    data(){
        return{
            isloading:true,
            List:[],
             selectedTasks: [],
             search: '',
             headers: [
                {
                    text: 'id',
                    align: 'start',
                    value: 'id',
                },
                { text: 'Name', value: 'name' },
                { text: 'Status', value: 'status',align: 'center',},
                { text: 'Points', value: 'points' },
                { text: 'Actions',sortable: false},
                
            ],
            
        }
    },
    methods:{
       
    },
    mounted(){
        
    }
}
</script>