<template>
    <div>
        <h1>System Verifying your email</h1>
    </div>
</template>
<script>
 import {mapActions} from 'vuex';
export default {
      methods: {
            ...mapActions(["verifyEmail"])
        },
    mounted(){
       this.verifyEmail(this.$route.query).then((response) => {
           console.log(response);
            this.$router.push({name: 'login'})
        });
    }
}
</script>