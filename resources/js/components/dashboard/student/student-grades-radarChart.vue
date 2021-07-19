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
                    <v-chart v-if="isLoaded" class="chart" :option="option" autoresize style="height:300px" />
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
                isLoaded: false,
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
                        shape: 'circle',
                        indicator: [
                          
                         
                           
                        ]
                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        data: [{
                                value: [],
                                name: 'My Grades'

                            },


                        ]
                    }]
                }
            }
        },
         methods:{
            async GetClassAndGrades(){
                axios.get('/api/student-course/gradeAll')
                .then(res=>{
                    for (let i = 0; i < res.data.length; i++) {
                        this.option.radar.indicator.push({name: res.data[i].course_code , max: 100});
                        this.option.series[0].data[0].value[i] = res.data[i].final_grade == null ? 0+'%' : res.data[i].final_grade+'%';
                    }
                    this.isLoaded = true;
                })
            }
        },
        mounted(){
            this.GetClassAndGrades();
        }
    }

</script>
