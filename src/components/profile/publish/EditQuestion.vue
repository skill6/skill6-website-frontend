<template>
  <div>
    <div class="top-menu">
      <el-row>
        <el-col :span="2" :offset="10">
          <el-button type="primary" round>发布</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" round>暂存</el-button>
        </el-col>
        <el-col :span="2" :offset="8">
          <el-dropdown class="menu-dropdown">
            <span class="el-dropdown-link">
              个人中心
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的主页</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div class="editor">
      <mavon-editor v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { value: '' }
  }
}
</script>

<style scoped>
.top-menu {
  min-height: 20px;
  margin: 20px 20px 0 20px;
}

.menu-dropdown {
  float: right;
}

.editor {
  width: 96%;
  margin: 20px auto;
}
</style>
