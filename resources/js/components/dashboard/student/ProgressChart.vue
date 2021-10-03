<template>
  <div>

    
    <vue-element-loading :active="!isLoaded" 
    text="Loading"
    duration="0.7"
    :textStyle="{fontSize: '15px'}"
    spinner="line-scale" color="#EF6C00"  size="30" />

    <v-card class="pa-2">
       <h3>My Progress</h3>
      <bar-chart :style="$vuetify.breakpoint.lgAndUp ? '' : 'height:280px'"  v-if="isLoaded" :classList="classList" :progress="progress"></bar-chart>
    </v-card>
   
  </div>
</template>

<script>
import BarChart from './Charts'

export default {
  props:['allClass'],
  components: {
    BarChart
  },
  data(){
    return{
       classList: [],
       isLoaded: false,
       progress: [],
    }
  },
  watch: {
    '$vuetify.breakpoint.lgAndUp'(newId, oldId) {
        this.isLoaded = false;
    
        this.ReSetClassName()
    },
    '$vuetify.breakpoint.sm'(newId, oldId) {
        this.isLoaded = false;
        this.ReSetClassName()
    },
  },
  methods:{
    SetClassName(){
       for(let i = 0; i < this.allClass.length; i++) {
            this.classList[i] = this.allClass[i].class_name;
            this.progress[i] = this.allClass[i].progress;
        }
        this.progress[this.progress.length+1] = 100;
        this.isLoaded = true;
    },
    ReSetClassName(){
       for(let i = 0; i < this.allClass.length; i++) {
            this.classList[i] = this.allClass[i].class_name;
            this.progress[i] = this.allClass[i].progress;
        }
        this.progress[this.progress.length+1] = 100;
        setTimeout(() => (this.isLoaded = true), 300);
    },
    
  },
  mounted(){
    this.SetClassName();
  }
}
</script>