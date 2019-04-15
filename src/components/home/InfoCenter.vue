<template>
  <section class="info-flow-center">
    <carousel-center></carousel-center>
  </section>
</template>

<script>
import CarouselCenter from './CarouselCenter'

export default {
  name: 'InfoCenter',
  components: {
    CarouselCenter
  }
}
</script>

<style scoped>
.info-flow-center {
  margin-right: 60px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 524px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -webkit-flex-grow: 1;
  z-index: 1;
}
</style>
