<template>
  <div>
    <el-container>
      <div class="top-menu">
        <el-dropdown class="menu-dropdown">
          <span class="el-dropdown-link">
            个人中心
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的主页</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided>关于</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-divider></el-divider>
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

.top-menu {
  margin: 20px 20px 0 20px;
}

.menu-dropdown {
  float: right;
}
</style>
