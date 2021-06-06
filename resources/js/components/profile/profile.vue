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
                 <v-img alt="Proflie" :src="get_CurrentUser.profile_pic == null || get_CurrentUser.profile_pic == '' ? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + (get_CurrentUser.firstName+' '+get_CurrentUser.lastName) : '../../images/'+get_CurrentUser.profile_pic"></v-img>
            </v-list-item-avatar>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
         
                        <v-layout column>
                            <v-card>
                                <v-card-text>
                                    
                                    <v-text-field
                                        v-model="get_CurrentUser.firstName"
                                        label="FirstName"></v-text-field>
                                    <v-text-field
                                        v-model="get_CurrentUser.middleName"
                                        label="Last Name"></v-text-field>
                                    <v-text-field
                                        v-model="get_CurrentUser.lastName"
                                        label="Last Name"></v-text-field>
                                    <v-text-field
                                        v-model="get_CurrentUser.email"
                                        label="Email Address"></v-text-field>

                                    <v-text-field
                                        v-model="get_CurrentUser.address"
                                        label="Address"></v-text-field>
                                    <v-text-field
                                        v-model="get_CurrentUser.cp_no"
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
                                        v-model="get_CurrentUser.firstName"
                                        label="FirstName"></v-text-field>
                                    <v-text-field
                                        v-model="get_CurrentUser.middleName"
                                        label="Last Name"></v-text-field>
                                    <v-text-field
                                        v-model="get_CurrentUser.lastName"
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
    import {
        mapGetters,
        mapActions
    } from "vuex";
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
        computed: mapGetters(['get_CurrentUser']),
        methods: {
            openAvatarPicker () {
                this.showAvatarPicker = true
            },
            selectAvatar (avatar) {
                this.form.avatar = avatar
            }
        },
    }
</script>