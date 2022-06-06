<template>

    <v-list nav>

        <template>
            <v-list-item link :to="{name: 'campus_director-monitor_deparments-id'}"
                v-if="$route.name == 'departmentMonitorTeacher_id'" exact>
                <v-list-item-action>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Go Back
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider  v-if="$route.name == 'departmentMonitorTeacher_id'"></v-divider>


<!-- 

            <v-list-item link :to="{name: 'dashboard'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Dashboard
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item> -->


            <v-list-item link :to="{name: 'campus_director-monitor_deparments'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-office-building-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Monitor Department
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <!-- <v-list-group color="none" value="false" link prepend-icon="mdi-contacts">
                <template v-slot:activator>
                    <v-list-item-title>Manage Users</v-list-item-title>
                </template>
                <v-list-item link :to="{name: 'program_chair-manage_teachers'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-account-supervisor</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Teacher Accounts
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item link :to="{name: 'program_chair-manage_students'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-human-greeting</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>
                            Student Accounts
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group> -->

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
