<template>
        <v-bottom-navigation
           
            color="primary"
            grow
            fixed
            app >
            <v-btn link :to="{name: 'dashboard'}" exact>
            <span>Dashboard</span>

           <v-icon>mdi-view-dashboard</v-icon>
            </v-btn>

            <v-btn link :to="{name: 'courses'}" exact >
            <span>Course Page</span>

            <v-icon>mdi-contacts</v-icon>
            </v-btn>
            
        </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 0 }),
  }
</script>