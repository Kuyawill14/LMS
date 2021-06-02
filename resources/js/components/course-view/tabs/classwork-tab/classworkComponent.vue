<template>
    <div>
        <newClassworkModal v-on:realodClassworks="getGeneralClassworks()" v-if="role == 'Teacher'"></newClassworkModal>
        <v-container>
            <v-row>
                <v-col>
                    <h2>{{ role == 'Teacher' ? 'Manage Classworks' : 'Classworks'}}</h2>
                </v-col>
            </v-row>
        </v-container>

        <classworkList v-if="!isGetting" :classworks="get_Classworks" :role="role"></classworkList>
        <v-container v-if="isGetting" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-col class="text-subtitle-1 text-center" cols="12">
                    Getting your Classworks
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>


    </div>

</template>
<script>
    const classworkList = () => import('./classworkList')
    const newClassworkModal = () => import('./newClassworkModal')
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            classworkList,
            newClassworkModal
        },
        data() {
            return {
                classworks: [],
                isGetting: false
            }
        },
        computed: mapGetters(['get_Classworks']),
        methods: {
            ...mapActions(['fetchClassworks']),
            getGeneralClassworks() {
                this.isGetting = true;
                this.$store.dispatch('fetchClassworks', this.$route.params.id)
                    .then(res => {
                        if (res == 200) {
                            this.isGetting = false;
                        }
                    })
            },
        },
        mounted() {
            this.getGeneralClassworks();
        }

    }

</script>
