<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand top-menu" href="#">
        <img src="/static/logo/logo.jpg" height="50px" width="50px" />
      </a>

      <ul class="navbar-nav">
        <li class="info-flow">
          <a class="nav-link-pm" v-on:click="showInfoFlow">信息流</a>
        </li>
        <li>
          <router-link to="/" class="nav-link">首页</router-link>
        </li>
        <li>
          <router-link to="/article" class="nav-link-pm">博客文章</router-link>
        </li>
        <li>
          <router-link to="/question" class="nav-link-pm">提问答疑</router-link>
        </li>
        <li>
          <router-link to="/video" class="nav-link-pm">视频教程</router-link>
        </li>
        <li>
          <router-link to="/share" class="nav-link-pm">文件下载</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link-pm">关于技术流</router-link>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto login-mr">
        <li>
          <a href="/account/signin" class="nav-link-pm">登录</a>
        </li>
        <li>
          <a href="/account/signup" class="nav-link-pm">注册</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    showInfoFlow () {
      this.$store.commit('showInfoFlow')
    }
  }
}
</script>

<style scoped>
.top-menu {
  margin-left: 100px;
  margin-right: 100px;
}

.navbar-nav {
  flex-direction: row;
}

.info-flow {
  margin-right: 25px;
}

.nav-link-pm {
  padding: 0.5rem;
  color: rgba(0, 0, 0, 0.5);
}

.navbar-nav li {
  height: 36px;
  display: flex;
  align-items: center;
}

.navbar-nav li a:hover {
  color: #000;
}

.login-mr {
  margin-right: 50px;
}
</style>
