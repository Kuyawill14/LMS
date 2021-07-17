<template>
    <v-list dense v-if="role!= undefined">
        <template>

            <v-list-item link :to="{name: 'coursePage'}" v-if="role == 'Teacher'" exact>
                <v-list-item-action>
                    <v-icon>mdi-google-classroom</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Classes
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link :to="{name: 'announcement'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-message-alert</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Announcement
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link :to="{name: 'classwork'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-book-open-variant</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Classwork
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link :to="{name: 'modules'}" exact v-if="role == 'Teacher'">
                <v-list-item-action>
                    <v-icon>mdi-book-variant-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Modules
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>
            <v-list-item link :to="{name: 'studentProgress'}" exact v-if="role == 'Teacher'">
                <v-list-item-action>
                    <v-icon>mdi-chart-box-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Student's Progress
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>


            <v-list-item link :to="{name: 'student-modules'}" exact v-if="role == 'Student'">
                <v-list-item-action>
                    <v-icon>mdi-book-variant-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Modules
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>
            <v-list-item link :to="{name: 'studentProgress'}" exact v-if="role == 'Student'">
                <v-list-item-action>
                    <v-icon>mdi-chart-box-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        My Progress
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link :to="{name: 'studentGradebook'}" exact v-if="role == 'Student'">
                <v-list-item-action>
                             <v-icon>mdi-book-open</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        My Grades
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>



            <v-list-item link :to="{name: 'Student-list'}"  exact>
                <v-list-item-action>
                    <v-icon>mdi-account-group</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        People
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link :to="{name: 'gradebook'}" exact v-if="role == 'Teacher'">
                <v-list-item-action>
                    <v-icon>mdi-book-open</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Grade Book
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>



            <v-list-item link :to="{name: 'gradingCriteria'}" v-if="role == 'Teacher'" exact>
                <v-list-item-action>
                    <v-icon>mdi-chart-timeline-variant-shimmer
                    </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Grading Criteria
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>


            <v-list-item link :to="{name: 'about'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        About
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link :to="{name: 'settings'}" v-if="role == 'Teacher'" exact>
                <v-list-item-action>
                    <v-icon>mdi-tune-vertical-variant</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Settings
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>
        </template>
    </v-list>


    <!--     
    <md-list>
        <router-link :to="{name: 'coursePage'}" exact>
            <md-list-item>
                <md-icon>class</md-icon>
                <span class="md-list-item-text">Classes</span>

            </md-list-item>
        </router-link>
        <router-link :to="{name: 'announcement'}" link>
            <md-list-item >
                <md-icon>announcement</md-icon>
                <span class="md-list-item-text">Announcement</span>

            </md-list-item>
        </router-link>
  
     
        <md-list-item>
            <md-icon>assignment</md-icon>
            <span class="md-list-item-text">Classwork</span>
        </md-list-item>

        <md-list-item>
            <md-icon>view_module</md-icon>
            <span class="md-list-item-text">Modules</span>
        </md-list-item>

        <md-list-item>
            <md-icon>groups</md-icon>
            <span class="md-list-item-text">Students</span>
        </md-list-item>

        <md-list-item>
            <md-icon>stairs</md-icon>
            <span class="md-list-item-text">Grading Criteria</span>
        </md-list-item>

        <md-list-item>
            <md-icon>info</md-icon>
            <span class="md-list-item-text">About</span>
        </md-list-item>

        <md-list-item>
            <md-icon>settings</md-icon>
            <span class="md-list-item-text">Settings</span>
        </md-list-item>
    </md-list> -->
</template>


<script>

    export default {
        props: ['role']
    }

</script>
