<template>
  <div>
    <el-container>
      <el-header class="profile-header">
        <profile-header></profile-header>
      </el-header>
      <el-container class="profile-main">
        <el-aside width="300px">
          <profile-side></profile-side>
        </el-aside>
        <el-main>
          <profile-main></profile-main>
        </el-main>
      </el-container>
      <el-footer>
        <profile-footer></profile-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import ProfileHeader from './section/ProfileHeader'
import ProfileSide from './section/ProfileSide'
import ProfileMain from './section/ProfileMain'
import ProfileFooter from './section/ProfileFooter'

export default {
  components: {
    ProfileHeader,
    ProfileSide,
    ProfileMain,
    ProfileFooter
  }
}
</script>

<style scoped>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.profile-header {
  min-height: 300px;
}

.profile-main {
  min-height: 600px;
}
</style>
