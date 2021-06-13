
<template>
<v-app>

  <v-container pa-0 ma-0  class="pa-0 pa-0" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="10" md="10">
                <v-card  class="elevation-5" style="border-top:5px solid #EF6C00">
                    <v-window>
                        <v-window-item >
                                <v-row>
                              
                                    <v-col  cols="12" md="12" class="pt-1">
                                         <v-simple-table fixed-header max-height="500px">
                                            <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-center">#</th>
                                                    <th>Question</th>
                                                    <th class="text-center">
                                                        <v-icon>mdi-account-multiple-check</v-icon>
                                                        {{$vuetify.breakpoint.xs ? '':'Correct'}}
                                                    </th>
                                                    <th class="text-center">
                                                        <v-icon>mdi-account-multiple-remove</v-icon>
                                                        {{$vuetify.breakpoint.xs ? '':'Wrong'}}
                                                    </th>
                                                    <th class="text-center">
                                                        <v-icon>mdi-timer</v-icon>
                                                         {{$vuetify.breakpoint.xs ? '':'Average Time Consume'}}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-center">1</td>
                                                    <td width="450">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
                                                    <td class="text-center">5</td>
                                                    <td class="text-center">10</td>
                                                    <td class="text-center">2mins</td>
                                                
                                                </tr>
                                            </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>
<script>


</script>

<style scoped>
  
        
</style>