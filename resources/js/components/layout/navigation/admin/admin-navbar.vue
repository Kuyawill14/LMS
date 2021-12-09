<template>

    <v-list nav>
        <template v-if="$route.name == 'teacherProfile'">
            <v-list-item link :to="{name: 'monitorTeachers'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Go back
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
        </template>



        <template v-if="$route.name != 'teacherProfile'">

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

            <!-- <v-list-item link :to="{name: 'manageUsers'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-contacts</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Manage Users
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item> -->

            <v-list-group color="none" value="false" link prepend-icon="mdi-contacts">
                <template v-slot:activator>
                    <v-list-item-title>Manage Users</v-list-item-title>
                </template>

                <v-list-item link :to="{name: 'manageCampusDirector'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-human-greeting</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>
                            Campus Director
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="{name: 'manageProgramChair'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-human-greeting</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>
                            Program Chair
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link :to="{name: 'manageteachers'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-account-supervisor</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Instructors
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>



                <v-list-item link :to="{name: 'managestudents'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-human-greeting</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>
                            Students
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>


            <v-list-item link :to="{name: 'schoolyear_semester'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-account-group</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        School Year / Semester
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>


            <v-list-item link :to="{name: 'manage_departments'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-office-building-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Department
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
