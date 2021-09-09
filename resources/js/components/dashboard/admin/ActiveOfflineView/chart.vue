<script>
  import { Pie } from 'vue-chartjs'
  export default {
    props:['AO_teacher'],
    extends: Pie,
    data () {
      return {
        chartData: {
          labels: [ "Active", "Offline",],
          datasets: [{
              borderWidth: 1,
              borderColor: [
               '#43A047' ,
               '#E0E0E0'      
              ],
              backgroundColor: [
                '#43A047',  
                '#E0E0E0',  
              ],
              data: this.AO_teacher
            }]
        },
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>