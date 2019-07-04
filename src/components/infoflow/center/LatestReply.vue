<template>
  <div>
    <div v-for="index in 10" :key="index">
      <single-reply></single-reply>
    </div>
  </div>
</template>

<script>
import SingleReply from './single/SingleReply'

export default {
  name: 'LatestReply',
  components: {
    SingleReply
  }
}
</script>

<style scoped>
</style>
