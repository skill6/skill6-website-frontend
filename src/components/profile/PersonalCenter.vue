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
        <el-aside width="300px"></el-aside>
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
}

.el-aside {
  color: #333;
}

.el-main {
  color: #333;
  padding-top: 0px;
  margin-top: -10px;
}

.el-footer {
  padding: 0;
}

.profile-header {
  min-height: 222px;
}

.profile-main {
  min-height: 600px;
}
</style>
