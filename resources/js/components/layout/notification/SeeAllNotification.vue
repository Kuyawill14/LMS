<template>
<div>
    <v-row>
      <v-col class="text-center">
           <div >Notification List</div>
      </v-col>
    </v-row>
</div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      }
    },
  }
</script>