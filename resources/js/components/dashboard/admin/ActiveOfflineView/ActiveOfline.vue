<template>
  <div>
    <doughnut :AO_teacher="AO_teacher"></doughnut>
  </div>
</template>

<script>
import doughnut from './chart'

export default {
  props:['AO_teacher'],
  components: {
    doughnut
  }
}
</script>