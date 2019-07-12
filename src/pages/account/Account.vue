<template>
  <div id="account">
    <!-- 背景粒子效果 -->
    <particles></particles>
    <router-view></router-view>
  </div>
</template>

<script>
import Particles from '@/lib/particles'

export default {
  components: {
    Particles
  }
}
</script>

<style>
body {
  background-color: #f8f8f9;
}
</style>
