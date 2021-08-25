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

             <v-list-group color="none" value="false" link   prepend-icon="mdi-contacts">
                 <template v-slot:activator>
                    <v-list-item-title>Manage Users</v-list-item-title>
                </template>

                <v-list-item  link :to="{name: 'manageteachers'}" exact>
                    <v-list-item-action>
                        <v-icon>mdi-account-supervisor</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Teachers
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


            <v-list-item link  :to="{name: 'department'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-account-group</v-icon>
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
