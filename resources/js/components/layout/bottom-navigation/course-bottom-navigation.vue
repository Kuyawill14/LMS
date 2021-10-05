<template>
        <v-bottom-navigation
      
          
            color="primary"
        
            grow
            app 
            >

            <!-- <v-btn   link :to="{name: 'announcement'}" exact>
                <span> Announcement</span>
                <v-icon >mdi-message-alert</v-icon>
            </v-btn>

            <v-btn  link :to="{name: 'classwork'}" exact >
                <span >Classwork</span>
                <v-icon >mdi-book-open-variant</v-icon>
            </v-btn>

             <v-btn  link :to="{name: 'student-modules'}" exact >
                <span>Modules</span>
               <v-icon >mdi-book-variant-multiple</v-icon>
            </v-btn> -->

            <v-btn link :to="{name: 'announcement'}" exact>
                <span :style="$vuetify.breakpoint.smAndUp ? 'font-size: 10px' : 'font-size: 6px'" >Announcement</span>
                <v-icon >mdi-message-alert</v-icon>
            </v-btn>

            <v-btn link :to="{name: 'classwork'}" exact>
                <span :style="$vuetify.breakpoint.smAndUp ? 'font-size: 10px' : 'font-size: 7px'" > Classwork</span>
                <v-icon >mdi-book-open-variant</v-icon>
            </v-btn>

            <v-btn  link :to="{name: 'student-modules'}" exact >
                <span :style="$vuetify.breakpoint.smAndUp ? 'font-size: 10px' : 'font-size: 7px'" >Modules</span>
                <v-icon >mdi-book-variant-multiple</v-icon>
            </v-btn>

             

             <v-btn  link :to="{name: 'Student-list'}" exact >
                <span :style="$vuetify.breakpoint.smAndUp ? 'font-size: 10px' : 'font-size: 7px'" >People</span>
                <v-icon >mdi-account-group</v-icon>
            </v-btn>
            <v-btn link :to="{name: 'studentGradebook'}" exact >
                <span :style="$vuetify.breakpoint.smAndUp ? 'font-size: 10px' : 'font-size: 7px'" >Grades</span>
               <v-icon >mdi-book-open</v-icon>
            </v-btn>
            
           <!--  <v-btn x-small link :to="{name: 'Student-list'}" exact >
                <span style="font-size:8px">People</span>
                <v-icon small>mdi-account-group</v-icon>
            </v-btn> -->

        </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 0 }),
  }
</script>