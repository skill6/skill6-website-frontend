<template>
  <vue-particles
    color="#409EFF"
    :particleOpacity="0.5"
    :particlesNumber="80"
    shapeType="star"
    :particleSize="4"
    linesColor="#409EFF"
    :linesWidth="2"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="5"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
    class="particles-canvas"
  ></vue-particles>
</template>

<script>
export default {
}
</script>

<style scoped>
.particles-canvas {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
