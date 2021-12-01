<template>
<v-app>
    <v-container  class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" md="4" lg="3" xl="3">
            
                    <v-row class="centered">
                        <v-col class="mb-0 pb-0 text-center" cols="12">
                            <v-icon style="font-size:10rem" color="red">mdi-lock</v-icon>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <h1 class="font-weight-regular">Access Restricted</h1>
                            <div>You don'have permission to view this page</div>
                        </v-col>
                        <v-col class="text-center mt-0 pt-0" cols="12">
                            <v-btn dark class="pl-10 pr-10" rounded @click="$router.push({path: '/'})" color="red">
                                Exit
                            </v-btn>
                        </v-col>
                    </v-row>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>
<style scoped>
.centered{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>