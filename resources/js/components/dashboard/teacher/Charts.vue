<script>
  import { Bar } from 'vue-chartjs'
  

  export default {
    extends: Bar,
    props:['ChartLabel','ChartData', 'ChartBarColor', 'ChartBorder'],
    data() {
      return {
        class_count: null,
        chartData: {
          labels: this.ChartLabel,
          datasets: [{
            label: 'Course Progress',
            borderWidth: 1,
            backgroundColor: this.ChartBarColor,
            borderColor: this.ChartBorder,
            pointBorderColor: '#2554FF',
            data: this.ChartData,
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted() {

       this.renderChart(this.chartData, this.options)
    }
  }
</script>