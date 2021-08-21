<template>
     <v-row class="pb-5">
        <v-col cols="12" class="mb-0 pb-0">
           <h3>CHANGE PASSWORD</h3> 
        </v-col>
        
        <v-col cols="12">
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12" md="3">
                     
                </v-col>
                  <v-col cols="12" md="9">
                        <h4 class="mt-5">Password</h4> 
                </v-col>
            </v-row>
        </v-col>

         <v-col cols="12" class="mb-0 pb-0">
            <v-row>
                <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                     Current Password
                </v-col>
                  <v-col cols="12" md="5">
                       <v-text-field
                            :append-icon="showCurrent ?'mdi-eye':'mdi-eye-off'" 
                            dense
                             :rules="[rules.required, rules.min]" 
                            v-model="form.current_password"
                            outlined
                            :type="showCurrent ? 'text' : 'password'" 
                            @click:append="showCurrent = !showCurrent">
                        ></v-text-field>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
            <v-row>
                <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                     New Password
                </v-col>
                  <v-col cols="12" md="5">
                       <v-text-field
                        :append-icon="showNew ?'mdi-eye':'mdi-eye-off'" 
                        dense
                         :rules="[rules.required, rules.min]" 
                         v-model="form.new_password"
                        outlined
                        :type="showNew ? 'text' : 'password'" 
                        @click:append="showNew = !showNew">
                        ></v-text-field>
                </v-col>
            </v-row>
        </v-col>

         <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
            <v-row>
                <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                     Re Type New Password
                </v-col>
                  <v-col cols="12" md="5">
                       <v-text-field
                        :append-icon="ShowNewRetype ?'mdi-eye':'mdi-eye-off'" 
                        dense
                        outlined
                         :rules="[rules.required, rules.min]" 
                         v-model="form.confirm_password"
                        :type="ShowNewRetype ? 'text' : 'password'" 
                        @click:append="ShowNewRetype = !ShowNewRetype">
                        ></v-text-field>
                </v-col>
            </v-row>
        </v-col>

         <v-col cols="12" class="mt-0 pt-0 mb-0 pb-0">
            <v-row>
                <v-col cols="12" md="3" :class="$vuetify.breakpoint.xs ? 'mb-0 pb-0': 'mt-2'">
                     
                </v-col>
                  <v-col cols="12" md="5">
                      <v-btn rounded @click="changepassword()" color="primary" dark>Save Changes</v-btn>
                      <v-btn rounded color="secondary" dark>Cancel</v-btn>
                </v-col>
            </v-row>
        </v-col>

     
    </v-row>
</template>
<script>
export default {
    data(){
        return{
            showCurrent: false,
            showNew: false,
            ShowNewRetype: false,
            data:{},
            form:{
                current_password: null,
                new_password: null,
                confirm_password: null
            },
            rules: {
                required: value => !!value || "Required.",
                min: v => (v && v.length >= 6) || "Min 6 characters"
            }
        }
    },
    methods:{
         changepassword(){
             axios.post('/api/change-password', this.form)
            .then(res=>{

            })
        }
    }
}
</script>