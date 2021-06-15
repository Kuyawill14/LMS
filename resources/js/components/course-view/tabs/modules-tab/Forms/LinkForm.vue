<template>
 <!-- card -->
    <v-card flat>
      
      <!-- toolbar -->
      <v-toolbar prominent extended flat>

        <!-- icon & navigation-drawer-toggle -->
        <v-toolbar-side-icon @click.stop="navigation_drawer.visible = !navigation_drawer.visible"></v-toolbar-side-icon>
        <!-- /icon & navigation-drawer-toggle -->

        <!-- title -->
        <v-toolbar-title class="body-2">Dashboard</v-toolbar-title>
        <!-- /title -->

        <v-spacer></v-spacer>

        <!-- items -->
        <v-toolbar-items>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>apps</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar-items>
        <!-- /items -->

      </v-toolbar>
      <!-- /toolbar -->
      
      <!-- layout -->
      <v-layout row pb-2>
        
        <v-flex xs12 sm10 offset-sm1>
          <v-card class="card--flex-toolbar">
            <v-toolbar color="teal" dark card prominent>
              <v-toolbar-title class="body-2">Content</v-toolbar-title>

              <v-spacer></v-spacer>

              <!-- items -->
              <v-toolbar-items>
                <!-- data table search with autocomplete -->
                <v-autocomplete flat solo-inverted class="mt-2 d-none"
                                v-model="select"
                                :loading="loading"
                                :items="items"
                                :search-input.sync="search"
                                clearable
                                cache-items
                                hide-no-data
                                hide-details
                                label="Search"
                                ></v-autocomplete>
                <!-- /data table search with autocomplete -->

                <!-- data table search -->
                <v-text-field flat solo-inverted class="mt-2"
                              v-model="select"
                              clearable
                              append-icon="search"
                              single-line
                              hide-details
                              label="Search"
                              ></v-text-field>
                <!-- /data table search -->

                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-toolbar-items>
              <!-- /items -->
              
            </v-toolbar>

            <v-divider></v-divider>

            <v-card-text>
              
              <!-- data table -->
              <v-data-table v-model="selected" item-key="name" select-all :headers="headers" :items="desserts" :search="select">

                <template v-slot:items="props">
                  <td>
                    <v-checkbox v-model="props.selected" hide-details></v-checkbox>
                  </td>
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.calories }}</td>
                  <td class="text-xs-right">{{ props.item.fat }}</td>
                  <td class="text-xs-right">{{ props.item.carbs }}</td>
                  <td class="text-xs-right">{{ props.item.protein }}</td>
                  <td class="text-xs-right">{{ props.item.iron }}</td>
                </template>

                <!-- no-data info -->
                <template v-slot:no-data>
                  <v-alert :value="true" color="error" icon="warning">
                    Sorry, nothing to display here :(
                  </v-alert>
                </template>
                <!-- /no-data info -->

              </v-data-table>
              <!-- /data table -->
                
            </v-card-text>
          </v-card>
        </v-flex>
        
      </v-layout>
      <!-- /layout -->
      
    </v-card>
    <!-- /card -->
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['moduleId'],
        data() {
            return {
                sending: false,
                loading: '',
                addLink: false,
                showClasswork: false,
                linkForm: {},
                file: null,
                options: {
                    modules: {
                        'toolbar': [
                            ['bold', 'italic', 'underline', 'strike'],
                            [{
                                'header': [1, 2, 3, 4, 5, false]
                            }],
                            [{
                                'align': []
                            }],
                            [{
                                'color': []
                            }],
                            [{
                                'list': 'ordered'
                            }, {
                                'list': 'bullet'
                            }],
                            ['link', 'image', 'video'],
                        ],
                    }
                }
            }
        },
        computed: mapGetters(["getmain_module", "getSub_module", "getAll_sub_module"]),
        methods: {
            onFileChange(file) {
                console.log('selected file', file);
                this.file = file;
            },
            toastSuccess() {
                return this.$toasted.success("Lecture Successfully Created", {
                    theme: "toasted-primary",
                    position: "top-center",
                    icon: "done",
                    duration: 5000
                });
            },
            addLecture() {

                this.linkForm.type = 'Link';
                this.linkForm.main_module_id = this.moduleId;
                this.$store.dispatch('createSubModule', this.linkForm)
                    .then((res) => {

                        this.linkForm.sub_module_name = '';
                        this.linkForm.link = '';
                        this.linkForm.type = '';

                        this.$emit('CloseLecture');
                        this.toastSuccess();
                        setTimeout(() => {
                            this.sending = false;
                        }, 1000);

                    })

            },


        },


    }

</script>
