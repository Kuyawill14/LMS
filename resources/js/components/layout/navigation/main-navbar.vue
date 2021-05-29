<template>
    <md-list>
        <router-link to="/courses">
            <md-list-item>

                <md-icon>move_to_inbox</md-icon>
                <span class="md-list-item-text">My Courses</span>

            </md-list-item>
        </router-link>
        <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
        </md-list-item>
    </md-list>
</template>
