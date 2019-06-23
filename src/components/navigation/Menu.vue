<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand top-menu" href="#">
        <img src="../../assets/logo/logo.jpg" height="50px" width="50px">
      </a>

      <ul class="navbar-nav">
        <li>
          <router-link to="/" class="nav-link">主页</router-link>
        </li>
        <li>
          <router-link to="/article" class="nav-link">文章</router-link>
        </li>
        <li>
          <router-link to="/question" class="nav-link">问答</router-link>
        </li>
        <li>
          <router-link to="/course" class="nav-link">教程</router-link>
        </li>
        <li>
          <router-link to="/video" class="nav-link">视频</router-link>
        </li>
        <li>
          <router-link to="/share" class="nav-link">资料分享</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">关于</router-link>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li>
          <a href="/login.html" class="nav-link">登录</a>
        </li>
        <li>
          <a href="/signup" class="nav-link">注册</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
.top-menu {
  margin-left: -100px;
  margin-right: 200px;
}
</style>
