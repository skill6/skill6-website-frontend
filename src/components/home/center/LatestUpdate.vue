<template>
  <div>
    <div v-for="index in 10" :key="index">
      <single-update></single-update>
    </div>
  </div>
</template>

<script>
import SingleUpdate from './single/SingleUpdate'

export default {
  name: 'LatestUpdate',
  components: {
    SingleUpdate
  }
}
</script>

<style scoped>
</style>
