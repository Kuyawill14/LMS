<template>
<v-col
    :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm  ? 'height:35vh;':'height:100vh'"
    cols="12" md="7" class="primary ma-0 pa-0 d-flex flex-column"
    style="justify-content: center;background: linear-gradient(rgba(255, 130, 0, 0.85), rgba(255, 153, 0, 0.85)) 50% center / cover no-repeat, url('https://orangestr.sgp1.digitaloceanspaces.com/Assets/Assets/ISU-Gate-Copy.jpg');height: 100vh;background-position-x: center;background-repeat: no-repeat;background-size: cover;">
    
    
    
    <v-container v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        class="pb-0 mb-0 pl-5 d-flex justify-space-between">

         <v-img height="70" width="70" max-height="70" max-width="70"
            src="../images/ccsict_logo_2.png"></v-img>
            
        <v-img height="70" width="70" max-height="70" max-width="70"
            src="../images/isu_logo1.png"></v-img>

       
    </v-container>

    <v-container v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
        class="pt-10 mb-0 pl-5 d-flex justify-center">
        <div style="width: 250px;">
            

            <v-img class="float-right" height="100" width="100" max-height="100" max-width="100"
                src="../images/ccsict_logo_2.png"></v-img>

                <v-img  height="100" width="100" max-height="100" max-width="100"
                src="../images/isu_logo1.png"></v-img>
        </div>
    </v-container>

    <v-container class=" " fluid
        :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? '' : 'padding-top: 35px;'">
        <v-card-text>
            <v-form class="text-center">
                <v-row align="center" justify="center">
                    <v-col cols="12">
                        <div v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class="text-h2 white--text font-weight-bold">ISUE ORANGE</div>
                        <div v-else class="text-h3 white--text font-weight-bold">ISUE ORANGE</div>

                        <div class="white--text"><b class="text-h5">O</b>nline <b
                            class="text-h5">R</b>esources <b class="text-h5">A</b>pp for a
                            <b class="text-h5">N</b>ew <b class="text-h5">G</b>uild of <b
                            class="text-h5">E</b>ducation</div>

                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-container>
</v-col>
</template>


