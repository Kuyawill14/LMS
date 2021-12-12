<template>
<div style="position:absolute;bottom: 5px; right: 5px">
    <v-btn
    style=" text-transform: unset !important;"
        @click="openFbPage()"
        id="help-btn" active-class="act-btn" depressed rounded text>
    <v-icon left>mdi-facebook</v-icon>    @ISUE-Orange 
    </v-btn>

    <v-btn
    style=" text-transform: unset !important;"
        @click=" openFbMessage()"
        id="help-btn" active-class="act-btn" depressed rounded text>
    <v-icon left>mdi-account-question</v-icon>  Help 
    </v-btn>
</div>
</template>
<script>
export default {
    methods:{
         openFbMessage() {
                window.open('https://www.messenger.com/t/102514265611526/', '_blank').focus();
        },
        openFbPage() {
            window.open('https://www.facebook.com/ISUE-Orange-102514265611526', '_blank').focus();
        },
    }
}
</script>


