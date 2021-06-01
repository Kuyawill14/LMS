<template>
    <v-list dense>
        <template>

            <v-list-item :to="{name: 'coursePage'}">
                <v-list-item-action>
                    <v-icon>mdi-contacts</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Course Page
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item :to="{name: 'announcement'}">
                <v-list-item-action>
                    <v-icon>mdi-message-alert</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Announcement
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link :to="{name: 'classwork'}">
                <v-list-item-action>
                    <v-icon>mdi-book-open-variant</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Classwork
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link :to="{name: 'modules'}">
                <v-list-item-action>
                    <v-icon>mdi-book-variant-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Modules
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-account-group</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Students
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item  link :to="{name: 'gradingCriteria'}">
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

            <v-list-item link :to="{name: 'about'}">
                <v-list-item-action>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        About
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item link :to="{name: 'settings'}">
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
