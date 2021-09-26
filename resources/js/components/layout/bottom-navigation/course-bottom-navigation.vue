<template>
        <v-bottom-navigation
           
            color="primary"
            grow
            fixed
            shift
            hide-on-scroll
            app >
            <v-btn link :to="{name: 'announcement'}" exact>
                <span> Announcement</span>
                <v-icon>mdi-message-alert</v-icon>
            </v-btn>

            <v-btn link :to="{name: 'classwork'}" exact >
                <span>Classwork</span>
                <v-icon>mdi-book-open-variant</v-icon>
            </v-btn>

             <v-btn link :to="{name: 'student-modules'}" exact >
                <span>Modules</span>
               <v-icon>mdi-book-variant-multiple</v-icon>
            </v-btn>

             <v-btn link :to="{name: 'mystudentProgress'}" exact >
                <span> My Progress</span>
                <v-icon>mdi-chart-box-outline</v-icon>
            </v-btn>

              <v-btn link :to="{name: 'studentGradebook'}" exact >
                <span> My Grades</span>
                <v-icon>mdi-book-open</v-icon>
            </v-btn>

            <v-btn link :to="{name: 'Student-list'}" exact >
                <span>People</span>
                <v-icon>mdi-account-group</v-icon>
            </v-btn>

        </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 0 }),
  }
</script>