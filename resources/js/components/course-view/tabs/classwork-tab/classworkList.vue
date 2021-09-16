<template>
    <v-row>
        <v-col cols="12" v-if="role == 'Teacher'">
            <classworkListTeacher v-on:ismounted="$emit('isMouted')" :classworks="classworks" v-if="role == 'Teacher'"></classworkListTeacher>
        </v-col>

        <v-col cols="12" v-if="role == 'Student'">
            <classworkListStudent v-on:ismounted="$emit('isMouted')"  :classworks="classworks" v-if="role == 'Student'"></classworkListStudent>
        </v-col>
    </v-row>
</template>

<script>    
    const classworkListStudent = () => import('./classworkListType/classworkListStudent')
    const classworkListTeacher = () => import('./classworkListType/classworkListTeacher')
    import moment from 'moment/src/moment';
    export default {
        props: ['role','classworks'],
        components: {
            classworkListStudent,
            classworkListTeacher
        },
       
    }
</script>
