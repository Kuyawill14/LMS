<template>
    <v-list dense>
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

            <v-list-item link :to="{name: 'manageUsers'}" exact>
                <v-list-item-action>
                    <v-icon>mdi-contacts</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Manage Users
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link :to="{name: 'monitorTeacher'}" exact>
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
