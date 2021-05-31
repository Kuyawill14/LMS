<template>
    <div>

        <v-row class="pt-3">
            <addModuleModal />
        </v-row>

        <v-row class="pt-3">

            <modulesListComponent />

        </v-row>

    </div>


</template>

<script>
    import VueElementLoading from 'vue-element-loading'
    //import modulesListComponent from './modulesListComponent'
    const addModuleModal = () => import("./addModuleModal")
    const modulesListComponent = () => import("./modulesListComponent")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            VueElementLoading,
            modulesListComponent,
            addModuleModal,

        },
        data() {
            return {
                loading: false,
            }
        },

    }

</script>

<style scoped>
    .button-text-image {
        white-space: inherit;
    }

    .class-banner {
        /* background-image: url(https://gstatic.com/classroom/themes/Honors.jpg); */
        color: #fff;
        height: 200px;
        background-color: #1E1E1C;
    }

    .top-container {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .ttr-wrapper {
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 59px;
    }

    .transparent {
        background: transparent;
        border: none;
    }

    .card-top {
        color: #fff !important;
    }

</style>
