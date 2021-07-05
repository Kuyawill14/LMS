<template>

    <v-list dense>
        <template>
            
                 <v-list-item link :to="{name: 'dashboard'}" >
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                          Dashboard
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                
                <v-list-item link :to="{name: 'courses'}" >
                    <v-list-item-action>
                        <v-icon>mdi-contacts</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Course Page
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

        </template>
    </v-list>

</template>

<script>
    export default {


    }

</script>
