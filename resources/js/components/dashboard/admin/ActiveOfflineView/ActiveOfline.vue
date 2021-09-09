<template>
  <div>
    <pie-chart :AO_teacher="AO_teacher"></pie-chart>
  </div>
</template>

<script>
import PieChart from './chart'

export default {
  props:['AO_teacher'],
  components: {
    PieChart
  }
}
</script>