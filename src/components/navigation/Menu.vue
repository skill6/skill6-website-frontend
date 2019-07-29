<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light" v-loading.fullscreen.lock="fullscreenLoading">
      <a class="navbar-brand top-menu" href="/">
        <img src="/static/logo/logo.jpg" height="50px" width="125px" />
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
      <ul class="navbar-nav ml-auto login-mr" v-if="!isLogin">
        <li>
          <a href="/account/signin" class="nav-link-pm">登录</a>
        </li>
        <li>
          <a href="/account/signup" class="nav-link-pm">注册</a>
        </li>
      </ul>
      <el-dropdown
        @command="handleCommand"
        class="navbar-nav ml-auto profile-nav"
        trigger="click"
        v-if="isLogin"
      >
        <span class="el-dropdown-link">
          个人中心
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="profile">我的主页</el-dropdown-item>
          <el-dropdown-item command="setting">设置</el-dropdown-item>
          <el-dropdown-item command="about">关于</el-dropdown-item>
          <el-dropdown-item command="quit" divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </nav>
  </header>
</template>

<script>
import UrlConstant from '../../api/constant'

export default {
  data () {
    return {
      fullscreenLoading: false,
      loginState: this.$store.getters.isLogin
    }
  },
  computed: {
    isLogin () {
      return this.loginState
    }
  },
  methods: {
    showInfoFlow () {
      this.$store.commit('showInfoFlow')
    },
    handleCommand (command) {
      if (command === 'profile') {
        window.open('/profile', '_blank')
      } else if (command === 'setting') {
        window.open('/profile/setting', '_blank')
      } else if (command === 'about') {
        this.$router.push({ path: '/about' })
      } else if (command === 'quit') {
        this.fullscreenLoading = true
        this.logout()
      }
    },
    logout () {
      this.$http.post(UrlConstant.logoutUrl).then((data) => {
        this.loginState = false
        this.$store.commit('logout')
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 600)
      })
    }
  }
}
</script>

<style scoped>
.top-menu {
  margin: 5px 100px;
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

.profile-nav {
  margin-right: 50px;
}
</style>
