<template>

    <v-list dense>
        <template>
            <router-link :to="{name: 'courses'}" >
                <v-list-item link="">
                    <v-list-item-action>
                        <v-icon>mdi-contacts</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Course Page
                        </v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </router-link>


        </template>
    </v-list>

</template>

<script>
    export default {


    }

</script>
