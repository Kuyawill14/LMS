<template>
    <div>


        <v-container style="width: 800px">
            <h2 class="text-center">Bulk add Student's Vaccination Status</h2>
            <br>




            <v-card flat class="px-4" elevation="2">
                <v-row>
                    <v-col lg="9" md="8" xs="6">
                        <v-file-input accept=".csv" prepend-inner-icon="mdi-file-outline" prepend-icon="" chips outlined
                            label="Upload CSV File" @change="onFileChange" :disabled="json_users_text_area != null ">
                        </v-file-input>
                    </v-col>

                    <v-col>
                        <v-btn @click="upload()" x-large>
                            <v-icon>mdi-upload</v-icon> Upload
                        </v-btn>
                    </v-col>
                </v-row>

            </v-card>
        </v-container>

    </div>
</template>


<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                json_users_text_area: null

            }
        },

        methods: {
            readFile(file) {
                let reader = new FileReader();
                reader.onload = e => {
                    //  console.log(e.target.result);
                    // let json = JSON.parse(e.target.result);
                    // this.json_users_file = json;
                    // this.json_users_ready = true;
                    var lines = e.target.result.replaceAll('\r', '').split('\n');


                    var result = [];
                    var result = [];

                    var commaRegex = /,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g

                    var quotesRegex = /^"(.*)"$/g

                    var headers = lines[0].split(commaRegex).map(h => h.replace(quotesRegex, "$1"));

                    // const lines = e.target.result.replaceAll('\r', '').split('\n') // 1️⃣
                    // const header = lines[0].split(',') // 2️⃣

                    for (var i = 1; i < lines.length; i++) {

                        var obj = {};
                        var currentline = lines[i].split(commaRegex);


                        for (var j = 0; j < headers.length; j++) {

                            obj[headers[j]] = currentline[j].replace(quotesRegex, "$1");
                        }

                        result.push(obj);

                    }

                    // const output = lines.slice(1).map(line => {
                    //     const fields = line.split(',') // 3️⃣
                    //     return Object.fromEntries(header.map((h, i) => [h, fields[i]])) // 4️⃣
                    // })

                    this.json_users_file = result;
                    console.log(this.json_users_file);


                };
                reader.readAsText(file);
            },


            readFile1(csv) {

                var lines = csv.split("\n");

                var result = [];

                var commaRegex = /,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g

                var quotesRegex = /^"(.*)"$/g

                var headers = lines[0].split(commaRegex).map(h => h.replace(quotesRegex, "$1"));

                for (var i = 1; i < lines.length; i++) {

                    var obj = {};
                    var currentline = lines[i].split(commaRegex);


                    for (var j = 0; j < headers.length; j++) {

                        obj[headers[j]] = currentline[j].replace(quotesRegex, "$1");
                    }

                    result.push(obj);

                }
                this.json_users_file = result;
                //return JSON.stringify(result); 
            },
            onFileChange(file) {

                if (file != null) {
                    this.readFile(file);
                } else {
                    this.json_users_file = null;
                }
            },
            upload() {
                if (this.json_users_file != null) {
                    axios.post('/api/vaccination/upload',{users: this.json_users_file}
                        ).then(res => {
                        this.toastSuccess('Uploaded Successfully');
                    }).catch(err => {
                        console.log(err);
                        this.toastError('Something went wrong!. Please refresh the page and try again.');
                    })
                } else {
                    this.toastInfo('Please select a file first');
                }

            }

        },






        mounted() {

        }
    }

</script>
<style scoped>
    .centered-input>>>input {
        text-align: center
    }

</style>
