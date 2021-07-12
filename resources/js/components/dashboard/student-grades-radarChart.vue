<template>
    <div>
        <v-row class="pt-0">
            <v-col class="pt-0">
                <h2>My Grades</h2>
            </v-col>

        </v-row>
        <v-row class="mt-0">
            <v-col>
                <v-card>
                    <v-chart class="chart" :option="option" autoresize style="height:300px" />
                </v-card>
            </v-col>

        </v-row>
    </div>

</template>

<script>
    import {
        use
    } from "echarts/core";
    import {
        CanvasRenderer
    } from "echarts/renderers";
    import {
        RadarChart
    } from "echarts/charts";


    import {
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent

    } from "echarts/components";
    import VChart, {
        THEME_KEY
    } from "vue-echarts";
    use([
        CanvasRenderer,
        RadarChart,
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent
    ]);
    export default {
        components: {
            VChart,


        },
        data() {
            return {
                option: {
                    responsive: true,
                    maintainAspectRatio: false,
                    // title: {
                    //     text: 'My Grades'
                    // },
                    textStyle: {
                        fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
                        color: '#000',
                    },
                    tooltip: {
                        trigger: "item",

                    },
                    legend: {
                        data: []
                    },
                    radar: {
                        // shape: 'circle',
                        indicator: [{
                                name: 'IT 311',
                                max: 100
                            },
                            {
                                name: 'IT 123',
                                max: 100
                            },
                            {
                                name: 'GEC 2',
                                max: 100
                            },
                            {
                                name: 'PE 3',
                                max: 100
                            },
                            {
                                name: 'GEC 6',
                                max: 100
                            },
                            {
                                name: 'IT 312',
                                max: 100
                            },
                        ]
                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        data: [{
                                value: [98, 94, 89, 85, 82, 75],
                                name: 'My Grades'

                            },


                        ]
                    }]
                }
            }
        }
    }

</script>
