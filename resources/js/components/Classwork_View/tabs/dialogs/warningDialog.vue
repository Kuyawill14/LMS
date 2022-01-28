<template>
    <v-card class="pa-2">
        <v-container fluid>
            <v-row class="pt-8 pb-12">
                <v-col class="text-center" cols="12">
                    <v-icon color="red" style="font-size:5rem">
                        mdi-alert-circle
                    </v-icon>
                </v-col>
                <v-col cols="12" class="mb-0 pb-0">
                    <h3>This classwork has already publish and have submission. </h3>
                </v-col>
                 <v-col cols="12" >
                     <div>
                         You can still edit Classwork Question and Answers, and change point values, but you cannot add or remove questions.
                         <br> If you wish to add new question and choices you need you reset all submission of this classwork.
                     </div>
                </v-col>
            </v-row>
             
        </v-container>
      </v-card>
</template>
