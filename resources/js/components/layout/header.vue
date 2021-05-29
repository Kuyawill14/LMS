<template>
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
            <md-button @click="$emit('toggleSidebar')" class="md-icon-button">
                <md-icon>menu</md-icon>
            </md-button>
            </div>

            <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
                <md-icon>refresh</md-icon>
            </md-button>

            <md-button class="md-icon-button">
                <md-icon>more_vert</md-icon>
            </md-button>
            </div>
      </div>
</template>


<script>
export default {
      data: () => ({
            menuVisible: false
        }),
}
</script>