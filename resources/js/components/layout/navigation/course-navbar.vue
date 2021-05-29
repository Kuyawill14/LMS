<template>
    <md-list>
        <router-link to="/courses">
            <md-list-item>
                <md-icon>move_to_inbox</md-icon>
                <span class="md-list-item-text">Classes</span>

            </md-list-item>
        </router-link>
        <router-link :to="{name: announcement }">
            <md-list-item>
                <md-icon>move_to_inbox</md-icon>
                <span class="md-list-item-text">Classes</span>

            </md-list-item>
        </router-link>
        
         <router-link :to="{name: coursePage }">
            <md-list-item>
                <md-icon>move_to_inbox</md-icon>
                <span class="md-list-item-text">Classes</span>

            </md-list-item>
        </router-link>
        <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Announcement</span>
        </md-list-item>

        <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Classwork</span>
        </md-list-item>

        <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Modules</span>
        </md-list-item>

        <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Students</span>
        </md-list-item>

        <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Grading Criteria</span>
        </md-list-item>

        <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">About</span>
        </md-list-item>

        <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Settings</span>
        </md-list-item>
    </md-list>
</template>
