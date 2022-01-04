<template>
    <div class="container-fluid p-top-class">
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
        <teacherClassPage></teacherClassPage>
    </div>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";

    const teacherClassPage = () => import("./class-type/teacher-classPage");
    export default {
        props: ['role'],
        components: {
            teacherClassPage
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
                    text: 'My Class',
                    disabled: true,
                    link: 'coursePage',
                    },
                ],
            }
        },
        mounted() {
            
               $('head > title').text('Classes');
    
        }
     }

      

</script>
