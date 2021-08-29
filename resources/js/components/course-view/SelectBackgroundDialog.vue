<template>
    <div>
        <v-card class="pa-3">
        <v-card-title class="text-h5">
          Gallery
        </v-card-title>
        <v-card-text>
           <v-row no-gutters>
               <v-col class="pa-1" v-for="(item, index) in imagelenght" :key="index" cols="12" md="3" lg="3">
                   <v-hover  v-slot="{ hover }" class="pa-1">
                  
                        <v-img @click="SelectImage(imageList[index])" :src="'../../images/' + imageList[index]" class="white--text" :elevation="hover ? 12 : 2"
                            :gradient="SelectedImage == imageList[index] ? '' : 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'" height="120px">
                             <v-icon color="primary" v-if="hover || SelectedImage == imageList[index]">mdi-{{!CheckSelect ? 'check-circle-outline' : 'check-circle'}}</v-icon>
                            <v-fade-transition>
                            <v-overlay
                                v-if="hover"
                                absolute
                                color="#FAFAFA"
                                style="cursor: pointer;">
                            </v-overlay>
                            </v-fade-transition>
                        </v-img>
                   </v-hover>
               </v-col>
           </v-row>
        </v-card-text>
        <v-card-actions>
        <v-btn :disabled="!CheckSelect" color="primary" @click="SaveSelect()">
            Select Background
        </v-btn>
          <v-btn color="primary" outlined 
          @click="$emit('CloseDialog')">
            Cancel
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imageList:['theme1.jpg','theme2.jpg','theme3.jpg','theme4.jpg','theme5.jpg','theme6.jpg','theme7.jpg','theme8.jpg'],
            imagelenght:null,
            SelectedImage:null,
            CheckSelect: false,
        }
    },
    methods:{
        SelectImage(image){
        
            if(this.SelectedImage == image){
                this.SelectedImage = null
                this.CheckSelect = false;
            }
            else{
                this.SelectedImage = image
                this.CheckSelect = true;
            }
        },
        SaveSelect(){
            this.$emit('SaveSelected', this.SelectedImage)
        }
    },
    mounted(){
        //console.log(this.imageList);
        this.imagelenght = this.imageList.length;

    }
}
</script>