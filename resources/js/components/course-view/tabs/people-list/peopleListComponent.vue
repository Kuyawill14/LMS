<template>
    <div>
         <v-breadcrumbs class="ma-0 pa-0 mt-3" :items="items">
            <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                :to="{name: item.link}"
                :disabled="item.disabled"
            >
                {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
        
        <v-row>
            <v-col v-if="role == 'Teacher'" cols="12">
                <instructorView :getcourseInfo="getcourseInfo" v-if="role == 'Teacher'" :role="role" :UserDetails="UserDetails"></instructorView>
            </v-col>

             <v-col v-if="role == 'Student'" cols="12">
                <studentView v-if="role == 'Student'" :role="role" :UserDetails="UserDetails"></studentView>
            </v-col>
        </v-row>
    </div>
</template>
<script>
const instructorView = () => import('./InstructorListView')
 const studentView = () => import('./studentListView')
export default {
    props:['role','UserDetails','getcourseInfo'],
    components:{
        instructorView,
        studentView
        
    },
    data(){
        return{
            items: [
                {
                text: 'Course',
                disabled: false,
                link: 'courses',
                },
                {
                text: 'People',
                disabled: true,
                link: 'Student-list',
                },
            ],
        }
    }
}
</script>