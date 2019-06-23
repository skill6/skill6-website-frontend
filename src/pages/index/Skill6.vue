<template>
  <div id="skill6">
    <!-- 顶部菜单 -->
    <div class="container">
      <skill6-menu></skill6-menu>
    </div>
    <!-- 下面主题部分 -->
    <div class="body-main">
      <router-view></router-view>
    </div>
    <!-- 脚部 -->
    <skill6-footer></skill6-footer>
  </div>
</template>

<script>
import Skill6Menu from '@/components/navigation/Menu'
import Skill6Footer from '@//components/navigation/Footer'

export default {
  components: {
    'skill6-menu': Skill6Menu,
    'skill6-footer': Skill6Footer
  },
  data () {
    return {
      skill6Show: true
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
</style>
