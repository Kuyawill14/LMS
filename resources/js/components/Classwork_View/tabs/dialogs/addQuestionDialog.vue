<template>
 
    <v-card >
      
        
        <v-card-title>
            <div class=" d-flex">
                <div>
                    <span class="font-weight-bold">Add Exisiting Question</span><br>
                    <small >All question you created from your other classwork is stored here.</small>
                </div>
                <v-spacer></v-spacer>
                <v-btn  class="ml-2 mt-1" @click="$emit('CloseDialog')" text icon>
                    <v-icon >mdi-close</v-icon>
                </v-btn>
            </div>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text style="height: 500px;overflow-y:auto">
            <v-list >
                <v-list-item v-for="(item, index) in Question_list" :key="item.id">
                    <v-list-item-content>
                        <v-list-item-title class="d-flex">
                            <span>{{index+1 }}. </span>
                            <span v-html="item.question"></span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        

        </v-card-text>
       
    
    </v-card>

</template>
<script>
export default {
    data(){
        return{
            Question_list:[],
        }
    },
    methods:{
        FetchQuestionList(){
            axios.get('/api/question_bank/list_all')
            .then((res)=>{
                this.Question_list = res.data;
            })
        }
    },
    mounted(){
        this.FetchQuestionList();
    }
}
</script>