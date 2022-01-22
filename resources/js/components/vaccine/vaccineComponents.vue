<template>
    <div>


        <v-container style="width: 800px">
            <h2 class="text-center">Vaccination Checker</h2>
            <br>



            <v-card flat class="px-4" elevation="2">
                <v-card-text class="text-center">Enter Student ID</v-card-text>

                <v-row class="px-4">
                    <v-col>
                        <v-text-field clearable class="centered-input" v-model="search" outlined @input="searchById"
                            placeholder="eg. 20-1234">
                        </v-text-field>

                    </v-col>
                    <!-- <v-col>
                                      <v-btn  x-large   color="primary">
                                          Search
                                      </v-btn>

                                    </v-col> -->
                </v-row>

                <v-divider></v-divider>

                <div class="text-center pt-3" v-if="searching==true">
                    <v-skeleton-loader type="text" style="margin: auto;width:30%"></v-skeleton-loader>
                    <v-skeleton-loader type="text" style="margin: auto;width:50%"></v-skeleton-loader>
                    <v-skeleton-loader type="text" style="margin: auto;width:30%"></v-skeleton-loader>
                    <v-skeleton-loader style="height: 225px;" loading="true" type="table"></v-skeleton-loader>


                </div>



                <div v-if="studentFound != ''">
                    <div class="text-center pt-4">

                        <h4>Vaccination Status</h4>
                        <h2 :style="'color:'+ color">{{vaccineStatus(studentFound.vaccine_status)}}</h2>
                        <h3>{{studentFound.vaccine_brand}}</h3>
                    </div>
                    <br>


                    <v-divider></v-divider>
                    <v-simple-table>
                        <thead>
                            <tr>
                                <th style="width: 100px;">Student ID</th>
                                <th style="width: 230px;">Name</th>
                                <th>Course/Year</th>
                                <th>Brand of Vaccine</th>
                                <th>First Dose</th>
                                <th>Second Dose</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{{studentFound.student_id}}</td>
                                <td>{{studentFound.name}}</td>
                                <td>{{studentFound.program + ' ' + studentFound.year_level}}</td>
                                <td>{{studentFound.vaccine_brand}}</td>
                                <td>{{studentFound.first_dose}}</td>
                                <td>{{studentFound.second_dose}}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>


                </div>



            </v-card>
        </v-container>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                tab: null,
                items: [{
                        tab: 'Search by Student ID',
                        href: '#by_student_id'
                    },
                    {
                        tab: 'Search by Name',
                        href: '#by_name'
                    },

                ],

                students: [{
                        student_id: '18-1039',
                        name: 'Mark Joshua Elimar Mandigma',
                        program: 'BSIT',
                        vaccine_brand: 'SPUTNIK V',
                        first_dose: '11/03/21',
                        second_dose: '11/23/21'


                    },
                    {
                        student_id: '18-1039',
                        name: 'Mark Joshua Elimar Mandigma',
                        program: 'BSIT',
                        vaccine_brand: 'SPUTNIK V',
                        first_dose: '11/03/21',
                        second_dose: '11/23/21'


                    },
                    {
                        student_id: '18-1039',
                        name: 'Mark Joshua Elimar Mandigma',
                        program: 'BSIT',
                        vaccine_brand: 'SPUTNIK V',
                        first_dose: '11/03/21',
                        second_dose: '11/23/21'


                    },

                ],

                json_gen: [{
                        "student_id": "18-1010",
                        "name": "Terrell Hayes",
                        "program": "COMBOGENE",
                        "vaccine_brand": "blue",
                        "first_dose": "2020-10-31",
                        "second_dose": "2020-02-19"
                    },
                    {
                        "student_id": "18-1011",
                        "name": "Emily Dixon",
                        "program": "ULTRASURE",
                        "vaccine_brand": "blue",
                        "first_dose": "2018-10-07",
                        "second_dose": "2017-11-01"
                    },
                    {
                        "student_id": "18-1012",
                        "name": "Durham Stanton",
                        "program": "MEDALERT",
                        "vaccine_brand": "brown",
                        "first_dose": "2017-08-26",
                        "second_dose": "2020-06-07"
                    },
                    {
                        "student_id": "18-1013",
                        "name": "Miranda James",
                        "program": "COMVOY",
                        "vaccine_brand": "brown",
                        "first_dose": "2016-03-20",
                        "second_dose": "2019-08-02"
                    },
                    {
                        "student_id": "18-1014",
                        "name": "Elvia Stafford",
                        "program": "ZILLACON",
                        "vaccine_brand": "green",
                        "first_dose": "2021-10-07",
                        "second_dose": "2017-07-22"
                    }
                ],
                search: '',
                searching: false,
                studentFound: [],
                color: '',
                isFoundstudent: false,
            }
        },
        computed: {
            filteredItemsbyStudent_id() {
                if (this.search) {
                    axios.get(`api/vaccination/${this.search}/By_student_id`).then((res) => {
                        this.searching = false;
                        console.log(res.data)
                        this.studentFound = res.data;



                    }).catch((err) => {
                        this.toastError('Something went wrong');
                        this.studentFound = [];
                    })
                } else {
                    return this.students;
                }

            },
            filteredItemsby_name() {
                if (this.search) {
                    return this.students.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.name.toLowerCase())
                    })
                } else {
                    return this.students;
                }

            }
        },
        methods: {
            searchById() {
                this.studentFound = [];


                if (this.search.length > 5) {
                    this.searching = true;
                    axios.get(`api/vaccination/${this.search.trim()}/By_student_id`).then((res) => {
                        this.studentFound = res.data;
                     
                        this.searching = false;
                    }).catch((err) => {
                        this.toastError('Something went wrong, Please refresh the page and try again!');
                        this.studentFound = [];
                        this.searching = false;
                        this.isFoundstudent = true;
                    })

                }


            },
            vaccineStatus(val) {
                if (val.trim() == 'A') {
                    this.color = '#F44336';
                    return 'Unvaccinated';
                }
                if (val.trim() == 'B') {
                    this.color = '#03A9F4';
                    return 'First Dose'
                }
                if (val.trim() == 'C') {
                    this.color = '#4CAF50';
                    return 'Fully Vaccinated'
                }
            },





        },
        mounted() {
            this.json_gen.forEach(item => {
                this.students.push(JSON.parse(JSON.stringify(item)));
            })
            // this.students.push(JSON.parse(this.json_gen[0]));
            console.log(this.students);
        }
    }

</script>
<style scoped>
    .centered-input>>>input {
        text-align: center
    }

</style>
