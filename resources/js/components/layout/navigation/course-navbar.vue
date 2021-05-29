<template>
    <md-list>
        <router-link :to="{name: coursePage }">
            <md-list-item>
                <md-icon>class</md-icon>
                <span class="md-list-item-text">Classes</span>

            </md-list-item>
        </router-link>
        <router-link :to="{name: announcement }">
            <md-list-item>
                <md-icon>announcement</md-icon>
                <span class="md-list-item-text">Announcement</span>

            </md-list-item>
        </router-link>

        <router-link :to="{name: announcement }">
            <md-list-item>
                <md-icon>send</md-icon>
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
    </md-list>
</template>
