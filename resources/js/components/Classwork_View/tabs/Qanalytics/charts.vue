<script>
  import { Bar } from 'vue-chartjs'

  export default {
    props:["QCorrentCount", "Qname", "barColors","barborderColors","chartTitle"],
    extends: Bar,
    data() {
      return {
        chartData: {
          labels: this.Qname,
          datasets: [{
            label: this.chartTitle,
            borderWidth: 1,
            backgroundColor: this.barColors,
            borderColor: this.barborderColors,
            pointBorderColor: '#2554FF',
            data: this.QCorrentCount,
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