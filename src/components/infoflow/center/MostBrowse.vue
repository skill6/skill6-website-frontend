<template>
  <div>
    <div v-for="index in 10" :key="index">
      <single-browse></single-browse>
    </div>
  </div>
</template>

<script>
import SingleBrowse from './single/SingleBrowse'

export default {
  name: 'LatestReply',
  components: {
    SingleBrowse
  }
}
</script>

<style scoped>
</style>
