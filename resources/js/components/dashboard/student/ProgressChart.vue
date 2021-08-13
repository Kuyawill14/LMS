<template>
  <div>
    <v-card class="pa-2">
       <h3>My Progress</h3>
      <bar-chart v-if="isLoaded" :classList="classList" :progress="progress"></bar-chart>
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
  methods:{
    SetClassName(){
       for(let i = 0; i < this.allClass.length; i++) {
            this.classList[i] = this.allClass[i].class_name;
            this.progress[i] = this.allClass[i].progress;
        }
        this.progress[this.progress.length+1] = 100;
        this.isLoaded = true;
    }
  },
  mounted(){
    this.SetClassName();
  }
}
</script>