<template>
  <div id="infofolw" class="info-flow-main" v-if="infoFlowShow">
    <el-button size="small" round v-on:click="showSkill6" class="info-flow-btn">进入主页</el-button>
    <info-main></info-main>
  </div>
</template>

<script>
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
  methods: {
    showSkill6 () {
      this.$store.commit('showSkill6')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.info-flow-main {
  width: 60%;
  margin: auto 20%;
}

.info-flow-btn {
  margin-top: 20px;
}
</style>
