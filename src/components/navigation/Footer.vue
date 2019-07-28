<template>
  <footer id="footer">
    <div class="footer-info">
      <ul class="info-links">
        <li>
          <router-link target="_blank" to="/about">关于技术流工作室</router-link>
          <span class="global-footer-split">|</span>
        </li>
        <li>
          <a href="/help" target="_blank">帮助中心</a>
          <span class="global-footer-split">|</span>
        </li>
        <li>
          <a href="https://github.com/skill6" target="_blank">加入我们</a>
          <span class="global-footer-split">|</span>
        </li>
        <li>
          <router-link target="_blank" to="/about#reward">赞赏支持</router-link>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <b>技术流工作室版权所有</b>&nbsp; ©2019 &nbsp; | &nbsp;
      <a href="https://www.skill6.cn" target="_blank">skill6.cn</a> &nbsp;
      <a href="http://www.beian.miit.gov.cn" target="_blank">渝ICP备16013250号-4</a>
    </div>
    <div>
      <p>推荐在1366×768及以上分辨率浏览本站，以获得更佳体验。</p>
    </div>
    <!-- 回到顶部 -->
    <Back-top :bottom="80"></Back-top>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
#footer {
  min-height: 50px;
  margin-top: 30px;
  padding-bottom: 10px;
  background-color: gainsboro;
  text-align: center !important;
}

.footer-info {
  padding-top: 10px;
  display: flex;
  justify-content: center;
}

.info-links li {
  float: left;
}

.info-links li a {
  margin-right: 5px;
}

.global-footer-split {
  margin: 0 10px;
}

.copyright {
  padding: 5px 0;
}
</style>
