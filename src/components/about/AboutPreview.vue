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
          </ul>
        </div>
      </div>
      <div class="about-content">
        <div id="section1" class="menu-wrap">
          <h2>关于我们</h2>
          <span>
            <strong>skill6-技术流</strong>
            <strong>开发者：何明胜. 技术流 —— 专注技术分享！</strong>
          </span>

          <p>通过博客文章、提问答疑、文件分享等，为大家提供技术分享平台</p>
        </div>
        <div id="section2" class="menu-wrap">
          <h2>版本更新历史</h2>
          <p>V1.0.0 Beta &emsp;2019-06-29</p>
          <ul>
            <li>1. 上线基础功能</li>
            <li>2. 提供QQ、Github一键登录</li>
          </ul>
        </div>
        <div id="section3" class="menu-wrap">
          <h2>联系我们</h2>
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
                >
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
  background: #fff;
  border-left: 5px solid #3498db;
}

.about-menu li a {
  color: #34495e;
  padding: 2px 20px 2px 30px;
  display: block;
  border-left: 5px solid #eff2f5;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
}

a {
  color: #369;
  margin-top: 0;
  outline: 0;
  text-decoration: none;
}

/* 右边内容 */
.about-content {
  min-height: 800px;
  margin-left: 220px;
  margin-bottom: 20px;
}
</style>
