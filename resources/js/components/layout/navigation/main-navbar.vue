<template>

    <v-list nav >
        <template>
            
                 <v-list-item link :to="{name: 'dashboard'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                          Dashboard
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                
                <v-list-item link :to="{name: 'courses'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-contacts</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{role == 'Student' ? 'Classes' : 'Course Page'}}
                            
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                    <v-list-item link :to="{name: 'e-library'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-book-multiple</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            E-Library
                            
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>



                 <!--  <v-list-item link :to="{name: 'backpack'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-bag-personal</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Archives
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                 <v-list-item link :to="{name: 'backpack'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-bag-personal</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Backpack
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item> -->

        </template>
    </v-list>

</template>

<script>
    export default {
        props:['role']

    }

</script>
