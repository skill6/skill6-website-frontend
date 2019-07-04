<template>
  <div class="clearfix">
    <div class="about-wrap">
      <div id="portamento_container" style="min-height: 236px; width: 180px;">
        <div id="portamento_container">
          <ul id="nav" class="about-menu fixed">
            <li class="on">
              <a href="#section1">关于我们</a>
            </li>
            <li>
              <a href="#section2">版本更新历史</a>
            </li>
            <li>
              <a href="#section3">联系我们</a>
            </li>
            <li>
              <a href="#section4">赞赏支持</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="about-content">
        <div id="section1" class="menu-wrap">
          <h1 class="title">
            <strong>关于我们</strong>
          </h1>
          <div>
            <p class="about-title">
              <strong>
                <span class="about-title-span">skill6.&nbsp;技术流,技术牛. —— 专注技术分享!</span>
              </strong>
            </p>
            <span>
              <strong></strong>
              <strong>开发者：何明胜.</strong>
            </span>
            <p>通过博客文章、提问答疑、文件分享等，为各位渴望学习和分享技术的朋友提供一个良好的平台。</p>
            <p>截至2019年7月3日，本站累计注册会员12345位。</p>
          </div>
        </div>
      </div>
      <div class="about-content">
        <div id="section2" class="menu-wrap">
          <h1 class="title">
            <strong>版本更新历史</strong>
          </h1>
          <div class="about-desc">
            <p>V1.0.0 Beta &emsp;2019-06-29</p>
            <ul>
              <li>1. 上线基础功能</li>
              <li>2. 提供QQ、Github一键登录</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="about-content">
        <div id="section3" class="menu-wrap">
          <h1 class="title">
            <strong>联系我们</strong>
          </h1>
          <div class="about-desc">
            <p>
              <strong>官方QQ群</strong>
            </p>
            <ul>
              <li>
                Java全栈开发交流群
                <a
                  target="_blank"
                  href="//shang.qq.com/wpa/qunwpa?idkey=b33b5c130237585b90bd1bfb96dc91064d1f5570ac1c4f8e7fc33d4697dbcc11"
                >
                  <img
                    border="0"
                    src="//pub.idqqimg.com/wpa/images/group.png"
                    alt="Java全栈开发学习交流"
                    title="Java全栈开发学习交流"
                  />
                </a>
              </li>
            </ul>
            <p>
              <strong>联系站长</strong>
            </p>
            <ul>
              <li style="text-transform: lowercase">邮箱：husen@skill6.cn</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="about-content">
        <div id="section4" class="menu-wrap">
          <h1 class="title">
            <strong>赞赏支持</strong>
          </h1>
          <div class="about-desc">
            <p>如果觉得本站对你有所帮助，可以打赏支持。</p>
          </div>
          <img src="/static/images/money/ali_pay.png" alt="支付宝赞助" class="reward" />
          <img src="/static/images/money/wechat_pay.png" alt="微信赞助" class="reward" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPreview'
}
</script>

<style scoped>
.clearfix {
  width: 80%;
  margin: 0 auto;
}

.about-wrap {
  margin-top: 30px;
  position: relative;
  display: block;
}

/* 左边菜单 */
#portamento_container {
  position: relative;
  float: left;
}

#portamento_container .fixed {
  position: fixed;
}

#portamento_container .about-menu {
  float: none;
  position: absolute;
  width: 180px;
  display: block;
  padding: 10px 0;
  background: #eff2f5;
  overflow: visible;
}

li {
  margin-bottom: 10px;
  padding-top: 0;
}

li {
  display: list-item;
}

.about-menu .on a {
  color: #3498db;
  transition: 0.5s;
  background: #fff;
  border-left: 5px solid #3498db;
  border-right: 5px solid #3498db;
  margin-top: 0;
  outline: 0;
  text-decoration: none;
}

.about-menu li a {
  padding: 2px 20px 2px 30px;
  display: block;
  border-left: 5px solid #eff2f5;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
}

a:hover {
  background-color: #ffffff;
}

/* 右边内容 */
.about-content {
  margin-left: 220px;
  margin-bottom: 50px;
  font-size: 15px;
  line-height: 25px;
  word-break: break-all;
  word-wrap: break-word;
}

.title {
  position: relative;
  margin: 0;
  line-height: 32px;
  font-size: 20px;
  border-bottom: 2px solid #eee;
}

.title strong {
  border-bottom: 2px solid #409eff;
  display: inline-block;
  position: relative;
  bottom: -2px;
  font-weight: normal;
}

.about-title {
  text-align: center;
  margin-top: 10px;
}

.about-title-span {
  font-size: 20px;
}

.about-desc {
  margin-top: 20px;
}

.reward {
  width: 180px;
  height: 240px;
  border-radius: 4px;
  float: left;
  margin-left: 30px;
  margin-top: 10px;
  background-size: cover;
  background-position: center;
}
</style>
