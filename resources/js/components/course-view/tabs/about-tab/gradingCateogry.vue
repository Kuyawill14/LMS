<template>


    <v-card>
        <v-card-title>
            GRADING CRITERIA
        </v-card-title>

        <v-card-text>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Category
                            </th>
                            <th class="text-left">
                                Percentage
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="gradeCategory in get_gradingCriteria" v-bind:key="gradeCategory.id">
                            <td>{{ gradeCategory.name }}</td>
                            <td> {{gradeCategory.percentage}}%</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>{{_totalPercent(get_gradingCriteria)}}%</strong></td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>

    </v-card>

</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        data: function () {
            return {
                totalPercent: 0,
            }

        },

        computed: {
            ...mapGetters(["get_gradingCriteria"])
        },
        methods: {
            getAllGradeCriteria() {
                this.$store.dispatch('fetchGradingCriteria', this.$route.params.id);
            },
            _totalPercent(percentage_data) {
                var total = 0;
                percentage_data.forEach(function (val) {
                    total += parseFloat(val.percentage);
                })
                return total;
            }
        },


        created() {
            this.getAllGradeCriteria();

        }
    }

</script>
