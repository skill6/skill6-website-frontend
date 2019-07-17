<template>
  <div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="博文" name="first">
          <single-card></single-card>
        </el-tab-pane>
        <el-tab-pane label="提问" name="second">提问</el-tab-pane>
        <el-tab-pane label="回答" name="third">回答</el-tab-pane>
        <el-tab-pane label="视频" name="fourth">视频教程</el-tab-pane>
        <el-tab-pane label="文件" name="five">文件分享</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import SingleCard from './template/SingleCard'

export default {
  components: {
    SingleCard
  },
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
</style>
