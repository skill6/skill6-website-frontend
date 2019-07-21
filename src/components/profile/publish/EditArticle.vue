<template>
  <div>
    <!-- 顶部 -->
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
    <!-- 其他信息 -->
    <div class="article-info">
      <el-row>
        <el-col :span="20" :offset="2">
          <el-input placeholder="请输入标题" v-model="articleTitle" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="2">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 6}"
            placeholder="请输入摘要"
            v-model="articleDesc"
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" :offset="2">
          <el-input placeholder="请输入文章标签" v-model="articleLabel" clearable></el-input>
        </el-col>
        <el-col :span="3">
          <el-input placeholder="请输入文章分类" v-model="articleCategory" clearable></el-input>
        </el-col>
      </el-row>
    </div>
    <!-- 编辑器 -->
    <div class="editor">
      <mavon-editor v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      articleTitle: '',
      articleDesc: '',
      articleLabel: '',
      articleCategory: ''
    }
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

.article-info {
  width: 96%;
  margin: 0 auto;
}

.editor {
  width: 96%;
  margin: 20px auto;
}

.el-row {
  margin-bottom: 20px;
}
</style>
