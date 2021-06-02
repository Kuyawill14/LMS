<template>
     <v-row class="fill-height">
        <v-col cols="12" md="4" class="primary">
            <v-card-text class="white--text mt-12">
            <h1 class="text-center display-1">Welcome Back!</h1>
            <h5
                class="text-center"
            >To Keep connected with us please login with your personnel info</h5>
            </v-card-text>
            <div class="text-center">
            <v-btn rounded outlined dark @click="$emit('ChangeStep')">Sign in</v-btn>
            </div>
        </v-col>

            <v-col cols="12" md="8">
            <v-card-text class="pt-10">
                <h1
                class=" display-2 primary--text "
                >Sign Up <span>Now</span></h1>
                <p class="mt-2">Login Your Account <router-link :to="{name: 'login'}">Click here</router-link>
                </p>
        
                <v-form class="text-center mt-12 pl-1 pr-5">
                    <v-text-field
                    class="ma-0 pa-0 mb-1"
                    label="First Name"
                    name="firstName"
            
                    type="text"
                    color="primary"
                />

                <v-text-field
                class="ma-0 pa-0 mb-1"
                    label="Middle Name"
                    name="middleName"
            
                    type="text"
                    color="primary"
                />

                    <v-text-field
                    class="ma-0 pa-0 mb-1"
                    label="Last Name"
                    
                    name="lastname"
                
                    type="text"
                    color="primary"
                />

                <v-text-field
                class="ma-0 pa-0 mb-1"
                    label="Email"
                    name="Email"
                
                    type="email"
                    color="primary"
                />
                <v-text-field
                class="ma-0 pa-0 mb-1"
                    id="password"
                    label="Password"
                    name="password"
        
                    type="password"
                    color="primary"
                />

                    <v-text-field
                    class="ma-0 pa-0 mb-1"
                    id="passwordConfirmation"
                    label="Confirm Password"
                    name="password"
            
                    type="password"
                    color="primary"
                />
                
                </v-form>

                <v-select
                :items="role"
                label="Standard"
                ></v-select>
            <!--   <h3 class="text-center mt-4">Forgot your password ?</h3> -->
            </v-card-text>
            <v-container ma-0 pa-0 class="pb-5 pl-5 pr-5">
                <v-btn  color="primary" class="mb-5">
                    <v-icon class="mr-3">mdi-login</v-icon>
                Sign Up
                </v-btn>

                <v-container ma-0 pa-0 class="mt-2">
                <h3>Sign Up with Social media</h3>
                    <v-btn  color="blue" class="mb-3 mt-1 mr-5 white--text">
                    <v-icon class="mr-3">mdi-facebook</v-icon>
                Facebook
                </v-btn>

                <v-btn  color="red darken-1" class="mb-3 mt-1 white--text">
                    <v-icon class="mr-3">mdi-google-plus</v-icon>
                Google Plus
                </v-btn>
                </v-container>
                
            </v-container> 
            </v-col> 
        </v-row>
</template>

<script>
export default {
data: () => ({
    step: 1,
    role: ['Teacher', 'Student']
  }),
}
</script>