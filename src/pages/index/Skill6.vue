<template>
  <div id="skill6" v-if="skill6Show">
    <!-- 顶部菜单 -->
    <div class="header">
      <skill6-menu></skill6-menu>
    </div>
    <!-- 下面主题部分 -->
    <div class="main-container">
      <router-view></router-view>
    </div>
    <!-- 脚部 -->
    <skill6-footer></skill6-footer>
  </div>
</template>

<script>
import Skill6Menu from '@/components/navigation/Menu'
import Skill6Footer from '@/components/navigation/Footer'

export default {
  components: {
    'skill6-menu': Skill6Menu,
    'skill6-footer': Skill6Footer
  },
  computed: {
    skill6Show () {
      return this.$store.state.skill6Show
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background: #fff;
  overflow-x: hidden;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

body,
html {
  height: 100%;
}

div,
li,
ul {
  padding: 0;
  margin: 0;
}

li,
ul {
  list-style: none;
  text-transform: capitalize;
}

#skill6 {
  min-width: 1366px;
  max-width: none !important;
}

.header {
  min-width: 1366px;
  min-height: 50px;
  margin-bottom: 20px;
  font-size: 15px;
}

.main-container {
  min-width: 1366px;
  max-width: none !important;
  min-height: 768px;
}
</style>
