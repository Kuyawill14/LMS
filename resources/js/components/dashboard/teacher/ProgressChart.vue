<template>
<div>
    <v-card>
        <v-row>
            <v-col  cols="12">
                <v-row >
                    <v-col class="text-right pl-5 pl-8 pr-8"  cols="12">
                        <v-select
                        class="float-right"
                        label="Class"
                        outlined>
                        </v-select>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="ma-0 pa-0">
                 <v-chart class="chart" :option="option" />
            </v-col>
        </v-row> 
      </v-card>   
</div>
</template>

<script>

      import {
        mapGetters,
        mapActions
    } from "vuex"; 
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
        name: "HelloWorld",
        props:['role'],
        components: {
            VChart,
        },
        provide: {

        },
        data() {
            return {
                class_count: 0,
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

                            data: [
                                {
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
          computed: mapGetters(['allCourse']),
        methods: {
               ...mapActions(['fetchCourseList']),
              classCount() {
                
                axios.get('/api/class/count')
                .then(res => {
                    this.class_count = res.data;
                })
       
            },
        },
        mounted() {
               this.fetchCourseList();
               this.classCount();
        },
    };

</script>

<style scoped>
    .chart {
        margin-top: 0rem;
        padding-top: 0rem;
        width: auto;
        height: 340px;
    }
    

</style>
