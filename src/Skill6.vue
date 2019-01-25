<template>
  <div id="skill6">
    <button v-on:click="redirectToSign">dfh</button>
    <div class="container">
      <skill6-menu></skill6-menu>
    </div>
    <div class="body-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import Skill6Menu from './components/navigation/Menu'

  export default {
    components: {
      'skill6-menu': Skill6Menu
    },
    data() {
      return {
        skill6Show: true
      }
    },
    methods: {
      redirectToSign: function () {
      }
    }
  }
</script>

<style scoped>

</style>
