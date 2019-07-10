<template>
  <div id="account">
    <!-- 背景粒子效果 -->
    <particles></particles>
    <router-view></router-view>
  </div>
</template>

<script>
import Particles from '@/modules/particles/Particles'

export default {
  components: {
    Particles
  }
}
</script>

<style scoped>
</style>
