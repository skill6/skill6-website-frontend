<template>
  <div class="info-flow-center">
    <h1>最新回复</h1>
    <div v-for="index in 10" :key="index">
      {{index}}
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
.info-flow-center {
  margin-left: 30px;
  margin-right: 30px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* min-width: 524px; */
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-flex-grow: 1;
  background-color: blue;
  z-index: 1;
  margin-bottom: 100px;
}
</style>
