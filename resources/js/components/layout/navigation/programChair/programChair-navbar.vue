<template>

    <v-list nav>

        <template>


            <v-list-item link :to="{name: 'monitorTeachers'}" v-if="$route.name == 'monitorTeacher_id'" exact>
                <v-list-item-action>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Go Back
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider v-if="$route.name == 'monitorTeacher_id'"></v-divider>

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


            <v-list-item link :to="{name: 'monitorTeachers'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-chart-box-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Monitor Teachers
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>


        </template>


    </v-list>



</template>



<script>
    export default {
        mounted() {
            //console.log(this.$route);
        }
    }

</script>
