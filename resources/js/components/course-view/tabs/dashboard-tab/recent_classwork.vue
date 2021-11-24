<template>
    <v-card style="height:500ppx">
        <v-card-title>
            Recent Classworks
        </v-card-title>

        <v-data-table :headers="headers" :items="classwork_list" item-key="classwork_name" show-expand single-expand
            class="elevation-1" hide-default-footer :expanded.sync="expanded" id="tableOverview">
            <template v-slot:item="{index, item, isExpanded, expand}">

                <tr @mouseover="toolsIndex=index" @click="expand(!isExpanded);" @mouseleave="toolsIndex=0"
                    style="cursor:pointer">
                    <td @click="expandRow(index)" style="display:flex;align-items: center;">
                        <v-icon class="primary--text pr-1">mdi-clipboard-check-outline </v-icon>
                        {{item['classwork_name']= limitChar(item.title)}}
                    </td>
                    <td @click="expandRow(index)">
                        {{item['created_date']= format_date(item.created_at)}} </td>
                    <td class="text-center" @click="expandRow(index)">
                        {{item['submission_count']= item.submittion_count}} /
                        {{  item.total_student}} </td>
                    <td @click="expandRow(index)">
                        {{item['submission_rate']= ((item.submittion_count / item.total_student)* 100).toFixed(2)}}%
                    </td>
                    <td @click="expandRow(index)">
                        <v-icon v-if="!isExpanded">mdi-chevron-up</v-icon>

                        <v-icon v-if="isExpanded">mdi-chevron-down</v-icon>
                    </td>


                </tr>

            </template>

            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length" class="pa-3 expandeddata">
                    <h5>Published To: </h5>
                    <v-simple-table style="margin-left: 0px;border-radius: 0%;">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th>Class Name</th>
                                    <th>Due Date</th>
                                    <th>Submission Count</th>
                                    <th>Submission Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cl, index) in item.publish_in" :key="index">
                                    <td>{{cl.class_name}}</td>
                                    <td>{{format_date(cl.to_date)}}</td>
                                    <td>{{cl.submission}} / {{cl.student_count}}</td>
                                    <td>{{((cl.submission/cl.student_count)* 100).toFixed(2)}}%</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </td>


            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    import moment from 'moment-timezone';
    export default {
        props: ['classwork_list'],
        data() {
            return {
                headers: [{
                        text: 'Classwork',
                        align: 'start',
                        sortable: false,
                        value: 'classwork_name',
                        width: '25%'
                    },
                    {
                        text: 'Date Created',
                        value: 'created_date',
                        sortable: false,
                    },
                    {
                        text: 'Submission Count',
                        value: 'submission_count',
                        sortable: false,
                    },
                    {
                        text: 'Submission Rate',
                        value: 'submission_rate',
                        sortable: false,
                    },
                    {
                        text: '',
                        value: '',
                        width: '10px',
                        sortable: false,
                    },



                ],
                expanded: [],
                dialog: false,
                toolsIndex: null,
                expandedItem: null,
                expandedIcon: false,
            }
        },
     
        methods: {
        limitChar(title) {
            if (title.length > 40) {
                return title.substring(0, 40) + '...';
            } else {
                return title;
            }
        },
            clicked(value) {
                const index = this.expanded.indexOf(value)
                if (index === -1) {
                    this.expanded.push(value)
                } else {
                    this.expanded.splice(index, 1)
                }
            },
            expandRow(item) {
                //console.log('row expanded: ' + item);
                if (this.expandedItem == item) {
                    //console.log('the same')
                    $('.expandeddata').css('display', 'none');
                } else {
                    //console.log("not the same");
                    $('.expandeddata').css('display', 'block');
                    this.expanded = item === this.expanded[0] ? [] : [item];
                }
                this.expandedItem = item;



            },
            format_date(value) {
                if (value) {
                    // return moment(String(value)).format('MMMM Do YYYY, hh:mm A')
                    return moment(String(value)).tz("Asia/Manila").format('MMMM D, YYYY, hh:mm a');
                }
            },
        },
        mounted() {

            $('#tableOverview > div > table > thead > tr > th:nth-child(1)').hide();
        }
    }

</script>
