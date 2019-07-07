<template>
  <div id="infofolw" class="info-flow-main" v-if="infoFlowShow">
    <button class="nav-link-pm" v-on:click="showSkill6">进入主页</button>
    <info-main></info-main>
  </div>
</template>

<script>
import $ from 'jquery'

import InfoMain from '@/components/infoflow/InfoMain'

export default {
  components: {
    InfoMain
  },
  computed: {
    infoFlowShow () {
      return this.$store.state.infoFlowShow
    }
  },
  updated () {
    // 轮播立体效果
    $('#carousel').carousel({
      curDisplay: 1,
      autoPlay: false,
      interval: 1500
    })
  },
  methods: {
    showSkill6 () {
      this.$store.commit('showSkill6')
    }
  }
}
</script>

<style scoped>
.info-flow-main {
  width: 60%;
  margin: auto 20%;
}
</style>
