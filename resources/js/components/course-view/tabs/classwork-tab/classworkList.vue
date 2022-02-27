<template>
    <v-row>
        <v-col cols="12" v-if="role == 'Teacher'">
            <classworkListTeacher 
            v-on:ToggleRefreshClasswork="$emit('reloadClassworks')"  
            :ClassworkLength="ClassworkLength" :classworks="classworks" v-if="role == 'Teacher'"></classworkListTeacher>
        </v-col>

        <v-col cols="12" v-if="role == 'Student'">
            <classworkListStudent 
            :ClassworkLength="ClassworkLength" v-on:ismounted="$emit('isMounted')"  :classworks="classworks" v-if="role == 'Student'"></classworkListStudent>
        </v-col>
    </v-row>
</template>

<script>    
    const classworkListStudent = () => import('./classworkListType/classworkListStudent')
    const classworkListTeacher = () => import('./classworkListType/classworkListTeacher')
    export default {
        props: ['role','classworks','ClassworkLength'],
        components: {
            classworkListStudent,
            classworkListTeacher
        },
       
    }
</script>
