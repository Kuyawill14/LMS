<template>
<div>
     <v-list-item link :to="{name: 'courses'}" exact>
        <v-list-item-action>
                <v-icon>mdi-arrow-left</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title >
                    Back to My Course
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    <v-divider></v-divider>
    <v-list nav  v-if="role!= undefined">
        <template>


            
              <v-list-item link class="list-nav" :to="{name: 'coursePage'}" v-if="role == 'Teacher'" exact>
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard-variant</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        Overview
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>
            <v-list-item link class="list-nav" :to="{name: 'classses'}" v-if="role == 'Teacher'" exact>
                <v-list-item-action>
                    <v-icon>mdi-google-classroom</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        Classes
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link class="list-nav" :to="{name: 'announcement'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-message-alert</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        Announcement
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link class="list-nav" :to="{name: 'classwork'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-book-open-variant</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        Classwork<br>
                        <small class="font-weight-regular">Quiz & Activities</small>
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link class="list-nav" :to="{name: 'modules'}" exact v-if="role == 'Teacher'">
                <v-list-item-action>
                    <v-icon>mdi-book-variant-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        Modules
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>
            <v-list-item link class="list-nav" :to="{name: 'studentProgress'}" exact v-if="role == 'Teacher'">
                <v-list-item-action>
                    <v-icon>mdi-chart-box-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        Student's Progress
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>


            <v-list-item link class="list-nav" :to="{name: 'student-modules'}" exact v-if="role == 'Student'">
                <v-list-item-action>
                    <v-icon>mdi-book-variant-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        Modules
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>
            <v-list-item link class="list-nav" :to="{name: 'mystudentProgress'}" exact v-if="role == 'Student'">
                <v-list-item-action>
                    <v-icon>mdi-chart-box-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        My Progress
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link class="list-nav" :to="{name: 'studentGradebook'}" exact v-if="role == 'Student'">
                <v-list-item-action>
                             <v-icon>mdi-book-open</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        My Grades
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>



            <v-list-item link class="list-nav" :to="{name: 'Student-list'}"  exact>
                <v-list-item-action>
                    <v-icon>mdi-account-group</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        People<br>
                        <small class="font-weight-regular">Instructors & Students</small>
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link class="list-nav" :to="{name: 'gradebook'}" exact v-if="role == 'Teacher'">
                <v-list-item-action>
                    <v-icon>mdi-book-open</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        Grade Book
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>



            <v-list-item link class="list-nav" :to="{name: 'gradingCriteria'}" v-if="role == 'Teacher'" exact>
                <v-list-item-action>
                    <v-icon>mdi-chart-timeline-variant-shimmer
                    </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        Grading Criteria
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>


            <v-list-item link class="list-nav" :to="{name: 'about'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                        About
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link class="list-nav" :to="{name: 'settings'}" v-if="role == 'Teacher'" exact>
                <v-list-item-action>
                    <v-icon>mdi-tune-vertical-variant</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
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
</div>
</template>


<script>

    export default {
        props: ['role']
    }

</script>


<style scoped>
.list-nav {
    margin-bottom: 0px !important;
}
</style>
