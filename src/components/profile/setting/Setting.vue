<template>
  <div>
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
    <el-container class="profile-main">
      <el-aside width="300px">
        <el-menu default-active="user" class="menu-side" @select="handleSelect" router>
          <el-menu-item index="user">
            <i class="el-icon-menu"></i>
            <span slot="title">账号</span>
          </el-menu-item>
          <el-menu-item index="security">
            <i class="el-icon-document"></i>
            <span slot="title">密码</span>
          </el-menu-item>
          <el-menu-item index="contact">
            <i class="el-icon-document"></i>
            <span slot="title">联系方式</span>
          </el-menu-item>
          <el-menu-item index="infomation">
            <i class="el-icon-setting"></i>
            <span slot="title">个人资料</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-aside width="300px"></el-aside>
    </el-container>
  </div>
</template>
<script>
export default {
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.top-menu {
  margin: 20px 20px 0 20px;
  min-height: 20px;
}

.menu-dropdown {
  float: right;
}

.menu-side {
  margin: 0 30px;
}
</style>
