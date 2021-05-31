<template>
    <v-container>
    <v-row
      class="mb-6"
      no-gutters
      >
      <v-col class="col-md-5 col-lg-8">
        <v-card
            class="mx-auto pd-0"
            max-width="100%"
            outlined
        >
            <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                Personal Details
                </v-list-item-title>
            </v-list-item-content>
        
            <v-list-item-avatar
                tile
                size="80"
                color="grey"
            >
                 <v-img alt="Proflie" :src="UserDetails.profile_pic == null || UserDetails.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (UserDetails.firstName+' '+UserDetails.lastName) : '../../images/'+UserDetails.profile_pic"></v-img>
            </v-list-item-avatar>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
         
                        <v-layout column>
                            <v-card>
                                <v-card-text>
                                    
                                    <v-text-field
                                        v-model="UserDetails.firstName"
                                        label="FirstName"></v-text-field>
                                    <v-text-field
                                        v-model="UserDetails.middleName"
                                        label="Last Name"></v-text-field>
                                    <v-text-field
                                        v-model="UserDetails.lastName"
                                        label="Last Name"></v-text-field>
                                    <v-text-field
                                        v-model="UserDetails.email"
                                        label="Email Address"></v-text-field>

                                    <v-text-field
                                        v-model="UserDetails.address"
                                        label="Address"></v-text-field>
                                    <v-text-field
                                        v-model="UserDetails.cp_no"
                                        label="Cp #"></v-text-field>
                                </v-card-text>
                                <v-card-actions class="mb-4">
                                    <v-btn color="primary"  :loading="loading" @click.native="update">
                                        <v-icon left dark>check</v-icon>
                                        Save Changes
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-layout>
                    
        
            </v-list-item-content>
        </v-list-item>

    </v-card>
    </v-col>

    <v-col class="col-md-5 col-lg-4">
    <v-card
        class="mx-auto"
        max-width="344"
        outlined
    >
        <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title class="headline mb-1">
                Change Password
            </v-list-item-title>
        </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
        
                        <v-layout column>
                            <v-card>
                                <v-card-text>
                                    
                                    <v-text-field
                                        v-model="UserDetails.firstName"
                                        label="FirstName"></v-text-field>
                                    <v-text-field
                                        v-model="UserDetails.middleName"
                                        label="Last Name"></v-text-field>
                                    <v-text-field
                                        v-model="UserDetails.lastName"
                                        label="Last Name"></v-text-field>

                                </v-card-text>
                                <v-card-actions class="mb-4">
                                    <v-btn color="primary"  :loading="loading" @click.native="update">
                                        <v-icon left dark>check</v-icon>
                                        Change Password
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-layout>
                </v-list-item-content>
            </v-list-item>
            
            
           
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        props:['UserDetails'],
        pageTitle: 'My Profile',

        data () {
            return {
                loading: false,
                form: {
                    firstName: 'John',
                    lastName: 'Doe',
                    contactEmail: 'john@doe.com',

                },
                showAvatarPicker: false
            }
        },
        methods: {
            openAvatarPicker () {
                this.showAvatarPicker = true
            },
            selectAvatar (avatar) {
                this.form.avatar = avatar
            }
        }
    }
</script>