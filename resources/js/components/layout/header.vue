<template>
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <md-button @click="$emit('toggleSidebar')" class="md-icon-button">
                    <md-icon>menu</md-icon>
                </md-button>
            </div>

            <div class="md-toolbar-section-end">
                <md-button class="md-icon-button">
                    <md-badge md-content="1" md-dense>
                        <md-icon>notifications</md-icon>
                    </md-badge>
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>account_circle</md-icon>
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