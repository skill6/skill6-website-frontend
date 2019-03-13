<template>
  <div id="skill6">
    <div class="container">
      <skill6-menu></skill6-menu>
    </div>
    <div class="body-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Skill6Menu from '@/components/navigation/Menu'

export default {
  components: {
    'skill6-menu': Skill6Menu
  },
  data () {
    return {
      skill6Show: true
    }
  }
}
</script>

<style scoped>
</style>
