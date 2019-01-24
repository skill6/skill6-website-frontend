<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand top-menu" href="#"><img src="../../assets/logo/logo.jpg" height="50px" width="50px"></a>

      <ul class="navbar-nav">
        <li><a href="#" class="nav-link">主页</a></li>
        <li><a href="#" class="nav-link">文章</a></li>
        <li><a href="#" class="nav-link">代码</a></li>
        <li><a href="#" class="nav-link">教程</a></li>
        <li><a href="#" class="nav-link">视频</a></li>
        <li><a href="#" class="nav-link">资料分享</a></li>
        <li><a href="#" class="nav-link">关于</a></li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li><a href="#" class="nav-link">登录</a></li>
        <li><a href="#" class="nav-link">注册</a></li>
      </ul>
    </nav>

  </header>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
.top-menu{
  margin-left: -100px;
  margin-right: 200px;
}


</style>
