<template>
    <div>
        <v-row>
            <v-col>
                <h2>Dashboard</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg="8" class="pt-0">
                <v-row>
                    <v-col lg="6" class="pt-0">
                        <v-card>
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                8
                            </div>
                            <div class="text-center">
                                Total Courses
                            </div>
                        </v-card>
                    </v-col>

                    <v-col lg="6" class="pt-0">
                        <v-card>
                            <div class="text-center" style="font-size: 3rem;color:#FF5400 ">
                                8
                            </div>
                            <div class="text-center">
                                Total Classes
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-chart class="chart" :option="option" autoresize />
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col lg="4">
  
                <v-card>
                    <myCalendar :role="role"></myCalendar>
                </v-card>
            </v-col>

        </v-row>

    </div>



</template>

<script>
    const myCalendar = () => import('./myCalendar')
    import {
        use
    } from "echarts/core";
    import {
        CanvasRenderer
    } from "echarts/renderers";
    import {
        BarChart
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
        BarChart,
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent
    ]);

    export default {
        props:['role'],
        name: "HelloWorld",
        components: {
            VChart,
            myCalendar
        },
        provide: {

        },

        data() {
            return {
                option: {
                    color: ["#FF5400", "#FFs400", "#FFd400"],
                    xAxis: {
                        data: ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7',
                            'Module 8', 'Module 9'
                        ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    // title: {
                    //     text: "Traffic Sources",
                    //     left: "center"
                    // },
                    tooltip: {
                        trigger: "item",
                        formatter: "{b} <br/>Time spent: {c} "
                    },
                    legend: {
                        show: false,
                        //     left: "center",
                        //   top: "30px",
                    },
                    series: [{
                            name: "Module 1",
                            type: "bar",

                            data: [{
                                    value: 1,
                                    name: "Module 1"
                                },
                                {
                                    value: 2,
                                    name: "Module 2"
                                },
                                {
                                    value: 3,
                                    name: "Module 3"
                                },
                                {
                                    value: 4,
                                    name: "Module 4"
                                },
                                {
                                    value: 5,
                                    name: "Module 5"
                                },
                                {
                                    value: 6,
                                    name: "Module 6"
                                },
                                {
                                    value: 7,
                                    name: "Module 7"
                                },
                                {
                                    value: 8,
                                    name: "Module 8"
                                },
                                {
                                    value: 9,
                                    name: "Module 9"
                                },

                            ],

                        },


                    ],
                }

            };
        },
    };

</script>

<style scoped>
    .chart {
        height: 400px;
    }

</style>
