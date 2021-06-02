<template>
    <div>
        <newClassworkModal v-if="role == 'Teacher'"></newClassworkModal>
         <v-container>
            <v-row>
                <v-col>
                    <h2>{{ role == 'Teacher' ? 'Manage Classworks' : 'Classworks'}}</h2>
                </v-col>
               
            </v-row>
        </v-container>
        <classworkList :role="role"></classworkList>
        
    </div>
    
</template>
<script>
import classworkList from './classworkList';
import newClassworkModal from './newClassworkModal';
export default {
    props:['role'],
    components:{
        classworkList,
        newClassworkModal
    }
    
}
</script>